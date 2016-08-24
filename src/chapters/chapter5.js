const React = require('react')
import { Map, List, NextChapter, ManyMap, AnyMap } from '../components'
import { connect } from 'react-redux'
import { updateInventory } from "../actions"

import { RenderSection } from '.'

const _Chapter = ({currentSection, inventory, chapterId}) => {
  var sections = [
    <section>
      <h2>Chapter Five</h2>
      <h3>In your reading room</h3>
      <p>“Do you seek the wisdom of the ancients? Come forth!”</p>
      <p>
        You didn’t visit a friend (they’ve given up on hearing from you) and you didn’t
        take a day off (can’t afford to), but you did get back to your regular life.
        After a couple of sleepless nights, exhaustion took hold and you’re almost
        on a normal schedule—normal for you, which still involves working
        until midnight and sleeping through successive summer beach days.
        It’s been beautiful, you hear: no land breeze, no greenhead flies, just
        gorgeous sun and a gentle sea breeze to keep the air moving. It’s been
        great for business.
      </p>
      <p>
        This customer is a preteen girl. Usually you send them away unless they come with
        a parent, but you’re in a foul mood and happy to take her money. Teen girls
        only care about boys so you cut to the chase. “I see a name,” you say.
        “It begins with an S—” Her eyes widen immediately. “<List expansions={
        ["Scott?", "Steven?", "Sam?"]} tag="p5_customer_names"/>”
      </p>
      <p>
        “Sam!” she whispers.
      </p>
      <p>
        “There’s a strong connection here, I can feel it. You and Sam are—close, yet, not as close as you’d like.”
        From the other side of the beaded curtain you hear giggling. That’s surprising,
        these girls rarely come in to see you alone.
      </p>
      <p>
        The customer glances back towards the curtain. “I told them to wait outside.
        They can’t know about us,” she says, urgently.
        Her <List expansions={["hands", "hands fidget, "]} tag="c5_hands" />
        <Map from={inventory.c5_hands} to={{
          undefined: " are restless on the table",
            hands: <span> alternately
              grasping <List expansions={["a set of bracelets on her arm", "dozens of colorful plastic bracelets"]} tag="c5_bracelets" />
              &nbsp; and <List expansions={["a handmade necklace", "a simple necklace made of string and a pierced shell"]} tag="c5_necklace" />
            </span>
        }}
        />.
      </p>
    </section>,
    <section>
      <Map from={inventory.c5_bracelets} to={{
        arm: <p>“I sense a strong emotional connection from your bracelets.” She looks down at them in surprise,
        like she’d forgotten they were there. “Yeah, we bought them at the mall together.”</p>
      }} />
      <Map from={inventory.c5_necklace} to={{
        necklace: <p>“Your necklace is calling to me.”
          <Map from={inventory.c5_bracelets} to={{
            arm: <span> You notice her eyelids flutter. “It’s a far more powerful connection than the bracelets.”</span>
          }} />

        &nbsp;She grasps the shell around her neck, and smiles secretively. “Sam made it.”</p>
      }} />
      <p>
        “He cares for you very deeply,” you say, and you’re just registering her sudden and
        profound disappointment when a commotion starts outside. An adult woman
        enters, furious. Somebody’s mother. This is why you don’t normally deal with kids.
      </p>
      <p>
        “Jennifer, get outside right this minute,” the woman says. Behind her, the two girls who
        must be your customer’s friends push in. <List expansions={["One of them",
        "One girl wears a shell necklace, and "]} tag="c5_girlfriend" /> looks especially pale.
      </p>
    </section>,
    <section>
      <p>“Jennifer, Amy, Samantha, meet me in the car.” The girls scuttle out, Jennifer throwing you
      a look like she just learned that Santa Claus isn’t real. You know what’s coming next.</p>
      <p>
        “Give me whatever she paid you,” the mother says, holding out a hand.
      </p>
      <p>
        “I don’t want any trouble,” you say. You doubt your newfound cop friend would help you out
        of this one anyway. Automatically, you hand over five bucks, half of what you charged the kid.
      </p>
      <p>
        The woman rips the money out of your hand and turns to leave. You roll your eyes to yourself
        and say, “Hey.” She turns back, offended that you addressed her. You stand and give her
        the rest of the money, which she looks at in puzzlement. “Give the kid a break, okay?”
        She huffs and leaves.
      </p>
      <p>
        You put your face into your hands and rub your eyes until you see stars. The door bell
        jingles, and you skip the atmospheric preamble: “Come in!” It’s not like this day can get worse.
      </p>
      <p>
        And that‘s when <List expansions={["Jared Healey", "Jared Healey, looking even more haggard,"]} tag="c5_jared" /> walks into your room.
      </p>
    </section>,
    <section>
      <hr/>
      <p>
        Your last vision surely took place recently, but since the death of his brother he’s seemingly
        aged years. He hasn’t bothered to shave, and at some recent point his glasses were
        broken and repaired with duct tape. “How does this work?” he asks.
      </p>
      <p>
        You struggle to speak for a moment, and he interrupts. “You read my palms or something, what?”
      </p>
      <p>
        “I... no. I require a personal object,” you say, by rote, but you’re choked with fear. What if
        he hands you something and you fall into another trance? What if you blurt something incriminating
        out? <em>What if you’re powerless in front of a murderer?</em>
      </p>
      <p>
        “What, like a watch or something? I sold it. Look, you got those Carrot cards or something?”
      </p>
      <p>
        ”Tarot,” you correct automatically. “Yes, that is an excellent idea.” You retrieve a pack of your
        mom’s cards. You keep them around because some customers know what they want, but you
        prefer not to as it’s much easier to read people by what they carry on their person.
      </p>
      <p>
        While you shuffle you recite some woo about the Hermetic Order of the Golden Dawn and the
        Egyptian book of the Dead. Your mom’s deck has a little secret: it contains mostly the
        Major Arcana—the face cards like The Hanged Man and The Lovers—because she found that
        people got bored with readings that consisted entirely of the Two of Cups or the Seven of
        Wands. Hey, it’s for entertainment purposes only, right?
      </p>
      <p>
        The ritual soothes you. “Tarot is not fortune-telling,” you conclude. “The cards
        are a reflection of present energy in a given area or circumstance.” You fix
        Healey with a stern expression. “You control that energy, through the choices that you
        make in life. If you don’t like what the cards tell you today, you can always change your
        behavior for a better outcome. Are you ready?”
      </p>
      <p>
        “Yes.”
      </p>
      <p>
        You lay out a spread of two cards:
      </p>
      <Deck tag="c5_deck"/>

    </section>
  ]
  return <RenderSection currentSection={currentSection} sections={sections} />
}

class _Deck extends React.Component {
  constructor(props) {
    super(props)
    let cardnames = [
      ['death', 'Death'],
      ['fool', 'The Fool'],
      ['justice', 'Justice'],
      ['man', 'The Blond Man'],
      ['money', 'Money'],
      ['traitor', 'The Traitor']
    ]
    let initialCards = cardnames.map(c => Card(...c, this.onSelect.bind(this)))
    let {chosen, cards} = this.drawCards(initialCards)
    this.state = {
      cards: cards,
      hands: [chosen],
      lastPick: []
    }
  }
  componentWillMount() {
    if (!this.props.inventory[this.props.tag]) {
      this.props.onUpdateInventory([], this.props.tag)
    }
  }
  drawCards(cards, numCards=2) {
    let rand = Math.floor(Math.random() * cards.length)
    let chosen = cards.splice(rand, numCards)
    return {chosen, cards}
  }
  onSelect(name) {
    let inv = [...this.props.inventory[this.props.tag]]
    if (inv.indexOf(name) === -1) {
      inv.push(name)
    }
    this.props.onUpdateInventory(inv, this.props.tag)
    // Replace just one card
    let {chosen, cards} = this.drawCards(this.state.cards, 1)
    // Clone the array and drop any empty slots
    let newChosen = this.state.hands[this.state.hands.length - 1].slice().filter(i => i)
    // Replace the card that was chosen (only), preserving the slot
    newChosen.forEach((val, i) => {
      if (val.props.id === name) {
        newChosen[i] = chosen[0]
        return
      }
    })
    this.setState({
      hands: [...this.state.hands, newChosen],
      cards: cards,
      lastPick: [...this.state.lastPick, name]
    })
  }
  render() {

    return <div>
      {
        this.state.hands.map((hand, i) => {
          return <div key={i}>
            <figure>
              {hand}
            </figure>
            <Map from={this.state.lastPick[i]} to={{
              undefined: [<p>You consider which of these cards to choose from.</p>,
              <p>You consider the second set.</p>,
              <p>You consider the last set in the reading.</p>][i],
              death: <span>“<em>Death</em>,” you say, gravely. “Often this merely signifies change, but in your case—”
                You pause. “I sense that there has been an actual death recently. Someone who you were
                once close with?” Healey looks pale.
              </span>,
              fool: <span>“<em>The Fool</em>. The spirits are unclear. Is the fool someone you know? Or you?”</span>,
              justice: <span>”<em>Justice</em> will eventually come for us all. Some sooner than later.”</span>,
              man: <span>”<em>The Blond Man</em>.” You frown.
                <AnyMap from={this.props.inventory[this.props.tag]} to={
                  {
                    undefined: " “The spirits tell me a blond man plays a significant role in your current troubles.”",
                    traitor: "“Is he the traitor?” Or is that you?",
                    fool: "“Is he the fool? Or is that you?”",
                  }
                } /></span>,
              money: <span>“<em>Money</em>. Nearly all religious traditions hold money as an evil, corrupting force.”
              You refuse to consider yourself a hypocrite and continue on. “We would do well to heed them.”</span>,
              traitor: <span>“<em>The Traitor</em>”.
                { [
                  " You fix him with an even stare. “Do you know someone who has betrayed a loved one?”",
                  " You say nothing more, just stare at him until he squirms."
                  ][i === 0 ? 0 : 1]
                }</span>,

            }} />
          </div>
        })
      }
    </div>
  }
}


const Card = (name, alt, handler, selected=false) => (
  <img src={'images/cards/' + name + '.png'}
    className={(selected ? 'selected' : '') + ' card'}
    alt={alt}
    key={name}
    id={name}
    onClick={() => handler(name)}
  />
)

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateInventory: (sel, tag) => {
      dispatch(updateInventory(sel, tag))
    }
  }
}
const Deck = connect(
  (state) => {
    return {
      inventory: state.inventory
    }
  },
  mapDispatchToProps
)(_Deck)

const mapStateToProps = (state, ownProps) => {
  return {
    currentSection: state.bookmarks[ownProps.chapterId],
    inventory: state.inventory
  }
}

export const Chapter5 = connect(
  mapStateToProps
)(_Chapter)
