const React = require('react')
import { Map, List, NextChapter, FromInventory } from '../components'
import { connect } from 'react-redux'
import { updateInventory } from "../actions"

import { RenderSection } from '.'

const _Chapter = ({currentSection, inventory, chapterId}) => {
  var sections = [
    <section>
      <h2>Chapter Eight</h2>
      <h3>In the car</h3>
      <p>
        You’re hurtling over the bridge in darkness while recounting the nesting
        doll of visions. You omit the part about your mom seeing you. That feels private.
        Whitby’s reaction to the story about her friend is stony. “I don’t know what to think about
        a mother who abandons her child.”
      </p>
      <p>
        “I think if you’d seen it,” you say. “It was much worse than what happens to me. And she
        knew so many details.”
      </p>
      <p>
        “Yeah, I just...” Whitby steers the car onto a dark residential street. “It’s like I said,
        she was always so willing to believe.”
      </p>
      <p>
        You’re not sure why it’s important to you that she understand, but it is. “She wasn’t
        running away from responsibility. She was being brave. She was sacrificing herself for her kid.”
      </p>
      <p>
        “Maybe,” Whitby says. “Only if it’s not too late.” She pulls up through a winding private drive.
        You’re at the Healey estate.
      </p>
      <p>
        “Troiano broke, as we thought he would. He confessed he’s been placing bets for a long time—no big
        deal around these parts—but that things have escalated. There’s the marina, plus parking lots,
        storage facilities:
        the Healey empire is really prime stuff for money-laundering, smuggling, you name it.
        As far as I can tell it’s always been clean. Alan’s just very good managing properties and making smart
        investments. But since he retired and let Jared run things, everything’s been hollowed out and
        mobbed up.”
      </p>
      <p>
        You say, “Alan’s known for a long time, but didn’t want to believe it or hoped it would
        resolve on its own. Once it was clear to him that his brother was unrecoverable, he took
        steps to protect himself, his wife, and his niece. She’s the daughter they never had. I think
        Michael found out, and knew that if the business disappeared out from under them they’d
        make some people very, very angry.”
      </p>
      <p>“I don’t know if it would’ve mattered, in the end,” Whitby says. “If half of what Troiano
        says checks out, the feds will have a field day. This family’s going to
        lose everything.” She cuts the lights and coasts into the driveway.
      </p>
      <p>
        “Including this place?” She nods. “Shame.” Every stone, every column is telling you it’s been a
        happy home.
      </p>
      <p>
        The house is dark, but Michael Healey’s car is here, pushed into the knotty trees and hastily
        covered up with brush. It’s radiating a fear of capture.
      </p>
      <p>
        Every object around you is singing.
      </p>
      <p>
        You point out the vehicle to the detective. “Stay here and don’t move.”
        She takes out her <List expansions={["gun", "uneasy gun"]} tag="c8_gun" /> and checks it over expertly, with steady
        hands. <Map from={inventory.c8_gun} to={{gun: "The gun tells you it‘s never been fired on duty. It’s afraid of hurting the wrong person. It hopes to never be used."}} />
      </p>
    </section>,
    <section>
      <p>
        She disappears around the back of the house. Stupidly, you realize you have no idea if
        she called for backup, or what you should do if something goes wrong.
        The <List expansions={["front door", "grand old house is in trouble and the front door "]} tag="c8_house" /> is calling for you.
      </p>
    </section>,
    <section>
      <p>The moon is almost full and the white gravel driveway glows. You can hear the lap of the ocean,
        and the cicadas and crickets fill the air with screeching. But those are almost drowned out
        by the cacophony in the house. You drift across to
        the <Link expansions={["front stairs",
        "concrete front stairs, where the footprints of frightened men have left behind black psychic stains you know only you can see."]}
          tag="c8_prints" nextUnit={null}/>. Through
        a <Link expansions={[`small window`,`small window in the door`]} tag="c8_entryway" nextUnit={null}/> <Map
          from={inventory.c8_entryway} to={{
            undefined: " you can see only blackness.",
          window: `you can see the contours of the entryway, and the hum of more hungry objects.`}
          }/>
        The <Link expansions={["doorknob", "welcoming doorknob"]} tag="c8_doorknob" /> beckons you.
      </p>
    </section>,
    <section>
      <p>
        You turn it, and you’re faintly aware of a hissing sound from outside, Whitby still doing
        recon, trying to call you back to safety. You’re inside, though, and the carpet is blackened <Map from={inventory.c8_prints}
          to={{
            undefined: ` with overlapping footprints, `,
            stairs: ` with the same footprints, `
          }} /> stains made not with mud but with fear and anger. You don’t see child-sized prints, but
        the <Link expansions={["stair rail—", "stair rail is reaching out to you, like a hand across a dance floor, enticing you to follow."]} tag="c8_stairrail"/>
      </p>
      <p>
        Jared Healey lies in a heap at the base of the stairs, his neck bent backward. You don’t know if it
        was the fall that killed him, but a <Link expansions={["heavy iron poker", "mournful iron poker"]} tag="c8_poker" /> is next to him,
        clotted with blood. <Map from={inventory.c8_poker} to={{poker: "You whisper your forgiveness to it." }} />
      </p>
    </section>,
    <section>
      <p>
        You’re at the top of the stairs now, and a hallway runs to the right and left. There are
        paintings along the wall, <List expansions={["portraits of family members", "portraits of family members, their eyes comically gesturing to the right, to the right."]} tag="c8_portraits" />
        <Map from={inventory.c8_portraits} to={{undefined: " in the grand old style."}} />
      </p>
    </section>,
    <section>
      <p>
        A <List expansions={["hand", "firm hand"]} tag="c8_hand" /> on your shoulder stops you cold.
      </p>
    </section>,
    <section>
      <p>
        “What the hell do you think you‘re doing?’” Whitby hisses. Movement distracts you, and you look
        down at the oriental carpet beneath your feet. The rug runs down the hallway, down the
        left side, and as you watch the abstract patterns clump and reform into a series of undulating
        arrows, like a neon sign over a casino.
      </p>
      <p>
        “You have to go that way,” you tell her, pointing to the left. “Stop Michael.”
      </p>
      <p>
        “How do you know he’s there?” she whispers.
      </p>
      <p>
        “The carpet told me.”
      </p>
      <p>
        For some reason this answer satisfies her. “What are you doing?”
      </p>
      <p>
        “I’m going to get Sarah.”
      </p>
      <p>
        “You should wait for—”
      </p>
      <p>
        “No. That’s I’m here to do.” You open the <List expansions={["door to the right", "door to Healey’s study"]} tag="c8_bedroomdoor" />.
      </p>
    </section>,
    <section>
      <hr/>
      <h3>In the study</h3>
      <p>
        The room is almost as dim in real life. The inner door to the Healeys’ bedroom is closed.
        The door tells you it’s locked but it wants to be open. There’s a scared little girl inside.
      </p>
      <p>
        You reach for it, but the books on the shelves all arch their spines towards the shadowed corner.
        The shadowed figure you remember from the vision sits there. Now it’s no longer blurred. It’s
        Michelle Herschel.
      </p>
      <p>
        <em>“Joey?”</em>, she says, afraid and puzzled. Her <List expansions={["face", ["panicky eyes", "flushed cheeks", "sweaty brow"], "fearful expression"]} tag="c8_michelle" /> is barely visible in the gloom.
      </p>
    </section>,
    <section>
      <p>
        <Map from={inventory.c8_michelle} to={{
          eyes: "Her eyes are scanning you up and down, trying to assess you.",
          cheeks: "Her face is flushed the way all liars do when they’re found out.",
          brow: "She’s been sweating a long time, alone in this room."
        }}/> She’s trying to work out how the random stranger from the police station could be the person
        she’s clearly been expecting.
      </p>
      <p>
        <em>It was never her brother.</em>
      </p>
      <p>
        “Yeah,” you say. The clock is ticking (literally, it’s like a pounding in your head) but you take
        a moment to breathe, get to that calm center before slipping into a performance. “I’m here for the girl,”
        you say, truthfully.
      </p>
      <p>
        She’s studying you from an overstuffed arm chair that is crawling with revulsion. The desk lamp is
        on, but its light is loathe to illuminate her and instead is bathing you in its glow. This isn’t
        helping: whoever you’re pretending to be doesn’t look much like you.
      </p>
      <p>
        <Map from={inventory.c8_michelle} to={{
          eyes: "“What’re you lookin’ at?” you say, and try to look bored.",
          cheeks: "“What’re you hiding?” you say, and point accusingly at her.",
          brow: "“It stinks of sweat in here,” you say, and sneer at her in disgust."
        }}/>&nbsp; “Where is she?”
      </p>
      <p>
        “You’re Joey from AC? What were you doing at the police station?” she says. She’s not buying it.
      </p>
      <p>
        What would a gangster be doing in a room full of cops? “Protecting my assets.” Experience
        tells you the best way to sustain a lie is to change the topic, do a little misdirection.
        “What happened to Jared?”
      </p>
      <p>
        Her eyes glitter; she wants to brag. “He didn’t want to go along with the plan.” There’s a
        ruckus outside—a thud. The furniture is whispering it you, a message passed object by object
        down the hall: Michael Herschel is subdued, Whitby is coming.
      </p>
      <p>
        Michelle’s too quick though: she sees the strange interplay across your face, the way
        you tilt your head towards the door. “Like hell you’re him.” She gets out of the chair
        and she’s holding <List expansion={["something", "a switchblade", "a humming switchblade"]} tag="c8_blade" /> in front of her, backing towards the bedroom door with
        one hand flailing out for the doorknob.
      </p>
    </section>,
    <div className="in-flashback">
      <figure className="chapter8" />
      <h3>In the study</h3>
      <p>
        “Open the door,” Michelle Herschel says. She’s still holding out that knife, blade extended,
        tightly gripped in her gloved hands. Alan
        Healey has his hands up, backing away towards the exit, but she shakes her head and waves the knife.
        He steps around her, still in a defensive position, and complies. Light spills out of the
        bedroom.
      </p>
      <p>
        “Where’s the deed?” she says.
      </p>
      <p>
        “I don’t know what you—”
      </p>
      <p>
        “Uncle Healey, I don’t want to hurt you,” she says. But she does.
      </p>
      <p>
        “It’s too late. I already signed it. It’s done, you can’t touch the money.”
      </p>
      <p>
        “I know you’re lying,” she says, and she‘s right. She backs him further into the bedroom, and
        you follow, helpless to stop this murder a second time.
      </p>
      <p>There are two double beds, not one large one, but the beds assure you that it’s because
        Maggie tosses and turns and they decided years ago it was for the best. They still love each
        other, says the room.
      </p>
      <p>
        Healey backs into his own bed, which wants to hug him and protect him from this woman. “No,”
        she says, waving the knife again towards his dresser. He gets up again, and his eyes
        briefly flick towards his <List expansions={["nightstand", "firm and protective nightstand"]} tag="c8_nightstand" />.
      </p>
    </div>,
    <section>
      <p>
        He takes a step towards the dresser but stumbles, grabbing on to the nightstand for balance.
        Only you—not Michelle—see his quick gesture: he pushes a piece of paper off the surface and it slides
        behind it, in the gap between the furniture and the wall. The nightstand is resolute in its
        desire to hide that paper at all costs.
      </p>
      <p>
        “Take your meds, Uncle,” Michelle says, nodding towards the bottle. “And don’t stop taking them
        until they’re gone.”
      </p>
      <p>
        “Michelle, don’t do this—”
      </p>
      <p>
        “You’ve given us no choice,” she says, and her voice does choke here. “It’s you or us. You’ve had
        a good run. Michael gave you a chance to do the right thing.” You can see in her face that she
        believes these things.
      </p>
      <p>
        Healey is quietly sobbing now, shaking pills into his hand, and you can’t bear to watch,
        but thankfully you don’t have to—
        the psychological pain of the vision transforming into  <List expansions={["real physical pain", "the pain of grabbing on to a knife blade"]} tag="c8_holdblade" />—
      </p>
    </section>,
    <section>
      <p>
        You’ve pinned Michelle Healey to the closed bedroom door: one hand gripped around the knife
        (blood is <em>streaming</em> out of your hand), the other locked around her hand, stopping her
        from turning the doorknob. As you come out of your trance so does she, seemingly. She knows
        that you know, and your own horror at what she’s done seeps into her. Maybe she can feel
        the contempt of this whole house, every fiber and every nail welling over once last time in grief.
      </p>
      <p>
        She drops the knife, lets go of the doorknob, and slides down to the floor, her hair hanging
        slack around her face. You stumble back yourself just as Whitby bursts through the door,
        gun extended. You feel it sigh in relief; it hasn’t needed to be fired.
      </p>
      <p>
        “It’s okay,” you say. “She’s safe.” Whitby subdues Healey and you gently open the bedroom door,
        seeing the little girl at the center of all this for the first time. She’s wedged herself between
        the beds, holding the headless doll in a death grip.
      </p>
      <p>
        You kneel before her, whispering nonsense, and gently touch <List expansions={["the doll", "Vicky, the battered but happy doll"]} tag="c8_doll" />.
      </p>
    </section>,
    <section>
      <p>“Vicky wants you to know that everything’s going to be all right now,” you say, truthfully.
        “She says she’s always going to watch out for you.”
      </p>
      <p>
        Sarah screws her face up at you. “Dolls can’t talk.”
      </p>
      <p>
        “That’s a good rule of thumb, but sometimes they make exceptions.”
      </p>
      <p>
        The girl looks past you and sees Whitby in the doorway. “Aunt Tamisha!” she yells, and runs past
        you, the doll briefly forgotten. It doesn’t mind: it’s happy when she’s happy. And then it’s
        just a doll.
      </p>

      <p>
        Whitby is fussing over the girl, distracting her while other officers fill the house, removing
        the body and the silent, defiant Herschels. You walk around the bed to the nightstand, pull it
        away from the wall, and retrieve the paper that Alan Healey had used his last minutes on Earth to
        hide.
      </p>
      <p>
        It’s a master deed, to this land and this house, made out to transfer it all to Sarah Healey’s trust. It’s
        dated the day of his death, and unsigned.
      </p>
      <p>
        It feels like the cigar cutter did: incomplete and unfinished. It’s asking for your help. You
        carry it over to the dresser—all the medications and personal items have been removed—but there’s
        a simple <Link expansions={["cheap pen", "cheap pen bursting with ink"]} tag="c8_pen" /> in the top drawer.
      </p>
    </section>,
    <section>
      <p>
        At the bottom of the deed, an outline of a signature softly glows. Healey‘s writing was naturally
        fluid <Map from={inventory.p0_library_things} to={{note: "—unlike that hasty note you read in your first vision—"}} /> and
        just a touch arrogant. The pen helps you trace along the outline effortlessly, and under each stroke
        of ink, the glow fades. “This needs to go to his lawyer,” you say to Whitby, who surely watched
        you but says nothing, just takes the note in one hand while holding the hand of the girl in the other.
      </p>
      <p>
        When you release the note, your connection to the house winks out, like a light switch flipped off.
        It’s over.
      </p>
      <p>
        It’s a bit lonely.
      </p>
      <NextChapter chapter="9" />
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

export const Chapter8 = connect(
  mapStateToProps
)(_Chapter)
