const React = require('react')
import { Map, List, NextChapter } from '../components'
import { connect } from 'react-redux'
import { RenderSection } from '.'

const _Chapter = ({currentSection, inventory, chapterId}) => {
  var sections = [
    <section>
      <h2>Capítulo III</h2>
      <h3>No gabinete de Whitby</h3>
      <p>
        Estavas convencido de que nunca mais irias conseguir dormir, mas na noite passada o cansaço tomou conta de todo o teu corpo, um cansaço como não sentiras desde criança. Lembras-te de dias de verão demasiado quentes para se poder ficar na sala de leitura — a tua mãe só mandou pôr ar condicionado depois de ’75, muito tempo depois de teres saído de casa — e, portanto, passavas o dia inteiro no mar. Não eras grande nadador, mas só lutar contra a corrente já era, para ti, cansativo, e voltavas para casa a largar areia pelo átrio e pelas escadas que te levavam ao apartamento em cima da loja, e deixavas-te cair morto na cama. Para a tua mãe, o dia de trabalho só começava mesmo ao anoitecer, e tu costumavas
        ficar a dormir a maior parte do tempo até que ela te ia acordar, muitas vezes,
        bem depois da meia-noite, e te fazia um jantar simples. Como resultado, perdias o que passava na televisão, o que te tornava ainda mais popular entre as crianças na escola.
     </p>
      <p>
        "Natas?” pergunta Whitby, interrompendo os teus pensamentos.
      </p>
      <p>Abanas a cabeça. "Estou a tentar deixar-me disso. Mas aceito um camião de açúcar."</p>
      <p>
        Ela passa-te uma caneca e uma mão cheia de pacotes de açúcar.
        Ela partilha o gabinete, mas, como é fim de semana, só cá estão os polícias de serviço a preencherem papelada com ar lúgubre.
      </p>
      <p>
        Ela fecha a persiana que dá para a área comum, só que, como está tão cheia
        de vincos e dobras, pouca é a privacidade que oferece.
        Sentes que estás prestes a ser interrogado, o que é verdade.
      </p>
      <p>
        “Porque é que voltaste para Jersey?” Como pareces confundido, ela diz, “Depois da morte da tua mãe. Ela era dona
        daquela casa, que deve valer um dinheirão, ali mesmo em cima do passeio marítimo.”
        Ela senta-se à tua frente e cruza as mãos de maneira empertigada.
      </p>
      <p>
        “Investigaste o meu passado?” Ela encolhe os ombros: <em>É o meu trabalho</em>. “Voltei para aquela casa
        quando ela estava no hospital. Pensei que podia tomar conta das coisas até ela se recompor.”
        Paras, dás um gole no café, pões mais açúcar. "Nunca aconteceu. E nunca arranjei tempo para a vender.”
      </p>
      <p>
        “Isso foi há quatro anos.” É óbvio que o sabes, mas é diferente quando outra pessoa o diz em voz alta.
        Antes de conseguires responder, ela diz,
      “Desculpa, não são contas do meu rosário.”</p>
      <p>
        Hesitas por um momento e depois dizes, “Nem sempre há um porquê. As pessoas, às vezes, simplesmente ficam bloqueadas.”
      </p>

      <p>Ela acena com a cabeça, pega numa pequena pilha de fotografias e começa a dispô-las —
        vira-as com afinco e coloca-as viradas para baixo. Ela daria uma ótima crupiê.
      </p>
      
       <p>“Mais um teste?” suspiras.</p>
      <p>“Não, palerma. Chegou a altura de conheceres a família.” Ela vira a
        primeira <List expansions={["foto", "foto, de Healey e de um homem mais novo, muito parecido a ele"]} tag="c3_healeyphoto" />.
      </p>
    </section>,
    <section>
 
      <p>“Este à esquerda é Alan e, à direita, o seu irmão mais novo, Jared.
        Eu andei na escola com a mulher de Jared, Allison — fomos vizinhas por uns anos — e
        ficámos em contacto durante os seus tempos de universidade. Só conheci o Jared depois de se terem casado.
        A família dela e a minha não frequentavam, digamos, os mesmos salões.” Ela fica pensativa por um momento. “Nunca percebi porque é que ela me escolheu para ser madrinha da Sarah. Não sou católica e,
        naquela altura, não éramos próximas. Ela só disse que queria ter a certeza de que a sua menina estaria 'protegida,' do quê, já não sei. Assumi que eu era o único polícia que conhecia."
      </p>
      <p>

        “Há cerca de nove anos, ela foi-se embora. Ficou só uma nota a dizer que tinha decidido começar uma vida nova.
        Tentei localizá-la;
        ela deixou-me uma mensagem no gabinete a dizer que tinha encontrado uma pessoa nova e que eu não deveria procurá-la.
        Não aprovei, mas quem sou eu para a julgar?”
      </p>
      <p>“Como é que o marido reagiu?”</p>
      <p>“Como bem imaginas. Tem criado a filha sozinho.
        É um bom pai solteiro, mas é daqueles que pensa que merece
        uma medalha por fazer o que um milhão de mulheres faz todos os anos.” Ela vira
        outra <List expansions={["foto", "foto de Sarah, a rapariga com a boneca"]} tag="c1_photos2"/>.
      </p>
    </section>,
    <section>
      <p>“Esta fotografia já tem uns anitos. Ela agora tem onze anos.”
        Whitby contempla-a por um momento. “Toda a gente adora a miúda. Não só porque
        a mãe a abandonou; mas porque, pura e simplesmente, é um doce de criança.”
        Ela vira <List expansions={["outra fotografia", "uma fotografia de dois gémeos adultos"]} tag="c1_photos3" />.</p>
    </section>,
    <section>
      <p>“Michael e Michelle Herschel,” diz ela, e não consegues evitar uma bufada de troça. "Pois, zero pontos pela originalidade. Estes dois são a sobrinha e o sobrinho de Alan — a mãe era Christina, a irmã mais velha de Alan e Jared, mas faleceu há alguns anos. Os gémeos ainda vivem na casa dela para as bandas de Sea Isle. Não os conheço pessoalmente."</p>
      <p>“A última,” diz ela, e passa-te <List expansions={["uma foto de uma mulher que reconheces", "uma foto de Maggie Healey"]} tag="c1_photos4"/>.</p>
    </section>,
    <section>
      <p>“Margaret ou Maggie. Uma mulher adorável, mas com um caráter de ferro, como viste. Do que ouvi dizer, ela seria
        a primeira a desenrascar-te num aperto, mas também a primeira a pôr-te na rua
        se tornasses a lixar tudo. Se mais pessoas fossem como ela, ficava sem trabalho.”
      </p>
      <p>“Ela não o matou,” dizes tu, surpreendendo-te até a ti próprio. “Eu vi como ela olhou para ele na noite
      em que morreu. Ela estava preocupada com ele. Amava-o.”</p>

      <p>
        “Eu também acho que não, mas nunca se sabe,” diz com um pouco de pena. “Cada uma das pessoas que te mostrei aqui ou
        estava em casa de Healey ou perto dela no fim de semana em que ele morreu.
        Se estivéssemos a tratar isto como uma investigação de homicídio, eles estariam todos sob
        forte vigilância, mas — uma porta trancada, um medicamento comum, uma vítima idosa?
        Tudo isto redunda numa morte infeliz, mas perfeitamente vulgar.”
      </p>
 
      <p>“Ainda pensas assim?” perguntas.</p>
     <p>O telemóvel dela toca antes de te poder responder. Whitby ouve e acena com a cabeça algumas vezes, depois
        tapa o auscultador. “Preciso de atender isto. Podes esperar lá fora?”
      </p>
       <p>Banido, esgueiras-te até à sala de espera mais próxima. Seis cadeiras de plástico e uns quantos tipos.
        Não estás na secção das admissões gerais
        — essa estaria repleta de pessoas impacientes, bêbadas ou zangadas, ou, mais provavelmente, ambas.
        Esta é a parte onde estacionam os visitantes que estão cá voluntariamente, esses que vêm para falar com a polícia.</p>

      <p>Ninguém parece
        feliz por estar aqui, e francamente duvidas que quisesses beber um copo com qualquer um deles,
        mas pelo menos não estão a vomitar.
        Finges que não existem e pões-te a folhear uma pilha de revistas antigas sobre uma mesa de café improvisada.
      </p>
      

      <p>
        Estás a folhear uma edição de 1982 da <em>Reader’s Digest</em> (e o pior é que parece que já leste esta)
        quando uma mulher começa a discutir com um jovem agente que se mantém indiferente:
        “Mas a inspetora Whitby disse-me justamente para vir cá agora!” Olhas para cima
        e, com surpresa, reconheces, da foto, Michelle, a sobrinha mais velha de Healey.
      </p>
      <p>Dizem-lhe para aguentar os cavalos, e ela senta-se em frente de ti numa das poucas cadeiras vazias.</p>

      <p>Nunca, jamais, em circunstância alguma deves meter conversa com esta mulher. Isto é um assunto da polícia, e ela está
        aqui, neste momento, à espera para falar com a polícia. Devias ir para casa. Há apenas dez semanas de
        época alta e é delas que vem 80% do teu rendimento anual. Isto não é um problema teu.
      </p>

      <p>
        Mas depois pões-te a pensar naquela boneca a olhar fixamente para ti.
        </p>
      <p>
        Michelle Herschel, como o seu irmão gémeo, é loura, risco ao meio e
        com a longa franja metida detrás das orelhas. Não traz joias, nem sequer um
        relógio, mas talvez se tenha esquecido dele — ela não pára quieta no lugar e, por duas vezes, já olhou para o pulso, encontrando-o vazio. Não se sente nem nervosa, nem culpada,
        só irritada. Tem aonde ir. E agora reparou que
        tu estás <Map from={inventory.c3_staring} to={{olhar: "a olhar para os seus "}}/>

        <List expansions={["a olhar", ["sapatos", "mãos", "bolsa"], "a olhar para ela"]} conjunction="e" tag="c3_staring"/>.
        <Map from={inventory.c3_staring} to={{
          mãos: " As mãos dela estão bem cuidadas, limpas, mas sem manicure.",
          sapatos: " Os sapatos dela são pesadões, fora de moda. Provavelmente ortopédicos.",
          bolsa: " A bolsa que ela está a agarrar é castanha? Ocre? Beje? Lá prática parece."
        }}/>
      </p>
    </section>,
    <section>
      <p>“Podia ser pior,” dizes sorrindo com pena. “A senhora viu a <em>outra</em> sala de espera?”</p>

      <p>Ela não responde. Pudera — passas por um tipo repelente
        a tentar engatá-la numa esquadra de polícia. <Map from={inventory.c3_staring} to={{
          mãos: `“Tome,” dizes, e passas-lhe um pacote de toalhetes que palmaste do quarto de Whitby.
          “Para quando sair. Há só uma casa de banho e o sabonete já acabou.”`,
          sapatos: ` Montas um pequeno espetáculo a tentar pôr-te confortável no teu lugar. “Chiça, o dia todo no trabuco e agora estas cadeiras? Estou pronto para confessar qualquer coisa.”`,
          bolsa: ` “Peço imensa desculpa por estar a incomodá-la,” continuas, “mas teria, porventura, um lenço de papel?” As mulheres têm sempre lenços nas bolsas.
          “Deve haver aqui mofo ou alguma coisa parecida, as minhas alergias estão a dar cabo de mim.”
          `
        }}/>
      </p>
      <p>“<Map from={inventory.c3_staring} to={{
        sapatos: "Obrigada",
        mãos: "Sim, eu também",
        bolsa: "Desculpe, mas não"
      }}/>,” diz ela lentamente. <Map from={inventory.c3_staring} to={{
        mãos: "Ela chega a bolsa ainda mais ao corpo e evita o teu olhar.",
        sapatos: "Ela chega a bolsa ainda mais ao corpo e mete os sapatos mais para debaixo da cadeira.",
      bolsa: "Ela chega a bolsa mais ao corpo." }}/> Sentes alguma coisa <psychic>matreira, paranoica </psychic> 
         a encolher-se dentro da bolsa, como um rato nervoso.
      </p>
      <p>
        Herschel olha à sua volta, provavelmente em busca de uma outra mulher que a venha salvar, mas não há mais ninguém na sala de espera, além de <List expansions={["mais gajos pouco recomendáveis como tu", "uma data de gajos, mas chama-te a atenção uma espécie de motoqueiro que está sentado ao lado dela"]} tag="c3_guys" />.
      </p>
      <p>
        Se continuares a falar com ela, vais afugentá-la, por isso precisas é que seja ela a vir falar contigo se é que queres entrar naquela bolsa.
      </p>

    </section>,
    <section>
      <p> Ele é uma variedade de trazer por casa dos motoqueiros Hell's Angels. Daqueles que anda na autoestrada para cima e para baixo no verão com a sua malta. Ele começa a soltar um rosnar agora que se apercebeu que
        estás a <List expansions={["olhar para ele", "olhar. Em vez de desviares o olhar, levantas um pouco as sobrancelhas na direção de Michelle Herschel naquela linguagem universal dos depravados"]} tag="c3_biker" />.
      </p>
    </section>,
    <section>
      <p>
        <Map from={inventory.c3_biker} to={{
          ele: "O motoqueiro parece confuso, então acenas com a cabeça expressamente na direção dela, e ele finalmente apanha a indireta. Desliza para a cadeira mais próxima da Sra. Herschel, não se preocupando em evitar que a sua perna se encoste ao espaço pessoal dela."
        }} />

      </p>
      <p>

        Herschel claramente não quer nada com ele e decide que és a melhor dentre as más opções. Ela muda-se
        para o único lugar que resta, ao teu lado. A bolsa dela fica entre vocês, e podes senti-la receosa a tentar afastar-se. Há alguma coisa lá dentro que não quer ser encontrada.

        O motoqueiro resmunga algo à mulher. “Deixe-a em paz, amigo,” avisa-lo, e ele faz cara de magoado — mas afinal não estavam do mesmo lado?
</p>
      <p>
        “Desculpe,” diz a Sra. Herschel, inesperadamente. “Fui indelicada com o senhor.”
      </p>
      <p>
        “Não tem de se desculpar.” <em>E também estou a tentar roubar-lhe a bolsa.</em>
      </p>
      <p>
        “Chamo-me Michelle.”
      </p>
      <p>
        “Frank,” respondes. “Frank Desiderio.” Era o nome do teu pai. Nunca foi o teu.
      </p>
      <p>
        “E o que é que faz, Frank?” Ela não está realmente interessada, pergunta apenas por gentileza, e isso vê-se quando ela pega na bolsa e começa a remexer nas coisas lá dentro, empurrando
        o objeto assustado mais para o fundo. Talvez até seja o objeto que esteja a obrigá-la a fazê-lo; uma pequena
        compulsão que não sabe de onde vem. Inclinas-te para tentar ver o que é, mas
        não queres assustá-la.
      </p>
      <p>
        “Chofer de limusina,” respondes. E também é verdade. Tens uns quantos carros que agora subalugas a um amigo teu.
        Estás sempre a pensar que
        vais vender as coisas da tua Mãe, voltar ao teu próprio negócio, mas nunca é a altura certa.
        Dá bom dinheiro. Há sempre otários ricos para levar até aos casinos desde Philadelphia ou de Nova Iorque.”
     </p>
      <p>
        Tarde demais, lembras-te de que <em>ela é</em> rica. Ou
        pelo menos a família dela. Tem graça que isso nem sempre é a mesma coisa.
        “E você?” perguntas, esperando mudar de assunto.
      </p>
      <p>
        “Trabalho com o meu irmão,” diz ela, e dá para ver que a conversa acabou. Ela fecha
        a bolsa, e, visivelmente perturbada, põe-na do outro lado longe de ti. Sentes alívio
        do que quer que estivesse a tentar evadir-se à tua proximidade.
      </p>
      <p>Whitby aparece na sala de espera e passa por ti de forma rente e rude, que só pode ser um sinal intencional. “Sra. Herschel,” diz ela, agachando-se em frente
        da mulher e inclinando-se sobre ela como uma confidente. “Lamento imenso tê-la feito esperar.”
      </p>
      <p>
        “Não faz mal, é que estou com um bocadinho de pressa—”
      </p>
      <p>
        Interrompes, em voz alta. “Mas ó senhora polícia, eu estava cá primeiro e já estou à espera há mais de uma hora.”
      </p>
      <p>
        A cara de Whitby não mostra sinal de te reconhecer. “Meu senhor, se me disser de que precisa
        posso tentar encontrar alguém que —”
      </p>

      <p>
        “Do que eu <em>preciso</em> é de ser ajudado mesmo não tendo uma cara bonita nem uma <em>bolsa</em>.”
      </p>
      <p>
        “O senhor faça o favor de se acalmar.”
        Whitby estende um braço protetor em torno de Michelle Herschel e ajuda-a a levantar-se. Ao fazê-lo, ela
        derruba a bolsa, e — graças a Deus — o seu conteúdo espalha-se por toda a parte.
        O <List expansions={["<psychic>objeto amedrontado</psychic>", "<psychic>recibo apavorado</psychic>",
        "<psychic>recibo histérico</psychic> fica abençoadamente abafado quando o pisas com o pé, escondendo-o"]} tag="c3_receipt" />
        <Map from={inventory.c3_receipt} to={{
          undefined: " grita de pavor",
          "objeto": " grita mais alto, deixando-te quase surdo",
        "recibo": "" }} offset={0}/>.
      </p>
      <p>
        “Peço imensa desculpa,” diz Whitby a Herschel, dobrando-se para ajudá-la a arrumar.
        <Map from={inventory.c3_receipt} to={{
          "objeto": "  Ela já apanhou quase tudo e conversa distraída.",
        "recibo": " Ela está a pôr tudo de novo dentro da bolsa." }} offset={0}/>
      </p>
    </section>,
    <section>
      <p>Fazendo um pequeno espetáculo da tua falta de jeito, apanhas do chão <Map from={inventory.c3_staring} to={{
        bolsa: "um dos lenços que querias",
        mãos: "um lenço desdobrado",
        sapatos: "um lenço desdobrado"
      }} /> e oferece-lo a Herschel, mas ela afasta-se de ti. “Eu sabia que você era um tarado,”
        diz ela, e despacha-se a sair da sala em direção ao gabinete da inspetora. Whitby lança-te um olhar de comiseração,
        e tu dás-lhe um pequeno aceno de cabeça: <em>Já cá tenho o que queria</em>.
      </p>

      <p>Quando ninguém está a olhar, apanhas o recibo com o lenço e enfia-lo no bolso com cuidado.</p>
      <p><em>E provavelmente o que mereço.</em></p>
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
