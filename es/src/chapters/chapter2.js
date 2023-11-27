const React = require('react')
import { Map, List, FromInventory, NextChapter } from '../components'
import { connect } from 'react-redux'
import { RenderSection } from '.'

const _Chapter = ({currentSection, inventory, chapterId}) => {
  var photos = [
    "una pila de fotos",
    "una pila de fotos. Das vuelta la primera y ves dos ancianos"
  ]
  var sections = [
    <section>
      <h2>Capítulo Dos</h2>
      <h3>En la mansión</h3>
      <p>
        Apenas conversan en el camino. Hicieron una parada en tu tienda para cerrar formalmente
        por la tarde. Es sábado y hay muchas personas en la playa, así que giraste el cartel del lado <small>cerrado</small> un tanto
        arrepentido. Por otro lado, adviertes que es probable que hoy fuera el día libre de Whitby. Te preguntas cómo sería tener
        amigos que te hagan esta clase de favor.
      </p>
      <p>
        La casa es igual a como la recuerdas de tu visión: enorme, blanca, estilo clásico falso,
        típico del barrio sofisticado y tan diferente de la madera gris degastada por el sol de
        la mayoría de las casas de la costa. Pero la propiedad tampoco es de advenedizos. Es antigua, pero está bien cuidada. Cuando vives en la
        costa, es fácil encontrar gente rica a la que resentir, pero la casa de los Healey se siente como un hogar.
      </p>
      <p>—La esposa está con su hermana, así que no hay nadie —dice Whitby mientras sale del auto—. Pero no puedo
      dejarte entrar ni aunque quisiera. —Es bastante claro que no quiere.</p>
      <p>—No necesito entrar, está atrás —contestas. Conoces el camino y no la esperas.</p>
      <p>
        Es tarde, así que ya hay sombra en el patio, pero es un día muy, muy caluroso y estás sudando hasta las bolas
        en pantalón corto. Por supuesto que la detective parece estar bien fresca en su uniforme de poliéster.</p>
        <p>—Detente —grita—. Solo dime dónde está.</p>
      <p>—¿No quieres que deje ninguna evidencia falsa?</p>
      <p>—Exacto.</p>
      <p>—Me dolería menos si me mintieras. —No dice nada, así que solo señalas—. Está en un arbusto al pie de las escaleras. Tal vez.</p>
      <p>Pausa.</p>
      <p>—¿Tal vez?</p>
      <p>—<em>Estaba</em> ahí, pero Healey murió hace semanas. ¿Cómo diablos debería saber lo que pasó desde entonces? —La oyes murmurar algo sobre ser un pésimo vidente.</p>
      <p>—¿Quiénes son? ¿Qué hacen aquí?</p>
      <p>Te giras sorprendido. Es una anciana, alarmada por tu presencia. Su ropa
        es <List expansions={["cara", "cara, pero también puesta un poco al azar; no todo combina"]} tag="c2_clothes" nextUnit={null} />.
        Lleva un <List expansions={["morral", "morral y por la forma en la que lo sostiene parece estar lleno y pesado"]} tag="c2_duffel" nextUnit={null}/>.
        Tiene <List expansions={["ojos penetrantes", "ojos penetrantes, pero lagañosos, como si hubiera estado llorando"]} tag="c2_eyes" />.
      </p>
    </section>,
    <section>
      <p>
        <em>Ah, debe ser la viuda</em>. Los mira mal a los dos.</p>
        <p>—¿Están con la policía?</p>
      <p>—Sí —dice Whitby, con sinceridad—. Lamento mucho su pérdida, señora Healey. —Le alivia saber que no somos ladrones,
      pero tampoco se alegra de vernos.</p>
      <p>—Pensé que ya habían terminado todo.</p>
      <p>—Solo estamos investigando unos cabos sueltos. Disculpe las molestias, pensé que ya se había ido —contesta Whitby.
      Te mira de una manera que sin duda significa "cierra la boca".</p>
      <p>—Yo te conozco —dice la señora Healey—. Eres la madrina de Sarah. —Whitby asiente.</p>
      <p>—Fui a la escuela con Allison. —La mujer camina un poco por el área mientras arranca unas flores secas.</p>
        <p>—No he visto a Sarah desde... esa noche... pero dejó algo en la casa. Déjame dártelo.</p>
        <p>Mete la mano en el morral y se acerca
        a ofrecerte algo a ti, porque estás parado al lado, y te golpea una oleada de miedo que literalmente
        te empuja hacia atrás. Luce perpleja por tu reacción, pero se acerca, con el objeto
        en la mano. Tu vista está tan distorsionada que no puedes distinguirlo aunque está frente a tu cara.</p>
      <p>Whitby ve tu aflicción y empieza a correr a través del patio.</p>
      <p>—Gracias, señora Healey, yo lo agarro...</p>
      <p>
        Sientes la sangre drenándose de tus extremidades y
        tu vista reduciéndose a un agujerito. Whitby estira el brazo para interceptarla, pero es demasiado tarde,
        la mujer te puso con impaciencia
          una <List expansions={["muñeca", "<psychic>muñeca aterrada</psychic>", "<psychic>muñeca aterrada con la cabeza aplastada</psychic>"]} tag="c2_doll" /> en
          tus manos paralizadas...
        </p>
      </section>,
      <div className="in-flashback">
        <figure className="chapter2">
          <figcaption className="visuallyhidden">Una sala anticuada, con sillas tapizadas y un jarrón con flores marchitas, en blanco y negro</figcaption>
        </figure>
        <h3>En la sala de estar</h3>
        <section>
          <p>
            Nunca te has sentido tan pequeño en tu vida, físicamente pequeño. Incluso de chico eras grande
            para tu edad, solías chocar contra los baratos, pero delicados adornos nueva era de tu mamá.
            Pero ahora estás acorralado por
            paredes colosales de muebles macizos y te sientes diminuto.
          </p>
          <p>
            Una niña, con la <List expansions={["muñeca", "feliz muñeca"]} tag="c2_doll2" nextUnit="none" />, entra corriendo a la habitación y se sienta cómodamente en una
            silla con respaldo alto. La sigue <List expansions={["un anciano", "un anciano con aspecto amable", "un anciano que reconoces como Alan Healey"]} tag="c2_healey" nextUnit="none" /> y <List expansions={["una mujer", "una mujer de la misma edad", "una mujer que reconoces como la esposa de Healey"]} tag="c2_margaret" />.
          </p>
        </section>
      </div>,
    <section>
      <p>En los brazos de su dueña, la muñeca irradia alegría en vez de miedo. Quizá es porque aún tiene cabeza.</p>
      <p>La esposa de Healey todavía tiene mechones marrones en su pelo gris rizado. Está vestida formal,
        como tiende a hacerlo su generación, aunque estás seguro que en la habitación hace mucho calor.
        Le pregunta a la niña:</p>
        <p>—Cielo, ¿quieres algo? —Su voz es firme, pero amable, como imaginas que sería la de una tía.</p>

      <p>—No, gracias, tía Maggie —dice la niña. Abraza a la muñeca con una fuerza que podría matar a un animal pequeño, pero el juguete lo ama.</p>
      <p>Su tía asiente y le dice a su esposo:</p>
      <p>—Te traeré tu té helado, cariño.</p>
      <p>Healey usa unos enormes anteojos gruesos y está calvo, excepto por unos mechones que debería cortarse.
        Es probable que su esposa le corte el pelo después de muchas quejas y protestas. Con dolor, adviertes que nunca
        lo podrá volver a hacer; algún extraño lo peinará para el funeral y ella pensará que está todo mal hecho.
      </p>

      <p>Healey no dice nada,
        solo <List expansions={["sonríe", "sonríe de manera forzada, con un leve gesto"]}  tag="c2_smile" />.
      </p>
    </section>,
    <section>
      <p>Podrías enseñarle cómo utilizar la expresión para mentir mejor. Le oculta algo. Está esperando a que se vaya.
        Ella duda un segundo; sospecha de él. Quieres gritar y decirle que se quede ahí parada
        por siempre, que no lo pierda de vista. Pero no estás allí de verdad y esto ya
        sucedió. Elige creer en esa sonrisa falsa y se va.
      </p>
      <p>Al momento que desaparece, Healey levanta un pesado teléfono negro de una mesilla y lo pone sobre su regazo.</p>
        <p>—Juega con Vicky, Sarah. El tío Alan solo tiene que hacer una llamada rápida. —La niña asiente y le tararea fuera de tono a la muñeca.</p>
      <p>Healey marca el teléfono a disco lentamente; es obvio que le duele mover las manos. Es un número
        corto, local. La conversación es en voz baja e incomprensible porque no quiere que la niña
        lo escuche. Captas algunas palabras: “nunca”, “ese dinero”, y luego dice enojado:</p>
        <p>—¿Cómo pudiste? —La niña, Sarah, lo mira sobresaltada y suelta la muñeca que cae al piso—. No dejaré que ella sufra por tus errores.
        A la mañana ya estará hecho —dice Healey y cuelga el auricular con un golpe seco cuando
        su esposa entra con unos vasos transpirados en una bandeja—. Número equivocado —dice para evitar cualquier discusión.</p>
        <p>Su esposa no dice nada, solo deja los vasos en la mesa.</p>
      <p>—Perdón —dice de manera brusca, se saca los anteojos para frotarse la cara y se levanta.</p>
        <p>No ve la muñeca, la pisa y le aplasta la cabeza. La pequeña Sarah ya estaba por llorar, pero esto
        la vuelve histérica. Maggie Healey la arropa y dice:</p>
        <p>—Te leeré un cuento en la cama, cielo, vamos.</p>
      <p>
        Ahora la habitación está vacía excepto por la muñeca, que yace olvidada bajo un armario ornamentado. Pasa
        el tiempo, quizá horas. Las luces de la casa se apagan cuando todos se van a dormir, las agujas del reloj
        en la pared giran y giran.
        Aunque parezca extraño, no es aburrido estar solo entre los objetos de la casa. Es tranquilo y sin complicaciones.
      </p>
      <p>Oyes una ventana abrirse, ves muy poco en la penumbra de la noche sin luna,
        pero distingues la sombra de una persona entrando en la habitación. <em>Ahora</em> la muñeca tiene miedo,
        no porque fue dañada y desechada, adviertes, sino porque este mundo quieto y ordenado fue
        invadido. La <List expansions={["muñeca", "muñeca aterrada"]} tag="c2_doll3" /> grita,
        quiere despertar a la casa, pero solo puede despertarte a ti...
        </p>
      </section>,
      <section>
        <h3>En la mansión (dentro del auto de Whitby)</h3>
        <p>
          Te despiertas de repente.</p>
          <p>—¿Cómo llegué aquí?</p>
        <p>—Te arrastramos. —Whitby está fumando, no pensaste que era de esas. La ceniza es larga.</p>
        <p>—¿Tú y quién más?</p>
        <p>—La señora Healey y yo —dice con infinita paciencia—. Es más fuerte de lo que parece. Le dije que te bajó la glucosa. Pensé
        que ibamos a mantener un perfil bajo. —Afuera es un infierno, pero estás helado hasta los huesos y no puedes dejar de temblar.
        Te ríes un poco y te suena raro.</p>
          <p>—Qué buen policía resulté ser.</p>
        <p>—Nunca dije que eras un policía —responde con severidad.</p>
        <p>—Claramente no le corregiste el malentendido. —Ella nota su cigarrillo olvidado y lo tira por la ventana.</p>
        <p>—¿Qué otra opción tenía? <em>¿Hola, soy la detective Whitby y este es mi vidente mascota?</em></p>
        <p>—Qué dulce de tu parte, pero recién nos conocemos. —Ve que estás temblando y cierra la ventana aunque debe estar sofocante en el auto.
        Estás agradecido.</p>
        <p>—¿Qué pasó esta vez? —pregunta con gentileza. Le recitas los hechos, incluso la parte de la muñeca.</p>
          <p>—Pero entiendo —dices cuando no responde—. Está en mi cabeza o soy un fraude. Solo déjame de nuevo
          en el paseo marítimo. No te volveré a molestar.</p>
        <p>Asiente y arranca el auto.</p>
        <p>—Te dejaré allí —dice—. ¿A qué hora puedes estar listo mañana?</p>
        <p>—¿Listo para <em>qué</em>?</p>
        <p>Señala. Reposado en el asiento trasero está el guante del asesino... no, un par de guantes idénticos.</p>
        <p>—El otro estaba justo donde dijiste, bajo un arbusto cerca del pie de la escalera. Lo levanté
          antes de que te marchitaras como una flor. Cuando vuelva al trabajo el lunes, tengo que hablar
          con los investigadores forenses sobre su meticulosidad.</p>
        <p>No dices nada, solo la miras fijo, así que agrega:</p>
        <p>—Mira, solo relájate, Pietro. Te creo.</p>

        <NextChapter chapter="3" />
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
