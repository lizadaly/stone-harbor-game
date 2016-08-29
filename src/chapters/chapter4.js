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
        You hear a tentative knock on the apartment door. “It’s open!”
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
        hand her a clam shell to ash in. The two of you sit in amiable silence, looking out over
        your railing towards the ocean.
      </p>
      <p>
        “You get many guests?” she asks. It’s rhetorical—your apartment is a dump and you know it.
        You got as far as tossing out most of Mom’s old furniture but didn’t bother to replace much.
        Whitby puts her feet up on the railing and looks out over the boardwalk at the water.
        “I’ll give you this, it’s a million dollar view.”
      </p>
      <p>
        She’s right. It’s dusk now, high tide, and the waves are starkly visible, almost fluorescent.
        You can hear the distant sound of the crowd on the boardwalk but
        the surf is closer and louder. Off to the north are the carousels and flume rides of the main
        strip; down at this end it’s still lively, but pleasant. “I love it here,” you admit.
      </p>
      <p>
        “Who wouldn’t?” Whitby notices that the receipt is next to you on a milk crate,
        weighed down with—“Is that a crystal ball?”
      </p>
      <p>
        “It’s my spare.” You know well enough what what brought her to
        your apartment at 9pm on a Sunday night, so you answer her unasked question.
        “I haven’t touched it yet.” You
        omit mentioning the strange agony of sharing a confined space with an object that is
        desperate to hide from you. How can a piece of paper have secrets?
      </p>
      <p>
        “Why not?”
      </p>
      <p>
        You watch the waves for a few cycles before answering. “Each time it’s more difficult.”
      </p>
      <p>
        “To get into the... vision?”
      </p>
      <p>
        “To get out of it. What did Michelle Herschel say when you interviewed her?”
      </p>
      <p>
        “Oh, nothing we hadn’t already heard. She was pretty thoroughly debriefed on the scene since she
        and her brother were staying here in town for the weekend. They rented a couple rooms at the Caribbean.
        She’s probably annoyed that I wasted her time repeating a bunch of questions she’d already
        been asked.”
      </p>
      <p>
        “Then why’d you bring her in?” When she doesn’t reply it hits you suddenly and you laugh.
        “Was that a setup, sending me out of your office?” You replay the events in your head.
        “That phone call you got, that was just
        the front desk telling you she’d arrived. And then you just watched us the whole time through your blinds.”
      </p>
      <p>
        “See? Psychic.” She stubs out her cigarette and picks up the receipt like it was just an ordinary
        piece of paper. To her, it is. “It’s a bar bill. From a motel.” She flips it over. “A jumble of numbers
        handwritten on the back. What are they?”
      </p>
      <p>
        “I don’t know.”
      </p>
      <p>
        She holds the receipt out to you.
        “It’s time, Pietro. I promise to keep you safe.”
      </p>
      <p>
        She’s right. “Thanks,” you say, and mean it. You reach for
        the <List expansions={["<psychic>receipt</psychic>", "<psychic>cowering receipt</psychic>", "<psychic>sneaky little receipt</psychic>, and crumple it into your hand"]} tag="c4_receipt" />.
      </p>
    </section>,
    <div className="in-flashback">
      <figure className="chapter4" />
      <h3>At the motel</h3>
      <section>
        <p>Your first instinct is to reach up and cover your eyes with your hands, but of course you have neither.
          Nevertheless, it’s blindingly, painfully bright out. The <em>Caribbean</em> motel is
          on the bay side of the inlet—you’ve driven past it a thousand times—but
          it appears to now almost hyperreal, a direct line to
          a childhood remembrance of an ordinary place rendered extraordinary.
        </p>
        <p>
          Across the street, an electronic bank sign tells you it’s just past dawn, explaining why the
          motel is deserted. There's a temperature reading too and it’s surprisingly cool;
          trapped in this vision it feels like the most unforgiving midday, under a boiling solar spotlight
          with no place to hide. It all adds up to an overwhelming sense that you’re being watched.
        </p>
        <p>
          Even though you can’t truly <em>feel</em> anything, you’ve got to get out of this sun, so
          you move (drift? float?) up the stairs to the deck and under the
          grand <List expansions={["awning", "burning awning"]} tag="c4_awning" />.
        </p>
      </section>
    </div>,
    <section>
      <p>There’s no relief up here. Being under this canopy is stifling, as if you’re trapped in a hot closed room.
        This is what it must feel like to be an ant under a magnifying glass.
      </p>
      <p>
        Michael Herschel emerges from inside the motel; you recognize him from the photo but
        you’d know he’s his sister’s twin—pale and fair-haired. He’s already sweating,
        and since it’s not hot out, it must be  nerves.
        He can’t decide whether to sit or pace, alternately straightening cabana chairs and then circling
        the patio.
      </p>
      <p>
        He’s joined by his uncle, Jared. No family resemblance here; Jared is mostly bald but what hair
        he has is dark. His eyebrows are bushy and he’s got an uneven beard. Compared to his
        niece and nephew, he looks haunted and unkempt. He’s about 15 years the junior of his brother,
        maybe only 5 years older than the Herschels, almost their peer.
      </p>
      <p>
        “You’re late,” Herschel complains.
      </p>
      <p>
        “Yeah well, traffic,” Jared Healey says.
      </p>
      <p>
        Herschel finally decides to sit. “Give me a break, it’s 5:30 in the morning. So is it resolved or not?”
      </p>
      <p>
        “Not yet,” Healey admits. Before Herschel can protest he says, “I need more time.”
      </p>
      <p>
        “We’re out of time, Jared.”
      </p>
      <p>
        “What do you want me to do?” Healey says. His voice reaches a high pitch; he’s genuinely
        afraid and trying to hide it.
      </p>
      <p>
        Herschel was edgy when he first emerged, but everything about his body language is projecting
        confidence now.  “I gave you plenty
        of time to make this right. We agreed on a deadline, and you blew it. It’s my turn now.” He <em>wanted</em> this outcome, you realize. He was hoping his
        uncle would bring bad news so he could take control of the situation.
      </p>
      <p>
        Healey gets up, kneels before his nephew. For an absurd moment you think he’s going to propose.
        “Michael, please. This isn’t how I want to run my business.”
      </p>
      <p>
        “You’re not running it, you’re ruining it.” He leans back, spreads his legs. He’s taking his time now.
        “I’m being generous here. I don’t want the
        whole bottom sheet. Keep your buddies at the marina, or whatever townie dive bar you
        wake up in these days. I just want the top five.”
      </p>
      <p>
        Healey looks defeated. “You got any paper?” He pats himself down, sighs again. “A pen?”
      </p>
      <p>
        Herschel’s not even fazed. He calmly takes out a pen and fishes out a piece of paper from his
        pocket—the receipt. He watches in triumph as his uncle, prostrate before him, scribbles a
        series of letters and numbers. As soon as he finishes the fifth row, Herschel swipes the paper
        away from Healey and stands.
      </p>
      <p>
        “Don’t call me,” he says. “I’ll let you know when it’s done. Or just check the account.” Healey
        tries to interrupt but Herschel makes a scolding sound like he’s talking to a dog.
        “The most important thing is the <em>he</em> never finds out.”
      </p>
      <p>
        “I know,” Healey says, miserably. He slinks down the outside stairs, a broken man. With each
        step he takes, the vision fades to that blinding white a little more.
      </p>
      <p>
        Herschel watches his uncle leave, and says aloud, “He’s gone. Are you happy now?” You knew
        someone else was watching. The sense of being under the microscope intensifies, and the
        scene goes completely white, as white as the paper on that <List expansions={["receipt", "paranoid receipt"]} tag="c4_receipt_vision" />.
      </p>
    </section>,
    <section>
      <h3>Your living room</h3>
      <p>
        You open your eyes just a little, but it’s agony. “God turn that light off, what are you, the Gestapo?”
        You hear Whitby’s footsteps, and then a click, and it’s still painful but you manage to look around.
      </p>
      <p>
        “Hey, it’s your lamp,” she says mildly. “How do you feel?”
      </p>
      <p>
        “Like I have the world’s worst hangover after the world’s shortest bender. How long was I out?”
      </p>
      <p>
        “You were never ‘out’, mostly you were just moaning about the light and the heat even though it’s
        after midnight and I have your AC on full blast. Last time you were too cold, you really should make up
        your mind.”
      </p>
      <p>
        You force yourself to sit up and drink the water she kindly left here for you. “That was brutal.”
      </p>
      <p>
        Her usually impassive face softens a little. “I’m sorry if I pressured you into it.” It’s awkward
        for her to apologize and it’s weird for you too, so you wave it off.
      </p>
      <p>
        “What does Jared Healey do for a living?”
      </p>
      <p>
        “Co-owner of a third-rate marina on the bay. Really more of a slip for locals to go
        fishing and crabbing on the off season. Half the time nobody’s around, I know we never
        found him there when we brought him in for questioning.”
      </p>
      <p>
        “He’s a bookie,” you say, and describe the vision. Whitby takes notes in her little cop
        notebook, same place she puts the real evidence, which makes you obscurely proud.
      </p>
      <p>
        When you’ve finished, she says, “A lousy bookie, from the sound of it. Probably small time,
        somebody else’s sub.” When you ask, she adds, “Sub-bookie. A lot of guys get started by pooling bets on behalf of friends,
        co-workers, take a small percentage of the profits.”
      </p>
      <p>
        The receipt is still crumpled in your hand. You smooth it out
        on the coffee table and study it together. Of the five rows of numbers, four are now
        crossed out. Whitby says, “The first number in each row is probably the bettor’s identifier.
        Bookies try not to
        write names down; their clients all know their ID number and give that when they call
        in their bets. Pro bookies pick random numbers, newcomers usually just number 1, 2, 3.
        None of these are bigger than twenty, so I think we’re looking at a small number of clients.
        But some are in pretty deep—the second number look like an outstanding balance. This sheet
        alone is worth about a
        hundred grand.”
      </p>
      <p>
        “Impressive. I thought you were a homicide detective.”
      </p>
      <p>
        “This may surprise you, but illegal sports betting plays a part in a lot of more serious criminal
        activity.” She studies the receipt. ”I’m guessing Michael Herschel already collected on
        everyone who’s been crossed off. I’ll take this to Vice tomorrow, see if this
        rings any bells. But it’s a long shot without any names. Whoever has number eight is in
        for a bad week, I bet.”
      </p>
      <p>
        Your headache is subsiding, a little. “How do you think his sister ended up with it?”
      </p>
      <p>
        “By accident? Or maybe she’s in on it with him?” She doesn’t seem that interested.
      </p>
      <p>
        “I guess. She didn’t seem the type. Aren’t they wealthy enough already?”
      </p>
      <p>
        Whitby’s packing up her stuff, her mind obviously on her day ahead. “Look, you’re good at reading
        people. I don’t deny that. But if there’s one thing I’ve learned in this job, it’s
        that <em>everybody</em> is the type.” She tilts her head at you. “You gonna be okay by yourself?”
      </p>
      <p>
        “Yeah. Thanks though.” You fiddle with the crystal ball that somehow made its way inside from the porch.
      </p>
      <p>
        “You did good work today, Pietro. You gave me real police things to run down. Take a day off,
        go visit a friend, rest up. Try to get back your normal life.” You nod, and she leaves,
        and you’re alone with your pounding head and your crystal ball and not much else.
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

export const Chapter4 = connect(
mapStateToProps
)(_Chapter)
