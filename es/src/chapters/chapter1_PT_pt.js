const React = require('react')
import { Map, List, FromInventory, NextChapter } from '../components'
import { connect } from 'react-redux'
import { RenderSection } from '.'

const _Chapter = ({currentSection, inventory, chapterId}) => {
  var libraryMaps = {
    mensagem: `Repetes o que a anotação dizia, palavra por palavra. Descreves a forma das letras,
    aquela letra de “alguém que tivera educação, mas com um ligeiro tremor.”`,
    fotografia: `"Era uma foto de família, em pose. Quatro adultos e uma rapariga. Dois dos adultos ainda eram novos.
    Pareciam irmãos."`,
    receita: `"Era de Capoten. Para ser tomado três vezes por dia. 100 mg."`
  }


  var sections = [
    <section>

      <h1>Stone Harbor</h1>
      <h5>Liza Daly</h5>
      
      <h2>Capítulo I</h2>
      <h3>No jantar</h3>
      <p>Concordaste em continuar isto noutro sítio, pois bem, aqui estás: mesas grandes, café péssimo. Estamos a meio
       da semana, por isso não há cá ninguém além de camionistas e reformados. O café da inspetora Whitby
        é negro; o teu está sufocado por uma quantidade efeminada de natas e açúcar. Nem lhe tocas.
      </p>
      <p>"Fale-me mais uma vez sobre a <FromInventory inventory={inventory.p0_library_things} offset={1} />.       
       O que viu exatamente?"
      </p>
      <p>Cinges-te aos factos. <Map from={inventory.p0_library_things} to={libraryMaps} offset={1} /></p>
      <p>A inspetora não esboça qualquer reação, apenas toma nota do que disseste. “E descreva-me
      novamente o quarto.”</p>
      <p>“Já lhe disse—”</p>
      <p>“Mais uma vez.” Ela evita o teu olhar, e se tentasses lê-la, não irias descobrir nada.
      Ela é boa. O engraçado, porém, é que estás a falar a verdade.</p>
      <p>“Era um escritório ou uma biblioteca com um quarto ao lado.
        Duas camas individuais no quarto, estantes, uma secretária com umas quantas coisas, mas eu só prestei atenção à <FromInventory inventory={inventory.p0_library_things} offset={1} />.”</p>
      <p>“Descreva-me a pessoa que viu.”</p>
      <p>“Não consigo.”</p>
      <p>Ela agora levanta o olhar. “Você viu claramente a <FromInventory inventory={inventory.p0_library_things} offset={1} />, mas não se lembra de nada sobre a
      pessoa que me diz ser um assassino?”</p>
      <p>Como explicar? Era como estar a olhar pelo lado errado dum telescópio. A secretária, aquela luva,
        essas estavam nítidas, mas tudo o resto estava nublado e sombrio. Uma lembrança obscura emerge: tinhas uns dez anos,
        e estavas a brincar no teu canto, enquanto a tua mãe lia para duas raparigas adolescentes. Havia demasiada gente, demasiado calor, e as suas risadinhas e o húmido ar estival rodopiavam pelo quarto e não conseguias respirar. Quase que desmaiaste então,
        e esta experiência fora também assim — a olhar por um túnel que escurecia
        enquanto o mundo caía à tua volta. Mas acabas só por dizer um
      esfarrapado, “Era difícil ver.”</p>
      <p>Ela está a escrever outra vez, e demora. Dás um gole no café, mas
      já está frio e aquelas natas todas dão-te náuseas. </p>
      <p>“O que sente nisto?” diz ela, sem olhar para cima. Ela
        põe <List expansions={["um relógio de homem", "um vulgar relógio de ouro"]} tag="c1_watch" /> em cima da mesa.</p>
    </section>,
    <section>
      <p>Empalma-lo por uns momentos, e depois tornas a pô-lo de volta na mesa. “É um relógio. Queria saber
      se se trata de uma imitação? Não faço a mínima.”</p>

      <p>Não há resposta, só mais rabiscos naquele maldito bloco de notas. “E isto?” Ela saca
        de um <List expansions={["lenço", "lenço, coberto de manchas vermelhas-escuras, do qual te afastas quando o viras do avesso"]} tag="c1_handerchief" />.
      </p>
    </section>,
    <section>
      <p>“Credo, isso é sangue?” Instintivamente tentas afastar-te da mesa, mas a mobília não se mexe e não tens para onde ir.</p>
      <p>Consegue sentir alguma coisa nisso?” pergunta ela impassível, como se surpreender pessoas com provas ensanguentadas fosse a coisa mais
      natural no mundo. Deve ser assim que a polícia se diverte.</p>
      <p>“Não! Mas qual é o seu problema?”</p>
      <p>“O relógio era do meu ex. O
        lenço comprei-o no caminho para cá e ensopei-o em ketchup quando foi à casa de banho.” Ela agora está a olhar diretamente para ti.
      </p>
      <p>Continuas de estômago embrulhado. “Porque acha que sou um charlatão.”</p>
      <p>“É claro que é um charlatão.”</p>
      <p>Ela não está enganada, mas doeu e fazes uma careta de escárnio. Ela solta um suspiro e diz, “Tudo o que
        você disse sobre aquele quarto estava correto.
        Talvez o soubesse porque é um assassino. Ou talvez você seja... uma outra coisa.
      Mas não esteve a mentir, e tenho a sensação de que até você está espantado com isso.”</p>

      <p>Antes de conseguires reagir a essa declaração extraordinária, ela diz, “Tentemos com isto
        agora” e lança-te um <List expansions={["pequeno objeto de metal.", "<psychic>frustrado dispositivo de corte</psychic>.", "utensílio de corte feito de metal que emana frustração, e no momento em que o agarras estás —<br/><br/><br/>"]} tag="c1_device" />
      </p>
    </section>,
    <div className="in-flashback">
      <figure className="chapter1">
        <figcaption className="visuallyhidden">O grande pátio vazio duma casa imensa, em tons de sépia desbotados</figcaption>
      </figure>
      <h3>No pátio</h3>
      <section>
        <p>
          É de madrugada e podes sentir o cheiro a sal no ar. Por perto, há <List expansions={['algo', 'um objeto de metal']} tag="c1_device2" /> frustrado.
        </p>
      </section>
    </div>,
    <section>
      <p>
        Este é o pátio traseiro da propriedade dos Healeys. Não há nenhuma razão para o saberes; nunca lá
        estiveste, mas conheces o sítio onde te encontras tão bem como a tua própria casa. A casa neoclássica
        está agora bem iluminada pela luz do sol nascente, mas, tal como acontecera antes, a tua visão fica desfocada, escurecendo
tudo o que está na periferia. Entrevês uma cerca decorativa feita de pedra, vedando o
        pátio e tornando-o acessível apenas por umas escadas ladeada por urnas. As escadas acabam num
        caminho arenoso que levará, provavelmente, através das dunas, à praia privada da família.
      </p>
      <p>
        Parece perfeitamente normal que <List expansions={["as urnas", ["a urna rachada", "a urna mais nova"], "as urnas desiguais"]} tag="c1_urns" conjunction="e" /> ao lado das
        escadas de trás irradiem frustração.
      </p>
    </section>,
    <section>
      <p>
        <Map from={inventory.c1_urns}
          to={ {
            "rachada": "A urna rachada está vazia, mas a urna mais nova ",
            "mais": "A urna mais nova"
          }} offset={2}
        /> contém o utensílio de metal que Whitby te lançou. É uma lâmina curvada
        introduzida num encaixe redondo do tamanho duma moeda, com uma cobertura de segurança —ah, é uma guilhotina para charutos.
        Podes ler a emoção
        que irradia do objeto tão claramente como se pudesses ler o rosto duma pessoa.
      </p>
      <p>
        Se a luva a sentiste zangada — até homicida — a guilhotina está frustrada.
        Tinha apenas uma função, e essa tarefa ficou inacabada quando Healey, interrompido no seu
        quarto, foi assassinado. É um utensílio simples, mas deveras pessoal, e
        podes sentir uma outra emoção a brotar do seu interior: uma profunda sensação de perda.
      </p>
      <p>
        A sua tristeza está a florescer, de alguma maneira, a escapar-se da guilhotina
        e a infiltrar-se na urna, no interior das fissuras da
        cerca de pedra, e a derramar-se sobre o chão numa torrente. Vês como o pátio inteiro parece irromper em chamas
        num paroxismo de desconsolo. A casa está de luto pelo seu dono.
      </p>
      <p>
        Mas há uma nota desconcertante, um contraditório espasmo de ódio. Junto ao caminho, em baixo,
        perto do início das escadas, está a fúria conhecida daquela luva, mas esta traz consigo uma subtil diferença. Tem de ser a outra luva do par.
      </p>
      <p>Ouves gritos abafados, e vários agentes da polícia
        aparecem vindos de ambos os lados da casa. São os primeiros a chegar à cena de um
        crime que já testemunhaste e que eles ainda desconhecem. Aproximam-se da
        casa com cuidado, alheios à tua presença e ao desconsolo que estão a atravessar. Podes sentir a profunda separação entre o mundo animado e o
        inanimado.
      </p>
      <p>Um dos polícias deve ter recebido um sinal — alguém localizou o corpo — e correm todos para dentro da casa.
        O desconsolo começa a sucumbir, esvaindo-se como um filme a andar para trás e que regressa <List expansions={["ao utensílio", "à guilhotina para charutos de Healey"]} tag="c1_cutter"/>.
      </p>
    </section>,
    <section>
      <h3>No jantar</h3>
      <p>
        Estão todos a olhar para ti.
      </p>
      <p>
        "Ele está bem," diz Whitby à sala. Ela está a tirar a guilhotina do teu punho cerrado. Sentes que a mão dela
        te queima quando te toca a pele, mas és tu quem está frio.
      </p>
      <p>“O que é que eu fiz?” sussurras e tentas sentar-te direito.</p>

      <p>“Ficaste pálido. E depois apagaste-te.” Vês o teu café entornado e uma pilha de guardanapos ensopados, amontoados junto ao saleiro.</p>
      <p>“Desculpe,” resmungas. Os clientes que jantavam voltaram a fingir que não reparavam em ti.
        Fincas o teu melhor olhar de vidente na inspetora.
        “Encontrou <List expansions={["esse objeto", "a guilhotina de Healey", "a guilhotina de Healey, numa urna", "a guilhotina de Healey numa urna, deixada cair pelo assassino"]} tag="c1_face" /> atrás
        da casa,” <Map from={inventory.c1_face}
          to={{
            undefined: "dizes",
            utensílio: "dizes",
            Healey: "afirmas",
            urna: "insistes"
          }} /> tu.

        O rosto dela é <Map from={inventory.c1_face}
          to={{
            undefined: "impassível",
            utensílio: "tenso",
            Healey: "a tremer ligeiramente",
            urna: "um misto de emoções contraditórias"
          }} />.
      </p>
      </section>,
      <section>
        <p>“Sim,” acaba ela por dizer.</p>
        <p>“Ele esteve a usá-la mesmo antes de morrer.”</p>
        <p>É o que achamos. Ele fumava fora de casa, mas guardava os charutos naquele escritório. Encontrámos
        um desembrulhado, mas ainda por cortar.” Ela pausa e baixa a voz. “Onde é que esteve? Agora mesmo?”</p>
        <p>“Atrás da casa dele. Vi a polícia chegar, na manhã em que Healey morreu.”
        </p>
        <p>“E a urna?” pergunta logo ela.
        </p>
        <p>
          Perdido por cem, perdido por mil. “Eu senti-o. A guilhotina... ela tem saudades de Healey.”
        </p>
        <p>“Ela o quê?”</p>
        <p>Tens as palmas das mãos suadas, mas todos os guardanapos foram usados para limpar o teu café. Por isso limpas as mãos às calças.
          “Não é qualquer objeto que me permite criar um... vínculo. Tem de estar
          implicado no que se passou.”
        </p>
        <p>“Implicado,” repete ela.</p>
        <p>“Deixe-me ver essa luva de novo.”
          Ela tira-a com relutância. Como esperavas, já não está impregnada de
          raiva nem de vingança nem de qualquer outra emoção. “Quando a agarrei pela primeira vez,” explicas,
          “foi como estar num quarto com a pessoa mais zangada que alguma vez encontrou na sua vida. Alguém
          tão cego de fúria que não procurava outro desfecho que a violência.”
        </p>
        <p>A sobrancelha dela arqueia-se de forma aparatosa. “A luva. Estava zangada.”</p>
        <p>“E este cortador de charutos,” continuas, “nada mais desejava do que cortar mais um charuto.
          Tinha uma razão para existir e essa razão foi abortada.”
        </p>
        <p>“E agora? Esta guilhotina tem <em>saudades</em> dele?”</p>
        <p>“Já não. Acho que depois de me mostrarem o que sentem, ficam satisfeitos.”</p>
        <p>Ela recosta-se e cruza os braços. "Sr. Pietro, não sei bem, toma-me por idiota ou por otária?”</p>
        <p>“Essa luva,” apontas. “Só encontraram uma, não foi?”
        </p>
        <p>
          “Sim,” diz ela, desconfiada.
        </p>
        <p>
          “Leve-me à casa dos Healeys. Eu sei onde está a outra.”
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
