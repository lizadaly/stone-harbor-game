const React = require('react')
import { Map, List, NextChapter } from '../components'
import { connect } from 'react-redux'
import { RenderSection } from '.'

const _Chapter = ({currentSection, inventory, chapterId}) => {
  var sections = [
    <section>
      <h2>Chapter Five</h2>
      <h3>In your reading room</h3>
      <p>“Do you seek the wisdom of the ancients? Come forth!”</p>
      <p>
        You didn’t visit a friend (they’ve given up on hearing from you) and you didn’t
        take a day off (can’t afford to), but you did get back to your regular life.
        After a couple of sleepless nights, exhaustion took hold and you’re almost
        on normal schedule—normal for you, which still involves keeping the
        business open until midnight and sleeping through successive summer beach days.
        It’s been beautiful, you hear: no land breeze, no greenhead flies, just
        gorgeous sun and a gentle sea breeze to keep the air moving. It’s been
        great for business.
      </p>
      <p>
        This customer is a preteen girl. Usually you send them away unless they come with
        a parent, but you’re in a foul mood and happy to take her money. Teen girls
        only care about boys so you cut to the chase. “I see a name,” you say.
        “It begins with an S—” Her eyes widen immediately. “<List expansions={
        ["Scott?", "Steven?", "Sam?"]} tag="p5_customer_names"/>”
      </p>
      <p>
        “Sam!” she whispers.
      </p>
      <p>
        “There’s a strong connection here, I can feel it. You and Sam are—close, yet.”
        From the other side of the beaded curtain you hear giggling. That’s surprising,
        these girls rarely come in to see you alone.
      </p>
      <p>
        The customer glances back towards the curtain. “I told them to wait outside.
        They can’t know about us,” she says, urgently.
        Her <List expansions={["hands", "hands fidget, "]} tag="c5_hands" />
        <Map from={inventory.c5_hands} to={{
          undefined: " are restless on the table",
            hands: <span> alternately
              grasping <List expansions={["a set of bracelets on her arm", "dozens of colorful plastic bracelets"]} tag="c5_bracelets" />
              &nbsp; and <List expansions={["a handmade necklace", "a simple necklace of string and a pierced shell"]} tag="c5_necklace" />
            </span>
        }}
        />.
      </p>
    </section>,
    <section>
      <Map from={inventory.c5_bracelets} to={{
        arm: <p>“I sense a strong emotional connection from your bracelets.” She looks down at them in surprise,
        like she’d forgotten they were there. “Yeah, we bought them at the mall together.”</p>
      }} />
      <Map from={inventory.c5_necklace} to={{
        necklace: <p>“Your necklace is calling to me.”
          <Map from={inventory.c5_bracelets} to={{
            arm: <span> You notice her eyelids flutter. “It’s a far more powerful connection than the bracelets.”</span>
          }} />

        &nbsp;She grasps it, and smiles secretively. “Sam made it.”</p>
      }} />
      <p>
        “He cares for you very deeply,” you say, and you’re just registering her sudden and
        profound disappointment in your comment when a commotion starts outside. An adult woman
        enters, furious. Somebody’s mother. This is why you don’t normally deal with kids.
      </p>
      <p>
        “Jennifer, get outside right this minute,” the woman says. Behind her, the two girls who
        must be your customer’s friends push in. <List expansions={["One of them",
        "One girl wears a shell necklace, and "]} tag="c5_girlfriend" /> looks especially pale.
      </p>
    </section>,
    <section>
      <p>“Jennifer, Amy, Samantha, meet me in the car.” The girls scuttle out, Jennifer throwing you
      a look like she just learned that Santa Claus isn’t real. You know what’s coming next.</p>
      <p>
        “Give me whatever she paid you,” the mother says, holding out a hand.
      </p>
      <p>
        “I don’t want any trouble,” you say. You doubt your newfound cop friend would help you out
        of this one anyway. Automatically, you hand over five bucks, half of what you charged the kid.
      </p>
      <p>
        The woman rips the money out of your hand and turns to leave. You roll your eyes to yourself
        and say, “Hey.” She turns back, offended that you addressed her. You stand and give her
        the rest of the money, which she looks at in puzzlement. “Give the kid a break, okay?”
        She huffs and leaves.
      </p>
      <p>
        You put your face into your hands and rub your eyes until you see stars. The door bell
        jingles, and you skip the atmospheric preamble: “Come in!” It’s not like this day can get worse.
      </p>
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

export const Chapter5 = connect(
mapStateToProps
)(_Chapter)
