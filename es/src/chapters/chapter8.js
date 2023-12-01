const React = require('react')
import { Map, List, NextChapter, FromInventory } from '../components'
import { connect } from 'react-redux'
import { updateInventory } from "../actions"

import { RenderSection } from '.'

const _Chapter = ({currentSection, inventory, chapterId}) => {
  var sections = [
    <section>
      <h2>Capítulo Ocho</h2>
      <h3>En el auto</h3>
      <p>
        Omites la parte donde tu madre te vio. Es privado. Pero le cuentas todo el resto en el camino.
        La reacción de Whitby con respecto a su amiga es fría.
        </p><p>―No sé qué pensar de una madre que abandona a su hija.
      </p>
      <p>
        ―Pienso que si lo hubieses visto... ―comienzas a decir― era peor que lo que me pasa a mí y sabía muchos más detalles.
      </p>
      <p>
        ―Sí, pero... ―Whitby dobla en una oscura calle residencial― siempre le gustó la fiesta. No sé si estaba lista para tener un hijo.
      </p>
      <p>
        No entiendes por qué te resulta importante que ella lo entienda, pero lo es.
        </p><p>―No escapó de sus responsabilidades. Fue valiente. Se sacrificó por su hija.
      </p>
      <p>
        ―Tal vez ―responde―. Esperemos que no sea demasiado tarde.
        </p><p>Entra a un sinuoso camino privado. Te encuentras en la mansión de los Healey en Stone Harbor.
      </p>
      <p>
        ―Troiano se quebró tal como esperabamos. Confesó que empezó con algo pequeño, apostaba solo en los juegos
        de los domingos, todos lo hacen, pero que escaló. El puerto deportivo, los estacionamientos, los depósitos:
        el imperio de los Healey es perfecto para lavar dinero, contrabandear, lo que sea. Por lo que sé siempre estuvieron limpios;
        Alan tan solo era bueno para gestionar propiedades e invertir bien. Pero desde que se retiró y dejó que Jared tomara el mando,
        todo está vacío y relacionado con la mafia.
      </p>
      <p>
        ―Hace tiempo que Alan lo sabía ―dices―, pero no quería creerlo o esperaba que se resolviera solo.
        Cuando se dio cuenta de que su hermano era un caso perdido, decidió protejerse a él, a su esposa y a su sobrina. Es la hija que nunca tuvieron.
        Creo que Michael se enteró de sus planes y sabía que si desaparecía el negocio como tapadera, varias personas se enojarían mucho, mucho.
      </p>
      <p>
       ―Creo que al fin y al cabo, no importaba ―dice Whitby―. Si la mitad de lo que Troiano dijo es verdad,
       los federales se van a dar un festín. Los Healey perderán todo.
      </p>
      <p>
        Apaga las luces y conduce hasta la entrada de la casa.
        La casa está a oscuras, pero el auto de Michael Herschel está aquí, metido en los árboles nudosos
        y cubierto apresuradamente con plantas. Emana miedo a ser descubierto.
      </p>
      <p>Todos los objetos que te rodean te llaman.</p>
      <p>
        ―¿También perderán la casa? ―Whitby asiente― Qué pena. ―Cada piedra y columna te dice que era una casa feliz.
      </p>
      <p>
        Le señalas el auto a la detective.
        </p><p>―Quédate aquí y no te muevas ―dice.
        Saca su{" "} <List expansions={["arma", "arma inquieta"]} tag="c8_gun" /> y la revisa con manos firmes y expertas.{" "}
        <Map
         from={inventory.c8_gun}
         to={{
           arma: "El arma te cuenta que nunca fue disparada en el trabajo. Teme lastimar a la persona equivocada. Espera nunca ser utilizada."}} />
      </p>
    </section>,
    <section>
      <p>
        Whitby desaparece detrás de la casa. Estúpidamente, te das cuenta que no sabes si pidió refuerzos o qué deberías hacer si algo sale mal.
        La <List expansions={["puerta de entrada", "vieja mansión está en problemas y la puerta de entrada "]} tag="c8_house" /> te llama.
      </p>
    </section>,
    <section>
      <p>
        La luna está casi llena y el camino de gravilla blanca resplandece. Puedes oír las olas del océano, y el sonido de las cigarras
        y los grillos colman el aire. Pero todo eso queda casi ahogado ante la cacofonía de voces inanimadas en la casa. Te mueves hacia la{" "}
       <List
       expansions={[
        "escalinata",
        "escalinata de concreto, donde las pisadas de hombres asustados han dejado manchas negras psíquicas que sabes que solo tú puedes ver"]}
          tag="c8_prints" nextUnit={null}/>. A través
        de una{" "} <List expansions={[`pequeña ventana`,`pequeña ventana en la puerta`]}
        tag="c8_entryway" nextUnit={null}/> <Map
          from={inventory.c8_entryway} to={{
            undefined: " solo ves oscuridad.",
          ventana: `ves el contorno del vestíbulo y oyes el zumbido de más objetos hambrientos...`}
          }/>
        &nbsp; La <List expansions={["perilla", "perilla acojedora"]} tag="c8_doorknob" /> te invita a abrirla.
      </p>
    </section>,
    <section>
      <p>
        La giras y sabes vagamente que esto es estúpido, deberías volver a la seguridad del auto.
        Pero ya estás adentro y la alfombra está ennegrecida
        <Map
          from={inventory.c8_prints}
          to={{
            undefined: ` con pisadas superpuestas, `,
            escalinata: ` con las mismas pisadas, `,
          }} /> manchas no de lodo, sino de miedo y enojo. No ves pisadas del tamaño de una niña,
          pero la <List expansions={["baranda de la escalera...", "baranda te llama como si te extendiera la mano para bailar, te seduce para que la sigas."]} tag="c8_stairrail"/>
      </p>
      <p>
        Jared Healey yace tirado al pie de la escalera con el cuello doblado hacia atrás. No sabes si fue la caída lo que lo mató, pero hay un <List expansions={["pesado atizador de hierro", "apenado atizador de hierro "]} tag="c8_poker" nextUnit={null} /> a su lado, empapado de sangre. <Map from={inventory.c8_poker} to={{hierro: "Susurras tus pesares." }} />
      </p>
    </section>,
    <section>
      <p>
        Llegas arriba y te encuentras en un pasillo que va a la izquierda y la derecha. Hay cuadros en toda la pared,
        <List expansions={[" retratos de los miembros de la familia", " retratos de la familia, mirando cómicamente a la derecha, a la derecha."]} tag="c8_portraits" />
        <Map from={inventory.c8_portraits} to={{undefined: " en el increíble estilo antiguo."}} />
      </p>
    </section>,
    <section>
      <p>
        Una <List expansions={["mano", "mano firme"]} tag="c8_hand" /> en el hombro te paraliza.
      </p>
    </section>,
    <section>
      <p>
        ―¿Qué demonios piensas que estás haciendo? ―sisea Whitby. Un movimiento periférico te distrae y miras a la alfombra oriental
        debajo de tus pies. La alfombra se extiende por todo el pasillo y, al mirarla, el estampado abstracto se une
        y se reforma en una serie de flechas ondulantes, como esos carteles de neón en los casinos.
      </p>
      <p>
        ―Tienes que ir por allí ―le dices mientras apuntas a la izquierda―. Detén a Michael.
      </p>
      <p>―¿Cómo sabes dónde está? ―susurra.</p>
      <p>―Me lo dijo la alfombra.</p>
      <p>Por alguna razón, la respuesta le es suficiente.</p>
      <p>―¿Qué haras tú?</p>
      <p>―Iré por Sarah.</p>
      <p>―Deberías esperar a...
      </p>
      <p>
        ―No. Estoy aquí para hacer esto. ―Abres la <List expansions={["puerta de la derecha", " puerta de la habitación de Healey"]} tag="c8_bedroomdoor" />.
      </p>
    </section>,
    <section>
      <hr/>
      <h3>En el estudio</h3>
      <p>
        La habitación está casi tan tenue como en la vida real. La puerta interna que da a la habitación de los Healey está cerrada.
        Ella te dice que está cerrada, pero que quiere estar abierta porque adentro hay una pequeña niña asustada.
      </p>
      <p>
        Te estiras a abrirla, pero los libros en los estantes erizan sus lomos hacia la esquina de la habitación.
        La figura ensombrecida que recuerdas de tu visión está sentada allí. Ya no está borrosa. Es Michelle Herschel.
      </p>
      <p>
        <em>―¿Joey?</em> ―dice desconcertada. <List expansions={["Su rostro", ["Sus ojos aterrorizados", "sus mejillas enrojecidas", "su frente transpirada"], "Su expresión aterrorizada",]} tag="c8_michelle" conjunction="y" /> apenas se
        <Map from={inventory.c8_michelle} to={{
          undefined: " ve ",
          rostro: " ven ",
          aterrorizados: "ven ",
          transpirada: "ve ",
          enrojecidas: " ven ",
        }} /> en la penumbra.
          </p>
    </section>,
    <section>
      <p>
        <Map from={inventory.c8_michelle} to={{
          aterrorizados: "Te mira de arriba a abajo, intentando descifrarte.",
          enrojecidas: "Su rostro está enrojecido como los mentirosos cuando los descubren.",
          transpirada: "Ha transpirado un largo rato, sola aquí adentro."
        }}/> Está intentando entender cómo el desconocido de la estación de policía es la misma persona que ha estado esperando.
      </p>
      <p>
        <em>Nunca fue su hermano.</em>
      </p>
      <p>
        ―Sí, soy Joey ―respondes. El reloj continúa con su tictac (literalmente, es como un martilleo en tu cabeza),
        pero te das un momento para respirar antes de comenzar con tu actuación―. Estoy aquí por la niña ―dices la verdad.
      </p>
      <p>
        Te analiza desde un sillón plagado de repulsión. La lámpara de mesa está prendida, pero su luz se resiste a iluminarla
        y te baña a ti en su brillo. Esto no ayuda: quien sea que estás fingiendo ser seguro no se parece mucho a ti.
      </p>
      <p>
        <Map from={inventory.c8_michelle} to={{
          aterrorizados: "―¿Qué miras? ―dices y tratas de verte aburrido.",
          enrojecidas: "―¿Qué escondes? ―dices y la señalas de modo acusador.",
          transpirada: "―Apesta a transpiración aquí ―dices y la miras con asco."
        }}/>&nbsp; ―¿Dónde está?
      </p>
      <p>
        ―¿Eres Joey de AC? ¿Por qué estabas en la estación de policía? ―No me cree.
      </p>
      <p>
        ¿Por qué estaría un delincuente en un lugar lleno de policías? Frotas los dedos, haciendo el gesto universal de dinero.
        </p><p>―Protegía mis activos. ―Por experiencia, sabes que la mejor forma de mantener una mentira es cambiar de tema,
        así que agregas―. ¿Qué le pasó a Jared?
      </p>
      <p>
        Sus ojos brillan; quiere alardear.
        </p><p>―Está fuera de escena, ya no necesitas a la niña. Ahora nos tienes a Michael y a mí,
        somos cómplices, estamos preparados para llevar las cosas al próximo nivel. Me aseguraré de controlar las propiedades... ―Se oye un alboroto afuera, un ruido sordo.
        Los muebles te susurran, un mensaje que pasó de objeto a objeto desde el salón:
        Michael Herschel fue sometido, Whitby está en camino.
      </p>
      <p>
        Pero Michelle es demasiado rápida; ve la extraña interacción en tu rostro, cómo inclinas la cabeza hacia la puerta.
        </p><p>―Ni de chiste eres él. ―Se levanta del sillón y sostiene <psychic><List expansions={["algo ", "una navaja automática ", "una navaja automática zumbante "]} tag="c8_blade" /></psychic>
        frente a ella mientras retrocede hacia la puerta del cuarto y con la otra mano busca la perilla.
      </p>
    </section>,
    <section>
      <h3>En ese entonces</h3>
      <p>
        ―Abre la puerta ―dice Michelle Herschel. Continúa apuntando con la navaja, el filo extendido; la sostiene firmemente
        con esos guantes malévolos. Alan Healey retrocede hacia la salida con las manos levantadas, pero ella niega
        con la cabeza y apunta con la navaja―. La otra. ―Él la rodea, aún con una postura defensiva, y obedece. Se cuela luz de la habitación.
      </p>
      <p>―Maggie llegará en cualquier momento ―dice Healey.</p>
      <p>
        ―Está dormida en la habitación de Sarah. Por tu bien, espero que no se despierten. Bueno, <em>¿dónde esta la escritura?</em>
      </p>
      <p>―No sé a qué te...</p>
      <p>―Tío Healey, no quiero lastimarte ―dice. Pero lo hace.</p>
      <p>
        ―Es tarde. Ya lo firmé. Está hecho, no puedes tocar el dinero.
      </p>
      <p>
        ―Sé que mientes ―responde Michelle y tú también lo sabes. Lo acorrala más en la habitación y tú los sigues,
        incapaz de detener este asesinato por segunda vez.
      </p>
      <p>Hay dos camas pequeñas, pero ellas te aseguran que es porque Maggie se mueve mucho al dormir y se decidió hace años
      que así era mejor. Todavía se aman, dice la habitación.
      </p>
      <p>
        Healey retrocede hasta su propia cama, la cual quiere abrazarlo y protegerlo de esta mujer.
        </p><p>―No ―dice ella y vuelve a señalar con la navaja,
        esta vez hacia la cómoda. Él se levanta y sus ojos brevemente ojean <List expansions={["la mesa de noche", "la mesa de noche firme y protectora"]} tag="c8_nightstand" />.
      </p>
    </section>,
    <section>
      <p>
        Se dirige hacia la cómoda, pero tropieza y se agarra de la mesa de noche para estabilizarse. Solo tú, Michelle no, ves su rápido movimiento:
        empuja un papel que se desliza y cae entre el mueble y la pared. La mesa de noche está determinada a esconder el papel a toda costa.
      </p>
      <p>
        En la mesa también había un cortapuros. Lo agarra y se lo tira a su sobrina, pero lo evita con facilidad.
        Termina en el estudio donde ella luego lo agarrará y arrojará en la urna cuando escape.
        </p>
      <p>
        ―Toma tu medicación, tío ―dice Michelle apuntando hacia el frasco―. No pares de tomarla hasta que desaparezca.
      </p>
      <p>
        ―Michelle, no hagas esto...
      </p>
      <p>
        ―No nos dejaste otra opción ―responde, le falla un poco la voz al decir eso―. Eres tú o nosotros. Tuviste una buena vida.
        Michael te dio la oportunidad de hacer lo correcto. ―Ves en su rostro que realmente cree en lo que dice.
      </p>
      <p>
        Healey está llorando en silencio mientras apila pastillas en su mano. No soportas ver esto, pero por suerte no tienes que hacerlo;
        el dolor psicológico de la visión se transforma en <List expansions={["dolor real", "el dolor de agarrar el filo de una navaja"]} tag="c8_holdblade" />...
      </p>
    </section>,
    <section>
      <h3>Ahora</h3>
      <p>
        Lograste atrapar a Michelle Herschel contra la puerta cerrada de la habitación: una mano en la navaja (sangre <em>chorrea</em> de tu mano)
        y la otra en su muñeca para impedir que abra la puerta. Le has estado gritando, contándole el minuto a minuto de lo que viste y, por fin,
        por primera vez, comprende el horror de lo que hizo. Tal vez puede sentir el desprecio de toda la casa,
        cada hilo y cada clavo que se llena por última vez de dolor.
      </p>
      <p>
        Michelle suelta la navaja y la perilla de la puerta; se desliza hacia el piso, su cabello suelto alrededor de su rostro.
        Te alejas trastabillando a la par que Whitby entra con su arma extendida.
        Sientes como suspira de alivio, no tuvo que ser disparada.
      </p>
      <p>
        ―Todo está bien ―dices― Sarah está a salvo.
        </p><p>Whitby se encarga de Herschel mientras abres cuidadosamente la puerta de la habitación.
        Por primera vez conoces a la pequeña niña en el centro de todo esto. Está acurrucada entre las dos camas
        y sostiene con fuerza la muñeca sin cabeza.
      </p>
      <p>
        Te arrodillas ante ella mientras le susurras tonterías y con cuidado tocas <List expansions={["la muñeca", "Vicky, la muñeca maltratada, pero feliz"]} tag="c8_doll" />.
      </p>
    </section>,
    <section>
      <p>―Vicky quiere que sepas que todo estará bien ―dices con sinceridad―. Dice que siempre te cuidará.
      </p>
      <p>Sarah hace una mueca.</p>
      <p>―Las muñecas no hablan.</p>
      <p>―Es una buena regla de oro, pero a veces hacen excepciones.</p>
      <p>
        La niña mira atrás tuyo y ve a Whitby en la entrada.
        </p><p>―¡Tía Tamisha! ―grita y corre hacia ella.
        La muñeca queda olvidada de momento. No le importa: ella es feliz cuando Sarah es feliz.
      </p>

      <p>
        Whitby abraza e inspecciona a la niña, la distrae mientras otros oficiales colman la casa, quitan el cuerpo
        y sacan a los silenciosos y desafiantes Herschel. Rodeas la cama para llegar a la mesa de noche, la separas de la pared y recuperas el papel
        que Alan Healey escondió en sus últimos minutos de vida.</p>
      <p>
        Es la escritura original, de este terreno y de la casa, para un fideicomiso a nombre de Sarah Healey, fechado el día de su muerte y sin firmar.
      </p>
      <p>
      Así como el cortapuros, se siente incompleto e inconcluso. Te pide ayuda. Lo llevas hasta la cómoda (ya sacaron toda la medicación
      y las pertenencias personales), pero hay un simple <List expansions={["bolígrafo barato", "bolígrafo barato explotando de tinta"]} tag="c8_pen" /> en el primer cajón.
      </p>
    </section>,
    <section>
      <p>
        La caligrafía de Healey era naturalmente fluida

         <Map from={inventory.p0_library_things} to={{nota: ", no como la nota escrita con prisa de esa primera visión,"}} />
         y un poco arrogante. El bolígrafo te guía con naturalidad y con cada trazo sientes como la escritura suspira de alegría.
         </p><p>―Esto es para su abogado ―le dices a Whitby que seguro vio cómo falsificaste la firma de Alan, pero igual
         toma la escritura con una mano mientras sostiene la mano de Sarah con la otra.
      </p>
      <p>
        Al soltarla, la conexión que tenías con la casa se termina, como un interruptor que se apaga. Terminó al fin.
      </p>
      <p>Sientes un inmenso alivio y una tremenda soledad.</p>
      <NextChapter chapter="9" />
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

export const Chapter8 = connect(
  mapStateToProps
)(_Chapter)
