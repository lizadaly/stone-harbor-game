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
    <p>
      she's pulled more items
      from her bag of tricks. "I'd like to walk you through the family," she says,
      handing you <Examinable expansions={photos} tag="c1_photos1" />.</p>
    <p>You recognize Healey and say as much. She nods. "That's Alan on the left and his younger brother, Jared, on the right.
      Jared's wife has been out of the family for years; he's been raising his
      daughter on his own. A little resentful of his lot in life, but
      responsible." She turns over
      another <Examinable expansions={["photo", "photo, of a little girl in a white dress"]} tag="c1_photos2"/>.
    </p>
  </section>,
  <section>
    <p>"That's Ellen, Jared's daughter. This picture's a few years old, she's eleven now."
      Whitby considers her for a moment. "Everyone loves that little girl. My god-daughter Sarah is
      her cousin by marriage." She pushes <Examinable expansions={["another picture", "a picture of two adult twins"]} tag="c1_photos3" /> across the table.</p>
  </section>,
  <section>
    <p>"Chris and Christina," she says, and you can't help but snort. Whitby reveals just a
      hint of a smile and you're absurdly relieved. "I'm a friend of the family,
      but, yeah. Anyway, these two are Alan's niece and nephew. Alan and Jared had a sister,
      Michelle, who passed away some years back. The twins still live in her house over in Sea Isle.
    Don't know them personally."</p>
    <p>"Last one," she says, and hands you <Examinable expansions={["another picture of Healey", "another picture of Healey, with his arm around a woman his age"]} tag="c1_photos4"/>.</p>
  </section>,
    <section>
      <h2>Chapter Two</h2>
      <p>"His wife," you guess.</p>
      <p>"You truly must be psychic," she says, and it's a gentler tease than you've heard from anyone in a long
        time. "Margaret, Maggie. Lovely woman, but pragmatic. From what I hear she'd be the
        first one to bail you out of trouble and also the first to throw you out on the
        street if you dare screw up again. If more people were like her I'd be out of a job."
      </p>
      <p>
        She spreads out the photos across the table. "Everyone I've shown you here was at the Healey estate the  weekend that he died.
        If we were pursuing this as an active murder investigation they'd all be under
        close watch, but a locked door, a common medication, an elderly victim,
        it just added up to a tragic but ordinary death."
      </p>
      <p>"Do you still think that?" you ask quietly.</p>
      <p>She signals for the check and thinks for a long time before answering. "I admit I wouldn't
        have looked twice at this case if it had been assigned to me. This town is crazy in the summer,
        there's plenty to do without digging up trouble. When Sarah called me and I reviewed the
        file, I found a few red flags. Alan was a sharp old man, it would be unlike him to
        make such a mistake. And his pill bottle was found <em>outside</em> his bedroom,
        when he was locked in—"
      </p>
      <p>"Just like I saw."</p>
      <p>"—and who locks their bedroom door when there's just family around?" She shakes her head.
        "Not enough to act on, but it did make me think." And like you said, you saw all that.
      I don't know what that means."</p>
      <p>You admit you don't either.</p>
      <p>"Well, we won't find out by sitting here drinking lousy coffee." She collects her things
        and stands up. "The Healey property is no longer
        a crime scene, and Maggie Healey is staying with friends. Let's get those hands on some
      evidence."</p>

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
