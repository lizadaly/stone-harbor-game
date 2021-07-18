const React = require('react')
import { Map, List, NextChapter, FromInventory } from '../components'
import { connect } from 'react-redux'
import { updateInventory } from "../actions"

import { RenderSection } from '.'
const _Chapter = ({currentSection, inventory, chapterId}) => {
  var sections = [
    <section>
      <h2>Epílogo</h2>
      <h3>Na tua sala de leitura</h3>
      <p>
        "Procuras a sabedoria dos anciões? Avança!"
      </p>
      <p>
        A cabeça de A.J., um dos teus alunos preferidos, surge à porta.
        “Eu disse-lhe, Sr. Pietro, que estava velho demais para essas merdas.”
      </p>
      <p>
        "Velho demais para essas <em>trampas</em>," corriges. "Ó pá, vais mesmo privar um velhote do seu divertimento?"
      </p>
      <p>
        O miúdo revira os olhos. “Iá. Então e vem ao jogo?”
      </p>
      <p>
        "Acho que não tenho escolha," dizes alegremente.
        É o último dia de aulas antes do Dia de Ação de Graças, ou seja, dia de jogo de "Homecoming", ou seja, todos os funcionários da escola, dos professores aos contínuos, incluindo até os mais modestos ajudantes — como tu — estão de serviço no controlo de multidão, no bar dos petiscos e nos aplausos suplementares.
      </p>
      <p>
        “Fixe,” diz ele, obviamente sem ouvir. Pega na mochila com os livros, esquecida pela quinquagésima vez. Ficas a pensar se ela se sente triste quando isso acontece. 
      </p>
      <p>
        Ele quase que deita Nicki Troiano ao chão quando esta tenta entrar no preciso momento em que ele vai a sair. "Desculpe!" grita ele já do fundo do corredor.
      </p>
      <p>
        Nicki tem um filho que vai começar o secundário este ano, o que é fixe; o pai está fora da equação, o que é fantástico. Estás sempre a pedir desculpa por não teres estado presente durante esses anos iniciais, e ela está sempre a dizer cala-te, Frankie, mas dizê-lo uma e outra vez faz-te sentir melhor, e sabes que a ela também.
      </p>
      <p>
        Ela olha para a sala surpreendida. "Gosto da nova decoração." A "sala de leitura" (o nome é teu) é aonde vêm os miúdos com dificuldades de aprendizagem para receber orientação ou fazer exercícios adicionais. Não és muito mais do que uma vulgar «baby-sitter» — há uma professora de necessidades educativas especiais encarregue de dirigir este circo — mas ela deixa-te fazer de palhaço e distrair os miúdos dos seus problemas quando não se trata de coisas que tenham a ver com trabalhos da escola. Na semana passada, trouxeste algumas das traquitanas da tua mãe; quando ninguém está a ver, ensinas, aos miúdos, alguns truques para comunicar com o além. O quê? Vai dar-lhes mais jeito do que geometria. 
      </p>
      <p>
        "Tens planos para depois do jogo?" pergunta ela. Ficas embevecido com o tom tímido da sua voz. 
      </p>
      <p>
        Pões-te a limpar o pó duma bola de cristal para queimar alguma da energia nervosa. "Não sei, devia ir estudar..."
        Estás a 99% de terminar uma licenciatura em serviço social (ideia da Whitby), se bem que, neste momento, estejas a acumular créditos numa universidade comunitária acessível (ideia tua).    
        A matéria não é difícil, mas há muito tempo que não estavas numa sala de aula. Sempre que te queixas da quantidade de trabalho, Whitby sente-se culpada, e Hank o Tanque enche-te com esparguete. Passas a vida a queixar-te.
      </p>—
      <p>
        “É Dia de Ação de Graças, Frankie.”
      </p>
      <p>
        Encolhes os ombros. Gostas de a provocar. Tecnicamente, ainda são só amigos, mas achas que estás a fazer progressos. Já só te faltam para aí uns 99%. 
      </p>
      <p>
        "Bem, se não estiveres muito ocupado, o Paul adorava ver-te." Paul é o filho dela. Ele é calado, como tu eras.
      </p>
      <p>
        Ias agora estar muito ocupado! "Sim, vou ter contigo depois do jogo," dizes. Ela acena com a mão.
      </p>
      <p>
        Acabas de arrumar as coisas: endireitas as cadeiras, deitas fora o lixo dos miúdos, passas a ridícula vassourinha para carpetes por debaixo das mesas. Passas uma última vez pela tua mesa, passando a mão suavemente pelos teus pertences, um hábito que apanhaste recentemente. Metade de um baralho de cartas de tarô distribuído na mesa, um frasco com moedas I Ching; uma foto tua tremida, tirada pela tua mãe, na praia, nos anos 60; uma foto dela, ainda mais tremida, tirada por ti, em que ela está a tapar a cara com um livro nessa mesma praia.
      </p>
      <p>
        Satisfeito, pegas na tua mala e apagas a luz, deixando os objetos aos seus segredos.
      </p>
      <div className="next-chapter-link"><List expansions={["Créditos", ""]} tag="credits"/></div>
    </section>,
    <section>

      <h2>Créditos</h2>
      
       <h3>Tradução para português de Portugal</h3>
      <p>
        José Carlos Dias
      </p>

      <h3>Agradecimentos do tradutor</h3>

      <p>Obrigado a Gabriela Kozakiewicz e a Szymon Kowalski pela valiosa colaboração na fase inicial da tradução. Obrigado a Eulália Duarte pela revisão do texto. E obrigado à Liza pela paciente ajuda com as partes relacionadas com a programação na tradução e por ter escrito esta história incrível.</p>

      <h3>Agradecimentos</h3>
      <p>
        Obrigado ao Dan Schmidt e à Deborah Kaplan por terem testado o jogo.
      </p>

      <h3>Licenças</h3>
      <p>
        Esta obra foi publicada ao abrigo da <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Licença Internacional Creative Commons Attribution 4.0</a>.
      </p>
      <h3>Créditos das imagens</h3>
      <ol>
        <li><em>Escritório:</em> <a href="http://digitalcollections.nypl.org/items/510d47e1-a1d6-a3d9-e040-e00a18064a99">Vista do Quarto de Dormir a partir do Escritório</a>: Divisão de Arte, Impressões e Fotografias Miriam and Ira D. Wallach: Coleção de Fotografia, Biblioteca Pública de Nova Iorque (1918). </li>
        <li><em>Quarto da família:</em> <a href="http://digitalcollections.nypl.org/items/510d47e1-a1e6-a3d9-e040-e00a18064a99">Library, 640 Lexington Ave, 1916:</a> Divisão de Arte, Impressões e Fotografias Miriam and Ira D. Wallach: Coleção de Fotografia, Biblioteca Pública de Nova Iorque (1916).</li>
        <li><em>A propriedade dos Healeys:</em> <a href="http://www.loc.gov/pictures/item/nj1477.photos.038376p/">Murray Guggenheim House, Cedar & Norwood Avenues, Long Branch, Monmouth County, NJ</a> via Biblioteca do Congresso.</li>
        <li><em>Motel das Caraíbas:</em> <a href="https://commons.wikimedia.org/wiki/File:WWHD_Caribbean_sign.JPG">WWHD Caribbean sign.</a></li>
        <li><em>Ondas:</em> <a href="http://digitalcollections.nypl.org/items/510d47e1-48c7-a3d9-e040-e00a18064a99">Ocean Breakers, Cape Island, NJ</a>: Divisão de Arte, Impressões e Fotografias Miriam and Ira D. Wallach: Coleção de Fotografia, Biblioteca Pública de Nova Iorque (1865).</li>
        <li><em>Cartas de Tarô:</em> <a href="http://gallica.bnf.fr/ark:/12148/btv1b105111415">Jeu de tarot divinatoire dit "Grand Etteilla" ou "tarot égyptien"</a> via Biblioteca Nacional de França.</li>
        <li><em>Sala de leitura:</em> <a href="https://www.flickr.com/photos/montrealprotest/22008493185/in/photolist-zwPhg4-ocHKZV-oeuM5c-J2nxB4-5eF8MP-oeuM88-dQvgb7-ocHL78-ocDJ7S-ocDJ83-oeuM76-oeuM5T-oeuM9R-owmW9N-ow9Nae-ooqpns-ocHL5K-owjm52-ocHL1B-oeWXr6-ocDJ5s-5eFf9e-oeTj8f-ouMcMs-fHYLKi-ormX8L-ouhs93-oeWmbX-ovseYp-ocHL3k-odWkLC-oeuM9F-od8fWj-owoQuR-oukwMk-ovrN1j-obU1a9-oyfVhP-obU8dY-oeUNm6-oy8a4c-oweHoU-ocDJ95-ov9CYM-otnjKY-otqj6u-ouRQ8U-ouPxpF-oeULZi-ou3x1K">Psychic Readings - $10.</a></li>
        <li><em>Foto das dunas:</em> <a href="https://flic.kr/p/vpWnd">Dune Fence</a> (tirada em Stone Harbor, New Jersey).</li>
      </ol>
      <p className="small">
        Algumas imagens foram trabalhadas com o software <a href="https://github.com/satoshiiizuka/siggraph2016_colorization">Let there be Color!: Joint End-to-end Learning of Global and Local Image Priors for Automatic Image Colorization with Simultaneous Classification</a> de Satoshi Iizuka, Edgar Simo-Serra e Hiroshi Ishikawa.
      </p>

      <figure style={{textAlign: "center", marginTop: "6em"}} className="thumbnail">
        <img src="images/cover.png" alt="Capa do jogo, com as palavras 'Stone Harbor' e 'Liza Daly' sobre uma fotografia de dunas perto do mar" />
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
