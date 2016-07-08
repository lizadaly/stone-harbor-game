const React = require('react')
import { MapFromInventory, Examinable, FromInventory, NextChapter } from '../components'
import { connect } from 'react-redux'
import { RenderSection } from '.'

const _Chapter = ({currentSection, inventory, chapterId}) => {
  var libraryMaps = {
    note: `You recite what the note said, word-for-word. You describe the
    lettering, the handwriting like "Healey had been formally taught but had a slight tremor."`,
    photograph: `"It was a family photo, posed. Four adults and a girl. Two of the adults were
    young. They looked like brother and sister. One of them was Healey."`,
    prescription: `'It was Capoten,' you say immediately. 'To be taken three times daily. 100 mg.
    Made out to Healey.'`
  }
  var photos = [
    "a stack of photos",
    "a stack of photos. You flip over the first, and it's of two old men"
  ]

  var sections = [ 
    <section>
      <hr/>
      <h1>Tentative Title</h1>
      <h2 className="subtitle">An interactive story</h2>
      <h5>by Liza Daly</h5>

      <h2>Chapter One</h2>
      <p>You agreed to continue this elsewhere, so you're at a typical Jersey diner: big booths, bad coffee. It's the
        middle of a work week so there's nobody here but truck drivers and retirees. Detective Whitby's
        coffee is black; yours is mostly sugar and cream and by comparison you feel
        unmanly. You've left it untouched.
      </p>
      <p>"Tell me again about the <FromInventory inventory={inventory.p0_library_things}/>.
        What exactly did you see?"
      </p>
      <p><MapFromInventory from={inventory.p0_library_things} to={libraryMaps}/></p>
      <p>The detective makes no immediate response, just notes down what you wrote. "And describe
      the room again."</p>
      <p>"I already told you—"</p>
      <p>"Again." She's not meeting your eye, not giving any clues about potential right or wrong
      answers. She's good.</p>
      <p>"It was a study or personal library. Probably Healey's. The bedroom was attached.
        Two single beds in the room, bookshelves, a desk with a few things, but I only looked closely at
        the <FromInventory inventory={inventory.p0_library_things} />."</p>
      <p>"What kinds of books on the shelves? What topics?"</p>
      <p>"I don't know."</p>
      <p>Now she looks up. "You said the walls were filled with books. You
        described the <FromInventory inventory={inventory.p0_library_things} /> clearly, but you
      didn't see any of the books?"</p>
      <p>How to explain? It was like staring down the wrong end of a telescope. The desk, that
        glove, those were in sharp focus, but the edges of the room were
        dark and foggy. An obscure memory arises: you were about ten,
        you'd been in the reading room with your mom and two teenagers hoping
        for a good fortune. It was so crowded, overheated, and their giggling and
        the humid summer air swirled all around until you couldn't breathe. You nearly fainted
        that time, and this experience was like that—staring down a darkening
        tunnel and all the world falling away from you. But you only say,
      lamely, "It was hard to see."</p>
      <p>She's writing again, for a long time. You try sipping your coffee, but
      it's gone cold and all that cream is nauseating. </p>
      <p>"What do you sense from this?" she says without looking up. She
        lays <Examinable expansions={["a man's watch", "an ordinary gold watch"]} tag="c1_watch" /> on the table.</p>
    </section>,
    <section>
      <p>You palm it briefly, and then set it back down. "It's a watch. Did you want to
      know if it's a fake? I have no idea."</p>

      <p>No reply, just more scratching in that damn notepad. "And this?" She produces
        a <Examinable expansions={["handkerchief", "handkerchief, covered in dark red stains, which you recoil from when you turn it over"]} tag="c1_handerchief" />.
      </p>
    </section>,
    <section>
      <p>"Jesus Christ is that blood?" Instinctively you're trying to push back from table but you're in a booth, there's nowhere to go.</p>
      <p>"Do you sense anything from it?" she asks blandly, like surprising people with bloody evidence is the most
      ordinary thing in the world. Maybe for psycho cops it is.</p>
      <p>"No! What the hell is wrong with you?"</p>
      <p>She nods, not to you but to some internal thought, and collects the watch and the
        handkerchief. She now looks you directly in the eyes. "The watch was my ex's. The
        handkerchief I bought on the way here and soaked it in ketschup when you were
        in the bathroom."
      </p>
      <p>Your stomach is still churning. "Because you think I'm a fraud."</p>
      <p>"Of course you're a fraud."</p>
      <p>She's not wrong, but it stings. It probably shows on your face, because
        she sighs and says, "Everything you described about that room was right.
        Maybe you knew it because you're a murderer. Maybe you're... something else.
      But you're not a liar, not about this."</p>

      <p>Before you can react to that extraordinary statement, she says, "Let's try this
        now," and tosses you a <Examinable expansions={["small metal object", "<psychic>frustrated cutting device</psychic>", "small metal item that's emanating frustration, and the moment you catch it you're—<br/><br/><br/>"]} tag="c1_device" />.
      </p>
    </section>,
    <div className="in-flashback">
      <figure className="chapter1" />
      <h3>In the library</h3>
      <section>
        <p></p>
      </section>
    </div>,
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
          <NextChapter chapter="2" />
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


  export const Chapter1 = connect(
    mapStateToProps
  )(_Chapter)
