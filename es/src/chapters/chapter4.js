const React = require('react')
import { Map, List, NextChapter } from '../components'
import { connect } from 'react-redux'
import { RenderSection } from '.'

const _Chapter = ({currentSection, inventory, chapterId}) => {
  var sections = [
    <section>
      <h2>Capítulo Cuatro</h2>
      <h3>Tu departamento</h3>
      <p>Oyes que golpean de manera tentativa la puerta del departamento.</p>
        <p>—¡Está abierto! —Whitby abre la puerta mosquitera y te acompaña en tu diminuto patio.</p>
      <p>—¿Cómo sabías que era yo?</p>
      <p>—Soy vidente. ¿Cómo sabías dónde vivo?</p>
      <p>—Soy policía. —Deja una bolsa de papel en la mesa y enciende un cigarrillo sin preguntarte—. Traje cerveza.</p>
      <p>—Mi clase favorita de invitado —contestas aunque no abres una. En cambio, le das una almeja para que ponga las cenizas.
      Ambos se sientan en un silencio amigable, mientras miran más allá de la baranda hacia el océano.</p>
      <p>—¿Tienes muchos invitados? —pregunta. Es retórico, tu departamento es una pocilga y lo sabes.
        Tiraste la mayoría de los muebles viejos de tu mamá, pero no te molestaste en reemplazar mucho.
        Whitby pone los pies en la baranda y mira al paseo marítimo cerca del agua—. Lo que sí, es una vista espectacular.</p>
      <p>
        Tiene razón. Se ve el crepúsculo, la marea esta alta y las olas son claramente visibles, casi fluorescentes.
        Puedes oír el sonido distante de la gente en el paseo marítimo, pero
        las olas están más cerca y su sonido es más fuerte. Al norte están los carruseles y toboganes de agua del area
        principal; cerca de aquí sigue siendo animado, pero placentero.</p>
        <p>—Amo este lugar —admites.</p>
      <p>—¿Quién no? —Whitby nota que el recibo está a tu lado en un cajón de plástico, bajo una...— ¿Eso es una bola de cristal?</p>
      <p>—Es la de repuesto. —Sabes muy bien por qué vino a tu departamento a las 9 p. m. un domingo a la noche, así que respondes su pregunta sin formular—. Todavía no
      lo toqué. —Omites mencionar la extraña agonía de compartir un especio cerrado con un objeto que está desesperado por esconderse de ti.
      ¿Cómo puede tener secretos un pedazo de papel?</p>
      <p>—¿Por qué no? —Observas las olas durante unos minutos antes de responder.</p>
      <p>—Cada vez es más difícil.</p>
      <p>—¿Entrar a la... visión?</p>
      <p>—Salir. ¿Qué dijo Michelle Herschel cuando la interrogaste?</p>
      <p>
        —Ah, nada que no sepamos. Le habían informado todo sobre la escena ya que ella
        y su hermano se estaban quedando aquí durante el fin de semana. Alquilaron dos habitaciones en el <i>Caribbean Motel </i>
         en Wildwood. Probablemente le molestó que desperdiciara su tiempo repitiendo varias preguntas que ya le habían hecho.
      </p>
      <p>—¿Entonces por qué la llamaste? —Cuando no contesta, te das cuenta de repente y te ríes—. ¿Fue un trampa que me fuera
      de tu oficina? —Repites los eventos en tu cabeza—. Esa llamada... era solo la recepción diciéndote que ella había llegado.
      Y luego nos observaste todo el tiempo a través de la persiana.</p>
      <p>—¿Ves? Vidente. Solo quería ver qué podías hacer cuando te lo proponías y no decepcionaste. —Apaga el cigarrillo
      y levanta el recibo como si fuera solo un pedazo de papel común (que para ella, lo es)—. Es un recibo del bar
      de ese motel. —Lo da vuelta—. Hay un montón de números escritos a mano atrás. ¿Qué son?</p>
      <p>—No sé. —Te extiende el recibo.</p>
        <p>—Es hora, Pietro. Prometo mantenerte a salvo. —Tiene razón.</p>
        <p>—Gracias —dices y en serio. Tomas el <List expansions={["<psychic>recibo</psychic>", "<psychic>recibo cobarde</psychic>", "<psychic>pequeño recibo astuto</psychic> y lo arrugas en la mano"]} tag="c4_receipt" />.
      </p>
    </section>,
    <div className="in-flashback">
      <figure className="chapter4">
        <figcaption className="visuallyhidden">El patio soleado de un motel, en amarillos brillantes y sobresaturados, contra un cielo azul despejado</figcaption>
      </figure>
      <h3>En el motel</h3>
      <section>
        <p>Tu primer instinto es cubrirte los ojos con las manos, pero por supuesto no tienes nada de eso.
          Aun así, hay un brillo cegador y doloroso afuera. El <i>Caribbean</i> está
          del lado de la bahía de la ensenada, pasaste por ahí miles de veces, pero ahora
          parece ser casi híper real, fosforescente.
        </p>
        <p>
          Al otro lado de la calle, el cartel electrónico de un banco marca que es recién pasado el amanecer, lo que explica por qué el
          motel está desierto. También marca la temperatura y está sorpresivamente fresco;
          atrapado en esta visión, se siente como el mediodía más implacable, bajo un sofocante foco solar
          sin lugar donde esconderse. Todo resulta en un sentimiento abrumador de que te están observando.
        </p>
        <p>
          Aunque no puedes <em>sentir</em> nada de verdad, tienes que alejarte de este sol, así
          que te mueves (¿arrastras? ¿flotas?) por las escaleras hacia la terraza y bajo la
          enorme <List expansions={["marquesina", "marquesina ardiente"]} tag="c4_awning" />.
        </p>
      </section>
    </div>,
    <section>
      <p>No hay alivio aquí. Estar bajo este toldo es sofocante, como si estuvieras atrapado en una habitación cerrada y caliente.
        Así se debe sentir ser una hormiga bajo una lupa.
      </p>
      <p>
        Michael Herschel sale de adentro del motel; lo reconoces por la foto, pero
        sabrías que es el gemelo de su hermana, pálido y de cabello rubio. Ya está sudando
        y, como no hace calor, deben ser los nervios.
        No puede decidir si sentarse o caminar de un lado a otro. Alterna entre enderezar las tumbonas y dar vueltas
        alrededor del patio.
      </p>
      <p>
        Aparece su tío, Jared. Acá no hay parecido familiar; Jared está casi calvo, pero el poco cabello
        que le queda es oscuro. Tiene las cejas tupidas y una barba desigual. Comparado con su
        sobrina y sobrino, luce afligido y descuidado. Tiene 15 años menos que su hermano,
        quizá solo 5 años más que los Herschel, casi la misma edad.
      </p>
      <p>—Llegas tarde —se queja Herschel.</p>
      <p>—Sí, bueno, el tráfico —dice Jared Healey. Herschel al fin decide sentarse.</p>
      <p>—No mientas, son las 5:30 de la mañana. ¿Entonces se resolvió o no?</p>
      <p>—Todavía no —admite Healey. Antes de que Herschel pueda protestar, dice—: Necesito más tiempo.</p>
      <p>—No tenemos más tiempo, Jared.</p>
      <p>—¿Qué quieres que haga? —dice Healey. Su voz se pone aguda; está asustado en serio e intenta ocultarlo.
      Herschel estaba nervioso cuando salió antes, pero ahora todo su lenguaje corporal proyecta seguridad.</p>
      <p>—Te di mucho tiempo para que arregles las cosas. Acordamos una fecha límite y lo echaste a perder. Ahora es mi turno. —Él <em>quería</em> este
      resultado, adviertes. Esperaba que su tío le trajera malas noticias para poder controlar la situación.
      Healey se levanta y se arrodilla frente a su sobrino. Por un momento absurdo piensas que le va a pedir matrimonio.</p>
        <p>—Michael, por favor. No quiero manejar así mi negocio.</p>
      <p>—No lo estás manejando, lo estás arruinando. —Se reclina y extiende las piernas. Se está tomando su tiempo—. Estoy siendo generoso.
      No quiero las sobras. Deja a tus amigos en el puerto deportivo o cualquier antro en el que te despiertes estos días.
      Solo quiero a los mejores cinco.</p>
      <p>Healey luce derrotado.</p>
      <p>—¿Tienes algún papel? —Se palpa en busca de algo y vuelve a suspirar—. ¿Un bolígrafo?</p>
      <p>
        Herschel ni siquiera está desconcertado. Con calma, saca un bolígrafo y un pedazo de papel del
        bolsillo, el recibo. Observa triunfante mientras su tío, postrado frente a él, garabatea una
        serie de letras y números. Tan pronto como termina la quinta fila, Herschel le saca el
        papel a Healey y se para.
      </p>
      <p>—No me llames —dice—. Te avisaré cuando esté hecho. O tan solo revisa la cuenta. —Healey intenta interrumpir,
      pero Herschel hace un sonido de reprimenda como si le hablara a un perro—. ¿Estás seguro de que <em>él</em> no se enteró?</p>
      <p>—Seguro, confía en mí.</p>
      <p>—No. Ahora, ¿puedes mantener la boca cerrada o tengo dos problemas?</p>
      <p>—No diré nada —dice Healey miserablemente. Se desliza por las escaleras de afuera, un hombre roto. Con cada paso que da,
      la visión se desvanece un poco más a ese blanco cegador.</p>
      <p>Herschel observa a su tío irse y dice en voz alta:</p>
        <p>—Se fue. ¿Estás feliz ahora? —Sabías que alguien más estaba mirando.</p>
        <p>El sentimiento de estar bajo el microscopio se intensifica y la
        escena se vuelve blanca, tan blanca como el papel de ese <List expansions={["recibo", "recibo paranoico"]} tag="c4_receipt_vision" />.
      </p>
    </section>,
    <section>
      <h3>Tu sala de estar</h3>
      <p>Abres los ojos un poco, pero es una agonía.</p>
        <p>—Dios, apaga esa luz, ¿quién eres, la Gestapo? —Oyes las pisadas de Whitby y luego un clic.
        Aún duele, pero logras mirar un poco a tu alrededor.</p>
      <p>—Oye, es tu lámpara —dice con suavidad—. ¿Cómo te sientes?</p>
      <p>—Como si tuviera la peor resaca del mundo después de la borrachera más breve del mundo. ¿Cuánto tiempo estuve inconsciente?</p>
      <p>—Nunca estuviste "inconsciente". En su mayoría te quejaste de la luz y el calor aunque son pasadas
        las doce y tu aire acondicionado está al máximo. La última vez tenías mucho frío. En serio deberías decidirte. —Te fuerzas a enderezarte
        y bebes el agua que amablemente te dejó en la mesa.</p>
      <p>—Fue brutal.</p>
      <p>Su cara impasible de siempre se ablanda un poco.</p>
      <p>—Perdón por haberte presionado. —Le es incómodo disculparse y a ti también te resulta extraño, así que sigues adelante.</p>
      <p>—¿A qué se dedica Jared Healey?</p>
      <p>—Maneja un puerto deportivo de segunda en la bahía. Es más un atracadero para que los residentes vayan a
        pescar peces y cangrejos en la temporada baja. En realidad el dueño es su hermano.</p>
      <p>—Es un corredor de apuestas —dices y describes la visión. Whitby anota en su pequeño cuaderno de policía,
      en el mismo lugar donde guarda la verdadera evidencia, lo que te pone vagamente orgulloso.
      Cuando terminas, dice:</p>
      <p>—Un pésimo corredor, por lo que parece. Seguro un aficionado, el sub de alguien. —Cuando le preguntas, agrega—: Subcorredor. Muchos empiezan juntando
        apuestas en nombre de sus amigos, colegas, se llevan un pequeño porcentaje de las ganancias.</p>
      <p>
        Todavía tienes el recibo arrugado en la mano. Lo alisas
        sobre la mesa y lo analizan juntos. De las cinco filas de números, cuatro están
        tachadas. Whitby dice:</p>
        <p>—Es probable que el primer número de cada fila sea el indentificador del apostador,
        ya que no es un negocio donde quieras usar el nombre propio, y el segundo, es su saldo pendiente.
        Sus clientes ya saben su identificación y la dicen cuando exigen la devolución
        de sus apuestas. Todas estas son de un único dígito, así que creo que son pocos clientes,
        pero algunos están metidos hasta el cuello. Solo esta hoja vale alrededor de cien mil dólares.
      </p>
      <p>—Impresionante. Pensé que eras una detective de homicidios.</p>
      <p>—Puede que esto te sorprenda, pero las apuestas deportivas ilegales están relacionadas con mucha actividad delictiva
        seria. —Estudia el recibo—. Supongo que Michael Herschel ya le cobró a
        todos los que están tachados. Se lo llevaré a la brigada antidrogas mañana, a ver si
        les suena familiar. Pero es poco probable sin nombres. Apuesto a que el número ocho
        tendrá una mala semana.</p>
      <p>Tu dolor de cabeza se está menguando un poco.</p>
      <p>—Su hermana lo llevaba encima. ¿Crees que está involucrada?</p>
      <p>—Es probable. —No parece tan interesada.</p>
      <p>—Supongo. No parecía esa clase de persona. ¿No son lo suficientemente ricos ya? —Whitby está guardando sus cosas,
      seguro con la mente en el día por delante.</p>
        <p>—Mira, eres bueno para leer a la gente. Eso no lo niego. Pero si algo aprendí en este trabajo, es
        que <em>todos</em> son esa clase de persona. —Inclina la cabeza hacia ti—. ¿Vas a estar bien solo?</p>
      <p>—Sí, pero gracias. —Jugueteas con la bola de cristal que de alguna forma entró del porche.</p>
      <p>
        —Hiciste un buen trabajo hoy, Pietro. Me diste material policial de verdad para que investigue. Tómate el día,
        visita a un amigo, descansa. Intenta volver a tu vida cotidiana. —Asientes, se va
        y te quedas solo con el martilleo de tu cabeza y tu bola de cristal y no mucho más.
      </p>
      <NextChapter chapter="5" />
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

export const Chapter4 = connect(
mapStateToProps
)(_Chapter)
