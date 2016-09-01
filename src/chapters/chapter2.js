const React = require('react')
import { Map, List, FromInventory, NextChapter } from '../components'
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
        friends who'd do this kind of a favor for you.
      </p>
      <p>
        The house is just as you remember from the vision: sprawling, white, faux classical,
        typical for the fancy neighborhood and so different from the sun-washed gray wood of
        most shore houses. But the property isn’t new money, either. It’s worn but well cared for. Living at the
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
        It’s late afternoon so the courtyard is in shade, but it’s a hot, hot day and you’re sweating your balls off
        in shorts. Of course the detective seems to be cool as ice in her polyester police suit. “Stop right there,”
        she barks. “Just tell me where it is.”
      </p>
      <p>
        “Don't want me planting any evidence?”
      </p>
      <p>
        “Exactly.”
      </p>
      <p>
        “It would hurt my feelings less if you lied to me.” She says nothing, so you just point. “It’s in a
        bush by the base of the stairs. Probably.”
      </p>
      <p>
        She pauses. “Probably?”
      </p>
      <p>
        “It <em>was</em> there, but Healey died weeks ago. How the hell should I know
        what happened between now and then?” You hear her mutter something about being a lousy psychic.
      </p>
      <p>
        “Who are you? What are you doing here?”
      </p>
      <p>You turn with a start. It’s an older woman, alarmed at your presence. Her clothes
        are <List expansions={["expensive", "but also a bit haphazardly put together; not everything matches"]} tag="c2_clothes" nextUnit={null} />.
        She’s carrying a <List expansions={["duffel bag", "duffel bag, which from the way she carries it suggests it’s both full and heavy"]} tag="c2_duffel" nextUnit={null}/>.
        Her <List expansions={["eyes are sharp", "eyes are sharp, but rheumy, like she’s been crying"]} tag="c2_eyes" />.
      </p>
    </section>,
    <section>
      <p>
        <em>Ah, she must be the widow</em>. She frowns at both of you. “Are you with the police?”
      </p>
      <p>
        “Yes,” Whitby says, truthfully. “I’m very sorry for your loss, Mrs. Healey.”
      </p>
      <p>She’s relieved that you aren’t thieves but not exactly pleased to see you. “I thought you
        people were finished here.”
      </p>
      <p>
        “Just following up on some loose ends. My apologies for disturbing you, I thought you’d left already.”
        Whitby replies. She gives you a look that in no uncertain terms means ‘keep your mouth shut.’
      </p>
      <p>
        “I know you,” Mrs. Healey says. “You’re Sarah’s godmother.”
      </p>
      <p>
        Whitby nods. “I went to high school with Allison.”
      </p>
      <p>
        The woman putters a little around the area, deadheading a few parched flowers.
        “I haven’t seen Sarah since—that night—but she left something at the house, let me give it to you.”
        She reaches into the duffel bag and moves to offer you something—you, because you’re standing
        right by her—and you’re struck by a wave of fear that physically knocks
        you back. She looks puzzled at your reaction, but steps forward, holding the
        object out for you. Your vision is so distorted that can’t make it out even though it’s in front
        of your face.
      </p>
      <p>Whitby sees your distress and starts running up the steps across the patio. “Thank you, Mrs. Healey,
        I’ll take that for her—”
      </p>
      <p>
        You can feel the blood draining from your limbs and
        your vision narrowing to a pinprick. Whitby’s reaching out to intercept, but it’s too late,
        the woman has eagerly
          shoved <List expansions={["a doll", "<psychic>a frightened doll</psychic>", "<psychic>a frightened doll with a crushed head</psychic>"]} tag="c2_doll" /> into
          your paralyzed hands—
        </p>
      </section>,
      <div className="in-flashback">
        <figure className="chapter2" />
        <h3>In the family room</h3>
        <section>
          <p>
            You’ve never felt so small in your life—physically small. Even as a boy you were  big
            for your age, often crashing into your mom's cheap but delicate new age baubles.
            But now you are hemmed in on all sides by
            gargantuan walls of solid furniture and you feel downright tiny.
          </p>
          <p>
            A young girl, carrying the <List expansions={["doll", "happy doll"]} tag="c2_doll2" nextUnit="none" />, runs into the room and settles comfortably into a
            high-backed chair. She’s followed by an <List expansions={["older man", "kindly looking older man", "older man who you know to be Alan Healey"]} tag="c2_healey" nextUnit="none" /> and
            a <List expansions={["woman", "woman of the same age", "woman you now recognize as Healey's wife"]} tag="c2_margaret" />.
          </p>
        </section>
      </div>,
    <section>
      <p>In the arms of its owner, the doll is radiating contentment rather than fear. Maybe that’s because it still has a head.</p>
      <p>Healey’s wife still has streaks of brown in her curly gray hair. She’s dressed formally,
        as her generation tends to, even though you’re sure the room is summer-hot.
        She asks the girl, “Honey, do you want anything?” Her voice is firm, but kind, like you’d
      imagine an aunt could be.</p>

      <p>“No thank you, Aunt Maggie,” the girl says. She hugs
      the doll in a grip which would probably kill a small animal, but the doll loves it.</p>
      <p>
        Her aunt nods and says to her husband, “I'll get you your iced tea, dear.”
      </p>
      <p>Healey wears huge thick glasses and is bald but for a few wisps that could use trimming.
        Probably his wife cuts his hair after a lot of fussing and protesting. With an ache, you realize she’ll never
        get another chance; some stranger will clean it up for the funeral and she’ll think it’s all
        wrong.
      </p>

      <p>Healey says nothing,
        just <List expansions={["smiles", "forces a smile which doesn’t reach his eyes"]}  tag="c2_smile" />,
        and for a moment there’s an invisible battle of wills between husband
        and <List expansions={["wife", "a wife who clearly senses something’s up"]} nextUnit={null} tag="c2_wife" />.
      </p>
    </section>,
    <section>
      <p>You could give the guy a tip on how to better
        lie with your expression. He’s keeping something from her. He’s waiting for her to leave.
        She hesitates for just a second; she’s on to him. You want to call out and tell her to just stand
        there forever—don’t let him out of your sight. But you aren’t really there, and this already
        happened. She chooses to believe the fake smile and exits the room.
      </p>
      <p>The second she’s out of sight, Healey picks up a heavy black telephone from
        a side table and settles it on his lap. ”You play with Vicky now, Sarah. Uncle Alan
      just needs to make a quick phone call.” The little girls nods and hums to the doll tunelessly.</p>
      <p>Healey dials the rotary phone slowly; it's obviously painful for his hands to operate. It’s a short
        number, local. His conversation is muffled and unintelligible because he doesn’t want the girl
        to overhear. You catch words here and there—“never”,  “that money”,
        and then he says angrily, “How could you?” and the girl, Sarah, looks up in alarm, letting go of the
        doll which tumbles to the floor.
      </p>
      <p>
        “I won’t have her suffer for your mistakes. By morning it’ll be done.” Healey says and slams the receiver down just as his
        wife enters carrying a couple of sweating glasses on a tray. “Wrong number,” he says, preempting any
        discussion. His wife says nothing, just puts the
        serving items down.
      </p>
      <p>
        “Sorry,” he says roughly, taking off his glasses to wipe his face, and then gets up. He doesn’t
        see the doll and steps on it, crushing its
        head. Little Sarah was already
        starting to cry but this
        sends her into hysterics. Maggie Healey bundles her up, says, “I’ll read to you in bed, honey, let’s go.”
      </p>
      <p>
        The room is empty now but for the doll, which lies forgotten under an ornate cupboard. Time
        passes, maybe hours. The lights in the house go out as everyone goes to bed, the grandfather
        clock on the wall spins and spins.
        Strangely it’s not boring, being alone among the household objects. It’s peaceful and uncomplicated.
      </p>
      <p>You hear the sound of a window opening, and in the gloom of a moonless night you see very little,
        just the shadow of a person dropping into the room. <em>Now</em> the doll is afraid,
        not because it was damaged and discarded, you realize, but because this still and orderly world has been
        invaded. The <List expansions={["doll", "terrified doll"]} tag="c2_doll3" /> is crying out a warning
          now, it wants to wake the house, but it can only wake you—
        </p>
      </section>,
      <section>
        <h3>At the mansion (in Whitby’s car)</h3>
        <p>
          You bolt straight up. “How did I get here?”
        </p>
        <p>
          “We dragged you.” Whitby’s smoking—you didn’t think she was the type. The ash is long.
        </p>
        <p>“Who’s we?”</p>
        <p>“Me and Mrs. Healey,” she says, with infinite patience. “She’s stronger than she looks.
          I told her your blood sugar crashed. So much
        for keeping a low profile.”</p>
        <p>It’s surely hot as hell outside, but you’re chilled to the bone and unable
          to stop shivering. You laugh a little and it sounds weird to your own ears.
          “Some cop I turned out to be.”
        </p>
        <p>“I never said you were a police officer,” she replies dourly.</p>
        <p>“You certainly didn’t correct her misapprehension.”</p>
        <p>She  notices her forgotten cigarette and flicks it out the window. “What other choice did I
          have? <em>Hi I’m Detective Whitby and this is my pet psychic?</em>”
        </p>
        <p>“That’s sweet of you, but we’ve just met.”</p>
        <p>She sees that you’re shivering and rolls up her car window even though it must be sweltering
          in the car. You’re grateful.
        “What happened this time?” she asks, gently.</p>
        <p>
          You tell her, in a simple recitation of facts, even the bit about the doll.
          “But I get it,” you say, when she doesn’t respond. “It’s in my head, or
          I’m a fraud. Just drop me back
          off at the boardwalk. I won’t bother you again.”
        </p>
        <p>She nods and starts the car. “I’ll drop you off,” she says. “What time can you be ready tomorrow?”</p>
        <p>“Ready for <em>what</em>?”</p>
        <p>She points. Sitting on the back seat is
        the killer’s glove—no, a matched pair of gloves.</p>
        <p>“The other one was right where you said it would be, under a bush by the base of the stairs. I picked
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
