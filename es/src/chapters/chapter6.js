const React = require('react')
import { Map, List, NextChapter } from '../components'
import { connect } from 'react-redux'
import { updateInventory } from "../actions"

import { RenderSection } from '.'

const _Chapter = ({currentSection, inventory, chapterId}) => {
  var sections = [
    <section>
      <h2>Capítulo Seis</h2>
      <h3>En el paseo marítimo</h3>
      <p>
        Deberías haber ido directo con Whitby. Lo harás. Pero primero debes ver a alguien de tu pasado.
      </p>
      <p>
        Conoces a los Troiano. Son dueños de una cadena olvidable de pizzerías que se extiende por todo el condado de Cape May.
        Fuiste a la escuela con una de las hijas, Nicki. Tiene un hermano mayor que siempre se metía en problemas:
        era de aquellos que asumen que pueden triunfar con engaños en vez de trabajar duro.
      </p>
      <p>
        Nicki era una amiga, o lo más cercano a amigos que podían ser los chicos y las chicas en ese entonces.
        Creció con su tía en el sur de Filadelfia, nunca supiste muy bien por qué,
        y se transfirió el primer año de secundaria. Ella era como tú, no tenía muchos amigos, y,
        aunque no compartían mucho, se sentía bien saber que tenías
        a alguien a tu lado. Seamos honestos: te gustaba un poco.
      </p>
      <p>
        Hay una lista tan larga como tu brazo de todos los conocidos con los que no te molestaste en reencontrarte
        desde que volviste, pero Nicki es la única a la que realmente has evitado. Mientras crecían, ella
        te escuchó quejarte de tu madre: de su trabajo, su poco confiable forma de ser, su mortificante forma de vestir y del hecho
        que vivían en un departamento barato sobre una trampa para turistas. Hoy en día, <em>tú</em> trabajas de eso y te comportas igual.
        Han pasado veinte años y continúas viviendo en la misma pocilga.
      </p>

      <p>
        Así que te encuentras dando vueltas afuera de <em>La Famosa Pizzería de Nicki </em>
        (en realidad, no es famosa. Además, su padre la nombró a ella por la pizzería,
        no al revés). Cuando tu cobardía te termina por asquear, entras.
      </p>
      <p>
      No ha cambiado mucho en veinte años. Una de las razones por las que a Nicki le costaba hacer amigos
      eran sus horarios: trabajaba la mayor parte del tiempo. Decía que prefería
      amasar pizzas cuando era joven y no cuando fuera grande. No eres el único que se ha quedado en el tiempo.
      </p>
      <p>
        No te ve de inmediato. Calcula mentalmente el total del pedido de una familia (unos sándwiches submarino y gaseosas) y les cobra.
        Siempre fue buena en matemáticas. No estás seguro de cómo reaccionará, pero,
        cuando llegas al frente de la fila, ves que su felicidad es genuina.
        "¡Frankie! Oí que estabas de vuelta". Nunca perdió el acento de Filadelfia.
      </p>
      <p>
        "Sí, quise pasar antes..." Ella desestima tu excusa.
        "Dame un minutín, voy a pedir que tomen mi lugar. ¿Comiste?"
        Te invita dos porciones de pizza y una Coca,
        y desaparece por la parte de atrás. Tomas la comida obedientemente y te diriges a una mesa.

        </p>
      <p>
        Está sorbiendo una limonada gigante cuando se sienta a tu lado, y no frente a ti. "¿Cómo has estado?" pregunta.
      </p>
      <p>
        Este repentino influjo de amabilidad es casi insoportable. "Bien, Nicki, he estado bien". Disfrutas el momento antes de arruinarlo.
        "Y me gustaría que nos pongamos al día en algún momento, lo juro. He sido un idiota por no haber venido a verte".
      </p>
      <p>
        "¿Qué más cuentas?" dice sonriendo. "Oí lo de tu mamá, lo siento. Habría ido al funeral si hubiese visto la noticia en el periódico".
      </p>
      <p>
        “No fue nada público”, dices.
      </p>
      <p>
      No ves desaprobación en su mirada, pero sí preocupación. "Ya sabes que muchas personas la amaban.
      Ayudó a aquellos que no tenían quién los escuchara. Tú también siempre fuiste muy bueno escuchando".
      Cuando no respondes, decide cambiar de tema. "Por tu cara veo que no viniste a socializar. ¿Con qué te ayudo?"
      </p>
      <p>
        "Verás, Nicki, necesito preguntarte algo, pero necesito que confíes en mí y no me preguntes por qué". Se encoge de hombros y asiente.
        "¿Está Jimmy metido en algún tipo de problema?"
      </p>
      <p>
        Es obvio que su primer instinto sí es preguntar el porqué. "Se supone que debería trabajar algunos turnos aquí, pero
        han pasado meses desde que lo vi en el restaurante. Por mí lo despediría, pero sé que a papá le daría un ataque..."
      </p>
      <p>
        "Tiene un auto nuevo de lujo—un Porsche, ¿te lo crees?—y fue con unos amigos a navegar en velero cuando ni siquiera
        sabe diferenciar su culo de la popa. Lo vi en Pascua, le pregunté en qué andaba, pero solo me contó que le fue bien en el casino Sands".
        Ambos saben lo improbable que es eso: puedes ganar mucho dinero en Atlantic City, pero tienes que haber empezado a lo grande.
        Nunca nadie que trabajó en una pizzería familiar ganó suficiente dinero para un auto.
         </p>
      <p>
        “¿Sabes dónde lo puedo encontrar?”
      </p>
      <p>
        Por primera vez, te mira con sospecha. "No vuelvas a mi vida solo para agregarme más mierda, Frankie.
        Ya tengo suficiente estrés".
      </p>
      <p>
        “Solo intento enmendar algo”.
      </p>
      <p>
        "Desde que tiene el barco, pasa mucho tiempo en su "puerto deportivo". Pero estoy casi segura
        de que es su forma de decirle a un bar lleno de holgazanes".
      </p>
      <p>
        “¿El puerto deportivo de Jared Healey?” le preguntas.
      </p>
      <p>
        “Ni idea. ¿No es ese el tipo que acaba de morir?”
      </p>
      <p>
        “Su hermano”. Tu cabeza ya está concentrada en un plan.
      </p>
      <p>
        Nicki te toma de la mano, lo que es más contacto físico de lo que alguna vez lograste en la secundaria.
        "Ten cuidado. No quiero perder a mi amigo una segunda vez".
      </p>
      <p>
        El nudo en tu garganta es físicamente doloroso. "¿Me prestas tu teléfono?"
        </p>
      <hr/>
      <h3>Puerto deportivo en el Muelle 73</h3>
      <p>
       Nicki no sabía dónde estaba el puerto deportivo, pero conseguiste la dirección al llamar al número de las páginas amarillas.
       También llamaste a Whitby, a quién no le gustó tu plan, pero aceptó ayudarte a regañadientes.
       "Oye", le dijiste por teléfono, "¿Encontraste a Michael Herschel?"
      </p>
      <p>
        Estaba en su casa cuando la llamaste; su oficina te transfirió. Te sentiste extrañamente culpable cuando atendió un hombre.
        No tiene anillo, ¿tal vez sea su novio? Oíste que estaba cocinando la cena en el fondo: los sonidos de una vida normal.
        "No", contestó, "Al menos no en su casa. Su hermana
        dice que no lo ha visto en semanas".
     </p>
      <p>
        “¿Le crees?”
      </p>
      <p>
        "Probablemente no". Oíste el ruido de las ollas de fondo.
        "Escúchame, debo irme. Haz tu parte, pero ten cuidado. Me aseguraré de que lo pase a buscar una patrulla".
      </p>
      <p>
        Era un récord que dos personas se hayan preocupado por tu bienestar el mismo día. "Lamento haber interrupido la cena".
        </p>
      <p>
        "Soy muy mala en la cocina. Mi trabajo es mantenerme lejos de ella.
        Le hiciste un favor a Hank". <em>Hank</em>. "Ten cuidado", agregó.
      </p>
      <p>
        “Ya lo dijiste”.
      </p>
      <p>
        “Y <em>seguiré</em> diciéndotelo hasta que me agradezcas". Colgó luego de eso, pero en realidad no estaba enojada.
      </p>
      <p>
        No tomó mucho tiempo conducir hasta el puerto deportivo y sabías que era el correcto porque es un antro de mala muerte.
        No estacionarías un Pinto oxidado aquí, mucho menos un velero que vale millones, pero allí está,
        fondeado prominentemente junto a la cantina. No sabes de barcos, pero puedes reconocer cuando algo está hecho con destreza
        y este es una hermosura: blanco y cromado y brillante. El nombre estarcido en la proa dice:{" "} <smallcaps>Vergas en alto</smallcaps>.
      </p>
      <p>
        "Qué elegante", murmuras. Estás agachado detrás de uno de los múltiples autos ostentosos en el estacionamiento:
        un par de BMW nuevos, un Corvette rojo brillante y el Porsche dorado de Jimmy Troiano.
        Te inclinas y corres hacia el auto de Jimmy mientras vigilas la cantina. Si alguien llegara a salir, no tardaría nada en verte.
      </p>
      <p>
      No ha pasado mucho desde que Jimmy compró el auto, pero se nota que no lo cuida.
      El chasis está embadurnado de arena (¿acaso este idiota lo condujo en la{" "}
      <em>playa</em>?) y el acabado metálico está arruinado gracias a un montón de pequeñas abolladuras. Bien. No quieres que vea{" "}
      <List
        expansions={[
          "el auto",
          ["la matrícula", "los faros traseros", "el tubo de escape"],
          "la parte trasera del auto",
        ]}
        conjunction="o"
        tag="c6_car"
      />{" "}
      con detenimiento.
      </p>
    </section>,
    <section>
      <p>
        <Map
         from={inventory.c6_car}
         to={{
          matrícula: `La matrícula dice <smallcaps>JIMMY8</smallcaps>. <em>Sutil</em>. Quitas todos los tornillos.
          Se mantiene en su lugar por pura fricción, pero, apenas ponga el auto en marcha y pase por la gravilla, debería caerse.`,
          faros: `Ya estaban quebrados, así que ponerlos en un estado ilegal es solo cuestión de aflojarlos más con un destornillador de bolsillo.
          Por el momento se mantienen, pero, apenas ponga el auto en marcha y pase por la gravilla, deberían caerse.`,
          escape: `Es un tubo de escape ridículamente enorme, casi fálico. Metes la mano por detrás hasta llegar al silenciador y tiras con fuerza.
          Luego de un par de tirones rápidos, el silenciador cuelga bajo; después de unos cuantos tornillos sueltos,
          es un hecho que lo arrastrará.`
        }}
        />
      </p>
      <p>
        Se abre la puerta de la cantina justo cuando terminas. Es el mismísimo Michael Herschel con su nórdica piel blanca teñida de rojo por la rabia.
        Le grita al bar; en este espacio abierto se oye bien.
        "Sé que lo esconden de mí, holgazanes. No seré tan amigable cuando vuelva". Suspiras. Todos quieren jugar a ser mafiosos.
      </p>
      <p>
        Uno de los BMW le pertenece. El auto se marcha rápido, derrapando en la gravilla, lo que resulta en una nube de polvo
        que te ayuda a cubrir tu huida hacia la calle y te permite mirar hacia atrás rápido.
      </p>
      <p>
        Increíblemente, Jimmy también estaba escondido afuera: tumbado en un botecito abandonado.
        Saluda a las personas que comienzan a salir de la cantina para observar el chisme, (imaginas que se merecen un agradecimiento por no delatarlo)
        pero sigue siendo el mismo imbécil arrogante que era y tan solo se sube a su Porsche. No parece haber notado tu presencia
        ni el sabotaje a su vehículo.
      </p>
      <p>
        Te cubres la cara con un sombrero de pescador cuando te pasa por al lado, pero no es posible que te descubra
        y te alegra sobremanera ver que{" "}
      <Map
        from={inventory.c6_car}
        to={{
          matrícula: `la matrícula cae y rueda dentro de los juncos`,
          faros: `los faros caen y ruedan dentro de los juncos`,
          escape: `el tubo de escape se suelta y comienza a arrastrarse por la calle, retumbando y sacando chispas`,
        }} />.
        Hay una patrulla estacionada más adelante cerca de un radar de velocidad, en espera del Porsche y una razón para detenerlo. Whitby
        coincidió con que el señor Troiano preferiría involucrarse en una inducción en vez de aumentar su deuda con un aspirante a corredor.
        Si tienes suerte, Jimmy confesará, Jared Healey se quebrará y tú podrás dejar este asesinato en el pasado.
      </p>
      <NextChapter chapter="7" />
    </section>,
  ];
  return <RenderSection currentSection={currentSection} sections={sections} />;
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentSection: state.bookmarks[ownProps.chapterId],
    inventory: state.inventory,
  };
};

export const Chapter6 = connect(mapStateToProps)(_Chapter);
