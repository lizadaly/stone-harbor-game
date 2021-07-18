const React = require('react')
import { Map, List, FromInventory, NextChapter } from '../components'
import { connect } from 'react-redux'
import { RenderSection } from '.'

const _Chapter = ({currentSection, inventory, chapterId}) => {
  var photos = [
    "uma pilha de fotos",
    "uma pilha de fotos. Viras a primeira... é de dois homens velhos"
  ]
  var sections = [
    <section>
      <h2>Capítulo II</h2>
      <h3>Na mansão</h3>
      <p>
        Quase não falam na viagem para lá. No caminho passaste pela loja para a fechar para o resto do dia. É sábado e há um magote de gente na praia, o que te deixa um certo pesar ao virares a tabuleta para <small>fechado</small>.
        Por outro lado, apercebes-te de que hoje deve ser o dia de folga de Whitby. Perguntas-te como será ter amigos capazes de fazer um favor assim por alguém.
       </p>
      <p>
        A casa é exatamente como a recordas da tua visão: dispersa, branca, classicizante,
        típica deste bairro chique e tão diferente da maioria das casas costeiras com a sua madeira cinza desbotada pelo sol. Mas também não estamos a falar de novos-ricos. Nota-se que tem tido muito uso, mas está bem cuidada. Quando se mora na costa é fácil encontrar pessoas ricas para desprezar, mas a casa dos Healeys sente-se que é um lar.
      </p>
      <p>
        “A mulher está em casa da irmã por isso não está cá ninguém,” diz Whitby ao sair do carro. “Mas mesmo que quisesse não o podia deixar entrar.” Mas é mais do que óbvio que ela não quer.
      </p>
      <p>
        “Não preciso de entrar, é na parte de trás,” respondes. Conheces o caminho e nem esperas por ela.
      </p>
      <p>
        A tarde já vai adiantada por isso o pátio está à sombra, mas é um dia muito, muito quente e tu, mesmo de calções, estás a suar que nem um porco. Claro está que a inspetora aguenta-se fresca, impávida e serena no seu uniforme de poliéster. “Pare imediatamente,”
        ladra ela. “Diga-me onde é que está.”
      </p>
      <p>
        “Está com medo que vá forjar provas?”
      </p>
      <p>
        “Exatamente.”
      </p>
      <p>
        “Sabe que me ofenderia menos se me mentisse.” Ela não responde, por isso limitas-te a apontar. 
        "Está num arbusto na base das escadas. Provavelmente."
      </p>
      <p>
        Ela pára. “Provavelmente?”
      </p>
      <p>
        “<em>Estava</em> lá, mas Healey morreu há já algumas semanas. Eu sei lá o que é que aconteceu, entretanto.” Ouve-la resmungar algo sobre seres um médium da treta.
      </p>
      <p>
        “Quem são vocês? O que estão a fazer aqui?”
      </p>
      <p>Viras-te num sobressalto. É uma mulher mais velha, alarmada pela vossa presença. Veste
        roupas <List expansions={["caras", "caras, mas escolhidas um bocado ao acaso; nem tudo combina bem"]} tag="c2_clothes" nextUnit={null} />.
        Traz consigo um <List expansions={["saco de marinheiro", "saco de marinheiro, que pelo modo como o carrega, parece cheio e pesado"]} tag="c2_duffel" nextUnit={null}/>.
        Os seus <List expansions={["olhos são vivos", "olhos são vivos, mas estão turvos, como se estivesse estado a chorar"]} tag="c2_eyes" />.
      </p>
    </section>,
    <section>
      <p>
        <em>Ah, deve ser a viúva</em>. Ela faz-vos má cara. “São da polícia?”
      </p>
      <p>
        “Sim,” diz Whitby, de modo sentido. “Lamento muito a sua perda, Sra. Healey.”
      </p>
      <p>Ela fica aliviada por não serem ladrões, mas não se pode dizer que esteja contente por vos ver.
    “Pensava que vocês já tinham acabado as coisas por aqui.”
      </p>
      <p>
        “Apenas a dar seguimento a umas coisas que ainda estão pendentes. As minhas desculpas pelo incómodo, pensava que já tinha partido.”
        replica Whitby.  Ela lança-te um olhar com um significado claro de ‘bico calado’.
      </p>
      <p>
        “Eu conheço-a,” diz a Sra. Healey. “Você é a madrinha da Sarah.”
      </p>
      <p>
        Whitby acena com a cabeça. “Andei com a Allison no liceu.”
      </p>
      <p>
        A mulher vagueia um pouco pelo jardim, arrancando algumas flores secas.
        “Não vejo a Sarah desde — aquela noite — ela deixou uma coisa lá em casa. Espere que já lha dou.”
        Ela leva a mão ao saco e aproxima-se para te dar alguma coisa — a ti, porque estás
        mesmo ao seu lado — e é então que sentes o embate de uma vaga de medo que te faz cambalear para trás.
        Ela fica confusa com a tua reação, mas avança, estendendo-te o objeto. A tua visão fica tão distorcida que nem consegues ver o que é,
        apesar de estar mesmo à frente dos teus olhos.
        </p>
      <p>Whitby vê a tua aflição e larga a correr pelas escadas acima, cruzando o pátio. “Obrigado, Sra. Healey,
        Eu fico com isso —”
      </p>
      <p>
        Sentes o sangue a fugir-te dos braços e das pernas, e a tua visão a afunilar-se até não ser mais do que uma ponta de alfinete. 
        Whitby lança-se para a intercetar, mas é tarde demais, a mulher não perdeu tempo em atirar <List expansions={["uma boneca", "<psychic>uma boneca assustada</psychic>", "<psychic>uma boneca assustada com a cabeça esmagada</psychic>"]} tag="c2_doll" /> para as tuas mãos paralisadas —
        </p>
      </section>,
      <div className="in-flashback">
        <figure className="chapter2">
          <figcaption className="visuallyhidden">Uma saleta antiga, com cadeiras estofadas e uma jarra com flores murchas, a preto e branco</figcaption>
        </figure>
        <h3>Na sala de estar</h3>
        <section>
          <p>
            Nunca te sentiste tão pequeno na tua vida — fisicamente pequeno. Já em rapaz eras grande
            para a tua idade, e andavas sempre a esbarrar contra as traquitanas 'new age' da tua mãe, baratas, mas delicadas.
            Mas agora cercado de todos os lados por
            paredes gargantuescas de mobília pesada, sentes-te minúsculo.
          </p>
          <p>
            Uma jovem rapariga, trazendo a <List expansions={["boneca", "boneca feliz"]} tag="c2_doll2" nextUnit="none" />, entra a correr quarto adentro e instala-se confortavelmente
            numa cadeira de espaldar. Atrás dela vem <List expansions={["um homem mais velho", "um homem mais velho de aspeto amável", "um velhote que sabes que é Alan Healey"]} tag="c2_healey" nextUnit="none" /> e <List expansions={["uma mulher", "uma mulher da mesma idade", "uma mulher que agora reconheces ser a esposa de Healey"]} tag="c2_margaret" />.
          </p>
        </section>
      </div>,
    <section>
      <p>Nas mãos da sua dona, a boneca irradia alegria em vez de medo. Talvez porque ainda tenha cabeça.</p>
      <p>A esposa de Healey ainda tem madeixas castanhas no seu cabelo grisalho encaracolado. Ela está vestida a rigor, 
      hábito comum na sua geração, isto apesar de teres a certeza de que o quarto está abafado como num dia quente de verão.
      Ela pergunta à rapariga, “Querida, queres alguma coisa?” A sua voz é firme, mas meiga, como imaginarias a voz de uma tia.</p>

      <p>“Não, obrigada, tia Maggie,” diz a rapariga. Ela aperta
      a boneca num abraço tão forte que poderia matar um pequeno animal, mas a boneca adora-o.</p>
      <p>
        A sua tia acena com a cabeça e diz ao seu marido, “Vou trazer-te o teu chá gelado, querido.”
      </p>
      <p>Healey usa uns óculos grossos e é calvo, tirando uns quantos tufos que, por acaso, já mereciam um cortezito.
        Provavelmente a mulher só lhe consegue cortar o cabelo depois de muito se queixar e barafustar. É com pesar que te apercebes
        que ela nunca mais terá outra oportunidade para o fazer; será um estranho qualquer a prepará-lo para o funeral, 
        e ela vai achar que está tudo mal feito.
      </p>

      <p>Healey não diz nada,
        apenas <List expansions={["sorri", "força um sorriso que não lhe chega aos olhos"]}  tag="c2_smile" />.
      </p>
    </section>,
    <section>
      <p>Podias dar-lhe umas dicas sobre como mentir melhor
      com a expressão facial. Ele está a esconder-lhe alguma coisa. Está à espera que ela saia.
      Ela hesita um segundo só; mas já o topou. Queres chamá-la e dizer-lhe para ficar ali
      para sempre — não o percas de vista. Mas tu não estás realmente lá, e isto já aconteceu. Ela decide acreditar no sorriso falso e sai do quarto.
      </p>
      <p>Assim que ela desaparece, Healey pega num pesado telefone preto que está numa mesinha e acomoda-o no seu colo. 
      “Agora brinca com a Vicky, Sarah. O tio Alan só precisa de fazer uma chamadinha rápida." A rapariguita acena com a cabeça
       e põe-se a cantarolar uma melodia desafinada à boneca.</p>
      <p>Healey disca lentamente o telefone; vê-se bem como é doloroso para as suas mãos realizarem a operação. É um número curto, 
      local. A conversa decorre em surdina e é incompreensível porque ele não quer que a rapariga o ouça. Apanhas umas palavras aqui e ali 
      — “nunca”, “esse dinheiro”, e depois ele diz zangado, “Como é que podes?” e a rapariga, Sarah, olha para cima alarmada, 
      largando a boneca que cai no chão.</p>
      <p>
        “Eu não permitirei que ela sofra por causa dos teus erros. Amanhã de manhã, estará feito.” diz Healey e bate com o auscultador no aparelho
        no preciso momento em que a sua mulher entra com dois copos suados numa bandeja. “Foi engano,” diz ele, antecipando-se a eventuais discussões.
        A mulher não diz nada e só pousa a bandeja na mesa. </p>
      <p>
        "Desculpa,” diz ele asperamente, ao mesmo tempo que tira os óculos para limpar o rosto, depois levanta-se. Não vê
        a boneca e pisa-a, esmagando-lhe a cabeça. A pequena Sarah que já estava quase em lágrimas, desata numa histeria.
        Maggie Healey conforta-a e diz, “Vamos ler alguma coisa na cama, anda, querida.”
       </p>
      <p>
        No quarto agora vazio resta apenas a boneca que ficou esquecida debaixo de um armário decorado. O tempo
        passa, umas boas horas talvez. As luzes dentro de casa apagam-se à medida que as pessoas se vão deitando, o relógio
        de pêndulo na parede gira e gira.
        É curioso, mas não te sentes aborrecido assim sozinho entre os objetos domésticos. É tranquilo e descomplicado.
      </p>
      <p>
        Ouves uma janela a ser aberta, e na escuridão de uma noite sem luar consegues ver muito pouco,
        só a sombra de uma pessoa a entrar dentro do quarto. <em>Agora</em> a boneca está com medo,
        não porque foi estragada e abandonada, apercebes-te, mas porque este mundo sossegado e ordenado foi
        invadido. A <List expansions={["boneca", "boneca apavorada"]} tag="c2_doll3" /> está agora a chorar um alerta, quer acordar a casa, mas apenas te consegue acordar a ti —
        </p>
      </section>,
      <section>
        <h3>Na mansão (dentro do carro de Whitby)</h3>
        <p>
          Acordas subitamente num sobressalto. “Como é que eu cheguei aqui?”
        </p>
        <p>
          “Arrastámos-te.” Whitby está a fumar — não pensavas que ela era dessas. A cinza já vai longa.

        </p>
        <p>“Nós quem?”</p>

        <p>“Eu e Sra. Healey,” diz ela com uma paciência infinita. "Ela é mais forte do que parece.
          Disse-lhe que o teu nível de açúcar no sangue caiu a pique. Lá se foi 
          o plano de sermos discretos."</p>

        <p>Está um calor infernal lá fora, mas tu estás gelado até aos ossos e incapaz
          de parar de tremer. Ris-te um bocadinho e soa esquisito aos teus ouvidos.
          “Que rico polícia que eu saí.”
        </p>
        <p>“Nunca disse que eras um polícia,” replica com frieza.</p>

        <p>“É um facto que não corrigiu o equívoco dela.”</p>
        <p>Ela repara no seu cigarro esquecido e atira-o pela janela fora. “Que outra opção tinha eu? 
        <em> Olá, sou a inspetora Whitby e este é o meu médium de estimação?</em>”
        </p>

       <p>“É muito querido da sua parte, mas acabámos de nos conhecer.”</p>

       <p>Ela vê que estás a tremer e fecha a janela do carro mesmo que esteja tão abafado lá dentro. Ficas-lhe grato.
          “O que aconteceu desta vez?” pergunta-te com amabilidade.</p>
 
        <p>
        Contas-lhe, numa simples recapitulação dos factos, até à parte da boneca.
          “Mas eu percebo,” dizes-lhe quando ela não responde. “Está na minha cabeça ou, então, 
          sou um charlatão. Leve-me de volta para a marginal.
          Não torno a incomodá-la.”
         </p>
       <p>Ela acena com a cabeça e liga o carro. “Eu deixo-te lá,” diz ela. “A que horas podes estar pronto amanhã?”</p>

        <p>“Pronto para <em>quê</em>?”</p>
        <p>Ela aponta. Sentada, no assento de trás, está
          a luva do assassino — não, as duas luvas do mesmo par.</p>

        <p>“A outra estava exatamente no lugar onde tinhas dito que estaria, debaixo dum arbusto na base das escadas. Apanhei-a
          antes da tua cena maricas do desmaio. Quando chegar ao trabalho na segunda-feira tenho de dar uma palavrinha
          à malta da polícia forense sobre a sua ideia de 'meticuloso'. Já agora, podemos tratar-nos por tu, certo?”
        </p>

        <p>Não dizes nada, só ficas a olhar para ela, portanto ela acrescenta, "Ouve, Pietro, relaxa. Eu acredito em ti.”</p>

        <NextChapter chapter="3" />
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

export const Chapter2 = connect(
  mapStateToProps
)(_Chapter)
