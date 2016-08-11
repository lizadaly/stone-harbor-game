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
        sugar packets. Her cluttered office is clearly
        shared with way too many other people, but it’s the weekend and just the on-duty
        cops are around, grimly filling out paperwork in the bullpen.
      </p>
      <p>
        She closes the venetian blind over the window that looks out into the common area, though it
        has so many creases and kinks that it barely affords any privacy.
        This is probably the same procedure she uses when interrogating a potential suspect,
        you think, and then with some unease remember that you probably still are one.
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
        “That was four years ago.”
      </p>
      <p>
        Logically, you know this. But it’s different when someone else says it outright.
      </p>
      <p>
        “Sorry, none of my business why,” she says. “There isn’t even always a why. Sometimes people
        just get—stuck.” She picks up a small stack of photographs and begins laying them out,
        snapping them crisply and laying them face down. She’d make a great card dealer.
      </p>
      <p>“Another test?” you sigh.</p>
      <p>“No, dummy. It’s time you met the family.” She turns over the
        first <List expansions={["photo", "photo, of Healey and another man"]} tag="c3_healeyphoto" />.
      </p>
    </section>,
    <section>
      <p>“That’s Alan on the left and his younger brother, Jared, on the right.
        Jared’s wife left him years ago and started a new life, didn’t seem to want anything
        to do with him or their kid. So he’s been raising his
        daughter on his own. He’s a good single dad, but you know, the kind who thinks he deserves
        a medal for doing what a million woman do every year.” She turns over
        another <List expansions={["photo", "photo, of a little girl in a white dress"]} tag="c1_photos2"/>.
      </p>
    </section>,
    <section>
      <p>“That's Ellen, the one with the doll.”</p>
      <p>“Jared's daughter. This picture's a few years old, she's eleven now.”
        Whitby considers her for a moment. “Everyone loves that little girl. Not just because
        of what happened to her either. She‘s a real sweet kid. My god-daughter Sarah is
        her cousin by marriage.” She flips <List expansions={["another picture", "a picture of two adult twins"]} tag="c1_photos3" /> over.</p>
    </section>,
    <section>
      <p>“Michael and Michelle Herschel,” she says, and you can't help but snort. “Yeah, no points for
        originality. Anyway, these two are Alan’s niece and nephew. Alan and Jared had a sister,
        Christina, who passed away some years back. The twins still live in her house over in Sea Isle.
      Don’t know them personally.”</p>
      <p>“Last one,” she says, and hands you <List expansions={["another picture of Healey", "another picture of Healey, with his arm around a woman his age"]} tag="c1_photos4"/>.</p>
    </section>,
    <section>
      <p>“His wife,” you say.</p>
      <p>“Margaret, or Maggie. Lovely woman, but tough as nails too. From what I hear she'd be the
        first one to bail you out of trouble and also the first to throw you out on the
        street if you dare screw up again. If more people were like her I'd be out of a job.”
      </p>
      <p>
        She spreads out the photos across the table. “Everyone I've shown you here was at or near the Healey estate the weekend that he died.
        If we were pursuing this as an active murder investigation they’d all be under
        close watch, but a locked door, a common medication, an elderly victim,
        it just added up to a tragic but ordinary death.”
      </p>
      <p>“Do you still think that?” you ask.</p>
      <p>Her phone rings before she can answer. Whitby listens and nods a few times, then
        covers the receiver. “I need to take this, can you wait outside?”
      </p>
      <p>Banished, you slink out through the bullpen to a nearby waiting area. Six plastic chairs, three other guys.
        This isn’t general
        intake—that would be swarming with impatient people who were drunk, angry, or, most likely, both.
        Instead this seems to be where they park visitors who are here voluntarily, those coming to speak with
      the detectives.</p>
      <p>None of these guys looks
        thrilled to be here, and frankly you doubt you‘d want to have a beer with any of them,
        but at least they aren’t puking.
        You follow the unspoken code of men’s bathroom etiquette and pretend they don’t exist.
        There’s a pile of stale magazines on a makeshift coffee table begging for your attention instead.
      </p>
      <p>
        You’re flipping through a 1982 issue of <em>Readers Digest</em> (incredibly, you think you read this one already)
        when a woman begins arguing with an impassive young offer:
        “But Detective Whitby specifically told me to come in now!” You look up
        and with surprise recognize Healey's niece from her photo.
      </p>
      <p>She’s told to cool her heels and she sits down across from you in one of the two empty chairs.</p>
      <p>Absolutely, positively, you should not engage with this woman. This is police business and she’s
        here, right now, waiting to talk to the police. You should go home. There are only ten weeks in the
        tourist season and that’s 80% of your income for the entire year. This is not your problem.
      </p>
      <p>
        But then you think of that doll gazing back at you, and you have no choice.
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
          purse: " The purse is brown? Tan? Ecru? Sensible for sure."
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
          You wipe your eyes. “There must be mold in here or something, my allergies are killing me.”
          `
        }}/>
      </p>
      <p>“<Map from={inventory.c3_staring} to={{
        hands: "Thanks",
        shoes: "Yeah, me too",
        purse: "Sorry, no"
      }}/>,” she says slowly. Gaining
        someone’s trust is a lot harder when they aren’t paying you.
        She looks around, probably hoping for another woman to
        save her from this encounter, but it’s just more unsavory-looking guys who are starting to
        take notice of the drama.
      </p>
      <p>
        That gives you an idea. You  assess your
        seatmates: <List expansions={["quite a cast of characters", ["a long-haired drifter", "a scrawny, sweaty nervous teen", "an old guy you vaguely recognize as a local beach bum"], "a bunch of weird guys"]} tag="c3_guys" />.
      </p>
    </section>,
    <section>
      <p>
        <Map from={inventory.c3_guys} to={{
          drifter: `The drifter probably hitched here. Hates authority, but likely didn’t do much to get in trouble.
          Looks serene. Not in a hurry.`,
          teen: `The kid’s definitely narcing on his friends. Scared of being seen. The cops are probably
          holding a simple bust over him, threatening him with telling his parents or even a little jail time.`,
          bum: `You know this old man. He’s been old your whole life. Your mom used to find him sorting
          through your garbage, not looking for food, usually, just weird trinkets. He finds stuff on the beach
          too. You have no idea where he lives or camps, or what he does in the winter.`

        }} />
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

export const Chapter3 = connect(
  mapStateToProps
)(_Chapter)
