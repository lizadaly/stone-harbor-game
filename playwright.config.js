const { defineConfig } = require('@playwright/test')

// Rebuilds all three languages, then serves the repo root so they are reachable
// at /, /es/ and /pt/, matching the production layout.
const build = ['.', 'es', 'pt'].map((dir) => `npm run build --silent --prefix ${dir}`).join(' && ')

module.exports = defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  use: {
    baseURL: 'http://127.0.0.1:8791',
    trace: 'retain-on-failure'
  },
  webServer: {
    // http.server's default listen backlog of 5 drops connections under parallel workers
    command: `${build} && ` +
      'python3 -c "import http.server as h; h.ThreadingHTTPServer.request_queue_size = 128; ' +
      'h.test(h.SimpleHTTPRequestHandler, h.ThreadingHTTPServer, port=8791, bind=\'127.0.0.1\')"',
    url: 'http://127.0.0.1:8791/',
    reuseExistingServer: false
  }
})
