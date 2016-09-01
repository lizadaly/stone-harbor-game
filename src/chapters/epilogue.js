const React = require('react')
import { Map, List, NextChapter, FromInventory } from '../components'
import { connect } from 'react-redux'
import { updateInventory } from "../actions"

import { RenderSection } from '.'
const _Chapter = ({currentSection, inventory, chapterId}) => {
  var sections = [
    <section>
      <h2>Epilogue</h2>
      <h3>In your reading room</h3>
      <p>
        “Do you seek the wisdom of the ancients? Come forth!”
      </p>
      <p>
        A.J., one of your favorite students, pokes his head through the doorway.
        “I told you I’m too old for that shit, Mr. Pietro.”
      </p>
      <p>
        “Too old for that <em>crap</em>,” you correct. “You gonna deprive an old man of
        his fun?”
      </p>
      <p>
        The kid rolls his eyes. “Yeah. Anyways, you coming to the game?”
      </p>
      <p>
        “Don’t think I have a choice,” you say cheerfully.
        It’s the last
        school day before Thanksgiving, which means Homecoming game, which means
        all school employees, from teachers to janitors to lowly resource room aides—that’s
        you—are on deck for crowd control, snack bar duty, and supplementary cheering.
      </p>
      <p>
        “That’s cool,” he says, obviously not listening. He’s picking up his bookbag, which
        he’s forgotten for the fiftieth time. You wonder if it feels sad when he does that.
      </p>
      <p>
        He almost knocks over Nicki Troiano as she tries to enter as he’s leaving.
        “Sorry!” he calls from the down the hall.
      </p>
      <p>
        Nicki has a kid just starting freshman year, which is fine; the father is out of the
        picture, which is fantastic. You keep saying you’re sorry you weren’t around
        in those early years and she keeps telling you to shut up, Frankie, but it makes you feel
        better to keep saying it and you know it makes her feel better too.
      </p>
      <p>
        She looks around the room in surprise. “Hey nice job on the decor.” The “reading room” (your name)
        is where kids with learning disabilities come to get independent tutoring or extra practice work.
        You’re not much more than a glorified babysitter—there’s a trained special ed teacher in charge of
        running this circus—but she lets you play the clown and distract the kids from their problems
        when their issues aren’t really schoolwork. Last week you brought in some of
        your mom’s tchotchkes; when nobody’s looking you teach the
        kids how to cold read. Hey, it’ll be more useful than geometry.
      </p>
      <p>
        ”You got plans after the game?” she says. You’re charmed by the shy note in her voice.
      </p>
      <p>
        You dust off a crystal ball to burn off some nervous energy. “I dunno, I should study...”
        You’re about 1/100th of the way through a BA in Social Work (Whitby’s idea) though at
        this point you’re just taking inexpensive community college credits (your idea). The material
        isn’t hard, but it’s been a long time since you’ve been in a classroom. Whenever you complain
        about the workload, Whitby feels guilty and Hank the Tank feeds you spaghetti. You complain a lot.
      </p>
      <p>
        “It’s Thanksgiving, Frankie.”
      </p>
      <p>
        You shrug. You just like to tease her. Technically you’re still just friends, but you think you’re
        making progress. Maybe 1/100th of the way there.
      </p>
      <p>
        “Well, if you ain’t too busy, Paul would love to see you.” Paul‘s her son. He’s quiet, like
        you were.
      </p>
      <p>
        Of course you’re not too busy. “Yeah, I’ll find you after the game,” you say. She waves.
      </p>
      <p>
        You finish cleaning up for the day: straighten the chairs, throw out the kids’ trash,
        run the ridiculous little carpet sweeper under the desks. You make a final
        pass over your table, running your hands gently over your possessions, a habit you’ve
        picked up lately. There’s a half-dealt tarot deck; a jar
        of I Ching coins; a blurry photo of you, taken by your mom, on the beach in the 60s;
        an even blurrier photo you took of her, covering her face with a book on that same beach.
      </p>
      <p>
        Satisfied, you grab your bag and shut the light, leaving the objects to their secrets.
      </p>
      <div className="next-chapter-link"><List expansions={["Credits", ""]} tag="credits"/></div>
    </section>,
    <section>
      <hr/>
      <h2>Credits</h2>
      <p>
        TBD
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

export const Epilogue = connect(
mapStateToProps
)(_Chapter)
