const React = require('react')
import { Map, List, NextChapter } from '../components'
import { connect } from 'react-redux'
import { RenderSection } from '.'

const _Chapter = ({currentSection, inventory, chapterId}) => {
  var sections = [
    <section>
      <h2>Chapter Four</h2>
      <h3>Your Apartment</h3>
      <p>
        You hear a tentative knock on the apartment door and yell, “It’s open!”
      </p>
      <p>
        Whitby slides open the screen door and joins you on your tiny patio. “How’d you
        know it was me?”
      </p>
      <p>
        “I’m psychic. How’d you know where I lived?”
      </p>
      <p>
        “I’m a cop.” She sets down a paper bag and lights a cigarette without asking. “I brought beer.”
      </p>
      <p>
        “My favorite kind of houseguest,” you reply, though you don’t move to open one. Instead you
        hand her a clam shell to ash in.
      </p>
      <p>
        “You get many guests?” she asks. It’s rhetorical—your apartment is a dump and you know it.
        You got as far as tossing out most of Mom’s old furniture but didn’t bother to replace much.
        Whitby puts her feet up on the railing and looks out over the boardwalk at the water.
        “I’ll give you this, it’s a million dollar view.”
      </p>
      <p>
        She’s right. It’s dusk now, high tide, and the waves are starkly visible in the fading
        light, almost fluorescent. There’s a distant sound of the crowd on the boardwalk but
        the surf is even louder. Off to the north are the carousels and flume rides of the main
        strip; down at this end it’s still lively, but pleasant. “I love it here,” you admit.
      </p>
      <p>
        “Who wouldn’t?” Whitby notices the receipt next to you on a milk crate,
        weighed down with—“Is that a crystal ball?”
      </p>
      <p>
        “It’s my spare.” You both continue to watch the waves in amiable silence, but you can’t put
        this off forever. “No, I haven’t touched it yet.” What you don’t say is how much
        agony you’ve been in just sitting next to this thing, this object that is desperate to hide from you.
      </p>
      <p>
        “Why not?”
      </p>
      <p>
        “Each time it’s more difficult.”
      </p>
      <p>
        “To get into the... vision?”
      </p>
      <p>
        “No,” you say, “To get out of it.” She makes a thoughtful sound, but
        continues looking out over the water. You appreciate that she’s letting you do this on
        your own time, so you take the opportunity to stall a little longer. “What did Michelle Herschel say?”
      </p>
      <p>
        “Oh, nothing we hadn’t already heard. She was pretty thoroughly debriefed on the scene since she
        and her brother were staying here in town for the weekend. They rented a couple rooms at the Sahara.
        She’s probably pretty annoyed that I wasted her time repeating a bunch of questions she’d already
        been asked.”
      </p>
      <p>
        “Then why’d you bring her in?” When she doesn’t reply, you laugh. “Was that whole thing a setup?
        Sending me out of your office?” You replay the events in your head. “That phone call you got, that was just
        the front desk telling you she’d arrived. And then you just watched us the whole time.”
      </p>
      <p>
        “See? Psychic.” She stubs out her cigarette. “It’s time. I promise to keep an eye on you.”
      </p>
      <p>
        You sigh. No time like the present. You reach for the <List expansions={["<psychic>receipt</psychic>", "<psychic>cowering receipt</psychic>", "<psychic>sneaky little receipt</psychic>, and crumple it into your hand"]} tag="c4_receipt" />.
      </p>
    </section>,
    <section>
      <NextChapter chapter="5" />
    </section>
  ]
  return <RenderSection currentSection={currentSection} sections={sections} />
}

const mapStateToProps = (state, ownProps) => {
return {
  currentSection: state.bookmarks[ownProps.chapterId],
  inventory: state.inventory
}
}

export const Chapter4 = connect(
mapStateToProps
)(_Chapter)
