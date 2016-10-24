const React = require('react')
import { Map, List, NextChapter, FromInventory } from '../components'
import { connect } from 'react-redux'
import { updateInventory } from "../actions"

import { RenderSection } from '.'

const _Chapter = ({currentSection, inventory, chapterId}) => {
  var sections = [
    <section>
      <h2>Chapter Seven</h2>
      <h3>Whitby’s porch</h3>
      <p>
        You’d nearly collapsed into your apartment only to find the answering machine blinking.
        It’s Whitby. “Come by the house,”
        she said, “and bring some booze,” followed by an address just across the bridge, and then a dial tone.
      </p>
      <p>
        From what you can see at night it’s a simple, immaculate house. There’s
        nothing on the porch, just a plain welcome mat and a doorbell, which you ring.
      </p>
      <p>
        A man answers. He’s built like a brick wall. He doesn’t look surprised, but you are.
        “Yeah, I’m white,” he says.
      </p>
      <p>
        Before you can say words stupider than what you’re already saying with your face, Hank
        lets you in. “Tamisha, your psychic’s here,” he hollers. He takes the bottle of cheap wine you
        picked up on your way over. “We’re more of a beer couple, but thanks.”
      </p>
      <p>
        You weren‘t just surprised that he’s a white guy, though it’s true that you were. Hank is
        also an exceptionally attractive white guy. He looks like he should be in a calendar carrying
        a firehose.
      </p>
      <p>
        “Hank’s in the Coast Guard,” Whitby says, entering. It’s beyond weird to see her dressed
        casually, in an oversized Eagles sweatshirt and black stretch pants. She beckons you to
        follow her, and you do, through the tidy living room and into an eat-in kitchen. There’s
        a plate of spaghetti on the table.
      </p>
      <p>
        “Eat,” she says.
      </p>
      <p>
        “How you do know I didn’t already?”
      </p>
      <p>
        She opens your wine and pours some for you into a jelly jar. “I’ve seen your fridge.” You
        start to argue but Hank the Tank is watching, so you grab a fork instead.
        When they’re satisfied that you’re obediently consuming food, Hank excuses himself and
        Whitby joins you at the table, drinking beer out of a can.
      </p>
      <p>
        “Thanks,” you say, finally. It wasn’t complicated food, but you don’t have complicated
        tastes. She nods towards the living room with her “you’re an idiot” expression so you
        raise your voice. “Thank you, Hank.”
      </p>
      <p>
        “Welcome!” he calls back from who-knows-where. You can hear the game on.
      </p>
      <p>
        “Patrol car picked up Troiano just where you said he’d be. Nice work on
        the <FromInventory inventory={inventory.c6_car} />. Turns out he had an outstanding warrant
        for unpaid speeding tickets so we’re able to hold him for a little while. He hasn’t said much yet,
        but I think he’ll talk.”
      </p>
      <p>
        “I saw Michael Herschel there too. He left right before Troiano.”
      </p>
      <p>
        “Dammit, wish we could’ve known. I’ve got somebody watching his place but neither he nor his
        sister have been by for days now.”
      </p>
      <p>Between mouthfuls of spaghetti you fill in the complete story about Jared. “That’s weird, isn’t it?”
      she says. “Why’d he come to you?”</p>
      <p>
        You’ve become so used to the idea that you’re wrapped up in the center of this drama that you
        forgot that, to the Healey family, you’re a complete stranger. “He said something
        about his wife mentioning me. I guess she meant my mom.”
      </p>
      <p>
        “Ally was into all that crap when she was a kid—’scuse my characterization.” You gesture magnanimously
        for her to continue. “Maybe some of it rubbed off on her husband?”
      </p>
      <p>You get up, clean off your plate, and rejoin her at the table. You pull out the ring from a
        pocket and unfold the paper towel around it. “He gave me this, when I asked for something
        personal.”
      </p>
      <p>
        “What’s this one... feeling?” She says this hesitatingly, but not skeptically.
      </p>
      <p>
        “Guilt. Not about the murder though. I’m sure now Jared didn’t murder his brother, even if he’s
        partially to blame.”
      </p>
      <p>
        She’s worried about you and wants you to see it. “I called you over because it sounded from
        like you could use some company. Plus Hank
        made too much spaghetti again.” She touches your arm. “We’re here for you. And I’m no psychic,
        but we’re almost to the bottom of this thing. I know it.”
      </p>
      <p>
        “I hope you’re right,” you say. “Because this is killing me.” Before she can reply
        you grab the <List expansions={["ring", "anxious and remorseful ring"]} tag="c7_ring" />.
      </p>
    </section>,
    <div className="in-flashback">
      <figure className="chapter7">
        <figcaption className="visuallyhidden">Ocean waves, the color of old blue jeans</figcaption>
      </figure>
      <h3>On the beach</h3>
      <section>
        <p>
          This is Alan Healey’s private beach. The peaks of his roof are visible above the dunes, rising up
          behind dense, scrubby trees. It’s early morning.
        </p>
        <p>
          This close you can see the resemblance between the brothers. Jared, younger, and Alan, older,
          but cut from the same model, in body if not in spirit. Alan is more spry than you’d thought— the man walked down that steep path to get here. He also seems fueled by rage.
        </p>
        <p>
          “Haven’t I given you <em>enough</em>?” he says. He’s leaning on a <smallcaps>Private Property</smallcaps> sign,
          while his brother is plowing circles in the sand with his pacing. “I’ve made up my mind.”
        </p>
        <p>
          “If you take the properties away we’ll be—”
        </p>
        <p>
          “<em>You’ll</em> be, Jared,” Alan says. “If I take the businesses back—when I take them back—all of
          this stops being my problem. I was willing to look the other way to let you make your own
          mistakes—”
        </p>
        <p>“You were happy to take the money while it was easy.”</p>

        <p>“I never kept a dime of it. It’s in a trust, for Sarah.”</p>
        <p>Jared didn’t know this. “She’s not your daughter! How dare you?”</p>
        <p>“The way you’re going, Jared, there will be <em>nothing</em> left for her. She’ll be lucky
          not to be an orphan by the time these schemes of yours run their course.” His voice softens a
          little. “These people are <em>dangerous</em>. They’re killers.”
        </p>
        <p>
          “They’re my friends. They wouldn’t—”
        </p>
        <p>
          “They will. And I can’t stop you from ruining your own life. But I can stop you from
          ruining your daughter’s.” He stares off towards the sea, not able to look his brother in the eye.
          “I’ve decided to sell the entire business, liquidate all the real estate holdings. It’s all going
          to trusts for Sarah and Maggie.”
        </p>
        <p>
          From Jared’s expression of horror you know this isn’t
          good for him. “We’ll never be able to pay back what we’ve been floating. Michael will kill me.”
        </p>
        <p>
          Alan shakes his head sadly. “Michael needs to find his own way back. I don’t know where this
          family went wrong, but it stops with Sarah. I made a promise.”
        </p>
        <p>
          “You sanctimonious prick,” Jared says, then pauses. “A promise to who?”
        </p>
        <p>
          Now Alan is definitely not looking at his brother. “Allison.”
        </p>
        <p>
          “You talked to my wife? When?”
        </p>
        <p>
          “Before she left. She told me she was leaving, that she had to leave because it wasn’t safe for her.
          But she wouldn’t explain why.” He holds out his hand; in his palm is a gold ring that
          matches the one Jared still wears. The ring is achingly, regretfully lonely.
          “I’m sorry, brother. I should’ve told you.”
        </p>
        <p>
          Jared lets out an anguished cry and reaches for his ex-wife’s ring, but Alan throws it—right <em>through</em> you—
          and it lands in the surf. Jared howls and pushes
          his elderly brother into the sand.
        </p>
        <p>
          “You’ve killed me,” he says, sobbing.
        </p>
        <p>
          “You did it to yourself,” Alan replies, more sad than angry. Jared leaves him there,
          struggling in the sand to get up. You can’t help, of course, only watch.
        </p>
        <p>
          You feel the pull of the ring.
        </p>
        <p><em>But I haven’t woken up,</em> you think, as you move towards the surf. <em>I’m still in this vision, still in the past.</em></p>
        <p>
          If you were just searching with your eyes, the ring would be long gone, lost amid the
          seaweed and froth, but in the flat, washed out, emotionless plane of the vision, its
          desperate ache is like a beacon. You reach down into the water (<em>since when do I have arms?</em>)
          and put your hand around Allison Healey’s <List expansions={["ring", "haunted ring"]} tag="c7_ring2" />.
        </p>
      </section>
    </div>,
    <div className="in-flashback">
      <figure className="chapter7-2">
        <figcaption className="visuallyhidden">The front entrance to a fortune-teller’s parlor, with signs advertising palm reading, in black and white</figcaption>
      </figure>
      <h3>In her reading room</h3>
      <section>
        <p>
          Have you woken up? If so, how did you get here? Aren’t you at Whitby’s?
        </p>
        <p>
          Small details begin to jump out at you: objects in the wrong place; broken items mysteriously restored;
          the beaded curtain looking brand-new. A blurred figure in the corner resolves. Your mother.
        </p>
        <p>
          This isn’t one of your memories. You never saw her like this: older, close to the age at which she died
          but still healthy. Her black hair is throttled with gray; her skin, always olive and leathery from
          the sun and the wind, is now fully wrinkled. There’s no one in the room with her.
        </p>
        <p>
          <em>She’s alone because of you,</em> you think, and you fully feel that truth for the first time.
          It must’ve been impossibly hard for her, a single parent, but as a selfish child you thought only of what she couldn’t
          give you: a house, a dog, siblings, a normal life. The minute you turned 18
          you thanked her by moving out, sending the occasional check and making the rare
          desultory holiday visit, but mostly, you just left her—vengeance for the crime
          of simply doing her best to raise her son. By the time you were there for her, she was dying.
        </p>
        <p>
          The curtain rattles, and a woman steps through: mid-thirties, faux-blonde, the spitting image of
          her daughter. This is Jared’s wife Allison.
        </p>
        <p>
          Your mother’s face animates as she slides into character. “Do you seek the wisdom of the ancients?”
          (You couldn’t even come up with your own routine.)
        </p>
        <p>
          Allison Healey is cheerful, bubbly, her 1970s hair sun-bleached and luxuriously curled.
          She exudes the air of a woman with her whole future ahead of her. An easy read, she’ll
          want to hear about eternal love, tow-haired children, and a two-car garage. Your mom
          starts up her patter, and you’re struck by how  <em>good</em> she was at this.
          There’s no guile in her narrative at all. Her eyes fill with unconditional love for this
          stranger. Her words
          are pretty lies, but her desire to bring happiness to this person is utterly genuine.
        </p>
        <p>“I require a personal object, one infused with the spirits themselves,” she says,
        and you realize you’re mouthing along with her, like a silent prayer.</p>
        <p>
          Without hesitating, Allison Healey removes the <List expansions={["ring", "gold wedding ring"]} tag="c7_allison_ring "/> from
          her finger.
        </p>
      </section>
    </div>,
    <section>
      <p>Your mother takes it and her reaction is immediate and violent. She rocks backwards in her chair,
        her head snapping around in spasms. Her eyes are pinned open
        but unseeing, and she’s started a keening moan unlike anything you’ve ever heard.
      </p>
      <p>
        No wonder Whitby was terrified that first day.
      </p>
      <p>
        Healey leans away but  your mother reaches forward, eyes still staring in
        horror at nothing, and grabs the woman by the wrists. “You must listen to me, Allison.”
      </p>
      <p>
        “I don’t—get off of me—”
      </p>
      <p>
        “Jared will betray you. If you stay with him, you and your daughter will die.” Healey is rapt, motionless.
        “He hasn’t told you, but he’s in debt.
        Nothing serious, betting on Sunday games with some friends. He knows his brother will pick up the tab
        if he gets into trouble.”
      </p>
      <p>
        The words come in a rush: “But it’s not going to stop. It’s going to poison him. To cover his own losses he’s going
        to enlist those friends, skim off their winnings. He’ll think it’s going great for awhile and it will be, as
        long as he pulls in more people. When he runs out of friends, he’ll turn to his family. His
        brother, his nephew, they’ll get drawn into his orbit. He’ll use his brothers’ properties as
        collateral on some dangerous loans to keep covering the losses. But he’ll be addicted to the winnings,
        and so will Michael. By the time Jared realizes he’s in too deep, Michael will be there to
        push him even deeper. He’ll have no choice. Michael is dangerous and he’ll have made some
        dangerous friends who don’t like to be cheated out of their money.”
      </p>
      <p>
        “That’s crazy, Jared would never—” She doesn’t believe, and yet she does. How could she not, with
        that level of detail?
      </p>
      <p>
        “I can see, it so clearly. They’re coming into your house while you sleep. Two bad men are
        creeping into your daughter’s bedroom
        and they’ll make it look like a burglary. Atlantic City is so violent, they’ll say. ‘Nobody
        should raise a family there; they should’ve stayed in Stone Harbor.’”
      </p>
      <p>
        “What can I do? Should we leave? I can’t let them hurt her.” She’s holding your mom’s hands now too, their palms entwined
        over the table. Your mom is still looking away from her, at a vision neither of you can see.
      </p>
      <p>
        “That’s no good. Jared loves Sarah, he’s always
        bragging about his beautiful daughter. She’s <em>their</em> collateral. That’s how they keep him in line.
        If you take her, they’ll think he’s sending her away for safety, and they’ll come for you both. I see
        that too, they find you, in a motel, at a stoplight, no matter what you do they find her.”
      </p>
      <p>
        Allison is sobbing now, almost as if she can see this future herself. Your mother is
        nodding. “There’s a way. There’s one way. If you go, they’ll
        think you just left him. You were disgusted with his ways. You can’t take Sarah. But she’ll be safe.”
      </p>
      <p>
        “How? I can’t leave my own daughter.”
      </p>
      <p>
        “Of all the possible futures I can see, this is the only one where she survives. I see that
        she’ll have many protectors. Some of them are strangers to you now. You must find her a guardian, someone you trust,
        someone strong. That person will in turn enlist others, and they’ll keep her safe.
      </p>
      <p>
        “And her uncle—” Your mom’s face clouds.
        You know what she’s seeing, what scene she’s witnessing. “He’ll sacrifice everything to protect her,”
        she says.
      </p>
      <p>
        “This seems so unfair. None of this has even happened yet–”
      </p>
      <p>
        “It <em>is</em> unfair. You have to sacrifice your own happiness and leave her, to set these events in motion.”
      </p>
      <p>
        <em>And then your mom turns her head and looks directly at you.</em>
      </p>
      <p>
        She smiles, the way she always did when you made her proud.
        “You’ll see your child again someday. And when you do, she’ll forgive you for leaving.”
      </p>
      <p>
        Your mother drops the <List expansions={["ring", "ring, heavy with its owner’s guilt"]} tag="c7_ring_drop" />.
      </p>
    </section>,
    <section>
      <h3>On the beach</h3>
      <p>
        You’re standing in the surf and Healey is walking slowly, so slowly, back up the path
        to his house. You look down at your palm, and you feel yourself winking out of this vision too.
        The <List expansions={["ring", "ring"]} tag="c7_ring_drop2" /> falls through your disappearing hand.
      </p>
    </section>,
    <section>
      <h3>Whitby’s living room</h3>
      <p>
        “Where is Sarah?” you say, even before you’ve fully come back to the present.
        “It’s always been about Sarah. She’s in danger.”
      </p>
      <p>
        Whitby, to her credit, doesn’t waste time asking questions. “I’ve been assuming she’s with her father.” She
        gets up to make a call, leaving you with Hank. You should be embarrassed but you’re
        exhausted and just grateful for the companionship.
      </p>
      <p>
        “Tamisha says you’re the real deal,” he says in his impossible baritone.
      </p>
      <p>
        “It’s a recent development,” you say weakly. “Why, you want to know your future?”
      </p>
      <p>
        He looks back towards the kitchen. “Already do.”
      </p>
      <p>
        Whitby thunders into the living room, holstering a gun that appeared from nowhere
        and bodily lifts you up by the elbow. “Nobody’s seen the girl
        for days. Goddammit.”
      </p>
      <p>
        You’re staring at the gun. “Where the hell am I going?”
      </p>
      <p>
        “I have a hunch, but I need you to fill me in on the way. Don’t worry, Uri Geller, I’m
        leaving you in the car.”
      </p>
      <p>
        As you stumble out into the darkness you hear Hank: “I’ll clean up, honey.”
      </p>
      <NextChapter chapter="8" />
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

export const Chapter7 = connect(
  mapStateToProps
)(_Chapter)
