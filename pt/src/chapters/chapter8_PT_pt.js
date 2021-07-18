const React = require('react')
import { Map, List, NextChapter, FromInventory } from '../components'
import { connect } from 'react-redux'
import { updateInventory } from "../actions"

import { RenderSection } from '.'

const _Chapter = ({currentSection, inventory, chapterId}) => {
  var sections = [
    <section>
      <h2>Capítulo VIII</h2>
      <h3>No carro</h3>
      <p>
        Omites a parte sobre a tua mãe te ter visto. Sentes que é uma coisa privada. O resto contas-lhe no caminho. Whitby reage ao amigo de maneira fria. "Nem sei o que pensar duma mãe que é capaz de abandonar um filho."
      </p>
      <p>
        "Acho que se o tivesses visto..." começas. "Foi muito pior do que aquilo que me aconteceu. E ela sabia tantos pormenores."
      </p>
      <p>
        "Sim, mas é que..." Whitby vira o carro para uma rua residencial escura. "Ela sempre foi uma rapariga de borgas. Não sei se estava preparada para ter um filho."
      </p>
      <p>
        Não tens a certeza porque é tão importante para ti que ela compreenda, mas é. "Ela não estava a fugir das responsabilidades. Estava a ser corajosa. Estava a sacrificar-se pela filha."
      </p>
      <p>
        "Talvez," diz Whitby. "Esperemos é que não seja tarde demais." Ela vira o carro para um caminho privado cheio de curvas. Estão na propriedade dos Healeys em Stone Harbor.
      </p>
      <p>
        "O Troiano cedeu, como previsto. Confessou que começou com coisas de pouco valor, a apostar no jogo de domingo, todos o fazem, mas as coisas começaram a intensificar-se. Têm a marina, mais os parques de estacionamento, os armazéns: na realidade, o império Healey é perfeito para lavagem de dinheiro, tráfico, é o que quiseres.
        Tanto quanto sei sempre foi um negócio limpo. O Alan era bom a gerir as propriedades e a fazer investimentos acertados. Mas desde que se reformou e deixou o Jared à frente do negócio, ele limpou aquilo tudo e envolveu-se com mafiosos.
      </p>
      <p>
        Dizes, "O Alan soube-o durante muito tempo, mas ou não queria acreditar ou esperava que tudo se resolvesse sozinho. Quando compreendeu que não havia forma de recuperar o irmão, tomou medidas para se proteger a ele próprio, à mulher e também à sobrinha. Ela é a filha que ele nunca teve. Acho que o Michael descobriu os planos do irmão e estava ciente de que se o negócio deixasse de existir por completo iria deixar certas pessoas muito, mas muito zangadas."
      </p>
      <p>"Não sei se realmente teria feito alguma diferença," diz Whitby. "Se metade daquilo que o Troiano disse for verdade, o FBI vai ter um dia em cheio. A família vai perder tudo." Ela desliga as luzes, põe o carro em ponto morte e deixa-o deslizar até à entrada.
      </p>
      <p>
        A casa está às escuras, mas o carro de Michael Herschel está aqui, metido entre as árvores nodosas e escondido à pressa com arbustos. Está a irradiar medo de ser capturado.
      </p>
      <p>
        Todos os objetos em redor chamam por ti.
      </p>
      <p>
        "Achas que também vão perder esta casa?" Ela confirma com a cabeça. "É uma pena." Cada pedra, cada coluna diz que esta casa foi um lar feliz.
      </p>
      <p>
        Com um gesto, mostras o veículo à inspetora. "Fica aqui e não te mexas," diz ela.
        Ela tira a <List expansions={["arma", "arma inquieta"]} tag="c8_gun" /> e de mãos firmes verifica-a com destreza. <Map from={inventory.c8_gun} to={{arma: "A arma diz-te que nunca foi disparada em serviço. Tem medo de fazer mal à pessoa errada. Espera nunca ser usada."}} />
      </p>
    </section>,
    <section>
      <p>
        Ela dirige-se à parte de trás da casa e desaparece. Estupidamente, apercebes-te de que não sabes se ela pediu reforços ou o que fazer se alguma coisa correr mal.
        A <List expansions={["porta da frente", "velha e imponente casa está em apuros, e a porta da frente "]} tag="c8_house" /> chama por ti.
      </p>
    </section>,
    <section>
      <p>
      A lua está quase cheia, e o caminho de gravilha branca cintila. Podes ouvir o embalo do mar e as cigarras e os grilos que enchem o ar. Mas estes são quase completamente abafados pela cacofonia de vozes inanimadas dentro da casa. Deixas-te ir até às <List expansions={["escadas",
        "escadas de betão, onde pegadas de homens assustados deixaram mediúnicas manchas negras que, bem sabes, só tu podes ver"]}
          tag="c8_prints" nextUnit={null}/>. Através
        de uma <List expansions={[`pequena janela`,`pequena janela na porta`]} tag="c8_entryway" nextUnit={null}/> <Map
          from={inventory.c8_entryway} to={{
            undefined: " só entrevês pretidão.",
          janela: `consegues discernir os contornos da entrada e o zunir de mais objetos famintos.`}
          }/>
        &nbsp; A <List expansions={["maçaneta", "hospitaleira maçaneta"]} tag="c8_doorknob" /> faz-te sinal.
      </p>
    </section>,
    <section>
      <p>
        Roda-la e ficas com a ligeira sensação de que é uma estupidez, que devias era regressar a correr para um lugar seguro. Só que já entraste, e vês um tapete enegrecido <Map from={inventory.c8_prints}
          to={{
            undefined: ` de tantas pegadas sobrepostas, `,
            stairs: ` das mesmas pegadas, `
          }} /> com as mesmas pegadas, manchas não de lama, mas de medo e raiva. Não vês pegadas de criança, mas o <List expansions={["corrimão da escada—", "corrimão da escada chama por ti, como uma mão numa pista de dança, incitando-te a que o sigas."]} tag="c8_stairrail"/>
      </p>
      <p>
        Jared Healey jaz amontoado no fundo das escadas, o seu pescoço dobrado para trás. Não sabes se foi a queda que o matou, mas um <List expansions={["pesado atiçador de ferro", "pesaroso atiçador de ferro"]} tag="c8_poker" nextUnit={null} /> está a seu lado, empastado de sangue. <Map from={inventory.c8_poker} to={{ferro: "Sussurras-lhe o teu perdão." }} />
      </p>
    </section>,
    <section>
      <p>
        Estás agora no cimo das escadas, e um corredor estende-se para a direita e para a esquerda. Há quadros ao longo da parede, <List expansions={["retratos de membros da família", "retratos de membros da família, os seus olhos comicamente gesticulando para a direita, para a direita."]} tag="c8_portraits" />
        <Map from={inventory.c8_portraits} to={{undefined: " em grandioso estilo antigo."}} />
      </p>
    </section>,
    <section>
      <p>
        Uma <List expansions={["mão", "mão firme"]} tag="c8_hand" /> no teu ombro deixa-te paralisado.
      </p>
    </section>,
    <section>
      <p>
        “'Mas que porra pensas tu que estás a fazer?'” sibila Whitby. Um movimento periférico capta a tua atenção, e olhas para baixo para o tapete oriental debaixo dos teus pés. O tapete cobre todo o corredor e, ao observá-lo, os seus padrões abstratos amontoam-se e convertem-se numa série de setas ondulantes, como um letreiro de néon num casino.
      </p>
      <p>
        "Tens de ir por ali," dizes-lhe, apontando para a esquerda. "Detém o Michael."
      </p>
      <p>
        "Como é que sabes que ele está lá?" sussurra ela.
      </p>
      <p>
        "Disse-me o tapete.”
      </p>
      <p>
        Por alguma razão esta resposta convence-a. "Que é que estás a fazer?"
      </p>
      <p>
        “Eu vou buscar a Sarah.”
      </p>
      <p>
        “Deves esperar por—”
      </p>
      <p>
        "Não. É por isso que estou aqui." Abres a <List expansions={["porta à direita", "porta do quarto de Healey"]} tag="c8_bedroomdoor" />.
      </p>
    </section>,
    <section>
      <hr/>
      <h3>No escritório</h3>
      <p>
        O quarto está quase tão obscurecido na vida real. A porta para o quarto de Healey está fechada. A porta diz-te que está trancada, mas quer ser aberta porque lá dentro há uma menina pequenina muito assustada.
      </p>
      <p>
        Vais para a abrir, mas os livros nas prateleiras todos arqueiam as suas lombadas em direção ao canto. O vulto na sombra da tua visão encontra-se lá sentado. Agora já não está desfocado. É Michelle Herschel.
      </p>
      <p>
        <em>“Joey?”</em> diz ela, desconcertada. <List expansions={["O seu rosto", ["Os seus olhos de pânico", "as faces coradas", "a testa transpirada"], "A sua expressão assustada "]} tag="c8_michelle" conjunction="e" /> mal se 

        <Map from={inventory.c8_michelle} to={{
          undefined: " vê ",
          rosto: " veem ",
          pânico: " vê ",
          transpirada: " vê ",
          coradas: " vê "
        }} />
         na penumbra.
          </p>
    </section>,
    <section>
      <p>
        <Map from={inventory.c8_michelle} to={{
          pânico: "Os olhos dela percorrem-te de cima abaixo, tentando avaliar-te.",
          coradas: "As faces dela estão coradas como as dos mentirosos quando são apanhados.",
          transpirada: "Ela está toda transpirada de estar aqui sozinha há tanto tempo."
        }}/> Está a tentar compreender como é que o estranho da esquadra de polícia pode ser a pessoa que ela claramente aguardava. 
      </p>
      <p>
        <em>Nunca se tratou do irmão dela.</em>
      </p>
      <p>
        "Sim, sou eu o Joey,” dizes tu. O bater do relógio vai contando o tempo (e literalmente é como se a tua cabeça estivesse a levar uma surra), mas fazes um compasso de espera para respirar antes de iniciares a tua atuação. "Vim buscar a miúda," afirmas tu, com verdade. 
      </p>
      <p>
        Ela estuda-te de uma poltrona infestada de repulsa. O candeeiro da secretária está ligado, mas a sua luz recusa-se a iluminá-la a ela, preferindo antes banhar-te com o seu brilho. Isto não está a ajudar: quem quer que estejas a imitar provavelmente não se parece muito contigo.
      </p>
      <p>
        <Map from={inventory.c8_michelle} to={{
          pânico: "“Estás a olhar para onde?” dizes tu, e tentas mostrar-te aborrecido.",
          coradas: "“Que é que estás a esconder?” dizes tu, e apontas acusador para ela.",
          transpirada: "“Tresanda a suor aqui,” dizes tu com um sorriso escarninho."
        }}/>&nbsp; “Onde é que ela está?”
      </p>
      <p>
        “Tu és o Joey do AC? Que é que estavas a fazer na esquadra?” Ela não está a engolir a história.
      </p>
      <p>
        Que fazia um bandido numa sala cheia de polícias? Esfregas os dedos naquele gesto universal do dinheiro. "A proteger os meus bens." A experiência diz-te que a melhor maneira de aguentar uma mentira é mudar de tópico, por isso acrescentas, "Que é que aconteceu ao Jared?"
      </p>
      <p>
        Os olhos dela reluzem; ela quer gabar-se. "Agora que ele 
        já está fora de cena, não precisas da miúda. O Michael e eu estamos contigo, e preparados para levar a coisa para a fase seguinte. Eu certifico-me que o controlo das propriedades será nosso—" Há uma confusão lá fora — um baque. A mobília sussurra-te uma mensagem passada de objeto em objeto desde o fundo do corredor: Michael Herschel foi dominado, Whitby já vem a caminho.
      </p>
      <p>
        Mas Michelle é demasiado rápida; ela apercebe-se do significado das nuances expressivas do teu rosto, o modo como inclinas a cabeça na direção da porta. "Uma porra é que és o Joey." Ela levanta-se da cadeira e na mão segura <psychic><List expansions={["alguma coisa", "uma navalha de ponta e mola", "uma ponta e mola sussurrante"]} tag="c8_blade" /></psychic> à altura do peito. Vai recuando em direção à porta do quarto e lançando uma das mãos para tentar encontrar a maçaneta.
      </p>
    </section>,
    <section>
      <h3>Então</h3>
      <p>
        “Abra a porta,” diz Michelle Herschel. Ela ainda está a segurar a navalha, lâmina estendida, firmemente apertada entre aquelas luvas malévolas. Alan Healey tem as mãos no ar, recuando para a saída, mas ela abana a cabeça e sinaliza com a faca. "A outra." Ele dá uns passos para a rodear, ainda numa posição defensiva, e obedece. A luz escorre para fora do quarto.
      </p>
      <p>
        "A Maggie vai chegar a qualquer momento," diz Healey.
      </p>
      <p>
        "Ela está a dormir no quarto da Sarah. Para seu bem, é melhor que não acordem. Agora, <em>onde é que está a escritura?</em>"
      </p>
      <p>
        "Não sei de que estás a —"
      </p>
      <p>
        “Tio Healey, não lhe quero fazer mal,” diz ela. Mas claro que quer.
      </p>
      <p>
        “É tarde demais. Já está assinada. Está feito, não podes tocar no dinheiro.”
      </p>
      <p>
        "Eu sei que está a mentir," diz ela, e tu também sabes disso. Ela encurrala-o mais para dentro do quarto, e tu segue-los, impotente para impedir este assassínio uma segunda vez.
      </p>
      <p>Há duas pequenas camas, mas as camas garantem-te que é porque Maggie se mexe e se vira muito, e eles decidiram, há anos já, que era melhor assim. Eles ainda se amam, diz o quarto.
      </p>
      <p>
        Healey recua até à sua própria cama, que o quer abraçar e proteger desta mulher. "Não,"
        diz ela, apontado novamente a faca, desta vez, na direção da cómoda. Ele levanta-se outra vez, e os seus olhos tocam brevemente a <List expansions={["mesa de cabeceira", "mesa de cabeceira firme e protetora"]} tag="c8_nightstand" />.
      </p>
    </section>,
    <section>
      <p>
        Ele dá um passo em direção à cómoda, mas tropeça, agarrando-se à mesa de cabeceira para manter o equilíbrio.
        Apenas tu — Michelle não — vês o seu gesto rápido: ele empurra um pedaço de papel que desliza do tampo e cai para trás da mesa, ficando entre a peça de mobília e a parede. A mesa de cabeceira está determinada no seu desejo de esconder aquele papel a todo o custo.
      </p>
      <p>
        A sua guilhotina para charutos também estava na mesa, e ele apanha-a e atira-a com força à sobrinha, mas ela desvia-a facilmente. O objeto ressalta para o interior do escritório onde ela o irá apanhar mais tarde e atirar para dentro da urna quando estiver a fugir da propriedade.  
        </p>
      <p>
        “Tome os remédios, Tio,” diz Michelle, apontando para a garrafa com a cabeça. “E não pare até terem desaparecido todos.”
      </p>
      <p>
        “Michelle, não faças isto—”
      </p>
      <p>
        "Não nos deixou outra escolha," diz ela, e a sua voz vacila momentaneamente. "Era o Tio ou nós. O Tio teve uma boa vida. O Michael deu-lhe a oportunidade de tomar a decisão certa." Podes ver na sua cara que ela acredita nestas coisas. 
      </p>
      <p>
        Healey chora agora em silêncio, as suas mãos tremem e vão-se enchendo de comprimidos, e tu não aguentas ver, felizmente não tens de o fazer — 
        a dor psicológica da visão dá lugar à <List expansions={["dor física real", "dor de estar a agarrar a lâmina de uma faca"]} tag="c8_holdblade" />—
      </p>
    </section>,
    <section>
      <h3>Agora</h3>
      <p>
        Encostaste Michelle Herschel à porta fechada do quarto: uma mão agarrada à faca (sangue <em>escorre</em> da tua mão), a outra fechada em volta do pulso dela, impedindo-a de rodar a maçaneta. Tens estado a gritar-lhe, a dizer-lhe tintim por tintim o que viste, até que por fim o horror das suas ações começa a assentar. Talvez ela consiga sentir o desprezo de toda a casa, cada costura e cada prego a verter uma última vez o seu desgosto.
      </p>
      <p>
        Ela larga a faca, solta a maçaneta, e deixa-se cair no chão, cabelos frouxos a ladear o rosto. Cais para trás no preciso momento em que Whitby entra no quarto, de arma apontada. Sente-la a suspirar de alívio; não teve de ser disparada. 
      </p>
      <p>
        "Está tudo bem," dizes tu. "A Sarah está a salvo." Whitby encarrega-se de Herschel enquanto tu abres suavemente a porta para ver, pela primeira vez, a rapariguita no centro de tudo isto, metida entre as camas, segurando a boneca sem cabeça num aperto de morte.
      </p>
      <p>
        Ajoelhas-te diante dela, sussurras algo sem sentido, e tocas carinhosamente na <List expansions={["boneca", "Vicky, a boneca maltratada, mas feliz"]} tag="c8_doll" />.
      </p>
    </section>,
    <section>
      <p>“A Vicky quer que saibas que agora vai ficar tudo bem,” dizes sinceramente.
        “Ela diz que te vai sempre proteger.”
      </p>
      <p>
        Sarah torce a cara ao olhar para ti. “As bonecas não falam.”
      </p>
      <p>
        “Essa é uma boa regra geral, mas às vezes elas abrem exceções.”
      </p>
      <p>
        A rapariga desvia o olhar para Whitby que surge à entrada da porta. "Tia Tamisha!" grita ela e corre na sua direção, deixando a boneca esquecida por uns breves momentos. Não faz mal: quando Sarah está contente, ela está contente.
      </p>

      <p>
        Whitby põe-se a dar mimos à rapariga, a distraí-la enquanto os polícias enchem a casa, retiram o corpo e os Herschels, silenciosos e desafiadores. Dás a volta à cama até à mesa de cabeceira, afasta-la da parede e retiras o papel que Alan Healey tinha escondido, usando os seus últimos minutos na Terra.</p>
      <p>
        É uma escritura desta propriedade e desta casa no nome de um fundo pertencente a Sarah Healey. Tem a data do dia da sua morte e não está assinada.
      </p>
      <p>
        Assim como a guilhotina de charutos, sente-se incompleta e inacabada. Está a pedir-te ajuda. Leva-la até à cómoda — todos os medicamentos e objetos pessoais foram removidos — mas está lá uma simples <List expansions={["caneta barata", "caneta barata a abarrotar de tinta"]} tag="c8_pen" /> na gaveta de cima.
      </p>
    </section>,
    <section>
      <p>
        A caligrafia de Healey era naturalmente fluida

         <Map from={inventory.p0_library_things} to={{nota: "— distinta daquela nota apressada que leste na tua primeira visão —"}} /> com um ligeiro toque de arrogância. A caneta guia-te com facilidade, e com cada movimento sentes a escritura a suspirar de satisfação. "Isto tem de ir para o advogado dele," dizes para Whitby, que de certeza te viu falsificar a assinatura de Alan, mas ela pega na escritura com uma mão enquanto segura a da rapariga na outra. 
      </p>
      <p>
        Quando a soltas, a tua ligação com a casa desaparece num piscar de olhos, como um interruptor que se desligou. Acabou.
      </p>
      <p>
        Sentes um imenso alívio, mas também solidão.
        
      </p>
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
