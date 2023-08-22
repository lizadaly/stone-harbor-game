const React = require('react')
import { Map, List, NextChapter, FromInventory } from '../components'
import { connect } from 'react-redux'
import { updateInventory } from "../actions"

import { RenderSection } from '.'
const _Chapter = ({currentSection, inventory, chapterId}) => {
  var sections = [
    <section>
      <h2>Epílogo</h2>
      <h3>En tu sala de lectura</h3>
      <p>
        "¿Buscas los conocimientos de los sabios? ¡Avante!"
      </p>
      <p>
        A.J., uno de tus estudiantes favoritos, asoma la cabeza por la puerta.
        “Le dije que soy demasiado grande para esa mierda, señor Pietro”.
      </p>
      <p>
        "Demasiado grande para esa <em>basura</em>", corriges. "¿En serio privarás a un viejo de su diversión?"
      </p>
      <p>
        El niño pone los ojos en blanco. "Sí. En fin, ¿vendrá al partido?"
      </p>
      <p>
        "No tengo otra opción", dices alegremente.
        Es el último día de clases antes del Día de Acción de Gracias, lo que significa que es el partido de bienvenida, lo que significa
        que todos los empleados de la escuela, tanto los maestros, como los conserjes y los humildes ayudantes (ese eres tú) tienen
        el trabajo de controlar a la multitud, atender la barra de refrigerios y servir como animadores extras.
      </p>
      <p>
        “Genial”, dice obviamente sin haber escuchado. Vino a recoger su mochila, la cual ha olvidado por milésima vez.
        Te preguntas si se sentirá triste cuando eso pasa.
      </p>
      <p>
        Casi colisiona con Nicki Troiano mientra él sale y ella entra. "¡Perdón!" grita desde el pasillo.
      </p>
      <p>
        El hijo de Nicky recién comienza la universidad, lo cual es bueno; el padre ya no está, lo cual es fantástico.
        Siempre le dices que te arrepientes de no haber estado en los primeros años y ella siempre te dice que te calles, Frankie;
        pero decirlo te hace sentir mejor y sabes que a ella también le ayuda.
      </p>
      <p>
        Mira la sala sorprendida. "Me gusta la nueva decoración". La "sala de lectura" (tú elegiste el nombre) es donde los niños con dificultades de aprendizaje
        vienen a recibir clases particulares o de apoyo. No eres más que un niñero con pretensiones, una maestra especializada maneja todo esto, pero
        te deja jugar al maestro y distraer a los niños de sus problemas cuando no se relacionan con los deberes. La semana pasada trajiste
        algunas de las baratijas de tu mamá; cuando nadie está mirando, les enseñas a hacer lecturas en frío. Mira, seguro será más útil que la geometría.
      </p>
      <p>
        "¿Harás algo luego del partido?" pregunta. Te sientes halagado por lo tímida que suena su voz.
      </p>
      <p>
        Le quitas el polvo a una bola de cristal para matar un poco tu nerviosismo. "No sé, debería estudiar..." Solo te falta
        el 99% de la carrera para conseguir tu licenciatura en asistente social (idea de Whitby), pero, a este punto, solo estás tomando
        créditos fáciles para la universidad (idea tuya). El material no es díficil, pero ha pasado mucho tiempo desde la última vez
        que estudiaste. Cuando te quejas de todo lo que debes hacer, Whitby se siente culpable
        y Hank el Tanque te prepara espagueti. Te vives quejando.
      </p>
      <p>
        “Es el Día de Acción de Gracias, Frankie”.
      </p>
      <p>
        Te encojes de hombros. Te gusta molestarla. Técnicamente siguen siendo amigos, pero parece que están progresando. Van un 1% del camino.
      </p>
      <p>
        "Bueno, si no estás muy ocupado, a Paul le encantaría verte". Paul es su hijo. Es callado, tal como tú lo eras.
      </p>
      <p>
        Nunca estás ocupado. "Está bien, te buscaré luego del partido", dices. Ella te saluda.
      </p>
      <p>
        Terminas de ordenar por hoy: enderezas las sillas, tiras la basura de los niños, aspiras debajo de la mesa con tu ridículamente
        diminuta aspiradora. Por último, limpias tu escritorio y tocas con gentileza tus posesiones, un hábito que has adquirido hace poco.
        Hay un mazo de tarot a medio repartir; un frasco con monedas para el <em>I Ching</em>; una foto borrosa de ti, tomada por tu mamá,
        en la playa en los años 60; una foto aun más borrosa que tú tomaste de ella, se está cubriendo la cara con un libro en la misma playa.
      </p>
      <p>
        Satisfecho, agarras tu bolso, apagas la luz y dejas a los objetos con sus secretos.
      </p>
      <div className="next-chapter-link"><List expansions={["Créditos", ""]} tag="credits"/></div>
    </section>,
    <section>

      <h2>Créditos</h2>
      <h3>Traducción al español latinoamericano</h3>
      <p>
        Neido Translations: Lucila Neira y Micaela Dominguez.
      </p>

      <h3>Agradecimientos</h3>
      <p>
        Le agradezco a los testers Dan Schmidt y Deborah Kaplan.
      </p>

      <h3>Licencia</h3>
      <p>
        Esta obra fue publicada bajo la <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Licencia Creative Commons Atribución 4.0 Internacional</a>.
      </p>
      <h3>Créditos de las imágenes</h3>
      <ol>
        <li><em>Estudio:</em> <a href="http://digitalcollections.nypl.org/items/510d47e1-a1d6-a3d9-e040-e00a18064a99">Vista del cuarto desde el estudio</a>: División de Arte, Grabados y Fotografías de Miriam y Ira D. Wallach: Colección fotográfica, Biblioteca Pública de Nueva York (1918). </li>
        <li><em>Sala de estar:</em> <a href="http://digitalcollections.nypl.org/items/510d47e1-a1e6-a3d9-e040-e00a18064a99">Biblioteca, 640 Avenida Lexington, 1916:</a> División de Arte, Grabados y Fotografías de Miriam y Ira D. Wallach: Colección fotográfica, Biblioteca Pública de Nueva York (1916).</li>
        <li><em>La propiedad de los Healey:</em> <a href="http://www.loc.gov/pictures/item/nj1477.photos.038376p/">Biblioteca Conmemorativa Murray Guggenheim, Avenidas Cedar & Norwood, Long Branch, condado de Monmouth, NJ</a> vía la Biblioteca del Congreso de Estados Unidos.</li>
        <li><em>Caribbean Motel:</em> <a href="https://commons.wikimedia.org/wiki/File:WWHD_Caribbean_sign.JPG">WWHD Caribbean sign.</a></li>
        <li><em>Olas:</em> <a href="http://digitalcollections.nypl.org/items/510d47e1-48c7-a3d9-e040-e00a18064a99">Ocean Breakers, Cape Island, NJ</a>: División de Arte, Grabados y Fotografías de Miriam y Ira D. Wallach: Colección fotográfica, Biblioteca Pública de Nueva York (1865).</li>
        <li><em>Cartas de tarot:</em> <a href="http://gallica.bnf.fr/ark:/12148/btv1b105111415">Jeu de tarot divinatoire dit "Grand Etteilla" ou "tarot égyptien"</a> vía la Biblioteca Nacional de Francia.</li>
        <li><em>Sala de lectura:</em> <a href="https://www.flickr.com/photos/montrealprotest/22008493185/in/photolist-zwPhg4-ocHKZV-oeuM5c-J2nxB4-5eF8MP-oeuM88-dQvgb7-ocHL78-ocDJ7S-ocDJ83-oeuM76-oeuM5T-oeuM9R-owmW9N-ow9Nae-ooqpns-ocHL5K-owjm52-ocHL1B-oeWXr6-ocDJ5s-5eFf9e-oeTj8f-ouMcMs-fHYLKi-ormX8L-ouhs93-oeWmbX-ovseYp-ocHL3k-odWkLC-oeuM9F-od8fWj-owoQuR-oukwMk-ovrN1j-obU1a9-oyfVhP-obU8dY-oeUNm6-oy8a4c-oweHoU-ocDJ95-ov9CYM-otnjKY-otqj6u-ouRQ8U-ouPxpF-oeULZi-ou3x1K">Psychic Readings - $10.</a></li>
        <li><em>Foto de las dunas:</em> <a href="https://flic.kr/p/vpWnd">Dune Fence</a> (sacadas en Stone Harbor, Nueva Jersey).</li>
      </ol>
      <p className="small">
        Algunas imágenes fueron editadas con <a href="https://github.com/satoshiiizuka/siggraph2016_colorization">Let there be Color!: Joint End-to-end Learning of Global and Local Image Priors for Automatic Image Colorization with Simultaneous Classification</a> de Satoshi Iizuka, Edgar Simo-Serra y Hiroshi Ishikawa.
      </p>

      <figure style={{textAlign: "center", marginTop: "6em"}} className="thumbnail">
        <img src="images/cover.png" alt="Cubierta del juego, con las palabras 'Stone Harbor' y 'Liza Daly' sobre una fotografía de las dunas del mar" />
      </figure>
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

export const Epilogue = connect(
mapStateToProps
)(_Chapter)
