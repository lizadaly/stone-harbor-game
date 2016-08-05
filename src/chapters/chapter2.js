const React = require('react')
import { MapFromInventory, Examinable, FromInventory, NextChapter } from '../components'
import { connect } from 'react-redux'
import { RenderSection } from '.'

const _Chapter = ({currentSection, inventory, chapterId}) => {
  var photos = [
    "a stack of photos",
    "a stack of photos. You flip over the first, and it's of two old men"
  ]
  var sections = [
    <section>
      <h2>Chapter Two</h2>
      <h3>At the mansion</h3>
      <p>
        You barely talk on the ride over. You stopped by your storefront on the way to formally close
        up for the afternoon. It’s Saturday and there are huge crowds at the beach, so you flipped the sign to <small>closed</small> with more than a little
        regret. On the other hand, you realize this was probably a day off for Whitby. You wonder what it’s like to have
        family who'd do this kind of a favor for you.
      </p>
      <p>
        The house is just as you remember from the vision: sprawling, white, faux classical, at odds with the usual sun-bleached
        and gray wooden vacation homes. But the property isn’t new money, either. It’s worn but well cared for. Living at the
        shore it’s easy to find rich people to resent, but the Healeys’ place feels like a home.
      </p>
      <p>
        “The wife is staying with her sister so nobody’s here,” Whitby says, getting out of the car. ”But I couldn’t let you in even I wanted to.” It’s quite clear she
        doesn’t want to.
      </p>
      <p>
        “I don’t need to go inside, it’s around back,” you reply. You know the way and don’t wait for her.
      </p>
      <p>
        It’s late afternoon so the courtyard is in shade, and given that it’s a billion humid degrees out it’s
        easy to see that was probably a deliberate architectural decision. You’re sweating your balls off
        in shorts, though of course Detective Doubtful seems to be cool as ice in her polyester police suit. “Stop right there,”
        she barks. “Just tell me where it is.”
      </p>
      <p>
        “Don't want me planting any evidence?”
      </p>
      <p>
        “Exactly.”
      </p>
      <p>
        “You know you could consider lying to me once in a while.” She says nothing, so you just point. “It’s in a
        bush by the base of the stairs. Probably.”
      </p>
      <p>
        She’s already down in the area, but looks up over the railing. “Probably?”
      </p>
      <p>
        “It <em>was</em> there, but Healey died weeks ago. How the hell should I know
        what happened between now and then?” You hear her mutter something about being a lousy psychic.
      </p>
      <p>
        “Who are you? What are you doing here?”
      </p>
      <p>You turn with a start and coming out of the house is a very old, very
        disapproving <MapFromInventory from={inventory.c2_pail} to={{undefined: "man", "spade": "gardener", "fork": "gardener", "clippers": "gardener"}} /> carrying a utility bag. The bag contains <Examinable expansions={["some old tools", ["a rusted spade", "a large bent fork", "a pair of hedge clippers"], "some very old garden tools"]} tag="c2_pail"/>.
      </p>
    </section>,
      <section>
        <p>
          “Uh,” you say. “Nice <MapFromInventory from={inventory.c2_pail} to={{"spade": "spade", "fork": "fork", "clippers": "clippers"}} />?” The detective rolls her eyes.
        </p>

        <p>
          He frowns at both of you. “Are you with the police?”
        </p>
        <p>
          “Yes,” Whitby says, truthfully.
        </p>
        <p>
          “Oh all right then. I thought you folks had finished up.”
          He reaches into the archaeological treasure that is his tool bag. “I met with some of your colleagues
          down the station like you asked. I’d do anything for the family, they’ve been good to me.
          Don't remember anything new to tell you—”
        </p>
        <p>Whitby is coming back up the stairs. “That's fine, sir, I'm sure you did everything—”</p>
        <p>“—but I have <em>found</em> something that I thought might be helpful to y’all. Let me show you.”
          He’s rumaging around now, and you start to get a really bad feeling about something in that bag.
          Whitby picks up the pace.
        </p>
        <p>
          “I want to be as helpful as I can. I wasn’t here when it happened, see. Maybe I could’ve–oh here we go,” he says, and you can feel the blood draining from your limbs and
          your vision narrowing to a pinprick. Maybe Whitby can see your
          ghost white face, it looks like she’s reaching out to intercept, but it’s too late, the gardener has eagerly
          shoved <Examinable expansions={["a doll", "<psychic>a frightened doll</psychic>", "<psychic>a frightened doll with a crushed head</psychic>"]} tag="c2_doll" /> into
          your paralyzed hands—
        </p>
      </section>,
      <div className="in-flashback">
        <figure className="chapter2" />
        <h3>In the family room</h3>
        <section>
          <p>
            You’ve never felt so small in your life—physically small. Even as a boy you were always big
            for your age, often crashing into your mom's cheap but delicate new age baubles.
            But now you are hemmed in on all sides by
            gargantuan walls of solid furniture and feel downright tiny.
          </p>
          <p>
            A young girl, carrying the <Examinable expansions={["doll", "comfortable doll"]} tag="c2_doll2" nextUnit="none" />, runs into the room and settles comfortably into a
            high-backed chair. She’s followed by an <Examinable expansions={["older man", "kindly looking older man", "older man who you realize with a start is Alan Healey"]} tag="c2_healey" nextUnit="none" /> and
            a <Examinable expansions={["woman", "woman of the same age", "woman who must be Healey's wife"]} tag="c2_margaret" />.
          </p>
        </section>
      </div>,
    <section>
      <p>In the arms of its owner, the doll is radiating contentment rather than fear. Maybe that’s because it still has a head.</p>
      <p>Healey’s wife says to her husband, “I'll get you your tea, dear.” She asks the girl, “Honey, do you want anything?”
      Her voice is firm, but kind.</p>
      <p>“No thank you, Aunt Maggie,” the girl says, settling into one of the higher backed chairs. She hugs
      the doll in a grip which would probably kill a small animal, but the doll loves it.</p>
      <p>Healey says nothing and watches his wife leave the room. He picks up a heavy black telephone from
        a side table and settles it on his lap. ”You play with Vicky now, Ellen. Uncle Alan
      just needs to make a quick phone call.” The little girls nods and hums to the doll tunelessly.</p>
      <p>Healey dials the rotary phone slowly; it's obviously painful for his hands to operate. It’s a short
        number, local. His conversation is muffled and unintelligible. He’s lowered his voice, but it’s
        not just the volume. You catch words here and there—“never”,  “later”,
        and then he says angrily, “How could you?” and the girl, Ellen, looks up in alarm, letting go of the
        doll which tumbles to the floor.
      </p>
      <p>
        <em>I’m watching this through her</em>, you realize. The doll
        belongs to the girl, and it’s a child’s view of the world that you’re witnessing, as imprinted in
        one of her most treasured possessions. She didn’t care about or understand Healey’s conversation, at least
        not until it got heated.

      </p>
      <p>
        “I won’t have her suffer for your mistakes,” Healey says, and slams the receiver down just as his
        wife enters carrying a tea pot and a plate. “Wrong number,” he says, preempting any
        discussion, and it’s obvious that this is a familiar family dynamic. His wife says nothing, just puts the
        serving items down.
      </p>
      <p>
        “Sorry,” he says roughly, and gets up. He doesn’t see the doll and steps on it, crushing its
        head, and in tripping over it kicks it across the room. Little Ellen was already crying but this
        sends her into hysterics. Maggie Healey looks grateful for something to do and hurries her out.
      </p>
      <p>
        The room is empty now but for the doll, which lies forgotten under an ornate cupboard. Time
        passes, maybe hours. The lights in the house go out as everyone goes to bed, the grandfather
        clock on the wall spins and spins.
        Strangely it’s not boring, being alone among the household objects. It’s peaceful and uncomplicated.
      </p>
      <p>You hear the sound of a window opening, and in the gloom of a moonless night you see very little,
        just the shadow of a person dropping into the room. <em>Now</em> the doll is afraid,
        not because it was damaged and discarded, but because this still and orderly world has been
        invaded. The <Examinable expansions={["doll", "terrified doll"]} tag="c2_doll3" /> is crying out a warning
        now, it wants to wake the house, but it can only wake you—
      </p>
    </section>,
    <section>
      <h3>At the mansion (in Whitby’s car)</h3>
      <p>
        You bolt straight up. “How did I get here?”
      </p>
      <p>
        “We dragged you.” Whitby’s smoking—you didn’t think she was the type—but the long ash suggests
        she’s been distracted. Maybe by the guy who was slumped over in her passenger seat.
      </p>
      <p>“Who’s we?”</p>
      <p>“Me and the gardener,” she says, with infinite patience. “I told him your blood sugar crashed. So much
      for keeping a low profile.”</p>
      <p>It’s surely hot as hell outside, but you’re chilled to the bone and unable
        to stop shivering. “I guess I should’ve had a donut before I went on duty today.”
      </p>
      <p>“I never said you were a police officer,” she replies dourly. Cops love cop jokes.</p>
      <p>“You certainly didn’t correct his misapprehension.”</p>
      <p>She  notices her forgotten cigarette and flicks it out the window. “What other choice did I
        have? <em>Hi I’m Detective Whitby and this is my pet psychic?</em>”
      </p>
      <p>“That’s sweet of you, but really we’ve just met.”</p>
      <p>She sees that you’re shivering and rolls up her car window even though it must be boiling hot for her. You’re grateful and do the same.
      “What happened this time?” she asks, gently.</p>
      <p>
        You tell her, in a simple recitation of facts. “But I get it,” you say. “It’s in my head, or
        I’m a fraud. Just drop me back
        off at the boardwalk. I won’t bother you again.”
      </p>
      <p>She nods and starts the car. “I’ll drop you off,” she says. “What time can you be ready tomorrow?”</p>
      <p>“Ready for <em>what</em>?”</p>
      <p>She points. Sitting on the back seat is
      a glove—no, a matched pair of gloves.</p>
      <p>“It was right where you said it would be, under a bush by the base of the stairs. I picked
        it up before you did your fainting flower bit. When I get in to work on Monday I need to have some
        words with CSI about their thoroughness.”
      </p>
      <p>You don’t say anything, just stare at her, so she adds, “Look, just relax, Pietro. I believe you.”</p>

      <NextChapter chapter="3" />
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

export const Chapter2 = connect(
  mapStateToProps
)(_Chapter)
