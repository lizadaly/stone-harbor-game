const React = require('react')
import { Map, List, NextChapter } from '../components'
import { connect } from 'react-redux'
import { RenderSection } from '.'

const _Chapter = ({currentSection, inventory, chapterId}) => {
  var sections = [
    <section>
      <h2>Chapter Three</h2>
      <h3>In Whitby's office</h3>
      <p>
        You were certain you’d never get to sleep but last night you felt a whole-body weariness unlike
        anything since you were a kid. You remember summer days when it was too hot to be in the reading room—
        Mom didn’t get air conditioning until 1975, long after you’d moved out—and you would just spend
        the whole day in the ocean. You weren’t much of a swimmer, but just fighting the
        current is tiring, and you’d come home, tracking sand into the foyer and up the
        stairs to the apartment over the storefront, and crash straight onto the bed. Mom’s work
        day didn’t really even start until
        the evening, and so you’d tend to sleep through most of it until she’d wake you, often well
        after midnight, and make a simple dinner. As a result you tended to miss whatever was on
        TV, which made you even more popular with the kids at school.
      </p>
      <p>
        “Cream?” Whitby asks, interrupting your thoughts.
      </p>
      <p>You shake your head. “Trying to quit. I’ll take a dumptruck full of sugar, though.”
      </p>
      <p>
        She hands you a mug and a fistful of
        sugar packets. Her office is shared, but it’s the weekend and just the on-duty
        cops are around, grimly filling out paperwork in the bullpen.
      </p>
      <p>
        She closes the venetian blind that looks out into the common area, though it
        has so many creases and kinks that it barely affords any privacy.
        It feels like you’re about to be interrogated, which you are.
      </p>
      <p>
        “Why did you move back to Jersey?” When you look confused, she says, “After your mom died. She owned
        that property, it’s probably worth plenty, being right there on the boardwalk.”
        She sits across from you and folds her hands primly.
      </p>
      <p>
        “You ran a background check on me?” She shrugs: <em>That’s what I do</em>. “I moved back in
        when she was in the hospital, thought I’d just run things for awhile until she got back on her feet.”
        You pause,
        sip the coffee, add more sugar. “She never did. Haven’t gotten around to selling it.”
      </p>
      <p>
        “That was four years ago.” Logically, you know this, but it’s different when someone else says it out loud.
        Before you can answer, she says,
      “Sorry, none of my business why.”</p>
      <p>
        You hesitate and then say, “There isn’t even always a why. Sometimes people
        just get—stuck.”
      </p>
      <p>She nods and picks up a small stack of photographs and begins laying them out,
        snapping them crisply and placing them face down. She’d make a great  dealer.
      </p>
      <p>“Another test?” you sigh.</p>
      <p>“No, dummy. It’s time you met the family.” She turns over the
        first <List expansions={["photo", "photo, of Healey and a younger man who resembles him"]} tag="c3_healeyphoto" />.
      </p>
    </section>,
    <section>
      <p>“That’s Alan on the left and his younger brother, Jared, on the right.
        I went to school with Jared’s wife Allison—we were next door neighbors for a few years—and
        we stayed in touch while she went off to college. I didn’t know Jared until they got married.
        His family and mine didn’t exactly go to the same garden parties.” She’s thoughtful
        for a moment. “I never knew why she made me Sarah’s godmother. I’m not Catholic and
        by then we weren’t close. She just said she wanted to make sure her girl was ‘protected,’ though
        from what I don’t know. I just figured I was the only cop she’d ever known.
      </p>
      <p>
        “About five years ago she just left. Just a note saying she’d decided to start a new life.
        Left behind her wedding ring but took most of her personal possessions. I tried tracking
        her down; she left a message for me at the office saying she’d met someone new and not
        to go find her. I didn’t approve, but who am I to judge?”
      </p>
      <p>“How did her husband take it?”</p>
      <p>“As you might imagine. So he’s been raising his
        daughter on his own. He’s a good single dad, but the kind who thinks he deserves
        a medal for doing what a million woman do every year.” She turns over
        another <List expansions={["photo", "photo of Sarah, the girl with the doll"]} tag="c1_photos2"/>.
      </p>
    </section>,
    <section>
      <p>“This picture's a few years old, she's eleven now.”
        Whitby considers her for a moment. “Everyone loves that little girl. Not just because
        her mom skipped out on her; she’s just a sweet kid.”
        She flips <List expansions={["another picture", "a picture of two adult twins"]} tag="c1_photos3" /> over.</p>
    </section>,
    <section>
      <p>“Michael and Michelle Herschel,” she says, and you can't help but snort. “Yeah, no points for
        originality. These two are Alan’s niece and nephew—their mom was Christina, Alan and Jared’s older
        sister, but she passed away some years back. The twins still live in her house over in Sea Isle.
      Don’t know them personally.”</p>
      <p>“Last one,” she says, and hands you <List expansions={["another picture of Healey", "another picture of Healey, with his arm around a woman his age"]} tag="c1_photos4"/>.</p>
    </section>,
    <section>
      <p>“His wife,” you say.</p>
      <p>“Margaret, or Maggie. Lovely woman, but tough as nails too. From what I hear she'd be the
        first one to bail you out of trouble and also the first to toss you  on the
        street if you screwed up again. If more people were like her I'd be out of a job.”
      </p>
      <p>“It wasn’t her,” you say, surprising even yourself. “I saw the way she looked at him, the night
      that he died. She was worried about him. She loved him.”</p>
      <p>
        “I think so too, but you never know,” she says, a little sadly. “Everyone I've shown you here
        was at or near the Healey estate the weekend that he died.
        If we were pursuing this as an active murder investigation they’d all be under
        close watch, but—a locked door, a common medication, an elderly victim?
        It just added up to an unfortunate but ordinary death.”
      </p>
      <p>“Do you still think that?” you ask.</p>
      <p>Her phone rings before she can answer. Whitby listens and nods a few times, then
        covers the receiver. “I need to take this, can you wait outside?”
      </p>
      <p>Banished, you slink out through the bullpen to a nearby waiting area. Six plastic chairs, a few other guys.
        This isn’t general
        intake—that would be swarming with impatient people who were drunk, angry, or, most likely, both.
        This is where they park visitors who are here voluntarily, those coming to speak with
      the detectives.</p>
      <p>Nobody looks
        thrilled to be here, and frankly you doubt you‘d want to have a beer with any of them,
        but at least these people aren’t puking.
        You pretend they don’t exist and sift through a pile of stale magazines on a makeshift coffee table.
      </p>
      <p>
        You’re flipping through a 1982 issue of <em>Readers Digest</em> (incredibly, you think you read this one already)
        when a woman begins arguing with an impassive young officer:
        “But Detective Whitby specifically told me to come in now!” You look up
        and with surprise recognize Healey's niece from her photo.
      </p>
      <p>She’s told to cool her heels and she sits down across from you in one of the few empty chairs.</p>
      <p>Absolutely, positively, you should not engage with this woman. This is police business and she’s
        here, right now, waiting to talk to the police. You should go home. There are only ten weeks in the
        tourist season and that’s 80% of your income for the entire year. This is not your problem.
      </p>
      <p>
        But then you think of that doll gazing back at you.
      </p>
      <p>
        Michelle Herschel, like her twin, is blonde, hair parted flat down the middle
        with long bangs pulled back behind her ears. She’s wearing no jewelry, not even a
        watch, but probably just forgot it—she’s fidgeting in her seat and twice looked at her wrist
        only to find it empty. She’s not nervous or guilty,
        just irritated. She has places to be. And now she’s noticed that
        you’re <Map from={inventory.c3_staring} to={{staring: "staring at her "}}/>

        <List expansions={["staring", ["hands", "shoes", "purse"], "staring at her"]} tag="c3_staring"/>.
        <Map from={inventory.c3_staring} to={{
          hands: " Her hands are well-kept, clean but not manicured.",
          shoes: " Her shoes are clunky, unfashionable. Probably orthotics.",
          purse: " The purse she’s clutching is brown? Tan? Ecru? Sensible for sure."
        }}/>
      </p>
    </section>,
    <section>
      <p>“Could be worse,” you say, with a rueful smile. “Did you see the <em>other</em> waiting room?”</p>
      <p>She doesn’t respond. Who can blame her—you’re a creepy stranger
        chatting her up in a police station. <Map from={inventory.c3_staring} to={{
          hands: `“Here,” you say, and pass her a handiwipe packet you swiped from Whitby’s room.
          “For when you leave. There’s only one bathroom and it’s out of soap.”`,
          shoes: ` You make a show of trying to get comfortable in your seat. “Man, all day on shift and now these
          chairs? I’m ready to confess to anything.”`,
          purse: ` “Say I hate to bother you,” you continue, “but do you have a tissue?” Women always have tissues in their purse.
          “There must be mold in here or something, my allergies are killing me.”
          `
        }}/>
      </p>
      <p>“<Map from={inventory.c3_staring} to={{
        hands: "Thanks",
        shoes: "Yeah, me too",
        purse: "Sorry, no"
      }}/>,” she says slowly. <Map from={inventory.c3_staring} to={{
        hands: "She clutches a brown purse closer to her body and avoids your gaze.",
        shoes: "She clutches a brown purse closer to her body and tucks her shoes further under the seat.",
      purse: "She pulls the purse closer to her body." }}/> You sense something <psychic>shifty, paranoid</psychic>,
        cowering in the purse, like a nervous mouse.
      </p>
      <p>
        Herschel looks around, probably hoping for another woman to
        save her, but nobody else is in the waiting room besides <List expansions={["more unsavory-looking guys like you", ["a biker type", "an old guy you vaguely recognize as a local beach bum"], "a bunch of unsavory guys"]} tag="c3_guys" />.
      </p>
    </section>,
    <section>
      <p> <Map from={inventory.c3_guys} to={{
        "type": <span>Garden-variety Hell’s Angels dude. Rides up and down the Expressway in the summer
          with a pack of his buddies. He’s snarling a little now that he notices
          you’re <List expansions={["looking at him", "looking. Instead of breaking contact, you raise your eyebrows a little at Michelle Herschel in the universal language of sleazy guys"]} tag="c3_biker" />.
        </span>,
        bum: <span>You recognize this old man—your mom used to find him sorting
          through your garbage, not looking for food, usually, just weird trinkets. You have no idea where he lives or camps, or what he does in the
          winter. <Map from={inventory.c3_old_man} to={{
            undefined: "You need to get him into that ",
            purse: ""
          }} />
          <List expansions={["purse.", "You catch his eye and glance at the purse. To your surprise he says, “It’s hiding something, yes.”"]} tag="c3_old_man" />
        </span>

      }} />
      </p>
    </section>,
    <section>
      <p>
        <Map from={inventory.c3_biker} to={{
          him: "Biker guy looks confused, so you nod directly at her, and he finally takes the hint. He slides over one seat next to Ms. Herschel, not bothering to keep his leg from pressing into her personal space."
        }} />
        <Map from={inventory.c3_old_man} to= {{
          "purse.": "Before you can react, the old man gets up, walks over to the woman, and says, apropos of nothing, “You can’t hide it forever.”"
        }} />
      </p>
      <p>
        Herschel clears wants no part of this and decides you’re the best of bad options. She sits
        down at the remaining empty seat next to you. Her purse is between you, and you can sense it
        fearfully pulling away. There’s something inside that doesn’t want to be found.
        <Map from={inventory.c3_old_man} to= {{
          "purse.": " You look around, but the old man is gone."
        }} />
        <Map from={inventory.c3_biker} to= {{
          him: <span>The biker mutters something at the woman. “Back off, buddy,” you warn, and he looks
          aggrieved—weren’t you just on the same side?.</span>
        }} />
      </p>
      <p>
        “Sorry,” Ms. Herschel says, unexpectedly. “I was rude to you.”
      </p>
      <p>
        “No need to apologize.” <em>Also I’m trying to steal your purse.</em>
      </p>
      <p>
        “I’m Michelle.”
      </p>
      <p>
        “Frank,” you reply. “Frank Desiderio.” That was your father’s name. It’s never been yours.
      </p>
      <p>
        “And what do you do, Frank?” She’s not really interested, just being polite, and
        it shows when she grabs the purse and starts shuffling items around, stashing the
        frightened object further inside. Maybe it’s even pushing her to do it, a little
        compulsion she can’t place. You lean over trying to see what it is but
        you don’t want to spook her.
      </p>
      <p>
        “Limo driver,” you answer. That’s true too. You own a couple cars, sublease them to a buddy now.
        You keep thinking
        you’ll sell Mom’s property, pick your own business back up again, but it’s never the right time.
        “It’s good money, there are always rich suckers to shuttle down to the casinos from Philly or New York.”
      </p>
      <p>
        Too late, you remember that <em>she’s</em> rich. Or
        at least her family is. Funny how that‘s not always the same thing.
        “And you?” you ask, hoping to change the subject.
      </p>
      <p>
        “I work with my brother,” she says, and you can tell that the conversation is over. She closes
        the purse, and, agonizingly, sets it on the other side from you. You sense relief from
        whatever has been trying to evade your grasp.
      </p>
      <p>Whitby walks into the waiting area, brushing past you so rudely
        you know it’s a deliberate signal. “Ms. Herschel,” she says, squatting in front
        of the woman and leaning over like a confidente. “I’m so sorry to keep you waiting.”
      </p>
      <p>
        “It’s fine, I’m just in a bit of a hurry—”
      </p>
      <p>
        You interrupt, loudly. “Hey, lady cop, I was here first and I’ve been waiting for over an hour.”
      </p>
      <p>
        Whitby’s face shows no sign of recognition of you. “Sir, if you’ll just let me know what you need
        I can try to find someone—”
      </p>
      <p>
        “What I <em>need</em> is to get some help around here even though I don’t have a pretty face and a <em>purse</em>.”
      </p>
      <p>
        “Sir, I have to ask you to calm down.”
        Whitby puts a protective arm around Michelle Herschel and pulls her to her feet. In doing so she
        knocks the purse over, and—thank God—the contents spill everywhere.
        The <List expansions={["<psychic>fearful object</psychic>", "<psychic>terrified receipt</psychic>",
        "<psychic>hysterical receipt</psychic> is blessedly muffled when you stomp on with your foot, hiding it from view"]} tag="c3_receipt" />
        <Map from={inventory.c3_receipt} to={{
          undefined: " shrieks in terror",
          "object": " shrieks louder, almost deafening you",
        "receipt": "" }}/>.
      </p>
      <p>
        “I’m so sorry,” Whitby says to Herschel, bending over to help clean up.
        <Map from={inventory.c3_receipt} to={{
          "object": " She’s retrieved almost everything now, chattering in a distracting way.",
        "receipt": " She’s re-packing the purse." }}/>
      </p>
    </section>,
    <section>
      <p>Making a show of your own clumsiness, you retrieve <Map from={inventory.c3_staring} to={{
        purse: "one of the tissues you’d wanted",
        hands: "a spilled tissue",
        shoes: "a spilled tissue"
      }} /> off the floor and offer it to Herschel, but she pulls away from you. “I knew you were a creep,”
        she says, and hurries out of the room towards the detective’s office. Whitby glances back
        sympathetically, and you give her a little nod: <em>I got what I wanted</em>.
      </p>
      <p>When no one’s looking, you pick up the receipt with the tissue and carefully stash it in a pocket.</p>
      <p><em>And probably what I deserve.</em></p>
      <NextChapter chapter="4" />
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

export const Chapter3 = connect(
  mapStateToProps
)(_Chapter)
