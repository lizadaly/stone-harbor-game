const React = require('react')
import { Map, List, NextChapter, ManyMap, AnyMap } from '../components'
import { connect } from 'react-redux'
import { updateInventory, updateDeck, updateHands, updateChosen, showNextSection } from "../actions"

import { RenderSection } from '.'

const _Chapter = ({currentSection, inventory, chapterId}) => {
  var sections = [
    <section>
      <h2>Capítulo Cinco</h2>
      <h3>En tu sala de lectura</h3>
      <p>―¿Buscas el conocimiento de los sabios? ¡Avante!</p>
      <p>
        No visitaste a un amigo (ya no esperan oír de ti) y no te tomaste el día
        (no puedes permitírtelo), pero sí lograste volver a tu vida cotidiana.
        Cotidiana para ti, lo cual todavía incluye trabajar
        hasta la medianoche y dormir durante varias noches de verano.
        Oíste que está hermoso: la brisa marina, no hay mosquitos ni insectos molestos,
        es perfecto para trabajar.
      </p>
      <p>
        Esta clienta es una preadolescente. Por lo general, sueles rechazarlas a menos que vengan
        con un adulto, pero estás de mal humor y tomar su dinero te hará feliz. A las jovencitas
        solo les interesan los chicos, así que decides ir al grano.
        </p>
        <p>
        ―Veo un nombre ―dices―. Comienza con S... ―instantáneamente ves el reconocimiento―. <List expansions={
        ["¿Scott?", "¿Steven?", "¿Sam?"]} tag="p5_customer_names"/>
      </p>
    </section>,
    <section>
      <p>
        ―¡Sam! ―susurra.
      </p>
      <p>
        ―Siento una fuerte conexión. Sam y tú tienen una amistad... estrecha, pero no tanto como te gustaría.
        </p>
        <p>Se oyen risitas del otro lado de la cortina. No es sorprendente: es raro que vengan
        solas. La clienta voltea a mirar la cortina.
        </p>
      <p>
        ―Les dije que esperaran afuera. No pueden enterarse de lo nuestro ―dice con urgencia.
        Sus <List expansions={["manos", "inquietas manos"]} tag="c5_hands" />
        <Map from={inventory.c5_hands} to={{
          undefined: " se mueven con impaciencia en la mesa",
            manos: <span> alternan entre
              agarrar <List expansions={["unas pulseras en su muñeca", "decenas de pulseras coloridas de plástico"]} tag="c5_bracelets" nextUnit="none" />
              &nbsp; y <List expansions={["un collar hecho a mano", "un collar simple hecho de cuerda y un caracol agujereado"]} tag="c5_necklace" nextUnit="none"/>
            </span>
        }}
        />.
      </p>
    </section>,
    <section>
      <Map from={inventory.c5_bracelets} to={{
        muñeca: <p>―Siento una fuerte conexión emocional de tus pulseras. ―Las mira sorprendida,
        como si hubiese olvidado que estaban allí. <p></p><p>―Sí, las compramos en el centro comercial.</p></p>
      }} />
      <Map from={inventory.c5_necklace} to={{
        collar: <p>―Tu collar me llama.
          <Map from={inventory.c5_bracelets} to={{
            muñeca: <span> Notas que parpadea más rápido. ―Es una conexión mucho más fuerte que la de las pulseras.</span>
          }} />

        &nbsp;Toma el collar y sonríe en secreto. ―Sam lo hizo.</p>
      }} />
      <p>
        ―A él le importas mucho ―dices.
        Comienzas a notar su repentina y profunda decepción cuando oyes una conmoción afuera.
        Una mujer adulta entra furiosa. La madre de alguna. Por esto mismo no sueles tratar con niños.
      </p>
      <p>
        ―Sal inmediatamente, Jennifer ―dice la mujer. Detrás de ella, entran las dos chicas
        que seguro son amigas de tu clienta. <List expansions={["Una de ellas",
        "Una lleva puesto un collar de caracol y "]} tag="c5_girlfriend" /> se ve muy pálida.
      </p>
    </section>,
    <section>

      <p>―Jennifer, Amy, Samantha, nos vemos en el auto. ―Las niñas huyen, Jennifer te mira como si se acabara de enterar que Papá Noel no existe. Sabes que es lo que te espera.</p>
      <p>
        ―Devuélveme lo que te haya pagado ―dice la madre y extiende la mano.
      </p>

      <p>
        ―No quiero problemas ―respondes. Dudas mucho de que tu policía amiga te ayude a salir de esta.
        Automáticamente, le devuelves cinco dólares, la mitad de lo que le cobraste a la niña.
      </p>

      <p>
        Te arranca el dinero de las manos y se voltea para marcharse. Pones los ojos en blanco
        y le dices:</p> <p>―Oye. ―Se voltea desconfiada. Le entregas el resto del dinero, que mira extrañada―. Dale un respiro, ¿sí? ―resopla y se marcha.
      </p>
      <p>
        Te refriegas los ojos hasta ver estrellas. Suena la campanilla de la puerta y decides saltearte las
        introducciones: "¡Entra!" No es como si el día pudiera empeorar.
        </p>
      <p>
        Y es entonces cuando <List expansions={["Jared Healey", "Jared Healey, que se ve peor de lo que tú te sientes,"]} tag="c5_jared" /> entra a la sala.
      </p>
    </section>,
    <section>
      <hr/>
      <p>
        Parece como si hubiese envejecido unos cuantos años desde lo que sucedió en la visión,
        que no pudo haber sido hace más de un mes.
        Ni se molestó en afeitarse, y en algún momento reciente se le rompieron los anteojos y los reparó con cinta adhesiva.
        </p><p>―¿Cómo funciona esto? ―pregunta. Te cuesta hablar por unos segundos y él te interrumpe―. ¿Cómo es? ¿Me lees las palmas o algo así?
      </p>
      <p>
        ―No, yo... requiero un objeto personal ―dices de memoria, pero te ahoga el miedo.
        ¿Y si te da algo que te haga volver a caer en un trance? ¿Y si se te escapa
        algo incriminante? <em>¿Y si te quedas indefenso ante un asesino?</em>
      </p>
      <p>
        ―¿Qué? ¿Algo como un reloj? Los vendí todos. Ah, pero tengo esto... ―Se quita algo de la mano
        (¿un anillo?), lo apoya en la mesa, pero lo cubre para que no se vea. Inmediatamente percibes
        olas de culpa que inundan la mesa y se dirigen hacia ti.
      </p>
      <p>
        No puedes hacer esto ahora, no frente a él.
        </p><p>―Cartas de tarot ―dices con brusquedad―. Siento que su sabiduría te podría beneficiar.
        </p><p>Tomas el mazo de cartas de tu mamá.
        Las mantienes cerca porque algunos clientes saben lo que quieren, pero siempre te resultó más fácil leer a las personas
        a tráves de sus posesiones. En este caso, demasiado fácil.
      </p>
      <p>
        Mientras mezclas, recitas cosas esotéricas sobre la Orden Hermética de la Aurora Dorada y
        el Libro egipcio de los muertos. El mazo de tu mamá está lleno de cartas elaboradas;
        las personas suelen aburrirse con lecturas que consisten únicamente del Dos de Copas o el
        Siete de Bastos. Oye, es solo para entretenimiento, ¿no?
      </p>
      <p>
        El ritual te tranquiliza.
        </p><p>―El tarot no es clarividencia ―concluyes―. Las cartas reflejan la energía presente en cierta zona o circunstancia. ―Otra vez te sientes en control,
        te centras en Healey y lo miras serio―. Diriges esa energía mediante las decisiones que tomas en la vida.
        Si no te gusta lo que te dicen las cartas hoy, siempre puedes cambiar tu comportamiento para mejorar el resultado. ¿Estás listo?
      </p>
      <p>
        ―Sí.
      </p>
      <p>
        Despliegas dos cartas:
      </p>
      <Deck tag="c5_deck"/>
    </section>,
    <section>
      <hr/>
      <p>
      Ordenas el mazo, lo pones a un lado y observas al hombre que tienes delante.
      Es un cobarde y es peligroso,
      pero ahora sabes que no es un asesino. Es demasiado débil.
      </p>
      <p>
        ―Si deseas cambiar tu destino, debes apaciguar al espíritu del muerto ―dices de forma amenazante.
        Por lo general, acostumbras a bajar tu estruendosa voz, pero ahora decides darle rienda suelta. El lugar es
        tan pequeño que tu voz lo devora, exprime lo que aparenta ser su conciencia.
      </p>
      <p>―¿Qué debo hacer? ―llora.</p>
      <p>―Debes purgarte de tus mentiras.</p>
      <p>
        ―¡No sé a qué te refieres!
      </p>
      <p>
        Tienes una sola oportunidad para obtener la información que tú y Whitby necesitan.
        </p><p>―Extiende la <List expansions={["mano", "mano y los espíritus me revelarán lo que debes hacer"]} tag="c5_hand" /> ―dices.
      </p>
    </section>,
    <section>
      <p>Si tu pedido le pareció extraño, no lo demuestra, solo pone las manos firmemente en la mesa.
      Desea tanto tu aprobación que hasta se pondría de cabeza si eso lo librara de toda culpa.
      </p>
      <p>
        Te estremeces un poco cuando tomas sus palmas, ¿y si esto provoca una visión?, pero solo sientes asco al
        tocar el cuerpo húmedo y pegajoso de otro ser humano.
        </p><p>―Veo números, filas y filas de números. Hay mucho dolor y sufrimiento en ellos.
        ―Intenta separarse, pero lo sujetas más fuerte y continúas hablando sin importar su objeción―. ¿Quién es el número ocho?
      </p>
      <p>
        Por fin logra librarse y notas como tiembla de pies a cabeza. </p>
        <p>
        ―Mi esposa me dijo que eras... pero no creí... ¿Qué eres?
      </p>
      <p>
        <em>―¿Quién es el número ocho?</em>
      </p>
      <p>
        ―Troiano ―susurra. A duras penas oyes el nombre.
        Healey se levanta, tira la silla en el proceso y escapa a través de la cortina.
      </p>
      <p>
        Olvidó <psychic>la alianza de oro llena de culpa</psychic> en la mesa.
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
      death: "Una carta de Tarot titulada Mortalité que muestra a un sombrio esqueleto con una guadaña en la mano",
      fool: "Una carta de Tarot titulada Folie que muestra a un hombre andrajoso",
      justice: "Una carta de Tarot titulada La Justice que representa a una mujer que fue coronada",
      man: "Una carta de Tarot titulada Garçon Blond que muestra a un hombre sosteniendo una copa",
      money: "Una carta de Tarot titulada Argent que muestra un conjunto de monedas y a un hombre sosteniendo una guadaña",
      traitor: "Una carta de Tarot titulada Traitre que representa a un hombre que fue asaltado sosteniendo una linterna"
    }
  }
  componentWillMount() {
    /* Don't do anything if we're remounting */
    if (this.props.deck.length === 0) {
      // Shuffle the deck first
      let shuffled = this.shuffle(Object.keys(this.cardvalues))
      let {drawn, cards} = this.drawCards(shuffled)
      this.props.updateDeck(cards)
      this.props.updateHands(drawn)
    }
  }
  shuffle(arr) {
    var m = arr.length;
    while (m) {
        let i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  }
  drawCards(cards, numCards=2) {
    let drawn = cards.splice(0, numCards)
    return {drawn, cards}
  }
  onSelect(name) {
    // Replace just one card
    var {drawn, cards} = this.drawCards(this.props.deck, 1)
    // If we have 3 cards left, we drew 3 cards and can't draw more
    if (cards.length <= 1) {
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
    return <div className="deck">
      {
        this.props.hands.map((hand, i) => {
          let func = i === this.props.hands.length - 1 && this.props.chosen.length < 3 ? this.onSelect.bind(this) : null,
            cards = hand.map((c) => <Card name={c} key={c + i} alt={this.cardvalues[c]} handler={func} />)
              return <div key={'deck-' + i}>
                <figure>
                  {cards}
                </figure>
                <Map from={this.props.chosen[i]} to={{
                  undefined: [<p>Consideras cuál carta elegir.</p>,
                  <p>Observas el segundo par.</p>,
                  <p>Observas el último par de la lectura.</p>][i],
                  death: <p>―<em>La Muerte</em> ―dices serio―. La mayoría de las veces esto solo significa cambios, pero en tu caso...
                    ―Haces una pausa―. Presiento que hubo una muerte física hace poco y que fue injusta.
                    ¿Alguien cercano a ti? ―Healey se limpia el rostro―. Su espíritu te considera responsable por lo que pasó.
                    <AnyMap from={this.props.chosen} indexStart={i} to={
                      {
                        traitor: ` Porque eres el Traidor.
                        `,
                        fool: ` Porque eres el Bufón.
                        `,
                        money: ` Todo por dinero.`,
                        man: ` Tú y el hombre rubio.`
                      }
                    } />”
                  </p>,
                  fool: <p>―<em>El Bufón</em>. Los espíritus no son claros. ¿El bufón es alguien que conoces? ¿O eres tú?</p>,
                  justice: <p>―<em>La Justicia</em> al final nos alcanzará a todos. A unos más rápido que a otros.
                    ―Como no contesta, prosigues―. ¿Temes que llegue a ti? Los espíritus piensan que sí deberías.
                    Debes temerle y mucho. ―Por fin has captado su atención.
                    <AnyMap from={this.props.chosen} indexStart={i} to={
                      {
                        traitor: ` ―El Traidor será castigado por su deslealtad.
                        `,
                        fool: ` ―Definitivamente eres el Bufón si te dejas castigar tan fácil
                        en vez de aceptar quién eres realmente.
                        `,
                    death: ` ―¿No crees que no existe mejor justicia que vengar una Muerte injusta?`,
                    man: ` ―Esperas que el Hombre Rubio sea el único que sea castigado.
                    Pero, si no actúas, si continúas teniendo miedo y escondiéndote, solo tú serás castigado.`
                  }
                } />
              </p>,
              man: <p>―<em>El Hombre Rubio.</em> ―Frunces el ceño
                <AnyMap from={this.props.chosen} indexStart={i} to={
                  {
                    undefined: `―. Los espíritus dicen que un hombre rubio juega un papel importante en tus problemas actuales.
                     ―Haces una pausa―. Han confabulado, cometieron un gran mal juntos.`,
                    traitor: `―¿Es él el Traidor que vimos antes? ¿O eres tú? ―Healey se estremece
                    ―. Los espíritus me dicen que son ambos. Los dos cometieron un gran mal juntos.
                    Para liberarte de esta carga debes actuar con penitencia.
                      `,
                      fool: `―¿Es él el Bufón de esta lectura? ―Esquiva tu mirada―. No, tú eres el Bufón.
                      Te mezclaste con las personas equivocadas y te desviaste del camino. Y alguien salió herido.
                      Todavía no es demasiado tarde para arrepentirte de tu participación.
                      `,
                    }
                  } /></p>,
                money: <p>―<em>Dinero</em>. Casi todas las tradiciones religiosas perciben al dinero como una fuerza maligna y corrupta.
                Nos convendría hacerles caso. ―Cierras los ojos―. Siento que el dinero es la raíz de tus problemas.
                Te está envenenando a ti y a aquellos que te rodean. Debes purificarte de su influencia.
                </p>,
                traitor: <p>―<em>El Traidor</em>
                  { [
                    ` Lo miras con tranquilidad. ―¿Conoces a alguien que haya traicionado a un ser querido? ―
                      cuando comienza a tartamudear, dices― las cartas saben lo que te aterra admitir.
                    `,
                    ` ―Solo lo miras hasta que se averguenza―. Las cartas saben lo que temes admitir de ti.
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
class Card extends React.Component {

  constructor(props) {
    super(props)
    this.state = {selected: false}
  }
  componentDidUpdate() {
    if (this.state.selected && this.props.handler) {
      setTimeout(() => {
        this.setState({selected: false},
          () => this.props.handler(this.props.name))
      }, 400)
    }
  }
  render() {
    let selectable = this.props.handler ? 'selectable' : ''
    let selected = this.state.selected ? ' selected' : ''
    return <input type="image" src={'images/cards/' + this.props.name + '.png'}
      className={selectable + selected + ' card'}
      tabIndex="0"
      alt={this.props.alt}
      onClick={() => {
        if (this.props.handler) {
          this.setState({
            selected: true
          })
        }
      }
      }
           />
   }
}


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
