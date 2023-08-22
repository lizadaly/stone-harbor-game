const React = require('react')
import { Map, List, NextChapter, FromInventory } from '../components'
import { connect } from 'react-redux'
import { updateInventory } from "../actions"

import { RenderSection } from '.'

const _Chapter = ({currentSection, inventory, chapterId}) => {
  var sections = [
    <section>
      <h2>Capítulo Siete</h2>
      <h3>El porche de Whitby</h3>
      <p>
        Llegaste a tu departamento al borde del colapso solo para encontrar que la contestadora titilaba. Es Whitby. "Ven a mi casa", dijo,
        "Y trae alcohol". Me dio la dirección de un lugar al otro lado del puente y cortó.
        </p>
      <p>
        Lo único que puedes distinguir en la oscuridad de la noche es una casa simple e inmaculada.
        El porche está vacío, lo único que hay es un felpudo y un timbre, el cual tocas.
      </p>
      <p>
        Te abre un hombre. Es gigantesco. No se ve sorprendido, pero tú sí lo estás. "Sí, soy blanco", dice.
     </p>
      <p>
        Antes de que puedas decir algo más estúpido de lo que tu cara muestra, Hank te deja pasar. "¡Tamisha, llegó tu vidente!",
        grita, y agarra la botella de vino barato que compraste en el camino. "Nos gusta más la cerveza, pero gracias".
      </p>
      <p>
        No solo estabas sorprendido por el hecho de que sea blanco, sino que Hank también es excepcionalmente atractivo.
        Es perfecto para esos calendarios de bomberos.
      </p>
      <p>
        "Hank trabaja en la Guardia Costera", dice Whitby al entrar. Es muy extraño verla con ropa casual, un buzo grande
        de los Eagles y unos pantalones elastizados negros. Te hace señas para que la sigas, lo cual haces; pasas por la impecable sala de estar
        hasta llegar a la cocina comedor. En la mesa te espera un plato de espagueti.
      </p>
      <p>
        “Come”, dice.
      </p>
      <p>
        "¿Qué te hace pensar que aún no comí?"
      </p>
      <p>
        Descorcha el vino y te sirve un poco en un frasco. "He visto tu refrigerador". Comienzas a protestar,
        pero Hank el Tanque te está mirando, así que solo tomas el tenedor.
        Cuando ven con satisfacción que comes, Hank se retira y Whitby te hace compañía mientras bebe una lata de cerveza.
      </p>
      <p>
        "Gracias", dices por fin. No era una comida complicada, pero tampoco tienes gustos complicados.
        Inclina la cabeza hacia la sala de estar mientras te mira con una cara de "eres un idiota", así que levantas la voz. "Gracias, Hank".
      </p>
      <p>
        “¡De nada!” te responde desde quién sabe dónde. Oyes un partido de fondo.
      </p>
      <p>
        "La patrulla acarreó a Troiano justo donde dijiste que estaría. Buen trabajo
        con <FromInventory inventory={inventory.c6_car} offset={0} /> <FromInventory inventory={inventory.c6_car} offset={1} />.
        Parece ser que tiene una orden judicial pendiente por multas de velocidad sin pagar,
        así que podemos retenerlo un rato. No ha dicho mucho aún, pero creo que hablará".
      </p>
      <p>
        "Michael Herschel también estaba allí. Se fue justo antes que Troiano".
      </p>
      <p>
        "Maldición, ojalá lo hubiese sabido. Tengo a alguien vigilando su casa,
        pero ni él ni su hermana han ido en días".
      </p>
      <p>
        Completas la historia sobre Jared entre cada bocado de espagueti. "Es extraño, ¿no?" dice. "¿Por qué iría a ti?"
      </p>
      <p>
        Te has acostumbrado tanto a la idea de que estás involucrado en el drama que olvidaste que, para la familia Healey,
        eres un completo desconocido. "Dijo algo sobre que su esposa me mencionó. Supongo que se refería a mi madre".
      </p>
      <p>
      "A Ally le gustaba toda esa mierda cuando era pequeña, perdón por la expresión".
      Le pides que continúe con un gesto magnánimo. "¿Tal vez se le pegó a su esposo?"
      </p>
      <p>
      Te levantas, lavas tu plato y vuelves a sentarte en la mesa. Sacas la alianza del bolsillo
      y abres la servilleta que lo envolvía. "Me dio esto cuando le pedí algo personal".
      </p>
      <p>
        "¿Qué sentimiento... emana?" Lo dice con cuidado, pero no escéptica.
      </p>
      <p>
        "Culpa. Aunque no por el asesinato. Ahora estoy seguro de que Jared no asesinó a su hermano, por más que sea culpable en parte".
      </p>
      <p>
        Está preocupada por ti y quiere demostrártelo. "Te pedí que vinieras porque sonaba a que necesitabas compañía.
        Además, Hank volvió a hacer demasiado espagueti". Te toca el brazo.
        "Estamos aquí para ti. No soy ninguna vidente, pero estamos cerca de descifrarlo. Lo sé".
      </p>
      <p>
        "Espero que tengas razón", dices. "Porque esto me está matando".
        Antes de que te responda, agarras el <List expansions={["anillo", "anillo nervioso y contrito"]} tag="c7_ring" />.
      </p>
    </section>,
    <div className="in-flashback">
      <figure className="chapter7">
        <figcaption className="visuallyhidden">Olas color azul de jeans viejos</figcaption>
      </figure>
      <h3>En la playa</h3>
      <section>
        <p>
          Estás en la playa privada de Alan Healey. Las puntas del techo de su casa son visibles sobre las dunas,
          se elevan por detrás de los densos y opulentos árboles. Es la mañana.
        </p>
        <p>
          El parecido de los hermanos es notable desde esta distancia. Jared, joven, y Alan, mayor,
          pero cortados por la misma tijera en cuerpo y por ahí hasta en espíritu.
          Alan es más ágil de lo que creías, después de todo, bajó por ese camino empinado para llegar aquí. También parece ser que la rabia lo ayudó.
        </p>
        <p>
          "¿No te he dado <em>suficiente</em>?" dice. Está apoyado contra un cartel que dice: <smallcaps>Propiedad privada</smallcaps>,
          mientras que su hermano crea círculos en la arena de tanto ir de aquí para allá. "Ya lo he decidido".
        </p>
        <p>
          "Si nos quitas las propiedades, nosotros seremos..."
        </p>
        <p>
          "<em>Tú</em> lo serás, Jared", dice Alan. "Si reclamo los negocios—cuando lo haga—todo esto deja de ser mi problema.
          Estaba dispuesto a ignorar todo para que te equivoques solo..."
        </p>
        <p>“Te alegraba tomar el dinero cuando era fácil”.</p>

        <p>“Nunca me quedé con nada. Está en un fideicomiso para Sarah”.</p>
        <p>Jared no sabía esto. "¡No es tu hija! ¿Cómo te atreves?"</p>
        <p>"Como vas encaminado, Jared, no quedará <em>nada</em> para ella. Tendrá suerte si no es
        huérfana para el momento en que tus planes lleguen a su fin". Se le suaviza un poco la voz.
        "Estas personas son <em>peligrosas</em>. Son asesinos".
        </p>
        <p>
          "Son mis amigos. Jamás..."
        </p>
        <p>
          "Lo harán. No puedo evitar que arruines tu vida, pero sí puedo evitar que arruines la de tu hija".
          Observa el mar para esquivar la mirada de su hermano. "Decidí vender todo el negocio,
          liquidar los bienes inmuebles. Todo irá para Sarah y Maggie".
        </p>
        <p>
          El horror en la cara de Jared indica que esto no es algo bueno para él. "Nunca podremos saldar
          lo que debemos. Michael me matará".
        </p>
        <p>
          Alan niega triste con la cabeza. "Michael tendrá que encaminarse de vuelta solo. No sé cuándo esta familia se desvirtuó tanto,
          pero se termina con Sarah. Hice una promesa".
        </p>
        <p>
          "Maldito mojigato", dice Jared y hace una pausa. "¿A quién se lo prometiste?"
        </p>
        <p>
          Alan esquiva más su mirada. "Allison".
          </p>
        <p>
          "¿Hablaste con mi esposa? ¿Cuándo?"
        </p>
        <p>
          "Antes de que se fuera. Me contó que se iba, que debía hacerlo porque no estaba a salvo,
          pero no me explicó por qué". Estira la mano; en su palma yace una alianza de oro que combina con la de Jared.
          El anillo se siente triste y dolorosamente solo. "Lo siento, hermano. Debería habértelo dicho".
        </p>
        <p>
          Con un agustiado grito, Jared intenta agarrar el anillo de su exesposa, pero Alan lo arroja
          (justo <em>a través</em> de ti) y aterriza en las olas. Jared grita y empuja a su hermano a la arena.
        </p>
        <p>
          “Me asesinaste”, solloza.
        </p>
        <p>
          "Tú mismo lo hiciste", responde Alan, más triste que enojado. Jared lo deja allí, en la lucha por levantarse.
          Por supuesto que no puedes ayudar, solo mirar.
        </p>
        <p>
          Sientes el tirón del anillo.
        </p>
        <p><em>Pero no me he despertado,</em> piensas mientras te diriges a las olas. <em>Sigo en la visión, sigo en el pasado.</em></p>
        <p>
          Si solo lo estuvieras buscando con los ojos, el anillo ya hubiese desaparecido entre las algas y la espuma;
          pero, en la plana, descolorida e impasible visión, su desesperado anhelo es como un faro. Metes la mano en el agua
          (<em>¿desde cuándo tengo brazos?</em>) y agarras el <List expansions={["anillo", "anillo embrujado"]} tag="c7_ring2" /> de Allison Healey.
        </p>
      </section>
    </div>,
    <div className="in-flashback">
      <figure className="chapter7-2">
        <figcaption className="visuallyhidden">La entrada principal de la sala de una vidente, con carteles que promocionan la lectura de palmas, en blanco y negro</figcaption>
      </figure>
      <h3>En su sala de lectura</h3>
      <section>
        <p>
          ¿Ya despertaste? Si es así, ¿cómo llegaste aquí? ¿No estás en lo de Whitby?
        </p>
        <p>
          Empiezas a notar pequeños detalles: objetos en el lugar equivocado, cosas rotas mágicamente restauradas,
          la cortina de cuentas nueva. Una figura borrosa en la esquina se clarifica. Tu madre.
        </p>
        <p>
          No es un recuerdo tuyo. Nunca la viste así: mayor, cerca de la edad en la que murió, pero todavía saludable.
          Su cabello negro moteado de gris; su piel, siempre olivácea y curtida por el sol y el viento, ahora está llena de arrugas.
          No hay nadie en la habitación con ella.
        </p>
        <p>
          <em>Está sola por tu culpa,</em> piensas, y por primera vez sientes esa verdad. Debió haber sido dificilísimo
          para ella cuidar a un niño sola, pero eras un niño egoísta que solo pensaba en lo que no te podía dar:
          una casa, un perro, hermanos, una vida normal. En cuanto cumpliste 18, le agradeciste mudándote. Le mandabas el cheque recurrente
          y la visitabas de forma esporádica para las festividades, pero, por sobre todo, la abandonaste: venganza por el crimen de hacer
          todo lo mejor para criar a su hijo. Para cuando estuviste ahí para ella, ya estaba por morir.
        </p>
        <p>
          La cortina se agita y aparece una mujer: en sus treinta, teñida de rubio, la viva imagen de su hija. Es Allison, la esposa de Jared.
        </p>
        <p>
         El rostro de tu madre se anima al meterse en el personaje. "¿Buscas los conocimientos de los sabios?"
         (Ni siquiera pudiste pensar en una rutina nueva.)
        </p>
        <p>
          Allison Healey es alegre y jovial. Lleva el cabello característico de los 70, teñido por el sol y enrulado lujosamente.
          Emana el aire de una mujer que tiene un futuro por delante. Es una lectura fácil, seguro querrá saber sobre el amor eterno,
          hijos rubios y una cochera enorme. Tu madre comienza con el ritual y te sorprende lo <em>buena</em> que era para esto.
          No existe artimaña en sus palabras. Sus ojos están llenos de amor incondicional por esta desconocida.
          Sus palabras son hermosas mentiras, pero su deseo por ayudarla a encontrar la felicidad es genuina.
        </p>
        <p>
        “Requiero un objeto personal, uno infundido con el espíritu mismo", dice
        y notas que estás susurrando las palabras con ella, como un rezo silencioso.</p>
        <p>
          Allison Healey se quita <List expansions={["el anillo", "la alianza de oro"]} tag="c7_allison_ring "/> sin vacilar.
        </p>
      </section>
    </div>,
    <section>
      <p>Tu madre lo toma y su reacción es inmediata y violenta. Se sacude hacia atrás y su cabeza se mueve en pequeños espasmos.
      Tiene los ojos abiertos, pero ciegos, y comienza a gemir de una forma que nunca escuchaste antes.
      </p>
      <p>
        Ya entiendes por qué Whitby estaba aterrorizada ese primer día.
      </p>
      <p>
        Healey se aleja, pero tu madre le agarra las muñecas, sus ojos todavía ven a la nada horrorizados. "Escúchame, Allison".
      </p>
      <p>
        "Yo no... Suéltame..."
        </p>
      <p>
        "Jared te traicionará. Si te quedas con él, tú y tu hija morirán". Healey se queda dura e inmóvil.
        "Todavía no te lo dijo, pero está endeudado. No es nada serio, apuesta en los juegos de los domingos con sus amigos.
        Sabe que su hermano lo ayudará si se mete en problemas".
      </p>
      <p>
        Habla con apuro: "Pero no se detendrá. Lo envenenará poco a poco. Les dará trabajo a esos amigos para tapar las pérdidas
        y se quedará con lo mejor de sus ganancias. Pensará que le está yendo bien y así será, mientras que involucre a más gente.
        Cuando se quede sin amigos, le pedirá ayuda a su familia. Su hermano, su sobrino; los atrapará en su órbita.
        Utilizará las propiedades de su hermano como garantía en préstamos peligrosos para seguir tapando las pérdidas.
        Pero se volverá adicto a las ganancias, Michael también. Para cuando se dé cuenta de que está demasiado metido, él lo arrastrará aun más.
        No tendrá otra opción. Michael es peligroso y habrá hecho amigos igual de peligrosos a los que no les gustará que los estafen".
      </p>
      <p>
        "Esto es una locura, Jared jamás..." No lo cree, pero al mismo tiempo sí. ¿Cómo no creer, cuando te dan tantos detalles?
      </p>
      <p>
        "Lo veo con tanta claridad. Entrarán a tu casa mientras duermes. Hay dos hombres malvados en la habitación de tu hija
        y lo harán ver como un robo. Dirán: 'Atlantic City es tan violenta. Nadie debería criar a una familia allí.
        Se deberían haber quedado en Stone Harbor'".
      </p>
      <p>
        "¿Qué puedo hacer? ¿Deberíamos irnos? No puedo permitir que la lastimen". Ahora ella también la está tomando de la mano,
        sus palmas entrelazadas sobre la mesa. Tu madre todavía no la mira, en una visión ninguno de los dos puede ver.
      </p>
      <p>
        "No servirá. Jared ama a Sarah, siempre presume a su hermosa hija. Ella es <em>su</em> garantía. Así lo mantienen a raya.
        Si te la llevas, pensarán que la envió lejos por seguridad y las vendrán a buscar a ambas. También puedo ver eso.
        Te encuentran, en un motel, en un semáforo. No importa lo que hagas, siempre la encuentran".
      </p>
      <p>
        Allison llora desconsoladamente, como si ella misma lo estuviera viendo. Tu madre asiente.
        "Existe una forma. Una única forma. Si te vas, pensarán que solo lo abandonaste, que te asqueó su conducta.
        No puedes llevarte a Sarah, pero estará a salvo".
      </p>
      <p>
        "¿Qué? No puedo abandonar a mi propia hija".
      </p>
      <p>
        "De todos los futuros posibles que veo, este es el único donde sobrevive. Veo que varias personas la protegerán.
        Algunos te son desconocidos ahora. Debes encontrarle un guardián, alguien en quien confíes, alguien fuerte.
        Esa persona encontrará también a otros y la mantendrán a salvo".
      </p>
      <p>
        "Y su tío..." El rostro de tu madre se nubla.
        Sabes lo que está viendo, de lo que es testigo. "Sacrificará todo para protegerla", dice.
      </p>
      <p>
        "Esto es tan injusto. Nada de esto ha sucedido todavía..."
      </p>
      <p>
        "<em>Es</em> injusto. Debes sacrificar tu felicidad y dejarla para que esto suceda".
      </p>
      <p>
        <em>Allí es cuando tu madre gira y te mira directamente.</em>
      </p>
      <p>
        Sonríe como siempre hacía cuando estaba orgullosa de ti.
        "Algún día, volverás a ver a tu hija otra vez. Cuando lo hagas, te perdonará por haberte ido".
      </p>
      <p>
        Tu madre deja caer el <List expansions={["anillo", "anillo lleno de la culpa de su dueña"]} tag="c7_ring_drop" />.
      </p>
    </section>,
    <section>
      <h3>En la playa</h3>
      <p>
        Estás parado entre las olas y Healey vuelve lento, muy lento hacia su casa. Miras tu mano
        y sientes como tú también comienzas a alejarte de esta visión.
        El <List expansions={["anillo", "anillo"]} tag="c7_ring_drop2" /> cae a través de tu mano desvaneciente.
      </p>
    </section>,
    <section>
      <h3>En la sala de Whitby</h3>
      <p>
        “¿Dónde está Sarah?” dices antes de siquiera volver del todo al presente.
        "Siempre se trató de Sarah. Está en peligro".
      </p>
      <p>
        Hay que reconocer que Whitby no pierde tiempo en preguntas. "Asumí que estaba con su padre".
        Se levanta para hacer una llamada y te quedas solo con Hank. Deberías sentirte incómodo, pero, en vez de eso,
        te sientes exhausto y agradecido por la compañía.
      </p>
      <p>
        "Tamisha dice que eres un vidente legítimo", dice con su imposible barítono.
      </p>
      <p>
        "Es una habilidad nueva", dices débil. "¿Por qué? ¿Quieres conocer tu futuro?"
      </p>
      <p>
        Él mira hacia la cocina. "Ya sé cómo será".
      </p>
      <p>
        Whitby irrumpe en la sala con un arma que salió de la nada, te agarra del codo y te levanta de un tirón.
        "Nadie ha visto a la niña en días. Maldición".
      </p>
      <p>
        Miras fijamente el arma. "¿A dónde mierda vamos?"
      </p>
      <p>
        "Sospecho algo, pero necesito que me cuentes todo. No te preocupes, Uri Geller, esperarás en el auto".
      </p>
      <p>
        Mientras sales a la oscuridad de la noche a trompicones, oyes a Hank: "Yo lavo, amor".
      </p>
      <NextChapter chapter="8" />
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

export const Chapter7 = connect(
  mapStateToProps
)(_Chapter)
