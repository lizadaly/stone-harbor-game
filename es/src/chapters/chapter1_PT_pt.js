const React = require('react')
import { Map, List, FromInventory, NextChapter } from '../components'
import { connect } from 'react-redux'
import { RenderSection } from '.'

const _Chapter = ({currentSection, inventory, chapterId}) => {
  var libraryMaps = {
    nota: `Recitas lo que decía la nota, palabra por palabra. Describes la
    caligrafía, la letra como “alguien con educación formal, pero con un leve temblor”`,
    foto: `"Era una foto familiar, posada. Cuatro adultos y una niña. Dos de los adultos eran
    jóvenes. Parecían hermano y hermana"`,
    receta: `"Era captopril. Para tomarlo tres veces por día. 100 mg."`
  }


  var sections = [
    <section>

      <h1>Stone Harbor</h1>
      <h5>Liza Daly</h5>

      <h2>Capítulo Uno</h2>
      <h3>En la cafetería</h3>
      <p>Acordaron seguir hablando en otro lado, así que aquí están: mesas grandes, café feo. Es
        mitad de semana, así que no hay nadie además de camioneros y jubilados. El café de la detective
        Whitby es negro; el tuyo se está ahogando en una cantidad afeminada de crema y azúcar. No lo has tocado.
      </p>
      <p>“Hablame de nuevo sobre la <FromInventory inventory={inventory.p0_library_things} offset={1} />.
        ¿Qué viste exactamente?”
      </p>
      <p>Te remites a los hechos. <Map from={inventory.p0_library_things} to={libraryMaps} offset={1} />.</p>
      <p>La detective no responde de inmediato, solo anota lo que dijiste. “Y describe
      la habitación de nuevo”.</p>
      <p>“Ya te dije...”</p>
      <p>“De nuevo”. No te mira a los ojos y, si intentaras leerla, no obtendrías ninguna pista.
      Es buena. Lo que es curioso, sin embargo, es que estás diciendo la verdad.</p>
      <p>“Era un estudio o una biblioteca personal con un dormitorio contiguo.
        Había dos camas individuales, bibliotecas, un escritorio con algunas cosas, pero solo miré de cerca
        a la <FromInventory inventory={inventory.p0_library_things} offset={1} />”.</p>
      <p>“Y describe a la persona que viste”.</p>
      <p>“No puedo”.</p>
      <p>Te mira. “Viste
        la <FromInventory inventory={inventory.p0_library_things} offset={1} /> claramente, pero ¿no recuerdas nada sobre
      la persona que dices que es el asesino?”</p>
      <p>¿Cómo explicarlo? Fue como mirar por el lado equivocado de un telescopio. El escritorio, ese
        guante, eso estaba enfocado, pero el resto estaba oscuro y vago. Surge un recuerdo incierto: tenías diez,
        estabas jugando en la esquina mientras tu mamá le leía a dos chicas adolescentes. Estaba tan atestado, muy caliente, y sus risitas
        y el aire húmedo del verano te rodeaban hasta que no podías respirar. Casi te desmayaste
        esa vez y esta experiencia fue igual: mirar hasta el fondo de un túnel
        que se oscurece y todo el mundo se va desmoronando. Pero solo dices,
      sin convicción, “Era difícil ver”.</p>
      <p>Está escribiendo de nuevo, durante mucho tiempo. Intentas beber tu café, pero
      se enfrió y toda esa crema es nauseabunda. </p>
      <p>“¿Qué sientes con esto?” dice sin levantar la mirada.
        Pone <List expansions={["un reloj de hombre", "un reloj de oro común"]} tag="c1_watch" /> sobre la mesa.</p>
    </section>,
    <section>
      <p>Lo levantas un momento y lo sueltas de nuevo. “Es un reloj. ¿Quieres saber
      si es falso? No tengo idea”.</p>

      <p>No responde, solo sigue rayando ese maldito cuaderno. “¿Y esto?” Saca
        un <List expansions={["pañuelo", "pañuelo, cubierto de manchas rojo oscuro, que te generan aversión cuando lo das vuelta"]} tag="c1_handerchief" />.
      </p>
    </section>,
    <section>
      <p>“Dios mío, ¿eso es sangre?” Por instinto, intentas alejarte de la mesa, pero estás en una mesa cerrada, no hay escapatoria.</p>
      <p>“¿Sientes algo?” pregunta sin gracia, como si sorprender a la gente con evidencia sangrienta fuera lo más
      común del mundo. Quizás los policías hacen esto para divertirse.</p>
      <p>“¡No! ¿Qué rayos te pasa?”</p>
      <p>“El reloj era de mi ex. El
        pañuelo lo compré de camino aquí y lo manché con kétchup mientras estabas
        en el baño”. Te mira directo a los ojos.
      </p>
      <p>El estómago aún te da vueltas. “Porque crees que soy un fraude”.</p>
      <p>“Claro que lo eres”.</p>
      <p>No está equivocada, pero te sientes herido y avergonzado. Ella suspira y dice “Todo lo que
        describiste sobre esa habitación es correcto.
        Quizás lo sabías porque eres el asesino. Quizás eres... otra cosa.
      Pero no mentías y sospecho que eso te sorprendió como a cualquiera”.</p>

      <p>Antes de poder reaccionar a esa extraordinaria declaración, dice “Probemos con esto
        ahora” y te arroja <List expansions={["un pequeño objeto metálico.", "<psychic>un frustrado aparato para cortar</psychic>.", "una herramienta metálica para cortar que emana frustración y en cuanto la atrapas estás—<br/><br/><br/>"]} tag="c1_device" />
      </p>
    </section>,
    <div className="in-flashback">
      <figure className="chapter1">
        <figcaption className="visuallyhidden">El gran patio vacío de una casa inmensa, en un tono sepia pálido</figcaption>
      </figure>
      <h3>En el patio</h3>
      <section>
        <p>
          Es el amanecer y hueles sal en el aire. <List expansions={['Algo', 'Un aparato metálico']} tag="c1_device2" /> cerca está
          frustrado.
        </p>
      </section>
    </div>,
    <section>
      <p>
        Este es el patio trasero de la propiedad Healey. No hay razón para que sepas esto; nunca
        has estado allí, pero sabes dónde estás tanto como conoces tu propio hogar. La casa neoclásica está
        bien iluminada por el sol naciente, pero, como antes, se te nubla y oscurece la vista
        en las periferias. Puedes distinguir una valla de piedra decorativa alrededor del
        patio, que se accede por unas escaleras flanqueadas por urnas. Las escaleras llevan a un
        camino arenoso a través de las dunas que quizás termine en su playa privada.
      </p>
      <p>
        Parece perfectamente normal que <List expansions={["las urnas", ["la urna agrietada", "la urna más nueva"], "las urnas desiguales"]} tag="c1_urns" conjunction="y" /> al lado
        de las escaleras traseras irradien frustración.
      </p>
    </section>,
    <section>
      <p>
        <Map from={inventory.c1_urns}
          to={ {
            "agrietada": "La urna agrietada está vacía, pero la más nueva",
            "más": "La urna más nueva"
          }} offset={2}
        /> contiene la herramienta metálica que Whitby te arrojó. Es una hoja curva
        en una ranura redonda del tamaño de una moneda, con una cubierta de seguridad... ah, es un cortapuros.
        Puedes leer la emoción que
        irradia tan claro como lees la cara de una persona.
      </p>
      <p>
        Mientras que el guante se sentía enojado, incluso homicida, el cortapuros está frustrado.
        Tenía un único deber y quedó incompleto cuando Healey, interrumpido en su
        habitación, fue asesinado. Es una aparato simple, pero muy personal, y
        puedes sentir otra emoción que brota de adentro: un profundo sentido de pérdida.
      </p>
      <p>
        La tristeza está creciendo, de alguna manera, y se filtra del cortapuros
        para meterse en la urna, en las fisuras de
        la piedra y se derrama al suelo como torrente. Observas como todo el patio parece arder
        en un paroxismo de pena. La casa está llorando a su dueño.
      </p>
      <p>
        Pero hay una nota discordante, un espasmo de odio en conflicto. Por el camino,
        cerca del pie de la escalera, está el enojo familiar del guante, pero sutilmente
        diferente. Debe ser el otro guante.
      </p>
      <p>Oyes gritos amortiguados y varios oficiales de policía
        aparecen de los costados de la casa. Es el servicio de emergencia para un
        crimen que ya presenciaste, aunque todavía no lo saben. Se acercan a la
        casa con cuidado, atravesando la pena, pero sin saber
        que existe, como contigo. Puedes sentir la vasta separación entre el mundo animado
        y el inanimado.
      </p>
      <p>Un oficial debe haber recibido una señal, alguien encontró al cuerpo, y todos corren a la casa.
        La pena comienza a colapsar, vaciándose como una película que se rebobina
        hasta que se acumula dentro del <List expansions={["aparato", "cortapuros de Healey"]} tag="c1_cutter"/>.
      </p>
    </section>,
    <section>
      <h3>En la cafetería</h3>
      <p>
        Todos te están mirando.
      </p>
      <p>
        “Está bien”, le dice Whitby a la gente. Intenta sacar el cortapuros de tu puño cerrado. Su
        mano se siente caliente como el fuego contra tu piel, pero tú eres el que está frío.
      </p>
      <p>“¿Qué hice?” susurras e intentas sentarte derecho.</p>

      <p>“Empalideciste y luego te desplomaste”. Ves que tu café se
      volcó y hay una pila de servilletas empapadas cerca del salero.</p>
      <p>“Perdón”, murmuras. Los clientes de la cafetería volvieron a fingir que no notaron nada.
        Le clavas los ojos a la detective con tu mejor
        mirada de vidente. “Encontraste <List expansions={["ese objeto", "el cortapuros de Healey", "el cortapuros de Healey, en una urna", "el cortapuros de Healey, en una urna, olvidado por el asesino"]} tag="c1_face" /> detrás
        de la casa”, <Map from={inventory.c1_face}
          to={{
            undefined: "dices",
            objeto: "dices",
            Healey: "afirmas",
            urna: "insistes"
          }} />.

        Su cara <Map from={inventory.c1_face}
          to={{
            undefined: "es inexpresiva",
            objeto: "está tensa",
            Healey: "tiembla un poco",
            urna: "es una espiral de emociones opuestas"
          }} />.
      </p>
      </section>,
      <section>
        <p>“Sí”, dice finalmente.</p>
        <p>“Lo estaba usando justo antes de morir”.</p>
        <p>“Eso creemos. Fumaba afuera, pero guardaba los cigarros en ese estudio. Encontramos
        uno desenvuelto, pero sin cortar”. Pausa y baja la voz. “¿Dónde estabas? ¿Recién?”</p>
        <p>“Detrás de su casa. Vi cuando llegaba la policía, la mañana de la
          muerte de Healey”.
        </p>
        <p>“¿Y la urna?” pregunta.
        </p>
        <p>
          Ya que estamos en el baile, bailemos. “Pude sentirlo. El cortapuros... lo extraña”.
        </p>
        <p>“¿Lo qué?”</p>
        <p>Te sudan las palmas, pero ya se usaron
          todas las servilletas para limpiar el café. Te secas con tus pantalones.
          “No creo poder... conectarme con cualquier objeto. Tiene que estar
          comprometido con lo que sucedió”.
        </p>
        <p>“Comprometido”, repite.</p>
        <p>“Déjame ver el guante de nuevo.”
          Lo saca con renuencia. Como esperabas, ya no está bañado en
          ira o venganza o ninguna emoción. “Cuando lo sostuve por primera vez”, explicas,
          “era como estar en la habitación con la persona más enojada que existe. Alguien
          tan cegado por la furia que no quería otro resultado más que violencia”.
        </p>
        <p>Arquea la ceja de manera espectacular. “El guante. Estaba enojado”.</p>
        <p>“Y este cortapuros”, continúas, “solo quería cortar un cigarro más.
          Su existencia tenía un propósito y ese propósito fue frustrado”.
        </p>
        <p>“¿Y ahora? ¿Este cortapuros lo <em>extraña</em>?”</p>
        <p>“Ya no. Creo que una vez que... me muestran lo que sienten, quedan satisfechos”.</p>
        <p>Se reclina y cruza los brazos. “Señor Pietro, no logro darme cuenta, ¿crees que soy idiota o demasiado inocente?”</p>
        <p>“Ese guante”, señalas. “Solo encontraste uno, ¿no?”
        </p>
        <p>
          “Sí”, dice desconfiada.
        </p>
        <p>
          “Llévame a lo de los Healey. Sé dónde está el otro”.
        </p>
        <NextChapter chapter="2" />
      </section>
    ]
    return <RenderSection currentSection={currentSection} sections={sections} />
}

export const Chapter1 = connect(
  (state, ownProps) => ({
    currentSection: state.bookmarks[ownProps.chapterId],
    inventory: state.inventory
  })
)(_Chapter)
