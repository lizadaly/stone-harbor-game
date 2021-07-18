const React = require('react')
import { Map, List, NextChapter, FromInventory } from '../components'
import { connect } from 'react-redux'
import { updateInventory } from "../actions"

import { RenderSection } from '.'

const _Chapter = ({currentSection, inventory, chapterId}) => {
  var sections = [
    <section>
      <h2>Capítulo VII</h2>
      <h3>No alpendre de Whitby</h3>
      <p>
        Chegaste meio morto ao teu apartamento apenas para encontrares o atendedor de chamadas a piscar.
        É Whitby. "Vem até cá a casa,"
        disse ela, "e traz alguma coisa que se beba," seguido de uma morada logo do outro lado da ponte, e depois o sinal do telefone.
        </p>
      <p>
        Daquilo que consegues ver à noite, é uma casa simples e imaculada. Não há nada no alpendre, apenas um simples tapete de boas-vindas e uma campainha, a que tocas.
      </p>
      <p>
        Um homem abre a porta. Tem a constituição de uma parede de tijolo. Não parece surpreendido, mas tu sim. "Sim, sou branco," diz ele.
     </p>
      <p>
        Antes de conseguires proferir palavras mais estúpidas do que aquelas que já estás a dizer com a cara, Hank deixa-te entrar. "Tamisha, o teu médium está aqui," grita. Ele fica com a garrafa de vinho barato que compraste no caminho para cá. "Nós é mais cerveja, mas obrigado."
      </p>
      <p>
        Não estavas apenas surpreendido por ele ser branco, mas, de facto, também estavas. Hank é ainda um tipo branco extraordinariamente atraente. Ele podia bem aparecer num calendário a carregar uma mangueira de incêndio.
      </p>
      <p>
        "O Hank trabalha na Guarda Costeira," diz Whitby ao entrar. É mais do que estranho vê-la vestida de maneira informal, com uma <em>sweatshirt</em> toda largueirona dos Eagles e umas <em>leggings</em> pretas. Ela faz-te sinal para a seguires, o que fazes, passando pela sala de estar arrumada até chegares à cozinha. Há um prato de esparguete em cima da mesa.
      </p>
      <p>
        “Come,” diz ela.
      </p>
      <p>
        "Como é que sabes que ainda não comi?"
      </p>
      <p>
        Ela abre o vinho que trouxeste e serve-to num frasco de doce. "Eu já vi o teu frigorífico." Começas a protestar, mas Hank o Tanque está a olhar, por isso decides pegar no garfo. Quando ficam satisfeitos por estares obedientemente a comer, Hank retira-se, e Whitby senta-se contigo à mesa, bebendo cerveja da lata.
      </p>
      <p>
        "Obrigado," dizes por fim. Não era comida complicada, mas tu também não tens gostos complicados. Ela faz sinal com a cabeça em direção à sala com aquela sua expressão de "és um idiota", e tu alteias a voz. "Obrigado, Hank."
      </p>
      <p>
        “Nada!” responde ele sabe-se lá donde. Podes ouvir um jogo a decorrer.
      </p>
      <p>
        "O carro-patrulha apanhou o Troiano exatamente no sítio onde disseste que ele estaria. Bom trabalho com <FromInventory inventory={inventory.c6_car} offset={0} /> <FromInventory inventory={inventory.c6_car} offset={1} />. Não é que o tipo tinha um mandado de captura por multas não pagas? Com isso, vamos conseguir aguentá-lo preso algum tempo. Ele ainda não disse muito, mas eu acho que vai falar.”
      </p>
      <p>
        "Também lá estava o Michael Herschel. Saiu mesmo antes do Troiano."
      </p>
      <p>
        "Porra, se tivéssemos sabido disso... Tenho um tipo a vigiar a casa dele, mas há dias que nem ele nem a irmã lá aparecem."
      </p>
      <p>
      Por entre garfadas de esparguete, acabas por completar a história toda de Jared. "É estranho, não é?" diz ela. "Porque veio ele ter contigo?"
      </p>
      <p>
        Estás já tão habituado à ideia de que estás metido no meio deste drama que te esqueceste que, para a família dos Healeys, és um perfeito desconhecido. "Ele disse alguma coisa sobre a mulher dele me ter mencionado. Acho que ela se estava a referir à minha mãe." 
      </p>
      <p>
      "A Ally adorava essas tretas em miúda — desculpa-me a caracterização." Sinalizas com um gesto magnânimo que continue. "Talvez alguma coisa dessas tenha passado para o marido?"
      </p>
      <p>
      Levantas-te, limpas o teu prato e regressas à mesa. Tiras o anel de um dos bolsos e desdobras o toalhete de papel que o envolve. "Ele deu-me isto, quando lhe pedi algo pessoal."
      </p>
      <p>
        "O que é que este... está a sentir?" Diz ela hesitante, mas sem ceticismo.
      </p>
      <p>
        "Culpa. Mas não sobre o assassinato. Tenho a certeza agora de que o Jared não matou o irmão, mesmo que tenha parte da culpa."
      </p>
      <p>
        Ela está preocupada contigo e quer que tu o vejas. "Pedi-te para vires porque senti que precisavas de companhia. Para mais, o Hank fez outra vez demasiado esparguete." Ela toca no teu braço. "Estamos aqui por ti. Eu não sou médium nenhuma, mas estamos quase a chegar ao fundo disto. Sei o que estou a dizer."
      </p>
      <p>
        "Espero bem que tenhas razão," dizes tu. "Porque isto está a dar cabo de mim." Antes que ela possa responder pegas no <List expansions={["anel", "anel ansioso e arrependido"]} tag="c7_ring" />.
      </p>
    </section>,
    <div className="in-flashback">
      <figure className="chapter7">
        <figcaption className="visuallyhidden">Ondas do mar da cor de umas Levis velhinhas</figcaption>
      </figure>
      <h3>Na praia</h3>
      <section>
        <p>
          Esta é a praia privada de Alan Healey. Os picos do telhado são visíveis acima das dunas, erguendo-se por detrás do arvoredo denso e enfezado. É o início da manhã.
        </p>
        <p>
          A esta distância podes ver as semelhanças entre os irmãos. Jared, mais novo, e Alan, mais velho, mas ambos recortados do mesmo modelo, se não em espírito, pelo menos no corpo. Alan é mais ágil do que se poderia pensar — o homem teve de descer a pé aquele caminho íngreme para chegar até aqui. Também parece estar consumido pela raiva.
        </p>
        <p>
          "Não te dei já que <em>chegue</em>?" diz ele. Está apoiado numa tabuleta que diz <smallcaps>Propriedade Privada</smallcaps>, enquanto o irmão vai lavrando círculos na areia com os passos. "Eu já tomei a minha decisão."
        </p>
        <p>
          "Se tiras as propriedades, nós ficamos —"
        </p>
        <p>
          "<em>Tu</em> ficas, Jared," diz Alan. "Se eu ficar com os negócios de volta — quando eu tiver os negócios de volta — tudo isto deixa de ser problema meu. Eu estava disposto a olhar para o outro lado e deixar-te cometer os teus próprios erros —"
        </p>
        <p>“Estavas feliz da vida a aceitar o dinheiro enquanto foi fácil.”</p>

        <p>“Eu nunca fiquei com um tostão para mim. Está tudo num fundo, para a Sarah.”</p>
        
        <p>Jared não sabia disto. "Ela não é tua filha! Como te atreves?"</p>
        
        <p>"Da forma como as coisas estão a ir, Jared, não vai restar <em>nada</em> para ela. Sorte terá ela não ficar órfã quando esses teus esquemas derem o que tinham a dar." A sua voz torna-se um pouco mais branda. "Estas pessoas são <em>perigosas</em>. São assassinos."
        </p>
        <p>
          "São meus amigos. Eles não —"
        </p>
        <p>
          "Ah, pois não. Não te posso impedir de estragares a tua própria vida. Mas posso impedir-te de estragares a da tua filha." Ele vira o rosto para o mar, incapaz de fitar o irmão olhos nos olhos. "Decidi vender o negócio todo, liquidar todas as empresas de propriedades. E vai ficar tudo num fundo para a Sarah e para a Maggie."
        </p>
        <p>
          Pela expressão de Jared, sabes que isto não é bom para ele. "Nunca iremos ser capazes de pagar aquilo que temos estado a movimentar. O Michael vai-me matar."
        </p>
        <p>
          Alan abana a cabeça com tristeza. "O Michael precisa de encontrar o seu próprio caminho de volta. Eu não sei onde é que esta família errou, mas acaba agora, com a Sarah. Eu fiz uma promessa."  
        </p>
        <p>
          "Seu hipócrita dum raio," diz Jared, e pára. "Uma promessa a quem?"
        </p>
        <p>
          Agora, Alan não está de todo a olhar para o irmão. "À Allison."
          </p>
        <p>
          "Tu falaste com a minha mulher? Quando?"
        </p>
        <p>
          "Antes de partir. Ela disse-me que se ia embora, que tinha de ir porque não era seguro para ela. Mas não me explicou porquê." Ele estende a sua mão; na palma está um anel de ouro igual àquele que Jared ainda usa. O anel sente-se só, dolorosa e pesarosamente só.
          "Desculpa-me, meu irmão. Devia ter-to dito."
        </p>
        <p>
          Jared solta um grito lancinante e tenta apanhar o anel da sua ex-mulher, mas Alan atira-o — <em>atravessando-te</em> — e vai parar à rebentação. Jared grita de raiva e empurra o irmão mais velho, que cai na areia. 
        </p>
        <p>
          “Tu mataste-me,” diz ele, soluçando.
        </p>
        <p>
          "Tu é que o fizeste a ti próprio," replica Alan, mais triste que zangado. Jared deixa-o ali, na areia, a lutar para se levantar sozinho. Tu, claro está, não o podes ajudar, apenas ver. 
        </p>
        <p>
          Sentes o anel a atrair-te.  
        </p>
        <p><em>Mas eu ainda não acordei,</em> pensas tu, enquanto te diriges para a rebentação. <em>Eu ainda estou nesta visão, ainda no passado.</em></p>        
        <p>
          Se estivesses à procura apenas com os olhos, o anel há muito que tinha desaparecido entre as algas e a espuma, mas no plano raso, desbotado, indiferente da visão o seu desespero é como um farol. Mergulhas as mãos na água (<em>desde quando é que tenho braços?</em>) e pões a tua mão em volta do <List expansions={["anel", "anel assombrado"]} tag="c7_ring2" /> de Allison Healey.
        </p>
      </section>
    </div>,
    <div className="in-flashback">
      <figure className="chapter7-2">
        <figcaption className="visuallyhidden">A entrada da frente para a sala de uma vidente, com tabuletas a anunciar a preto e branco leituras da mão. </figcaption>
      </figure>
      <h3>Na sua sala de leitura</h3>
      <section>
        <p>
          Já acordaste? Se sim, como é que chegaste até aqui? Não estás na casa de Whitby?
        </p>
        <p>
          Os pormenores começam a surgir diante dos teus olhos: objetos no sítio errado; coisas partidas misteriosamente restauradas; a cortina de contas com um aspeto novinho em folha. Uma figura embaciada no canto ganha nitidez. A tua mãe.
        </p>
        <p>
          Esta não é uma das tuas memórias. Nunca a viste assim: mais velha, perto da idade em que morreu, mas ainda saudável. O seu cabelo negro quase todo já vestido de grisalho; a sua pele, sempre da cor das azeitonas e do cabedal, curtida do sol e do vento, está agora toda encarquilhada. Não está ninguém no quarto com ela.
        </p>
        <p>
          <em>Ela está sozinha por tua causa,</em> pensas tu, e é então que sentes verdadeiramente toda a verdade pela primeira vez. Deve ter sido de uma dificuldade impossível para ela, mãe solteira, mas tu, qual criança egoísta, apenas pensavas naquilo que ela não te podia dar: uma casa, um cão, irmãos, uma vida normal. Assim que fizeste 18 anos, agradeceste-lhe, saindo de casa e com o envio ocasional de um cheque e a desinteressada visita de férias, mas na verdade, deixaste-a — a tua vingança pelo crime de ter feito o melhor que podia para educar o seu filho. Quando decidiste regressar para junto dela, já ela estava a morrer.
        </p>
        <p>
          A cortina abana, e uma mulher entra: casa dos trinta, loura platinada, a cara chapada da filha. Esta é Allison, a mulher de Jared.
        </p>
        <p>
         A cara da tua mãe anima-se, pronta para assumir o seu papel. "Procura a sabedoria dos anciões?" (Nem sequer foste capaz de inventar a tua própria abertura.)
        </p>
        <p>
          Allison Healey está animada, esfuziante, o seu cabelo todo anos 70 tingido pelo sol e voluptuosamente encaracolado. Dela exala o ar de uma mulher que tem o futuro todo à sua frente. Vai ser uma leitura fácil, ela há de querer ouvir sobre amor eterno, filhos loirinhos e uma garagem para dois carros. A tua mãe começa com o seu palavreado, e surpreende-te ver o quão <em>boa</em> ela era nisto.
          
          Não há ponta de astúcia na sua narrativa. Os olhos dela estão cheios de amor incondicional por esta estranha. As suas palavras são mentiras bonitas, mas o seu desejo de trazer felicidade a esta pessoa é completamente genuíno.
        </p>
        <p>
        “Eu preciso dum objeto pessoal, um infundido com os próprios espíritos," diz ela, 
        e apercebes-te que os teus lábios imitam os dela, como numa oração silenciosa.</p>
        <p>
          Sem hesitar, Allison Healey retira <List expansions={["a aliança", "a sua aliança de ouro"]} tag="c7_allison_ring "/> do dedo.
        </p>
      </section>
    </div>,
    <section>
      <p>A tua mãe aceita-o, e a sua reação é imediata e violenta. Ela atira-se para trás na cadeira, a sua cabeça roda em espasmos. Os olhos dela estão escancarados, mas incapazes de ver, e lança-se num gemido soturno diferente de tudo o que já ouviste antes.
      </p>
      <p>
        Não admira que Whitby tenha ficado apavorada naquele primeiro dia.
      </p>
      <p>
        Healey afasta-se para trás, mas a tua mãe avança, olhos a fitar o vazio em horror, e agarra a mulher pelos pulsos. "Tem de me ouvir, Allison." 
      </p>
      <p>
        "Não, não tenho, largue-me —"
        </p>
      <p>
        "Jared irá traí-la. Se ficar com ele, você e a sua filha irão morrer." Healey está pasmada, imóvel.
        "Ele ainda não lhe disse, mas está com dívidas.
        Nada de grave, apostas nos jogos de domingo com alguns amigos. Ele sabe que o irmão lhe há de aparar os golpes se se meter em apuros."
      </p>
      <p>
        As palavras saíam sem parar: "Mas não vai parar. Vai envenená-lo. Para cobrir os seus próprios prejuízos, vai aliciar esses amigos, desviar os seus ganhos. No início, vai pensar que está tudo a correr bem, e assim será, enquanto for conseguindo atrair mais pessoas. Quando já não tiver mais amigos, vai-se virar para a família. O irmão, o sobrinho, todos serão atraídos para a sua órbita. Irá usar as propriedades do irmão como garantia de uns empréstimos perigosos para continuar a cobrir as perdas. Mas ele vai ficar viciado nos lucros, e o Michael também. Quando o Jared se aperceber que está a ir ao fundo, o Michael há de lá estar para o fazer bater no fundo. Não vai ter escolha. O Michael é perigoso e terá, então, uns amigos perigosos que não hão de gostar nada de ser extorquidos do seu dinheiro."
      </p>
      <p>
        "Isso é uma loucura, o Jared nunca iria —" Ela não acredita, contudo sabe que é verdade. Como é que ela não haveria de acreditar, com tantos pormenores?
      </p>
      <p>
        "Estou a vê-lo claramente. Eles estão a entrar na vossa casa enquanto dormem. Dois homens maus a entrar às escondidas no quarto da sua filha, e vão fazer com que tudo pareça um assalto. 'Atlantic City é tão violenta' hão de dizer. 'Ninguém devia criar uma família aqui; deviam ter ficado em Stone Harbor.'"
      </p>
      <p>
        "Que posso eu fazer? Irmos embora? Não posso deixar que lhe façam mal." Ela agora também está a agarrar as mãos da tua mãe, as palmas de ambas enlaçadas sobre a mesa. A tua mãe continua sem olhar para ela, com os olhos fixos numa visão que nenhum de vocês consegue ver.
      </p>
      <p>
        "Não vale a pena. O Jared adora a Sarah, ele está sempre a gabar-se da sua filha linda. Ela é a garantia <em>deles</em>. É assim que o mantêm na linha. Se a levar, eles vão pensar que ele a mandou para um sítio seguro, e irão à vossa procura. Estou a ver isso também, encontram-vos, num motel, paradas num semáforo, faça o que fizer, eles irão encontrá-la."
      </p>
      <p>
        Allison já está a soluçar, quase como se ela mesma conseguisse ver o futuro. A tua mãe acena com a cabeça. "Há uma maneira. Só uma. Se a Allison se for embora, eles vão pensar que simplesmente o deixou. Que estava enojada com o que ele andava a fazer. Não pode levar a Sarah. Mas ela ficará a salvo."
      </p>
      <p>
        "Como? Eu não posso deixar a minha própria filha."
      </p>
      <p>
        "De todos os futuros possíveis que posso ver, este é o único em que ela sobrevive. Vejo que ela terá muitos protetores. Alguns deles estranhos para si agora. Tem de lhe encontrar um guardião, alguém em quem confie, alguém forte. Essa pessoa, por sua vez, irá encontrar outros, e todos irão mantê-la em segurança."
      </p>
      <p>
        "E o tio dela —" O rosto da tua mãe ensombra-se.
        Sabes o que ela está a ver, que cena ela está a testemunhar. "Ele irá sacrificar tudo para a proteger," diz ela.
      </p>
      <p>
        "Isto parece-me tudo tão injusto. Nada disto sequer ainda aconteceu —"
      </p>
      <p>
        "Isto <em>é</em> injusto. Tem de sacrificar a sua própria felicidade e deixá-la, para dar este rumo aos acontecimentos."
      </p>
      <p>
        <em>E é então que a tua mãe vira a cabeça e olha diretamente para ti.</em>
      </p>
      <p>
        Ela sorri daquela maneira que sempre sorria quando se sentia orgulhosa de ti.
        "Vais ver o teu rebento novamente um dia. E quando o fizeres, ela vai perdoar-te por te teres ido embora."
      </p>
      <p>
        A tua mãe larga o <List expansions={["anel", "anel pesado, carregado com a culpa da dona"]} tag="c7_ring_drop" />.
      </p>
    </section>,
    <section>
      <h3>Na praia</h3>
      <p>
        Estás em pé na rebentação, e Healey está a caminhar devagar, muito devagar, de regresso a casa. Olhas para baixo para a palma da tua mão, e sentes-te a desvanecer desta visão também. 
        O <List expansions={["anel", "anel"]} tag="c7_ring_drop2" /> começa a cair e passa através da tua mão, que vai desparecendo.
      </p>
    </section>,
    <section>
      <h3>Na sala de Whitby</h3>
      <p>
        “Onde está a Sarah?” dizes tu ainda antes de estares completamente de volta ao presente.
        "Foi sempre sobre a Sarah. Ela está em perigo."
      </p>
      <p>
        Whitby, em seu abono, não perde tempo com perguntas. "Tenho estado a assumir que está com o pai." Ela levanta-se para fazer uma chamada, deixando-te com Hank. Devias sentir-te embaraçado, mas estás exausto e grato pela companhia.
      </p>
      <p>
        "A Tamisha diz que tu és daqueles mesmo a valer," diz ele na sua inacreditável voz de barítono.
      </p>
      <p>
        "É um desenvolvimento recente," dizes tu debilmente. "Porquê, queres conhecer o teu futuro?" 
      </p>
      <p>
        Ele olha de volta para a cozinha. "Já o conheço."
      </p>
      <p>
        Whitby irrompe pela sala adentro, segurando uma arma que apareceu do nada, e levanta-te à força pelo cotovelo. "Ninguém sabe da rapariga há dias. Raisparta."
      </p>
      <p>
        Estás fixado na arma. "Para onde é que estou a ir, porra?"
      </p>
      <p>
        "Tenho um palpite, mas preciso que me contes o resto no caminho. Não te preocupes, Uri Geller, vais ficar no carro."
      </p>
      <p>
        Ao saíres cambaleante em direção à escuridão ainda ouves a voz de Hank: "Eu arrumo isto tudo, querida."
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
