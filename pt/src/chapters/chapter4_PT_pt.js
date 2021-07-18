const React = require('react')
import { Map, List, NextChapter } from '../components'
import { connect } from 'react-redux'
import { RenderSection } from '.'

const _Chapter = ({currentSection, inventory, chapterId}) => {
  var sections = [
    <section>
      <h2>Capítulo IV</h2>
      <h3>O teu apartamento</h3>
      <p>
        Ouves um bater hesitante na porta do teu apartamento. “Está aberta!”
      </p>
      <p>
        Whitby desliza a porta mosquiteira e encontra-te no teu pátio minúsculo. “Como é que sabias
        que era eu?”
      </p>
      <p>
        “Sou médium. Como é que sabias onde eu morava?”
      </p>
      <p>
        “Sou bófia.” Ela pousa um saco de papel e acende um cigarro sem perguntar. “Trouxe cerveja.”
      </p>
      <p>
        “O meu tipo preferido de visita,” respondes, embora não te mexas para abrir uma. Em vez disso,
        passas-lhe uma concha de ameijoa para ela pôr a cinza. Ficam os dois sentados num silêncio amigável, olhando para o mar através
        do gradeamento.
      </p>
      <p>
        “Recebes muitas visitas?” questiona ela. Mas é apenas uma pergunta retórica — o teu apartamento é uma espelunca e sabe-lo bem.
        Conseguiste deitar fora a maior parte da mobília antiga da tua mãe, mas não te preocupaste muito em substituí-la.
        Whitby põe os pés em cima do gradeamento e olha além do passeio marítimo para o mar.
        “Uma coisa não se pode negar, esta vista vale ouro.”
      </p>
      <p>
        Ela tem razão. O crepúsculo já assentou, a maré está cheia, e as ondas estão incrivelmente nítidas, quase fluorescentes.
        Podes ouvir o burburinho distante da multidão no passeio marítimo, mas
        o som da rebentação está mais próximo e mais alto. Para norte ficam os carrosséis e os tobogãs do parque de diversões da avenida principal;
        cá deste lado, ainda há muito movimento, mas é agradável. “Adoro este lugar,” admites.
      </p>
      <p>
       “Quem não adoraria?” Whitby repara que o recibo está ao teu lado, em cima de uma grade de leite, sob o peso de uma — “Isso é uma bola de cristal?”
      </p>
      <p>
        “É a de reserva.” Sabes bem o que a trouxe ao teu
        apartamento às nove da noite num domingo, portanto respondes à sua pergunta por fazer.
        “Ainda não lhe toquei.”
        Omites a menção à estranha agonia de compartilhar um espaço confinado com um objeto que está
        desesperado por se esconder de ti. Como pode um pedaço de papel ter segredos?
      </p>
      <p>
        “Porquê?”
      </p>
      <p>
        Olhas para as ondas a rebentar durante algum tempo antes de responderes. “Cada vez é mais difícil.”
    </p>
      <p>
        “Entrar na... visão?”
      </p>
      <p>
        “Sair dela. O que disse a Michelle Herschel quando a interrogaste?”
      </p>
      <p>

        “Ah, nada que já não tivéssemos ouvido. Já se tinha recolhido um depoimento bastante pormenorizado no local, porque ela e o irmão estavam cá a passar o fim de semana. Alugaram um quarto de casal no motel <i>Caribe</i> em Wildwood.
        Deve estar irritada por lhe ter feito perder tempo a ouvir uma série de perguntas a que já
        tinha respondido.”
      </p>
      <p>
      “Mas, então, porque é que lhe pediste que viesse à esquadra?” Quando ela não responde, compreendes tudo e começas a rir.
        “Aquilo foi uma armação, mandares-me embora do teu gabinete?” Repetes os acontecimentos na  cabeça.
        “Aquela chamada que recebeste, era apenas
        a receção a dizer que ela tinha chegado. E depois ficaste a observar-nos o tempo todo através das persianas.”
      </p>
      <p>
      "Estás a ver? Médium. Eu só queria ver do que eras capaz quando pões uma coisa na cabeça, e não dececionaste."
        Ela apaga o cigarro e pega no recibo como se se tratasse de um mero pedaço de
        papel (que, para ela, é). “É um recibo do bar daquele motel.” Ela vira-o. “Uma salgalhada de números escritos à mão no verso. Que serão?”
      </p>
      <p>
        “Não sei.”
      </p>
      <p>
        Ela estende o recibo na tua direção.
        “Está na hora, Pietro. Prometo que te protejo.”
      </p>
      <p>
        Ela tem razão. “Obrigado,” dizes e é sentido. Estendes a mão
        na direção do <List expansions={["<psychic>recibo</psychic>", "<psychic>recibo encolhido</psychic>", "<psychic>recibo manhoso</psychic>, e amarfanha-lo na tua mão"]} tag="c4_receipt" />.
      </p>
    </section>,
    <div className="in-flashback">
      <figure className="chapter4">
        <figcaption className="visuallyhidden">Um pátio de motel soalheiro, em tons amarelo-claros e excessivamente saturados, sob um céu azul limpo</figcaption>
      </figure>
      <h3>No motel</h3>
      <section>
        <p>
          O teu primeiro instinto é levantar as mãos para tapar os olhos, mas, claro, não tens nem uma coisa, nem outra.
          Mesmo assim, é uma luminosidade tão intensa que cega e até magoa. O <i>Caribe</i> fica
          no lado da baía da enseada — passaste por lá milhares de vezes — mas agora
          parece quase hiper-real, fluorescente.

      </p>
        <p>
         Do outro lado da rua, uma tabuleta eletrónica dum banco diz-te que é pouco depois da madrugada, o que explica o estado deserto do
          motel. Há também uma informação sobre a temperatura e está surpreendentemente fresco;
          encerrado nesta visão parece-te que é o meio-dia mais implacável que já sentiste, sob um foco solar escaldante e sem nenhum lugar para te esconderes. E tudo desemboca na sensação opressiva de que estás a ser observado.
        </p>
        <p>
          Mesmo que não consigas realmente <em>sentir</em> nada, tens de sair deste sol, por isso
          sobes (flutuando? boiando?) as escadas até ao convés, debaixo do imponente <List expansions={["toldo", "toldo abrasador"]} tag="c4_awning" />.
        </p>
      </section>
    </div>,
    <section>
      <p>Não há alívio nenhum cá em cima. Estar debaixo desta pala é sufocante, como se estivesses preso num quarto abafado.
        Deve ser assim que uma formiga se sente debaixo de uma lupa.
      </p>

      <p>
       Michael Herschel surge do interior do motel; reconhece-lo da foto, mas
        de qualquer modo saberias sempre que é o gémeo da sua irmã — pálido e loiro. Ele já está a suar,
        e como não faz calor, só podem ser nervos.
        Ele não sabe se se há de sentar ou andar, e alterna entre endireitar espreguiçadeiras e dar voltas pelo pátio.
      </p>
      <p>
        O seu tio Jared junta-se a ele. Aqui não há semelhança familiar; Jared é quase careca, mas o pouco cabelo que lhe sobra é escuro. As sobrancelhas são farfalhudas e tem uma barba irregular. Tem um ar atormentado e desleixado quando comparado com os seus
        sobrinhos. É cerca de 15 anos mais novo do que o irmão,
        talvez uns cinco anos mais velho do que os Herschels, quase a mesma geração.
      </p>
      <p>
        “Estás atrasado,” refila Herschel.
      </p>
      <p>
        “Pois, sabes, o trânsito,” diz Jared Healey.
      </p>
      <p>
        Herschel, por fim, decide sentar-se. “Poupa-me, são 5h30 da manhã. A coisa está resolvida ou não?”
      </p>
      <p>
        “Ainda não,” admite Healey. Antes de Herschel poder protestar, ele diz, “Preciso de mais tempo.”
      </p>
      <p>
        “O tempo acabou, Jared.”
      </p>
      <p>
        “Que queres que faça?” diz Healey. A sua voz faz-se fininha; está genuinamente amedrontado
        e a tentar escondê-lo.
      </p>
      <p>
        Inicialmente quando apareceu, Herschel estava tenso, mas agora tudo na sua expressão corporal projeta confiança.  “Dei-te tempo suficiente
        para corrigires isto. Acordámos um prazo e tu falhaste. Agora é a minha vez.” Ele <em>queria</em> este resultado, apercebes-te. Ele estava à espera de que o seu tio
        trouxesse más notícias para poder assumir o controlo da situação.
      </p>
      <p>
       Healey levanta-se, ajoelha-se diante do sobrinho. Por um momento absurdo, pensas que vai pedi-lo em casamento.
        “Michael, por favor. Não é assim que quero gerir o meu negócio.”
  </p>
      <p>

        “Não estás a geri-lo, estás a destruí-lo.” Ele reclina-se, afasta as pernas. Faz um compasso de espera.
        “Estou a ser generoso. Não me interessam as coisas pequenas. Fica com os teus amiguinhos na marina ou com qualquer uma dessas espeluncas em que acordas hoje em dia. Eu só quero os cinco primeiros.”
      </p>
      <p>
        Healey parece vencido. “Tens papel?” Ele revista-se e solta mais um suspiro. “Caneta?”

    </p>
      <p>
       Herschel não está minimamente perturbado. Calmamente puxa duma caneta e tira um pedaço de papel do
        bolso — o recibo. Ele observa triunfante o seu tio, prostrado diante dele, a escrevinhar uma série
        de letras e números. Assim que termina a quinta linha, Herschel saca o papel
        a Healey e põe-se de pé.
      </p>
      <p>
        “Não me ligues,” diz ele. “Eu aviso-te quando estiver feito. Ou vai vendo a conta.” Healey
        tenta interromper, mas Herschel solta um som de admoestação como se estivesse a falar com um cão.
        “Tens a certeza de que <em>ele</em> não descobriu nada?”
    </p>
      <p>
        “Absoluta, tens de confiar em mim.”
      </p>
      <p>“Não, não tenho. E agora, consegues ficar de bico calado ou vou ficar com dois problemas?”
      </p>
      <p>
        “Vou ficar calado,” diz Healey numa lástima. Ele esgueira-se pelas escadas exteriores, um homem vergado. A cada passo que dá, a visão vai gradualmente dando lugar àquele branco ofuscante.
      </p>
      <p>
        Herschel vê o seu tio partir e diz em voz alta, “Já se foi. Estás satisfeita agora?” Sabias
        que havia alguém a observar. A sensação de estares sob o microscópio intensifica-se, e a cena
        torna-se completamente branca, tão branca como o papel naquele <List expansions={["recibo", "recibo paranoico"]} tag="c4_receipt_vision" />.
      </p>
    </section>,
    <section>
      <h3>Na tua sala de estar</h3>
      <p>
        Abres os olhos ligeiramente, mas é uma agonia. “Meu Deus, apaga-me essa luz, és da Gestapo ou quê?”
        Ouves os passos de Whitby, depois um clique, e apesar de ainda ser doloroso, consegues olhar em volta.
     </p>
      <p>
        “Calma, é o teu candeeiro,” diz ela suavemente. “Como é que te sentes?”
      </p>
      <p>
    “Como se estivesse com a pior ressaca do mundo depois do enfrascanço mais curto da história. Quanto tempo estive desmaiado?”
      </p>
      <p>
       “Nunca estiveste desmaiado. Estiveste-te a queixar da luz e do calor, embora já passe da meia-noite e o ar condicionado esteja no máximo. Da última vez tiveste frio. Era bom que te decidisses de uma vez por todas.”
     </p>
      <p>
        Obrigas-te a sentar e a beber a água que ela atenciosamente te deixou aqui. “Foi forte esta.”

      </p>
      <p>
       A sua habitual cara impassível abranda um bocadinho. “Desculpa ter-te pressionado a fazê-lo.” É confrangedor que ela esteja a pedir desculpas e é estranho para ti também, por isso dás avanço à conversa.
        </p>
      <p>
       “O que é que o Jared Healey faz na vida?”

     </p>
      <p>
        “Gere uma marina de terceira categoria na baía. É mais uma rampa de atracagem para o pessoal local ir pescar e apanhar caranguejos na época baixa. Na realidade, pertence ao irmão dele.”
      </p>
      <p>
        “Ele é corretor,” dizes e descreves a visão. Whitby tira notas no seu caderninho
        de polícia, o mesmo em que põe as provas verdadeiras, o que te deixa nebulosamente orgulhoso.

      </p>
      <p>
        Quando acabas, ela diz, “Um péssimo corretor, pelo que dizes. Provavelmente peixe-miúdo,
        um pau mandado qualquer.” Quando perguntas, ela acrescenta, “Um corretor de segunda fila. Muita dessa gente começa por recolher apostas em nome de amigos,
        colegas, fica com uma pequena percentagem dos ganhos.”
      </p>
      <p>

        O recibo continua amarfanhado na tua mão. Alisa-lo
        na mesa do café, e juntos estudam-no. Das cinco linhas de números, quatro estão agora riscadas.
        Whitby diz, “O primeiro número de cada linha deve identificar o apostador — não é o tipo de negócio em que queres usar nomes verdadeiros — e o segundo é o saldo.
        Os clientes conhecem todos o seu identificador e usam-no para
        fazer as apostas. Todos os identificadores têm um algarismo só, por isso acho que estamos perante um pequeno grupo de clientes,
        mas alguns estão atolados em dívidas. Só esta página vale uns cem mil dólares.”
        </p>
      <p>
        “Impressionante. Pensava que eras dos homicídios.”
      </p>
      <p>
        “Pode parecer-te surpreendente, mas apostas desportivas ilegais fazem parte de muita atividade criminosa grave.” Ela estuda o recibo. “Suponho que o Michael Herschel já tenha cobrado a todos os que estão riscados. Amanhã, vou levar isto à unidade que trata do jogo ilegal, talvez lhes faça lembrar alguma coisa. Mas sem nomes é quase impossível. Quem for o número oito, espera-o uma péssima semana, aposto.”
      </p>
      <p>
       A tua dor de cabeça começa a dar-te tréguas. “Era a irmã dele que o tinha. Achas que ela está metida nisto?”
      </p>
      <p>
        “É muito provável.” Ela não parece muito interessada.
      </p>
      <p>
        “Talvez. Ela não parece desse tipo. Eles já não são ricos que chegue?”
        </p>
      <p>
        Whitby está a arrumar as suas coisas, a cabeça já está obviamente no dia que aí vem. “Ouve, tu podes ser bom a ler pessoas.
        Não o nego. Mas se há uma coisa que aprendi neste trabalho é
        que <em>todos</em> são desse tipo.” Ela inclina a cabeça para ti. “Ficas bem sozinho?”
      </p>
      <p>
        “Sim. Mas obrigado.” Brincas com a bola de cristal que dalgum modo conseguiu vir do alpendre cá para dentro.
       </p>
      <p>
        “Fizeste um bom trabalho hoje, Pietro. Deste-me coisas verdadeiras de polícia para investigar. Tira um dia de folga,
        vai visitar um amigo, descansa. Tenta voltar à tua vida normal.” Acenas com a cabeça, e ela sai,
        deixando-te sozinho com uma cabeça latejante, a tua bola de cristal e pouco mais.      
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