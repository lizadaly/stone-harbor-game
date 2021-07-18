const React = require('react')
import { Map, List, NextChapter } from '../components'
import { connect } from 'react-redux'
import { updateInventory } from "../actions"

import { RenderSection } from '.'

const _Chapter = ({currentSection, inventory, chapterId}) => {
  var sections = [
    <section>
      <h2>Capítulo VI</h2>
      <h3>No passeio marítimo</h3>
      <p>
        Devias ter ido logo para a casa de Whitby. E hás de ir. Mas antes precisas de ir ver uma pessoa do teu passado.
      </p>
      <p>
        Conheces os Troianos. Eles são donos de uma cadeia de pizzarias, daquelas para esquecer, um pouco por toda a região de Cape May. Andaste na escola com uma das filhas, Nicki. Ela
        tem um irmão mais velho que andava sempre a meter-se em sarilhos: um desses tipos
        que achava que podia ser bem-sucedido através de esquemas em vez de trabalhar no duro.
      </p>
      <p>
        Nicki era uma amiga, tanto quanto raparigas e rapazes podiam ser amigos naquela altura. Ela cresceu com uma tia no sul de Philadelphia — nunca soubeste bem porquê — e foi transferida para cá quando começou a escola secundária. Não tinha muitos amigos e tu também não, e apesar de nunca terem tido muita coisa em comum era bom saber que tinhas alguém que te defendia. E sejamos sinceros: tinhas um fraquinho por ela. 
      </p>
      <p>
        Tens uma lista que nunca mais acaba de antigos conhecidos que não te deste ao trabalho de contactar desde que regressaste, mas Nicki é a única que verdadeiramente te esforçaste por evitar. Em criança, ouviu as queixas sobre a tua mãe ano após ano: sobre o seu trabalho, os comportamentos excêntricos, as roupas embaraçosas e o facto de teres vivido num apartamento reles em cima de uma armadilha para turistas. Agora és <em>tu</em> quem tem esse trabalho, esse comportamento, e vinte anos depois vives no mesmo pardieiro.
      </p>

      <p>
        Estás, então, a rondar o exterior da <em>Famosa Pizzaria da Nicki </em>  
        (não é realmente famosa, e o nome de Nicki vem da pizzaria, não foi ao contrário).
        Quando finalmente a vergonha pela tua cobardia leva a melhor, decides entrar.
      </p>
      <p>
        Quase nada mudou nestes vinte anos. Uma das razões pelas quais Nicki sempre teve tantas dificuldades em fazer mais amigos era o seu horário: ela estava quase sempre a trabalhar. Dizia que preferia atirar pizzas ao ar enquanto jovem do que quando fosse mais velha. Não foste o único que ficou parado no tempo.
      </p>
      <p>
        Ela não te vê logo, está a fazer de cabeça a conta da sandes de carne e de uma água com soda que uma família consumiu. Ela sempre foi boa a matemática. 
        Não sabes que reação esperar, mas quando chega a tua vez, na fila, ela está genuinamente feliz por te ver. “Frankie! Ouvi dizer que estavas por cá outra vez.” Ela nunca perdeu aquele seu sotaque de  Philadelphia.
      </p>
      <p>
        “É verdade, queria... ” Ela despacha a tua desculpa. "Dá-me só um minutinho que eu já arranjo alguém para me substituir. Já comeste? Toma, oferta da casa."

        Passa-te duas fatias e uma cola antes de desaparecer no fundo do restaurante. Obedientemente, levas a comida para uma mesa.   
        </p>
      <p>
        Ela chega a sorver uma limonada gigante, senta-se ao teu lado, em vez de ficar à tua frente.
        " 'tás bom?" pergunta ela.
      </p>
      <p>
        Esta afluência súbita de amabilidade é quase insuportável. "Bem, Nicki, tudo bem."
        Saboreias o momento antes de o estragares.
        "E havemos de pôr a conversa em dia, prometo. Fui um merdas; não te vim ver."
      </p>
      <p>
        "Qual é a novidade?" diz ela a sorrir. "Soube da tua mãe, lamento. Até tinha ido ao funeral, mas nunca vi uma notícia nos jornais."
      </p>
      <p>
        “Não houve nada público,” dizes tu.
      </p>
      <p>
      Não há qualquer censura na sua expressão, apenas preocupação. "Muita gente gostava dela, sabes disso. Ela ajudou muita gente daqui, pessoas que não tinham mais ninguém que as ouvisse. Tu também sempre soubeste ouvir."

      Como não dizes nada, ela muda de tática. "Estou a ver pela tua cara que isto não é uma visita de cortesia. Que é que queres que eu faça?"
      </p>
      <p>
        "Ouve, Nicki, tenho de te perguntar uma coisa, mas preciso que confies em mim e não me perguntes porquê." Ela encolhe os ombros e acena com a cabeça. "Sabes se o Jim anda metido em algum tipo de sarilho?"
      </p>
      <p>
        Obviamente que o primeiro instinto dela é perguntar-te porquê. 
        "Supostamente ele faz turnos aqui, mas há meses que não o vejo no restaurante. Eu já o tinha despedido, mas ao meu Pai dava-lhe um fanico."
      </p>
      <p>
        "Ele tem um carro novo todo xpto — um Porsche, acreditas? — e agora meteu-se em veleiros com uns tipos, imaginas? Um gajo que não sabe a diferença entre a ré e o reto. Vi-o na Páscoa, perguntei-lhe no que andava metido, mas ele apenas disse que tinha tido sorte no Casino." Tu e ela sabem bem o quão improvável a coisa soa: Podes ganhar muito em Atlantic City, mas precisas de começar em grande. Ninguém que trabalha num pizzaria ganha dinheiro para carros. 
         </p>
      <p>
        “Sabes onde posso encontrá-lo?”
      </p>
      <p>
        Pela primeira vez, ela olha para ti um bocadinho desconfiada. "Livra-te de voltares à minha vida apenas para me atirares com mais merda para cima, Frankie. Já tenho problemas que cheguem." 
      </p>
      <p>
        “Só estou a tentar corrigir uma coisa.”
      </p>
      <p>
        "Desde que arranjou o barco, passa muito tempo na sua 'marina'. Mas acho que isso é apenas uma maneira chique de dizer um bar com uma cambada de gajos que não têm onde cair mortos."
      </p>
      <p>
        “A marina de Jared Healey?” perguntas tu.
      </p>
      <p>
        “Não sei. Foi esse o tipo que morreu há pouco?”
      </p>
      <p>
        “O irmão dele.” A tua cabeça já está a mil à hora, a formular um plano.
      </p>
      <p>
        Nicki põe a mão dela sobre a tua, o que é mais contacto físico do que aquele que alguma vez conseguiram ter durante a escola. "Tu tem-me cuidado. Não quero perder um amigo pela segunda vez."
      </p>
      <p>
        O caroço na tua garganta tornou-se fisicamente doloroso. "Emprestas-me o telefone?"
        </p>
      <hr/>
      <h3>Cais 73 Marina</h3>
      <p>
       Nicki não sabia onde ficava a marina, mas ligaste para as Informações e arranjaste a morada. Ligaste também para Whitby, que não gostou do teu plano, mas mesmo relutante lá acabou por aceitá-lo. "Ouve," dizes, enquanto a tinhas em linha, "Encontraste o Michael Herschel?"
      </p>
      <p>
        Ela estava em casa quando ligaste; transferiram-te da esquadra para lá. Sentiste-te estranhamente culpado quando atendeu um homem. Ela não usa anel, talvez um namorado? No fundo, ouvia-lo a fazer o jantar: sons de uma vida normal. "Não," disse ela, "Não estava em casa. A irmã diz que já não o vê há semanas."
     </p>
      <p>
        “Acreditas nela?”
      </p>
      <p>
        "Acho que não." Ouviste panelas a bater no fundo.
        "Ouve, tenho de ir. Faz a tua parte, mas tem cuidado. Fica descansado que o carro-patrulha há de lá estar à espera dele."
      </p>
      <p>
        Duas pessoas no mesmo dia a mostrar interesse pelo teu bem-estar era uma espécie de record. "Desculpa ter-te interrompido o jantar."
        </p>
      <p>
        “Não me safo na cozinha. O meu trabalho é ficar longe dela. Fizeste um favor ao Hank.” <em>Hank</em>. “Tem cuidado,” acrescentou ela.
      </p>
      <p>
        “Já disseste isso.”
      </p>
      <p>
        “E vou <em>continuar</em> a dizer até que me agradeças." E com essa deixa desligou, mas não estava zangada. 
      </p>
      <p>
        Não levaste muito tempo a conduzir até à marina, e soubeste logo que estavas no sítio certo porque era uma autêntica espelunca. Não estacionarias aqui nem sequer um Ford Pinto todo podre de ferrugem, quanto mais um veleiro de seis dígitos, mas lá está um, conspicuamente atracado ao lado do bar. Não percebes de barcos, mas sabes reconhecer qualidade de construção, e este é uma maravilha: branco, cromado, brilhante.
        O nome estampado ao longo da proa era: <smallcaps>Marujos Tesudos</smallcaps>.
      </p>
      <p>
        “Gajos com classe,” dizes de ti para contigo. Estás agachado atrás de um dos muitos
        carros espampanantes no parque de estacionamento: dois BMWs novos, um Corvette vermelho vivo, e o Porsche dourado de Jimmy Troiano.
        Espreitas e corres rapidamente, escondendo-te por trás do carro de Jimmy, sempre com um olho no bar. Se alguém sair, veem-te logo.
      </p>
      <p>
        Jimmy não tem o carro há muito tempo, mas dá para ver que não liga muito à manutenção. Há areia endurecida ao longo da parte inferior da carroçaria (terá o idiota conduzido o carro na <em>praia</em>?) e o acabamento metalizado está estragado com uma data de pequenas mossas. Ainda bem. Não queres que ele se ponha a olhar para <List expansions={["o carro", ["a matrícula", "o farol traseiro", "o tubo de escape"], "a parte traseira do carro" ]} conjunction="ou" tag="c6_car" /> muito de perto.
      </p>
    </section>,
    <section>
      <p>
        <Map from={inventory.c6_car} to={{
          matrícula: `A matrícula é <smallcaps>JIMMY8</smallcaps>. <em>Subtil</em>. Tiras-lhe todos
          os parafusos. Fica lá presa só por causa da fricção, mas assim que o carro arrancar
          nesta gravilha irregular deve cair.`,
          traseiro: `Já estava rachado, por isso deixá-lo num estado ilegal é só uma questão de o soltar ainda mais com uma chave de parafusos. Por agora, até se aguenta, mas assim que o carro arrancar nesta gravilha irregular deve cair.`,
          escape: `É ridícula a enormidade do tubo de escape, com uma forma quase fálica. Chegas a mão atrás até ao silencioso e puxas com força. Com uns bons puxões fica agora bem mais baixo; e depois de uns quantos parafusos desapertados, é garantido que vai ficar a arrastar pelo chão.`
        }} />
      </p>
      <p>
        Assim que acabas, a porta do bar abre-se.
        É Michael Herschel em pessoa e as suas
        brancas feições nórdicas vêm desfiguradas por uma fúria vermelha. Ele está a gritar para dentro do bar; ao ar livre o som propaga-se. "Eu sei que vocês, seus falhados, estão-mo a esconder. Quando eu voltar, as coisas não vão ser tão amigáveis." Suspiras. Têm todos a mania que são espertalhões.
      </p>
      <p>
        Um dos BMWs é dele. O carro arranca logo, derrapando na gravilha, e a nuvem de pó que se levanta dá-te cobertura suficiente para correres de volta para a estrada com tempo ainda para uma rápida olhadela para trás. 
      </p>
      <p>
        Incrivelmente, Jimmy também estava escondido cá fora: deitado num barco a remos abandonado. Ele despacha com um gesto os tipos que saem do bar e que ficam especados a olhar — imaginas que eles mereçam alguma gratidão por não o terem denunciado —, mas ele é o mesmo palhaço arrogante de que te lembras e, em vez disso, mete-se no carro.
        Não parece ter reparado em ti nem na sabotagem ao veículo.
      </p>
      <p>
        Puxas um chapéu de pescador bem para baixo quando ele passa por ti de carro, não há forma de ele te reconhecer, e ficas muito satisfeito ao ver <Map from={inventory.c6_car} to={{
          matrícula: `a matrícula a desprender-se e a cair entre os bunhos`,
          traseiro: `o farol de trás a desprender-se e a ir parar aos bunhos`,
          escape: `que o tubo de escape fica solto e começa a ir de rojo pela estrada, a chocalhar e a soltar faíscas`
        }} />.
        Um carro de polícia está estacionado numa zona de caça à multa à espera deste Porsche e de uma qualquer causa provável para o mandar encostar. Whitby concordou que um delito ligeiro seria mais do interesse do Sr. Troiano do que se afundar mais em dívidas com um corretorzito de segunda categoria. Com um pouco de sorte, vão conseguir fazer o Jimmy cantar, depois Jared Healey há de ceder, e tu vais pôr este assassinato para trás das costas.
      </p>
      <NextChapter chapter="7" />
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

export const Chapter6 = connect(
  mapStateToProps
)(_Chapter)
