const React = require('react')
import { List, FromInventory, Map, NextChapter } from '../components'
import { connect } from 'react-redux'
import { RenderSection } from "."

const Customer = {
  clothes: [
    "ropa típica de turista",
    ["un anillo de matrimonio barato",
    "un impermeable sucio",
    "un gorro de béisbol baladí"],
    "una mirada impaciente"
  ],
  names: [
    "¿Nancy?",
    "¿Nadine?",
    "¿Nicky?"
  ],
  body: [
    "su apariencia física",
    ["su cara sin afeitar",
    "sus manos callosas",
    "su quemadura que se está pelando"],
    "su apariencia física y captas algunas pistas"
  ]
}

const _Prologue = ({currentSection, inventory}) => {

  var mapsClothes = {
    "anillo": "Hay alguien cercano. Alguien que confiaste estaría contigo por siempre. Pero que ya no está",
    "impermeable": "Tus vacaciones no resultaron ser como esperabas. Siento desilución, quizá incluso desesperanza",
    "gorro": "Te gusta divertirte, eres un hombre despreocupado con sentido del humor. Pero últimamente no te ríes"
  }
  var mapsName = {
    "anillo": "¿Estaba de acuerdo él con tu matrimonio? Siento preocupación sobre cómo sucedió.",
    "impermeable": "¿Cómo se sentiría al ver que viajaste tan lejos para verme?",
    "gorro": "Nunca se rio lo suficiente, ¿no?"
  }
  var mapsApprove = {
    "anillo": "Janet. Nunca le dio una oportunidad",
    "impermeable": "ni la frivolidad ni las vacaciones. Nunca quería que me divirtiera",
    "gorro": "la ‘frivolidad’, como él lo llamaba. Nunca le gustaba cuando bromeaba"
  }
  var mapsBody = {
    "cara": "Le preocupa que no estás durmiendo",
    "manos": "Le enorgullece que su hijo trabaje con las manos",
    "quemadura": "Le alegra que hayas pasado tiempo afuera"
  }
  var libraryThings = [
    "chucherías",
    ["una nota a medio escribir",
     "una foto",
     "una receta pendiente"
    ],
    "objetos personales"
  ]
  var libraryMaps = {
    nota: `Observas la nota a medio escribir. Dice: <blockquote>Querida, espero que entiendas
      que hago esto por necesidad, no por falta de amor por</blockquote> No
      entiendes cómo, pero reconoces que es la letra de Alan Healey`,
    foto: `Examinas la foto. Es una foto grupal formal tomada en la playa: un anciano, una anciana, un hombre
      y una mujer adultos que deben ser hermanos, y una niña. Sabes de inmediato que el anciano es Alan Healey`,
    receta: `Lees la receta. Es para un medicamento que no conoces, pero
      instintivamente sabes que es para la presión arterial alta`
  }
  var sections = [
    <section>
      <h2>Prólogo</h2>
      <h3>En tu sala de lectura</h3>
      <p>―Buscas el conocimiento de los sabios? ¡Avante!</p>
      <p>Después de una corta vacilación, la cortina de cuentas se abre
      y entra tu próximo cliente. Caen algunas cuentas sueltas y se dispersan en las esquinas.</p>
      <p>Ya deberías comprar una cortina nueva, pero la habitación está mal iluminada y los clientes parecen no notarlo.
        Esperan ver los accesorios habituales
        de un vidente en un paseo marítimo: cartas de tarot, pinturas del zodíaco,
        una bola de cristal absurdamente grande. En ese aspecto, este cliente parece satisfecho y se sienta en frente tuyo
        en la estrecha mesa circular.
      Casi que tocan rodillas; esta habitación no fue hecha para dos hombres grandes.</p>
      <p>―¿Viniste por una lectura? ―preguntas de manera solemne. El cliente asiente.
      </p>
      <p>―Entonces comencemos. Algunos contactan a los espíritus con cartas o las palmas. Yo requiero un objeto personal, uno infundido con el espíritu mismo.
      </p>
      <p>Inspeccionas al cliente, que tiene <List expansions={Customer.clothes} conjunction="y" tag="p0_customer_clothes"/>.</p>
    </section>,
    <section>
      <p>
        ―Siento una poderosa fuerza psíquica de tu <FromInventory inventory={inventory.p0_customer_clothes} offset={1} /> &#x2015;dices―. ¿Puedes dármelo?
        ―El cliente mira asombrado cuando te lo entrega. Cierras los ojos y giras
        el <FromInventory inventory={inventory.p0_customer_clothes} offset={1} /> lentamente entre tus manos―. <Map 
        from={inventory.p0_customer_clothes} to={mapsClothes} offset={1}/>.
        ―Frunces el ceño―. Los espíritus quieren ayudar, pero las señales son débiles... ―Cuando no responde,
        abres un ojo y te aclaras la garganta. Rápidamente saca otros veinte dólares.
      </p>
      <p>
        ―Veo un nombre ―continúas―. Comienza con una S... ―Te mira inexpresivo―. ¿O una N?
        ―Reacciona. Frunces el Ceño como en profunda concentración. ―<List expansions={Customer.names} tag="p0_customer_names"/>
      </p>
    </section>,
    <section>
      <p>―¿Nicholas? ―aporta con entusiasmo―. ¿Es mi padre?</p>
      <p>―Quizás ―contestas con evasivas―. <Map from={inventory.p0_customer_clothes} to={mapsName} offset={1} />
      </p>
      <p>―No le gustaba <Map from={inventory.p0_customer_clothes} to={mapsApprove} offset={1} /> ―dice con rencor.</p>
      <p>―Sí, y lamenta haberse comportado de esa manera.</p>
      <p>―¿En serio? ―El cliente mira incrédulo―. Eso no suena para nada como él.</p>
      <p>―El más allá cambia a las personas ―dices ignorando su objeción.
        Analizas <List expansions={Customer.body} tag="p0_customer_body" conjunction="y" />.</p>
    </section>,
    <section>
      <p>―<Map from={inventory.p0_customer_body} to={mapsBody} offset={1} /> ―improvisas.</p>
      <p>―Es verdad, he estado...</p>
      <p>Tu triunfo es efímero cuando la cortina se agita de nuevo de manera inesperada. Entra una mujer: cuarenta y tantos, sensata, un poco desaliñada
        para tu gusto. Su expresión amarga te dice que no es una posible clienta. No te sorprende cuando
        le muestra rápido su placa al cliente y dice: 
        </p>
        <p>―Váyase.
      </p>
      <p>Casi salta del asiento y guarda todo apurado, con vergüenza. ―No tienes que irte
        ―le dices, pero es inútil, ya no te cree nada. Trata de salir mientras
        la mujer, la oficial de policía, lo mira con una mezcla de pena y
        desdén.
        Está tan apurado que se olvida de llevarse el dinero extra de la mesa
        y, en la distracción del momento, lo deslizas silenciosamente dentro de tu bolsillo.
        Su <FromInventory inventory={inventory.p0_customer_clothes} offset={1} /> también queda olvidado.
      </p>
      <p>Y ahora estás
        solo con la oficial. Probablemente vino a hostigarte por el arrepentimiento de alguien:
        afirman que fueron estafados, que no recalcaste lo suficiente que era «solo para
        entretenimiento», que su pareja se enteró, lo usual. No pasa seguido,
        pero pasa. Mejor que el interrogatorio vaya sin problemas: comenzar con respeto, mantenerlo formal.
      </p>
      <p>―¿Puedo ayudarla, oficial? ―preguntas. Y luego dice algo que ni tú
      podrías haber predicho.</p>
      <p>―Detective. Y necesito un vidente ―dice, entregándote
        su <List expansions={["tarjeta", 'tarjeta, que volteas y lees: <em>Tamisha Whitby, Investigación Criminal, Condado de Cape May, NJ</em>']}  tag="p0_nextUnit"/>.
      </p>
    </section>,
    <section>
      <hr/>
      <p>Esperas que corte el momento pesado con un chiste, pero no,
        solo se queda analizándote. Puedes ser un fraude, pero no eres grosero.
      </p>
      <p>
        ―Frank Petrio ―dices y extiendes tu mano rechoncha.</p>

      <p>Te saluda y saca una de tus tarjetas de negocios. </p>
      <p>―¿No «El Gran Francisco»?</p>
      <p>Te encoges de hombros y apuntas al cartel sobre la puerta: «<small>Solo para entretenimiento</small>». Ambos se sientan.</p>
      <p>Ella dice:</p>
      <p>―No creo en la clarividencia o en los psíquicos o en nada de eso.
        Vine aquí como un favor a una persona. ―Te mira fijo, demasiado, y no puedes evitar
        retorcerte un poco de vergüenza. Así se deben sentir tus clientes―. Alguien murió hace un mes,
      en Stone Harbor, un anciano llamado Alan Healey. Puede que lo hayas visto; estuvo en el periódico.</p>

      <p>―Es verano en el paseo marítimo ―contestas―. He estado bastante ocupado con el trabajo.</p>
      <p>Mira intencionadamente la sala de lectura y no necesitas ser vidente para saber
        lo que opina de tu carrera. Saca una carpeta y comienza
        a leerla.
        ―Healey fue encontrado muerto en su casa después de ingerir
        una sobredosis de su remedio para la presión arterial. Los Healey son una familia antigua y adinerada del
      pueblo, así que la historia apareció bastante en las noticias.</p>
      <p>
        Stone Harbor es un hermoso pueblo próspero y autosuficiente a quince minutos y un millón
        de kilómetros de distancia del pueblo carnaval de clase media donde vives. ―Perdón, ¿qué tiene que ver esto conmigo?
      </p>
      <p>―Healey tiene una sobrinita que vivía con él. Ella es mi ahijada.
        Su madre ya no está, pero sé que ella... Yo siento... ―La detective luce
        incómoda, como muchos de tus clientes al principio―.
      Es una persona muy... espiritual. Cree fácilmente. ―Whitby pausa de nuevo.</p>
      <p>―Quiere decir que es ingenua ―dices.</p>
      <p>La detective frunce el ceño. ―Yo no quiero estar aquí
        y tú quieres que me vaya.
        Era un anciano que no veía bien y leyó mal su dosis, pero le estoy haciendo el favor
        a una vieja amiga y... ―Mete la mano en el
        bolsillo, en busca de algo―. Allison, mi amiga, me dijo que si algo violento pasaba en la familia,
        si había alguna razón para pensar que su hija estaba en peligro, que debía venir a ver a la vidente de aquí.
        Que ella la había escuchado y podría ayudar...
      </p>
      <p>―Claro, <em>ella</em> ―exclamas―. Mi madre era «La Gran Francesca». Este era su negocio,
        pero murió.
      </p>
      <p>
        ―Lo siento, no quise...
      </p>
      <p>Tú también estás enojado, pero no sabes por qué.
        ―Y ahora yo lo manejo. Para turistas e inocentes. <i>Solo para entretenimiento</i>.</p>
      <p>―Sabía que era una pérdida de tiempo ―dice Whitby. Arroja
        un <List expansions={["guante de cuero", "<psychic>guante tenso y furioso</psychic>"]} tag="p0_glove"/> sobre la mesa―. Ahí tienes, hice lo que vine a hacer.
      </p>
    </section>,
    <section>
      <p><em>Hay algo muy extraño sobre ese </em> <List expansions={["<psychic>guante</psychic>.", "... <br/><br/><p>Levantas el guante y todo cambia.</p>"]} tag="p0_glove2"  /></p>
    </section>,
      <div className="in-flashback">
        <figure className="prologue">
          <figcaption className="visuallyhidden">Un pequeño estudio desordenado, con fotos y una silla de mimbre frente a un escritorio, en tono sepia.</figcaption>
        </figure>
        <h3>En el estudio</h3>
        <section>
          <p>Miras hacia abajo y no ves nada, como si no estuvieras ahí. El color
            de la habitación está todo desteñido. Los objetos están borrosos e indistintos, como una foto vieja. Hay
            una biblioteca, un escritorio desordenado con <List expansions={libraryThings} tag="p0_library_things" conjunction="y"/>,
            una lámpara pequeña, retratos familiares en la pared.
            Hay una puerta que lleva a un dormitorio luminoso, pero está aun más borroso, menos real,
            que esta habitación.
          </p>
        </section>
      </div>,
    <section>
      <p>
        <Map from={inventory.p0_library_things} to={libraryMaps} offset={1} />.
      </p>
      <p>
        Aparece una figura sombreada en la puerta que tapa la luz. Oyes
        un sonido penoso del dormitorio, alguien ahogándose y balbuceando.
      </p>
      <p>
        La figura escucha el sufrimiento sin emoción. Comienzas a sentir pánico, pero,
        absurdamente, no tienes pies para correr hacia el dormitorio, ninguna voz para pedir ayuda. Después de
        un largo y doloroso tiempo, el ruido cesa. Todo es silencio. La figura cierra la puerta del dormitorio
        y la habitación queda iluminada solo por la lampara débil. Alumbra la mano enguantada sobre
        el picaporte y estás absorto por ese simple objeto. La figura intenta abrir la puerta y, feliz
        de que está cerrada, suelta el picaporte,
        mientras el <List expansions={["guante enojado", "guante violentamente enojado"]} tag="p0_glove3" /> parece hervir bajo la luz...
      </p>
    </section>,
    <section>
      <h3>En tu sala de lectura</h3>
      <p>
        Y, así como así, vuelves. El sentimiento de que te abruma tu cuerpo
        es casi grotesco. Miras al guante y, aunque se siente denso y
        pesado en tus manos, la sensación de que algo está profundamente <em>mal</em> desapareció. Es
        solo un guante.
      </p>
      <p>
        Esta fue la primera verdadera experiencia psíquica de tu vida.
      </p>
      <p>No puedes imaginar cómo harás para explicarle todo esto a una
        oficial sensata y racional, pero, cuando la miras a los ojos, puedes ver claramente
        que <em>algo</em> pasó. Luce un poco mucho
        asustada de ti.
      </p>
      <p>
        Le devuelves el guante. ―Healey fue asesinado.
      </p>
      <NextChapter chapter="1" />
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

export const Prologue = connect(
  mapStateToProps
)(_Prologue)
