const React = require('react')
import { MapFromInventory, Examinable, FromInventory, NextChapter } from '../components'
import { connect } from 'react-redux'
import { RenderSection } from '.'

const _Chapter = ({currentSection, inventory, chapterId}) => {
  var sections = [
    <section>
      <h2>Chapter Three</h2>
      <h3>In Whitby's office</h3>
      <p>
        You were certain you’d never get to sleep but there was a whole-body weariness you haven’t felt
        since you were a kid. There were days when it was too damn hot to be in the reading room—
        Mom didn’t get air conditioning until 1975, long after you’d moved out—and you would just spend
        the whole day in the ocean. You weren’t much of a swimmer but just standing in the waves fighting the
        current was a lot of work, and you’d come home, tracking sand into the foyer and up the
        stairs to the apartment over the storefront. Mom’s work day didn’t really even start until
        the evening, and so you’d tend to sleep through most of it until she’d wake you, often well
        after midnight, and make a simple dinner. As a result you tended to miss whatever
        TV was on, which made you even more popular with the kids at school.
      </p>
      <p>
        “Cream?” Whitby asks, interrupting your thoughts.
      </p>
      <p>You shake your head. “Trying to quit. I’ll take a dumptruck full of sugar, though.”
      </p>
      <p>
        She gives up on preparing your coffee for you and just hands you a mug and a fistful of
        sugar packets. You’re seated across from her empty desk in an office that’s clearly
        shared with way too many other people, but it’s the weekend and just the on-duty
        cops are around, grimly filling out paperwork.
      </p>
      <p>
        She closes the cheap venetian blind over the window that looks out into the bullpen.
        This is probaby where you would be taken if you were a suspect, and with a jolt of
        unease, realize that you probably still are.
      </p>
      <p>
        “Why did you move back?” When you look confused, she says, “After your mom died. She owned
        that property, it’s probably worth plenty given its spot on the boardwalk.
        Lots of people sold after the casinos went up.” She sits across from you and folds
        her hands primly.
      </p>
      <p>
        “You ran a background check on me?” Her shrug says <em>that’s what I do</em>. “I moved back in
        when she was in the hospital, ran things for awhile until she got back on her feet.” You pause,
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
        snapping them crisply and laying them face down. She’d make a great casino dealer.
      </p>
      <p>“Another test?” you sigh.</p>
      <p>“No, dummy. It’s time you met the family.” She turns over the
        first <Examinable expansions={["photo", "photo, of Healey and another man"]} tag="c3_healeyphoto" />.
      </p>
    </section>,
    <section>
      <p>She nods. "That's Alan on the left and his younger brother, Jared, on the right.
        Jared's wife has been out of the family for years; he's been raising his
        daughter on his own. A little resentful of his lot in life, but
        responsible." She turns over
        another <Examinable expansions={["photo", "photo, of a little girl in a white dress"]} tag="c1_photos2"/>.
      </p>
    </section>,
    <section>
      <p>"That's Ellen, the one the with doll!”</p>
      <p>”Jared's daughter. This picture's a few years old, she's eleven now."
        Whitby considers her for a moment. "Everyone loves that little girl. My god-daughter Sarah is
        her cousin by marriage." She flips <Examinable expansions={["another picture", "a picture of two adult twins"]} tag="c1_photos3" /> over.</p>
    </section>,
    <section>
      <p>"Michael and Michelle," she says, and you can't help but snort. Whitby reveals just a
        hint of a smile. "I'm a friend of the family,
        but, yeah, no points for originality. Anyway, these two are Alan’s niece and nephew. Alan and Jared had a sister,
        Christina, who passed away some years back. The twins still live in her house over in Sea Isle.
      Don’t know them personally."</p>
      <p>“Last one,” she says, and hands you <Examinable expansions={["another picture of Healey", "another picture of Healey, with his arm around a woman his age"]} tag="c1_photos4"/>.</p>
    </section>,
    <section>
      <p>“His wife,” you say.</p>
      <p>“Margaret, Maggie. Lovely woman, but tough as nails too. From what I hear she'd be the
        first one to bail you out of trouble and also the first to throw you out on the
        street if you dare screw up again. If more people were like her I'd be out of a job.”
      </p>
      <p>
        She spreads out the photos across the table. “Everyone I've shown you here was at or near the Healey estate the weekend that he died.
        If we were pursuing this as an active murder investigation they’d all be under
        close watch, but a locked door, a common medication, an elderly victim,
        it just added up to a tragic but ordinary death.”
      </p>
      <p>"Do you still think that?" you ask.</p>
      <p>She thinks for a long time before answering. “I admit I wouldn't
        have looked twice at this case if it had been assigned to me. This town is crazy
        year round, but especially in the summer—
        there's plenty to do without digging up trouble. When Sarah called me and I reviewed the
        file, I found a few things that made me wonder: Alan was a sharp old man, it would be unlike him to
        make such a mistake. And his pill bottle was found <em>outside</em> his bedroom,
        when he was locked in—”
      </p>
      <p>“Just like I saw.”</p>
      <p>“—and who locks their bedroom door when there's just family around?” She shakes her head.
        “Not enough to act on, but it did make me think. And now here you are, telling me
        things I do know that you couldn’t know, and even some things I didn’t know at all.
      I don't know what that means.”</p>
      <p>You admit you don't either.</p>
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
