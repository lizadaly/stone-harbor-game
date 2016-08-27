const React = require('react')
import { Map, List, NextChapter, ManyMap, AnyMap } from '../components'
import { connect } from 'react-redux'
import { updateInventory, updateDeck, updateHands, updateChosen, showNextSection } from "../actions"

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
        and say, “Hey.” She turns back, suspicious. You give her
        the rest of the money, which she looks at in puzzlement. “Give the kid a break, okay?”
        She huffs and leaves.
      </p>
      <p>
        You put your face into your hands and rub your eyes until you see stars. The door bell
        jingles, and you skip the atmospheric preamble: “Come in!” It’s not like this day can get worse.
      </p>
      <p>
        And that‘s when <List expansions={["Jared Healey", "Jared Healey, looking even more haggard than you feel,"]} tag="c5_jared" /> walks into your room.
      </p>
    </section>,
    <section>
      <hr/>
      <p>
        He’s seemed to age years since the events of the vision, surely no more than a month ago.
        He hasn’t bothered to shave, and at some recent point his glasses were
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
        mom’s cards. You keep them around because some customers know what they want, but
        you’ve always found it easier to read people through their possessions.
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
    </section>,
    <section>
      <p>Healey is sickly white, more from fear than from guilt. </p>
      <p>You could’ve stopped at two cards—that would’ve been the kind thing to do—but you’re inexplicably
        angry at Healey, a man you’ve never truly met before. He’s a coward and he’s dangerous,
        but he’s not, you know now, a murderer. He’s too weak.
      </p>
      <p>
        “If you have any hope of changing your fate, you have to appease the spirit of the dead,”
        you threaten. Usually it’s an effort to tone down your naturally booming voice, but you let
        the full force of it out. In this small space it swallows him up, squeezes what passes
        for a conscience in the small man.
      </p>
      <p>“What must I do?” he cries.</p>
      <p>“You must give me some evidence of your deceit.” You should probably have said “give it to
        the spirits” or similar nonsense, but strike while the iron is hot. In an hour the man
        is going to wonder what came over him and you’re going to need to be scarce.
      </p>
      <p>
        “I don’t know what you mean!”
      </p>
      <p>
        There’s no time to waste. “Put out your <List expansions={["hand", "hand and cleanse yourself of your guilt"]} tag="c5_hand" />,” you say.
      </p>
    </section>,
    <section>
      <p>If he finds your request odd coming from another man, he gives no sign, just plants his hands
        firmly on the table. He’s so eager for your approval, he’d probably stand on his head if you’d
        absolve him of his guilt.
      </p>
      <p>
        You flinch a little when grabbing hold—what if that triggers a vision? But it’s just the
        slight revulsion of another human’s clammy, sweaty body. You endure it; you’ve got one shot at
        this: “I see numbers, so many numbers. A lot of pain and heartbreak in those numbers.” He
        tries to pull back, but you grip harder, talk over his objection. “Who is number eight?”
      </p>
      <p>
        He finally pulls free, and now he’s full-body shaking now. “Who—what are you?”
      </p>
      <p>
        <em>“Who is number eight?”</em>
      </p>
      <p>
        “Troiano,” he whispers. You could barely make out the name. Before you can ask for
        anything more, Healey has fled.
      </p>
      <NextChapter chapter="6" />
    </section>
  ]
  return <RenderSection currentSection={currentSection} sections={sections} />
}

class _Deck extends React.Component {
  constructor(props) {
    super(props)
    this.cardvalues = {
      death: "Death",
      fool: "The Fool",
      justice: "Justice",
      man: "The Blonde Man",
      money: "Money",
      traitor: "The Traitor,"
    }
  }
  componentWillMount() {
    /* Don't do anything if we're remounting */
    if (this.props.deck.length === 0) {
      let {drawn, cards} = this.drawCards(Object.keys(this.cardvalues))
      this.props.updateDeck(cards)
      this.props.updateHands(drawn)
    }
  }
  drawCards(cards, numCards=2) {
    let rand = Math.floor(Math.random() * cards.length)
    let drawn = cards.splice(rand, numCards)
    return {drawn, cards}
  }
  onSelect(name) {
    // Replace just one card
    var {drawn, cards} = this.drawCards(this.props.deck, 1)
    // If we have 3 cards left, we drew 3 cards and can't draw more
    if (cards.length === 1) {
      this.props.showNextSection()
    }
    else {
      // Clone the array and drop any empty slots
      let newChosen = this.props.hands[this.props.hands.length - 1].slice().filter(i => i)
      // Replace the card that was chosen (only), preserving the slot
      newChosen.forEach((val, i) => {
        if (val === name) {
          newChosen[i] = drawn[0]
          return
        }
      })
      this.props.updateHands(newChosen)
    }
    this.props.updateDeck(cards)
    this.props.updateChosen(name)
  }
  render() {
    return <div>
      {
        this.props.hands.map((hand, i) => {
          let cards = hand.map((c) => Card(c, this.cardvalues[c], this.onSelect.bind(this)))
            return <div key={i} id={i}>
              <figure>
                {cards}
              </figure>
              <Map from={this.props.chosen[i]} to={{
                undefined: [<p>You consider which of these cards to choose from.</p>,
                <p>You consider the second set.</p>,
                <p>You consider the last set in the reading.</p>][i],
                death: <p>“<em>Death</em>,” you say, gravely. “Often this merely signifies change, but in your case—”
                  You pause. “I sense that there has been a physical death recently, and an undeserved one.
                  Someone who you were once close with?” Healey wipes his face. “Their spirit holds you
                  accountable for what happened.
                  <AnyMap from={this.props.chosen} to={
                    {
                      traitor: ` Because you are The Traitor.
                      `,
                      fool: ` Because you are the Fool.
                      `,
                      money: ` All for the want of money.`,
                      man: ` You and the Blond Man both.`
                    }
                  } />”
                </p>,
                fool: <p>“<em>The Fool</em>. The spirits are unclear. Is the fool someone you know? Or you?”</p>,
                justice: <p>”<em>Justice</em> will eventually come for us all. Some sooner than later.”
                  When he says nothing, you continue. “Do you fear your own call to justice? The spirits
                  believe you should be. You should be very afraid.” Now you’ve got his attention.
                  <AnyMap from={this.props.chosen} to={
                    {
                      traitor: ` “The Traitor will be punished for his disloyalty.”
                      `,
                      fool: ` “You are truly the Fool if you go willingly to your punishment without an attempt
                      to sae yourself.”
                      `,
                      death: ` “For what greater Justice can there be than in avenging a wrongful Death?”`,
                      man: ` “You hope that the Blond Man is the only one who will receive punishment. But
                      if you do nothing, if you continue to cower and hide, it is you alone who
                      will be punished.”`
                    }
                  } />
                </p>,
                man: <p>”<em>The Blond Man</em>.” You frown.
                  <AnyMap from={this.props.chosen} to={
                    {
                      undefined: `“The spirits tell me a blond man plays a significant role in your
                      current troubles.” You pause. “You have colluded, together. With this man you
                      have perpetrated a great wrong.”`,
                      traitor: `“Is he the Traitor we saw earlier? Or is that you?” He flinches.
                      “The spirits tell me it is both of you. You have committed a great wrong together.
                      You must release yourself of this burden through penitent behavior.”
                      `,
                      fool: `“Is he the Fool in our reading?” He looks away. “No, you are the Fool. You
                      have become mixed up with the wrong people, strayed from the path. And someone
                      has been hurt. It is no too late for you to repent of your involvement.”
                      `,
                    }
                  } /></p>,
                money: <p>“<em>Money</em>. Nearly all religious traditions hold money as an evil, corrupting force.
                  We would do well to heed them.” You close your eyes. “I sense money is at the root of
                  your troubles. It’s poisoning you and those close to you. You must cleanse yourself of its
                  influence.”
                </p>,
                traitor: <p>“<em>The Traitor</em>”.
                  { [
                    ` You fix him with an even stare. “Do you know someone who has betrayed a loved one?”
                    When he only stammers, you say, “The cards know what you may be afraid to admit.”
                    `,
                    ` You just stare at him until he squirms. “The cards know what you may be afraid to admit.”
                    `
                    ][i === 0 ? 0 : 1]
                  }</p>,

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


const Deck = connect(
  (state) => {
    return {
      deck: state.deck,
      hands: state.hands,
      chosen: state.chosen
    }
  },
  { updateDeck, updateHands, updateChosen, showNextSection }
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
