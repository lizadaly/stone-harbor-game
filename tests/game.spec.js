const { test, expect } = require('@playwright/test')

const languages = [
  { lang: 'en', path: '/', headings: ['Prologue', 'Chapter One', 'Chapter Two', 'Chapter Three'] },
  { lang: 'es', path: '/es/', headings: ['Prólogo', 'Capítulo Uno', 'Capítulo Dos', 'Capítulo Tres'] },
  { lang: 'pt', path: '/pt/', headings: ['Prólogo', 'Capítulo I', 'Capítulo II', 'Capítulo III'] }
]

// The newest clickable choice; clicking it repeatedly always moves the story forward
const nextChoice = (page) => page.locator('#article a[href="#"]').last()

const articleText = (page) => page.locator('#article').textContent()

// Click through choices until `count` chapter headings are on the page
const advanceToChapter = async (page, count) => {
  const headings = page.locator('#article h2')
  for (let clicks = 0; (await headings.count()) < count; clicks++) {
    expect(clicks, `stuck before chapter heading ${count}`).toBeLessThan(200)
    await nextChoice(page).click()
  }
}

let pageErrors
let externalRequests

test.beforeEach(({ page, baseURL }) => {
  pageErrors = []
  externalRequests = []
  page.on('pageerror', (e) => pageErrors.push(e.message))
  page.on('request', (r) => {
    if (new URL(r.url()).origin !== new URL(baseURL).origin) externalRequests.push(r.url())
  })
})

test.afterEach(() => {
  expect(pageErrors).toEqual([])
  expect(externalRequests).toEqual([])
})

for (const { lang, path, headings } of languages) {
  test.describe(lang, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(path)
      await expect(page.locator('html')).toHaveAttribute('lang', lang)
      await expect(page.locator('#article h2')).toHaveText(headings.slice(0, 1))
    })

    test('the head should point to itself and every translation', async ({ page }) => {
      const pathname = (selector) => page.locator(selector).evaluateAll((links) =>
        Object.fromEntries(links.map((l) => [l.hreflang || l.rel, new URL(l.href).pathname])))
      expect(await pathname('link[rel=canonical]')).toEqual({ canonical: path })
      expect(await pathname('link[rel=alternate]')).toEqual({
        ...Object.fromEntries(languages.map((l) => [l.lang, l.path])),
        'x-default': '/'
      })
    })

    test('every declared font should load', async ({ page }) => {
      const fonts = await page.evaluate(async () => {
        const faces = [...document.fonts]
        await Promise.allSettled(faces.map((f) => f.load()))
        return faces.map((f) => ({ face: `${f.family} ${f.weight} ${f.style}`, status: f.status }))
      })
      expect(fonts.length).toBeGreaterThan(0)
      expect(fonts.filter((f) => f.status !== 'loaded')).toEqual([])
    })

    test('playing through should reach chapter three', async ({ page }) => {
      await advanceToChapter(page, headings.length)
      await expect(page.locator('#article h2')).toHaveText(headings)
    })

    test('progress should survive a reload', async ({ page }) => {
      await advanceToChapter(page, 2)
      const before = await articleText(page)
      await expect.poll(() => page.evaluate(() => JSON.parse(localStorage.getItem('reduxPersist:bookmarks')).length)).toBe(2)
      await page.reload()
      await expect.poll(() => articleText(page)).toBe(before)
    })

    test('the back button should undo the last choice', async ({ page }) => {
      const before = await articleText(page)
      await nextChoice(page).click()
      await expect.poll(() => articleText(page)).not.toBe(before)
      await page.goBack()
      await expect.poll(() => articleText(page)).toBe(before)
    })

    test('restart should return to the beginning of the story', async ({ page }) => {
      const before = await articleText(page)
      await advanceToChapter(page, 2)
      page.once('dialog', (dialog) => dialog.accept())
      await page.locator('nav a[onclick^="reset"]').click()
      await expect(page.locator('#article h2')).toHaveText(headings.slice(0, 1))
      await expect.poll(() => articleText(page)).toBe(before)
    })

    test('night mode should toggle and persist across reloads', async ({ page }) => {
      const body = page.locator('body')
      const toggle = page.locator('nav a[onclick^="reverse"]')
      await toggle.click()
      await expect(body).toHaveClass(/nightmode/)
      await page.reload()
      await expect(body).toHaveClass(/nightmode/)
      await toggle.click()
      await expect(body).not.toHaveClass(/nightmode/)
    })

    test('the about panel should open and close', async ({ page }) => {
      const modal = page.locator('#about-modal')
      await page.locator('#about-toggle > a').click()
      await expect(modal).toHaveClass(/open/)
      await modal.locator('.close a').click()
      await expect(modal).not.toHaveClass(/open/)
    })

    test('links to other languages should load a translation', async ({ page }) => {
      const hrefs = await page.locator('nav a[title], #about-modal a').evaluateAll((links) =>
        links.filter((a) => a.getAttribute('href') !== '#').map((a) => a.href).filter((href) => href.startsWith(location.origin)))
      expect(hrefs.length).toBeGreaterThan(0)
      for (const href of hrefs) {
        const response = await page.goto(href)
        expect(response.ok(), href).toBe(true)
        await expect(page.locator('html'), href).not.toHaveAttribute('lang', lang)
        await expect(page.locator('#article h2').first(), href).toBeVisible()
      }
    })
  })
}

test.describe('without JavaScript', () => {
  test.use({ javaScriptEnabled: false })

  for (const { lang, path } of languages) {
    test(`${lang} should explain that JavaScript is required`, async ({ page }) => {
      await page.goto(path)
      await expect(page.locator('#article p')).toContainText('JavaScript')
    })
  }
})
