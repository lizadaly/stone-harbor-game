const React = require('react')
import { Map, List, NextChapter, ManyMap, AnyMap } from '../components'
import { connect } from 'react-redux'
import { updateInventory, updateDeck, updateHands, updateChosen, showNextSection } from "../actions"

import { RenderSection } from '.'

const _Chapter = ({currentSection, inventory, chapterId}) => {
  var sections = [
    <section>
      <h2>Capítulo V</h2>
      <h3>En tu sala de lectura</h3>
      <p>"¿Buscas el conocimiento de los sabios? ¡Ven!"</p>
      <p>
        No visitaste a un amigo (porque ya no quieren escuchar de ti) y no te tomaste el día
        (porque no puedes permitirtelo), pero si lograste volver a tu vida cotidiana.
        Cotidiana para ti, lo cual todavía incluye trabajar hasta la medianoche y dormir
        durante varias noches de playa/verano.
        Es hermoso, oyes el mar y no hay mosquitos ni insectos molestos, es perfecto para trabajar.
      </p>
      <p>
        La clienta es una preadolecente. Por lo general, sueles rechazarlas a menos que vengan
        con un padre, pero estas de mal humor y tomar su dinero te hara feliz. A las jovencitas
        solo les interesan los chicos, así que decides ir al grano. "veo un nombre", dices. "Comienza con S—"
        Instantaneamente ves el reconocimiento.  “<List expansions={
        ["Scott?", "Steven?", "Sam?"]} tag="p5_customer_names"/>”
      </p>
    </section>,
    <section>
      <p>
        “¡Sam!” sussurra ella.
      </p>
      <p>
        "Siento una fuerte conexión. Sam y tu son cercanos, aun así, no tanto como te gustaría."
        Se oyen risitas del otro lado de la cortina. Lo cual no es sorprendente: es raro que vengan
        solas.
        </p>
      <p>
        La clienta voltea a mirar las cortinas. "Les dije que esperaran afuera. No pueden enterarse
        de nosotros," dijo con urgencia. Sus  <List expansions={["manos", "inquietas manos,"]} tag="c5_hands" />
        <Map from={inventory.c5_hands} to={{
          undefined: " se mueven con impaciencia en la mesa",
            manos: <span> de una en una
              ora <List expansions={["no conjunto de pulseiras que tem no braço", "em dezenas de pulseiras de plástico coloridas"]} tag="c5_bracelets" nextUnit="none" />
              &nbsp; ora <List expansions={["num colar feito à mão", "num colar simples feito de fio e uma concha furada"]} tag="c5_necklace" nextUnit="none"/>
            </span>
        }}
        />.
      </p>
    </section>,
    <section>
      <Map from={inventory.c5_bracelets} to={{
        braço: <p>"Sinto uma ligação emocional forte a vir das tuas pulseiras." Ela olha para baixo surpresa, como se se tivesse esquecido de que estavam lá. “Certo, comprámos as pulseiras juntos no centro comercial.”</p>
      }} />
      <Map from={inventory.c5_necklace} to={{
        mão: <p>“O teu colar está a chamar-me.”
          <Map from={inventory.c5_bracelets} to={{
            braço: <span> Reparas que as pálpebras dela tremulam. "É uma ligação muito mais poderosa do que a das pulseiras."</span>
          }} />

        &nbsp;Ela agarra na concha em volta do pescoço e esconde um sorriso. "Foi o Sam que o fez."</p>
      }} />
      <p>
        "Ele nutre sentimentos profundos por ti," dizes, e começas a registar o seu súbito e profundo desapontamento quando começa um alvoroço lá fora. Uma mulher adulta entra furiosa. A mãe de alguém. É por isto que normalmente não lidas com crianças.
      </p>
      <p>
        "Jennifer, vai já lá para fora," diz a mulher. Atrás dela, as duas raparigas que devem ser as amigas da tua cliente forçam a entrada. <List expansions={["Uma delas",
        "Uma das raparigas usa um colar de conchas, e "]} tag="c5_girlfriend" /> está bastante pálida.
      </p>
    </section>,
    <section>

      <p>“Jennifer, Amy, Samantha, já falamos no carro.” As raparigas retiram-se apressadamente, com a Jennifer a lançar-te um olhar de quem acabou de descobrir que o Pai Natal não existe. Já sabes o que aí vem.</p>

      <p>
        “Passe para cá o que ela pagou,” diz a mãe de mão estendida.
      </p>

      <p>
        “Não quero sarilhos,” dizes. Duvidas que a tua amiga polícia te ajudasse com esta. Automaticamente, devolves cinco dólares, metade do que cobraste à rapariga.
      </p>

      <p>
        A mulher arranca o dinheiro da tua mão e vira-se para sair. Reviras os olhos e dizes, "Ouça." Ela vira-se para ti desconfiada. Dás-lhe o resto do dinheiro, para o qual ela fica a olhar atrapalhada. "Tenha calma com a miúda, ok?"
        Ela bufa de irritação e sai.
      </p>
      <p>
        Pões a cara nas mãos e esfregas os olhos até começares a ver estrelas. A campainha toca e tu saltas o preâmbulo do costume: "Entre!" Não é que o dia possa piorar.
        </p>
      <p>
        É então que <List expansions={["Jared Healey", "Jared Healey, com um aspeto ainda mais cansado do que tu te sentes,"]} tag="c5_jared" /> entra na sala.
      </p>
    </section>,
    <section>
      <hr/>
      <p>
        Parece ter envelhecido vários anos desde os acontecimentos da visão, que não foram há mais de um mês.
        Não se tem dado ao trabalho de se barbear e nalgum momento recente os óculos partiram-se e foram arranjados com fita-cola. "Como é que isto funciona?" pergunta ele.
        </p>
      <p>

        Não consegues falar de imediato, e ele interrompe. "Lê-me as mãos ou como é que é?"
      </p>
      <p>
        "Eu... não. Eu preciso de um objeto pessoal," dizes tu de cor, mas estás sufocado com o medo. E se ele te passa alguma coisa e entras outra vez em transe? E se dizes, sem querer, qualquer coisa incriminatória? <em>E se ficares impotente diante de um assassino?</em>
      </p>
      <p>
        "Como o quê, um relógio ou uma coisa assim? Já os vendi. Bem, tenho isto —" Ele tira algo da mão (um anel?) e coloca-o na mesa, mas cobre-o com as palmas. Começas logo a sentir vagas de culpa a formarem-se na mesa, a encresparem-se na tua direção.
      </p>
      <p>
        Não podes fazer isto agora, não em frente dele.
        "Cartas de tarô," dizes bruscamente. "Sinto que beneficiará muito da sabedoria delas." Vais buscar um baralho de cartas da tua mãe. Guarda-las por perto porque alguns clientes sabem o que querem, mas, para ti, sempre foi mais fácil ler as pessoas através dos seus pertences. Neste caso, demasiado fácil.
      </p>
      <p>
        Enquanto baralhas, recitas umas tretas sobre a Ordem Hermética da Madrugada Dourada e sobre o Livro dos Mortos dos egípcios. O baralho da tua mãe está a abarrotar de cartas bonitas; as pessoas aborrecem-se com leituras que consistem inteiramente de Dois de Copas e de Sete de Paus. Ei, é apenas para fins de entretenimento, certo?
      </p>
      <p>
        O ritual acalma-te. "O tarô não mostra o futuro," concluis. "As cartas
        são um reflexo da energia presente numa dada área ou circunstância." Sentes que estás novamente no controlo
        e fitas Healey com uma expressão severa. "Você dirige essa energia através das escolhas que faz na vida. Se não gostar do que as cartas lhe mostrarem hoje, poderá sempre mudar o seu comportamento para um melhor resultado. Está preparado?"
      </p>
      <p>
        “Sim.”
      </p>
      <p>
        Colocas duas cartas na mesa:
      </p>
      <Deck tag="c5_deck"/>
    </section>,
    <section>
      <hr/>
      <p>
      Arrumas o baralho e põe-lo de lado, e observas com atenção o homem diante de ti.
      É um cobarde e é perigoso,
      mas não é, sabes agora, um assassino. É demasiado fraco.
      </p>
      <p>
        "Se tem alguma esperança de mudar o seu destino, tem de apaziguar o espírito dos mortos," ameaça-lo. Normalmente, costumas baixar a tua voz naturalmente ribombante, mas agora solta-la em todo o seu poder. Neste pequeno espaço, ela engole-o e aperta o que se confunde com a sua consciência.
      </p>
      <p>“Que tenho eu de fazer?” grita ele.</p>
      <p>“Tem de se expurgar da mentira que está em si.”</p>
      <p>
        “Eu não compreendo o que está a dizer!”
      </p>
      <p>
        É a tua única chance de conseguir a informação de que tu e Whitby precisam.
        “Estenda a sua <List expansions={["mão", "mão e os espíritos revelar-me-ão o que terá de fazer"]} tag="c5_hand" />,” dizes tu.
      </p>
    </section>,
    <section>
      <p>Se ele acha o pedido estranho, não dá mostras disso, e põe logo as mãos com firmeza em cima da mesa. Está tão ansioso pela tua aprovação que até era capaz de fazer o pino se tu o absolvesses da sua culpa.
      </p>
      <p>
        Estremeces um nadinha quando lhe agarras as palmas das mãos — e se isto provocar uma visão? — mas há apenas a
        repulsa de tocar num outro corpo pegajoso e suado. "Vejo números, filas e filas de números. Muita dor e mágoa nesses números." Ele tenta afastar-se, mas tu apertas ainda mais as mãos e falas por cima do seu protesto. "Quem é o número oito?"
      </p>
      <p>
        Ele acaba por libertar-se, mas agora todo o seu corpo treme. "A minha mulher, ela disse-me que você era — mas eu não acreditei — o que é que você é?"
      </p>
      <p>
        <em>“Quem é o número oito?”</em>
      </p>
      <p>
        “Troiano,” sussurra ele. Quase que não conseguiste discernir o nome.
        Healey levanta-se, deitando a cadeira abaixo, e sai disparado pela cortina.
      </p>
      <p>
        A <psychic>aliança de ouro carregada de culpa</psychic> fica esquecida em cima da mesa.
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
      death: "Uma carta de tarô com o nome Mortalité, que representa um esqueleto lúgubre segurando numa gadanha",
      fool: "Uma carta de tarô com o nome Folie, que mostra um homem vestido com roupas esfarrapadas",
      justice: "Uma carta de tarô com o nome La Justice, que representa uma mulher coroada",
      man: "Uma carta de tarô com o nome Garçon Blond, de um homem a segurar uma taça",
      money: "Uma carta de tarô com o nome Argent, que mostra um conjunto de moedas e um homem a segurar uma gadanha",
      traitor: "Uma carta de tarô com o nome Traitre, que representa um homem vestido com um hábito a segurar numa lanterna"
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
                  undefined: [<p>Refletes sobre que carta escolher.</p>,
                  <p>Refletes sobre o segundo conjunto.</p>,
                  <p>Refletes sobre o último conjunto da leitura.</p>][i],
                  death: <p>“<em>A Morte</em>,” dizes tu, solenemente. “Muitas vezes esta figura apenas significa mudança, mas no seu caso—”
                    Fazes uma pausa. “Eu sinto que uma morte física aconteceu recentemente, e uma que foi imerecida.
                    Uma pessoa de quem no passado foi próximo?” Healey limpa a cara. “O seu espírito considera-o responsável pelo que aconteceu.
                    <AnyMap from={this.props.chosen} indexStart={i} to={
                      {
                        traitor: ` Porque é você O Traidor.
                        `,
                        fool: ` Porque é você O Louco.
                        `,
                        money: ` Tudo pela ânsia de dinheiro.`,
                        man: ` Tu e o Homem Louro também.`
                      }
                    } />”
                  </p>,
                  fool: <p>“<em>O Louco</em>. Os espíritos não são claros. Será o louco alguém que conhece? Ou será você?”</p>,
                  justice: <p>”<em>A Justiça</em> virá um dia por todos nós. Por alguns mais cedo, por outros mais tarde.”
                    Como ele não diz nada, prossegues." Teme a sua própria chamada à justiça? Os espíritos acreditam que faz bem em temer. Deveria ter muito medo." Agora tens a sua atenção.
                    <AnyMap from={this.props.chosen} indexStart={i} to={
                      {
                        traitor: ` “O Traidor será castigado pela sua deslealdade.”
                        `,
                        fool: ` “Vocé é verdadeiramente o Louco ao lançar-se voluntariamente para o castigo sem sequer tentar olhar para si próprio.”
                        `,
                    death: ` “Pois que maior Justiça poderá haver do que vingar uma Morte injusta?”`,
                    man: ` “Alimenta a esperança de que o Homem Louro será o único a receber o castigo. Mas se nada fizer, se continuar a encolher-se e a esconder-se, será você e só você quem será castigado.”`
                  }
                } />
              </p>,
              man: <p>”<em>O Homem Louro</em>.” Franzes o sobrolho.
                <AnyMap from={this.props.chosen} indexStart={i} to={
                  {
                    undefined: `" Os espíritos dizem-me que um homem louro desempenha um papel importante
                    nas suas presentes dificuldades." Fazes uma pausa. "Entraram em conluio, você e ele. Com este homem
                    perpetrou um grande mal."`,
                    traitor: `“Será ele o Traidor que vimos antes? Ou será você?” Ele estremece.
                    “Os espíritos dizem-me que são vocês os dois. Vocês cometeram um grande mal juntos.
                    Tem de se libertar deste fardo por via de um comportamento penitente.”
                      `,
                      fool: `“Será ele o Louco na nossa leitura?” Ele desvia o olhar. “Não, é você o Louco. Envolveu-se
                      com as pessoas erradas, desviou-se do caminho. E alguém sofreu. Não é tarde demais para se arrepender do seu envolvimento.”
                      `,
                    }
                  } /></p>,
                money: <p>“<em>Dinheiro</em>. Quase todas as confissões religiosas consideram o dinheiro como uma força má e corruptora.
                Faríamos bem em dar-lhes atenção.” Fechas os olhos. "Sinto que é no dinheiro que reside a raiz dos seus problemas. Está a envenená-lo a si e àqueles que lhe são próximos. Tem de se purificar da sua influência.”
                </p>,
                traitor: <p>“<em>O Traidor</em>”.
                  { [
                    ` Fita-lo com um olhar calmo. "Conhece alguém que tenha atraiçoado um ente querido?"
                      Quando ele começa a gaguejar, dizes, "As cartas sabem o que talvez receie  admitir."
                    `,
                    ` Olhas para ele fixamente até que sentes o seu incómodo. “As cartas sabem o que talvez receie admitir sobre si próprio.”
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
