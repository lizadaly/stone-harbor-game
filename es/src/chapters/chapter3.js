const React = require('react')
import { Map, List, NextChapter } from '../components'
import { connect } from 'react-redux'
import { RenderSection } from '.'

const _Chapter = ({currentSection, inventory, chapterId}) => {
  var sections = [
    <section>
      <h2>Capítulo Tres</h2>
      <h3>En la oficina de Whitby</h3>
      <p>
        Estabas seguro que nunca podrías dormirte, pero anoche sentiste un cansancio en todo el cuerpo que no habías sentido
        desde que eras un niño. Recuerdas los días de verano cuando hacía mucho calor para quedarse en la sala de lectura
        (mamá no compró un aire acondicionado hasta el año 75, mucho despúes de que te mudaste) y pasabas
        todo el día en el océano. No eras muy bueno nadando, pero tan solo pelear contra
        la corriente te cansaba, hasta que volvías a casa, dejabas un rastro de arena en el vestíbulo y las
        escaleras hasta el departamento sobre la tienda, y te desplomabas sobre la cama. Mamá
        no empezaba a trabajar hasta
        la tarde, entonces solías dormir durante todo ese tiempo hasta que te despertaba, a menudo
        mucho despúes de la medianoche, y preparaba una cena simple. Como resultado, solías perderte lo que daban en
        la televisión, lo que obviamente te hizo aun más popular con tus compañeros de la escuela.
      </p>
      <p>
        “¿Crema?” pregunta Whitby e interrumpe tus pensamientos.
      </p>
      <p>Niegas con la cabeza. “Intento dejarla. Aunque sí acepto un montón de azúcar”.
      </p>
      <p>
        Te da una taza y un puñado de
        sobresitos de azúcar. Su oficina es compartida, pero es fin de semana y solo están
        los policías de guardia, completando papeleo tristemente en la comisaría.
      </p>
      <p>
        Cierra la persiana veneciana que da al área común, aunque
        tiene tantas arrugas y dobleces que apenas da privacidad.
        Se siente como si te fueran a interrogar, lo que es verdad.
      </p>
      <p>
        “¿Por qué volviste a Nueva Jersey?” Cuando luces confundido, dice “Después de que murió tu mamá. Era dueña
        de esa propiedad, así que seguro vale mucho, justo ahí en el paseo marítimo”.
        Se sienta en frente tuyo y entrelaza las manos con delicadeza.
      </p>
      <p>
        “¿Revisaste mis antecedentes?” Se encoje de hombros: <em>Eso es lo que hago</em>. “Volví a casa
        cuando ella estaba en el hospital, pensé que manejaría las cosas un tiempo hasta que se recuperara”.
        Pausas,
        le das un sorbo al café, agregas más azúcar. “Nunca pasó. Todavía no encontré el tiempo para venderlo”.
      </p>
      <p>
        “Eso fue hace cuatro años”. Lógicamente sabes esto, pero es diferente cuando alguien más lo dice en voz alta.
        Antes de poder responder, dice
      “Perdón, no me incumbe saber por qué”.</p>
      <p>
        Vacilas y luego dices “No siempre existe un porqué. A veces las personas
        solo quedan... estancadas”.
      </p>
      <p>Asiente y levanta una pequeña pila de fotos y empieza a exponerlas
        con cuidado hacia abajo. Sería una excelente crupier.
      </p>
      <p>“¿Otra prueba?” suspiras.</p>
      <p>“No, tonto. Es hora de que conozcas a la familia”. Da vuelta la
        primera <List expansions={["foto", "foto de Healey y un joven parecido"]} tag="c3_healeyphoto" />.
      </p>
    </section>,
    <section>
      <p>“El de la izquierda es Alan y el de la derecha es su hermano menor Jared.
        Fui a la escuela con la esposa de Jared, Allison, fuimos vecinas unos años, y
        nos mantuvimos en contacto cuando se fue a la universidad. No conocí a Jared hasta que se casaron.
        Su familia y la mía no iban exactamente a las mismas fiestas”. Reflexiona
        un momento. “Nunca supe por qué me nombró madrina de Sarah. No soy católica y
        no eramos cercanas en ese momento. Solo dijo que quería asegurarse de que su hija estuviera ‘protegida’, pero
        de qué, no sé. Asumí que era la única oficial que conocía.
      </p>
      <p>
        “Hace nueve años, se fue. Solo dejó una nota que decía que había decidido comenzar una nueva vida.
        Intenté rastrearla;
        me dejó un mensaje en la oficina donde decía que había conocido a alguien más y que
        no la buscara. No estaba de acuerdo, pero ¿quién soy yo para juzgarla?”
      </p>
      <p>“¿Cómo lo tomó su esposo?”</p>
      <p>“Como te lo imaginas. Así que ha estado criando a su
        hija solo. Es un buen padre soltero, pero la clase que cree que se merece
        una medalla por hacer lo que millones de mujeres hacen cada año”. Da vuelta
        otra <List expansions={["foto", "foto de Sarah, la niña con la muñeca"]} tag="c1_photos2"/>.
      </p>
    </section>,
    <section>
      <p>“Esta foto es de hace unos años, ya tiene once”.
        Whitby la considera un momento. “Todos aman a esa pequeña. No solo porque
        su mamá la abandonó, sino porque simplemente es una chica dulce”.
        Da vuelta <List expansions={["otra foto", "una foto de dos gemelos adultos"]} tag="c1_photos3" />.</p>
    </section>,
    <section>
      <p>“Michael y Michelle Herschel”, dice y no puedes evitar resoplar. “Sí, cero puntos por
        originalidad. Son los sobrinos de Alan; su madre era Christina, la hermana mayor de
        Alan y Jared, pero falleció hace unos años. Los gemelos aún viven en su casa en Sea Isle.
      No los conozco personalmente”.</p>
      <p>“Última”, dice y te entrega <List expansions={["una foto de una mujer que reconoces", "una foto de Maggie Healey"]} tag="c1_photos4"/>.</p>
    </section>,
    <section>
      <p>“Margaret o Maggie. Una mujer agradable, pero estricta también, como viste. Por lo que oí sería la
        primera en salvarte de problemas y también la primera en arrojarte a
        la calle si cometes el mismo error. Si más personas fueran como ella, no tendría trabajo”.
      </p>
      <p>“Ella no lo mató”, dices y te sorprendes a ti mismo. “Vi como lo miraba la noche
      que murió. Estaba preocupada por él. Lo amaba”.</p>
      <p>
        “Yo también lo creo, pero nunca se sabe”, dice un poco triste. “Todos los que te he mostrado
        estaban en o cerca de la finca Healey el fin de semana que murió.
        Si fuera una investigación de asesinato activa, todos estarían
        bajo vigilancia, pero ¿una puerta cerrada, un medicamento común, una víctima anciana?
        Solo indicaba una muerte desafortunada, pero normal”.
      </p>
      <p>“¿Todavía piensas eso?” preguntas.</p>
      <p>Le suena el teléfono antes de poder responder. Whitby escucha y asiente un par de veces, luego
        tapa el auricular. “Debo atender esto. ¿Puedes esperar afuera?”
      </p>
      <p>Desterrado, te escabulles a través de la comisaría hacia una sala de espera cercana. Seis sillas de plástico, algunos otros hombres.
        Aquí no es el ingreso
        general, ese estaría infestado de gente impaciente y borracha, enojada o, lo que es más probable, ambos.
        Aquí es donde ponen a las visitas que vinieron por voluntad propia, los que vienen a hablar con
      los detectives.</p>
      <p>Nadie luce
        contento de estar aquí, y honestamente no te gustaría compartir una cerveza con ninguno,
        pero al menos estas personas no están vomitando.
        Finges que no existen y escudriñas una pila de revistas obsoletas sobre una mesita improvisada.
      </p>
      <p>
        Estás hojeando una edición de 1982 de <em>Selecciones</em> (peor, crees que esta ya la leíste)
        cuando una mujer empieza a discutir con un joven oficial impasible:
        “¡Pero la detective Whitby me dijo específicamente que viniera ahora!” Levantas la vista
        y, con sorpresa, reconoces a la sobrina mayor de Healey, Michelle, de la foto.
      </p>
      <p>Le dicen que se calme y espere sentada. Ella se sienta en frente tuyo en una de las pocas sillas vacías.</p>
      <p>Sin duda, bajo ninguna circunstancia deberías interactuar con esta mujer. Estos son asuntos policiales y está
        aquí, en este momento, esperando para hablar con la policía. Deberías irte a casa. La temporada de turistas solo tiene
        diez semanas y equivale al 80% de tus ingresos de todo el año. Este no es tu problema.
      </p>
      <p>
        Pero entonces piensas en esa muñeca mirándote.
      </p>
      <p>
        Michelle Herschel, como su gemelo, es rubia, lleva el cabello separado justo a la mitad
        con un flequillo largo escondido detrás de las orejas. No lleva joyas, ni siquiera un
        reloj, pero seguro solo se lo olvidó; se mueve inquieta en el asiento y ya miró dos veces su muñeca
        solo para encontrarla vacía. No está nerviosa ni se siente culpable,
        simplemente irritada. Tiene otros compromisos. Y acaba de notar
        que <Map from={inventory.c3_staring} to={{staring: "observas"}}/>

        <List expansions={["observas", ["sus manos", "sus zapatos", "su bolso"], "la observas"]} conjunction="y" tag="c3_staring"/>.
        <Map from={inventory.c3_staring} to={{
          manos: " Sus manos están bien cuidadas, limpias, pero sin manicura.",
          zapatos: " Sus zapatos son burdos, anticuados. Probablemente ortopédicos.",
          bolso: " El bolso que lleva, ¿es marrón? ¿Tostado? ¿Crudo? Apropiado sin duda."
        }}/>
      </p>
    </section>,
    <section>
      <p>“Podría ser peor”, dices con una sonrisa triste. “¿Vio la <em>otra</em> sala de espera?”</p>
      <p>No responde. ¿Quién puede culparla? Eres un extraño raro
        que le habla en una comisaría. <Map from={inventory.c3_staring} to={{
          manos: `“Aquí tiene”, dices y le pasas una toallita de mano que te robaste de la oficina de Whitby.
          “Para cuando se vaya. Solo hay un baño y no tiene jabón”`,
          zapatos: `Finges intentar ponerte cómodo en el asiento. “Dios, ¿todo el día trabajando y ahora estas
          sillas? Estoy listo para confesar lo que sea”`,
          bolso: ` “Lamento molestarla”, continúas, “pero ¿tiene un pañuelo?” Las mujeres siempre tienen pañuelos en el bolso.
          “Debe haber moho acá o algo, mi alergia me está matando”
          `
        }}/>.
      </p>
      <p>“<Map from={inventory.c3_staring} to={{
        manos: "Gracias",
        zapatos: "Sí, yo también",
        bolso: "Perdón, no"
      }}/>”, dice despacio. <Map from={inventory.c3_staring} to={{
        manos: "Se aferra más a un bolso marrón y evita tu mirada",
        zapatos: "Se aferra más a un bolso marrón y esconde los zapatos abajo del asiento",
      bolso: "Se aferra más al bolso" }}/>. Sientes algo <psychic>sospechoso, paranoico</psychic>,
        acobardándose en su bolso, como un ratón nervioso.
      </p>
      <p>
        Herschel mira alrededor, seguro esperando que otra mujer
        la salve, pero no hay nadie más en la sala de espera aparte de <List expansions={["tipos más desagradables que tú", "unos tipos, pero notas en particular a un motociclista sentado a su lado"]} tag="c3_guys" />.
      </p>
      <p>
        Si le sigues hablando, es posible que la espantes, así que necesitas que venga a ti
        si pretendes conseguir ese bolso.
      </p>
    </section>,
    <section>
      <p> Es un tipo común que parece pertenecer a un moto club. Maneja por toda la autopista en el verano
        con un grupo de amigos. Está gruñiendo un poco ahora que nota que
        estás <List expansions={["mirandolo", "mirandolo a él. En vez de detenerte, le arqueas las cejas un poco hacia Michelle Herschel en el idioma universal de hombres sórdidos"]} tag="c3_biker" />.
      </p>
    </section>,
    <section>
      <p>
        <Map from={inventory.c3_biker} to={{
          él: "El motociclista luce confundido, así que señalas con la cabeza a Michelle y finalmente capta la indirecta. Se desliza hacia el asiento junto a ella, sin molestarse en alejar su pierna para que no invada su espacio personal."
        }} />

      </p>
      <p>
        Es obvio que Herschel no quiere tener nada que ver con él y decide que eres lo mejor de lo peor. Se mueve
        hacia el asiento vacío restante al lado tuyo. Su bolso está entre los dos y puedes sentirlo
        alejarse temeroso. Hay algo dentro que no quiere ser encontrado.

        El motociclista le murmura algo. “Déjela tranquilo, amigo”, le adviertes y parece
        ofendido, ¿no estaban del mismo lado?
      </p>
      <p>
        “Perdón”, dice la señora Herschel de repente. “Fui maleducada con usted”.
      </p>
      <p>
        “No hace falta disculparse”. <em>Además, intento robarte el bolso.</em>
      </p>
      <p>
        “Soy Michelle”.
      </p>
      <p>
        “Frank”, contestas. “Frank Desiderio”. Ese era el apellido de tu padre. Nunca fue el tuyo.
      </p>
      <p>
        “¿Y a qué te dedicas, Frank?” No está verdaderamente interesada, solo está siendo educada y
        se nota cuando agarra el bolso y empieza a revolver las cosas adentro, para guardar el
        objeto asustado más en el fondo. Quizá incluso la presiona a hacerlo, una pequeña
        compulsión que no puede identificar. Te acercas para ver lo que es, pero
        no quieres espantarla.
      </p>
      <p>
        “Conductor de limusinas”, respondes. Eso también es verdad. Tienes algunos autos que le estás subarrendando a un amigo por el momento.
        Sigues pensando
        que venderás la propiedad de mamá, comenzarás tu negocio de nuevo, pero nunca es el momento adecuado.
        “Paga bien. Siempre hay ricos tontos para trasladar a los casinos de Filadelfia o Nueva York”.
      </p>
      <p>
        Demasiado tarde recuerdas que <em>ella</em> es rica. O
        por lo menos su familia. Es curioso como eso no implica siempre lo mismo.
        “¿Y tú?” preguntas, con la esperanza de cambiar de tema.
      </p>
      <p>
        “Trabajo con mi hermano”, dice y te das cuenta que terminó la conversación. Cierra
        el bolso y, angustiosamente, lo deja del otro lado. Sientes alivio de
        lo que sea que ha intentado evitarte.
      </p>
      <p>Whitby entra a la sala de espera y te roza al pasar de manera tan brusca
        que sabes que es una señal deliberada. “Señora Herschel”, dice, se agacha en frente
        de la mujer y se le acerca como una confidente. “Lamento haberla hecho esperar”.
      </p>
      <p>
        “Está bien, solo estoy un poco apurada...”
      </p>
      <p>
        Interrumpes en voz alta. “Oiga, señorita policía, llegué primero y he estado esperando más de una hora”.
      </p>
      <p>
        La cara de Whitby no muestra señales de reconocerte. “Señor, si me dice qué necesita,
        puedo intentar encontrar a alguien...”
      </p>
      <p>
        “Lo que <em>necesito</em> es que alguien me ayude aunque no tenga una cara bonita ni un <em>bolso</em>”.
      </p>
      <p>
        “Señor, debo pedirle que se calme”.
        Whitby abraza a Michelle Herschel de manera protectora y la levanta. Al hacerlo,
        tira el bolso y, gracias a Dios, su contenido se esparce por todos lados.
        El <List expansions={["<psychic>objeto temeroso</psychic>", "<psychic>recibo aterrado</psychic>",
        "<psychic>recibo histérico</psychic> afortunadamente se amortigua cuando lo pisas fuerte y lo escondes de vista"]} tag="c3_receipt" />
        <Map from={inventory.c3_receipt} to={{
          undefined: " grita aterrado",
          "objeto": " grita más fuerte, casi dejándote sordo",
        "recibo": "" }} offset={0}/>.
      </p>
      <p>
        “Lo siento mucho”, le dice Whitby a Herschel y se agacha para ayudarla a limpiar.
        <Map from={inventory.c3_receipt} to={{
          "objeto": " Ya recogió casi todo, mientras habla distraída",
        "recibo": " Está acomodando el bolso" }} offset={0}/>.
      </p>
    </section>,
    <section>
      <p>Exagerando tu propia torpeza, levantas <Map from={inventory.c3_staring} to={{
        bolso: "uno de los pañuelos que pediste",
        manos: "un pañuelo que se cayó",
        zapatos: "un pañuelo que se cayó"
      }} /> del piso y se lo ofreces a Herschel, pero se aleja de ti. “Sabía que eras un pervertido”,
        dice y sale corriendo de la habitación hacia la oficina de la detective. Whitby te mira
        con compasión y asientes ligeramente: <em>Conseguí lo que quería</em>.
      </p>
      <p>Cuando nadie está mirando, levantas el recibo con el pañuelo y lo guardas con cuidado en el bolsillo.</p>
      <p><em>Y probablemente lo que me merezco.</em></p>
      <NextChapter chapter="4" />
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

export const Chapter3 = connect(
  mapStateToProps
)(_Chapter)
