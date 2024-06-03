import React from 'react'
import './BannerContent.css'

import BannerMainL from '../../assets/img/BannerMainLight.png'
import MenuContent from './menucontent/MenuContent'
import { useParams } from 'react-router-dom';

import { LuBrainCircuit } from "react-icons/lu";
import { IoMdDocument } from "react-icons/io";
import { FaSquareRootVariable } from "react-icons/fa6";
import { IoIosGitBranch } from "react-icons/io";

import componetsArduino from '../../assets/img/Kit-de-piezas-universales-electr-nicas-placa-de-pruebas-potenci-metro-de-resistencia-de-Cable-LED.webp'
import robotica from '../../assets/img/Fig2.png'
import arduino from '../../assets/img/arduino-2168193_960_720.webp'

function BannerContent() {

  const { id } = useParams();

  const renderContent = () => {
    switch (id) {
      case '1':
        return <div className='box_content_banner_info'>
          <p className='title_main'>Lógica de Programação</p>
          <p className='desc_main'>Lógica de programação é o sistema usado para criarmos um <span className='high_text'>algoritmo</span> que servirá pra seguir uma lógica linear fazendo com que ele chegue em um resultado esperado, para utilizarmos a lógica de programação, podemos usufruir de diversas ferramentas, ou como são chamadas, as diversas linguagens de programação, a que será ensinada a seguir será a lógica de programação utilizada dentro da <span className='high_text'>linguagem "C".</span> </p>
          <LuBrainCircuit className='icon_content_1' />
          <p className='desc_main'>O que seria um algoritimo? Um algoritmo é uma sequência finita de instruções bem definidas e não ambíguas para resolver um problema específico ou realizar uma tarefa. Em outras palavras, é um conjunto de passos que, quando seguidos corretamente, levam à solução de um problema.</p>
        </div>;
      case '2':
        return <div className='box_content_banner_info'>
          <p className='title_main'>Linguagem de Programação C</p>
          <p className='desc_main'>A linguagem de programação C é fundamental para quem deseja aprender <span className='high_text'>lógica de programação.</span> Começamos pela estrutura básica de um programa, incluindo a função principal main e o uso de bibliotecas padrão. Estudamos os tipos de dados, variáveis e constantes, essenciais para manipulação de informações. Os operadores aritméticos, relacionais e lógicos permitem operações diversas, enquanto as estruturas de controle de fluxo, como <span className='high_text'>if e for</span>, controlam a execução do código.</p>
          <p className='desc_main'>Em C, as funções são blocos de código reutilizáveis que facilitam a organização. <span className='high_text'>Arrays e strings</span> permitem manipular coleções de dados e cadeias de caracteres. Os ponteiros, embora complexos, são poderosos para gerenciamento de memória e estruturação de dados. Além disso, a linguagem permite o uso de estruturas <span className='high_text'>(structs)</span> para agrupar dados relacionados. Finalmente, a manipulação de arquivos e a memória dinâmica são cruciais para criar programas eficientes e versáteis.</p>
          <p className='title_main'>Exemplo de Código</p>
          <div className='box_code'>
            <code>
              <p>#include &lt;stdio.h&gt;</p>
              <p>int main() {'{'}</p>
              <p>int i;</p>
              <p>for(i = 0; i &lt; 5; i++) {'{'}</p>
              <p>printf("Hello World\n");</p>
              <p>{'}'}</p>
              <p>return 0;</p>
              <p>{'}'}</p>
            </code>
          </div>
          <p className='desc_main'>Este código em C é um programa simples que imprime <span className='high_text'>"Hello World"</span>  cinco vezes. Começa incluindo a biblioteca stdio.h, define a função principal main(), inicializa uma variável i, e em seguida, utiliza um laço for para repetir a impressão da mensagem cinco vezes. Após a impressão, o programa retorna 0, indicando que foi executado com sucesso. E com o decorrer das aulas vocês irão entender facilmente.</p>
        </div>;
      case '3':
        return <div className='box_content_banner_info'>
          <p className='title_main'>Bibliotecas básicas em C</p>
          <p className='desc_main'>As bibliotecas padrão são conjuntos de código pré-escrito que oferecem funcionalidades comuns e úteis para os programadores. Elas fornecem implementações de estruturas de dados, algoritmos, manipulação de arquivos, operações matemáticas, entrada/saída, manipulação de strings, entre outras funcionalidades.</p>
          <p className='title_main'>Bibliotecas mais utilizadas em C</p>
          <p className='desc_main'><span className='high_text'>string.h {'->'}</span> Fornece funções para manipulação de strings (Texto) em C. Ela inclui funções para cópia de strings, concatenação, comparação, busca de caracteres, entre outras operações.</p>
          <p className='desc_main'><span className='high_text'>math.h {'->'} </span>Fornece funções matemáticas para cálculos mais complexos, como operações trigonométricas, logarítmicas, exponenciais, raiz quadrada, entre outras.</p>
          <p className='desc_main'><span className='high_text'>stdio.h {'->'} </span>Esta é uma das bibliotecas padrão mais importantes em C. Ela fornece funções para entrada e saída de dados, como printf() e scanf(), que são usadas para exibir informações na tela e para ler dados do teclado, respectivamente.
            Além disso, a biblioteca {'<stdio.h>'} fornece funções para manipulação de arquivos, permitindo que os programadores criem, leiam, escrevam e manipulem arquivos no sistema de arquivos. (Ou seja o código não roda sem ela).</p>
        </div>;
      case '4':
        return <div className='box_content_banner_info'>
          <p className='title_main'>Declaração de variáveis</p>
          <p className='desc_main'>Temos várias formas de armazenar uma variável dependendo de seu formato, se for um número inteiro utilizamos o <span className='high_text'>"int"</span> e se for um texto utilizamos o <span className='high_text'>"char"</span> se for apenas um caractére é o <span className='high_text'>"char"</span> normal se for mais de um caractére seria o <span className='high_text'>"char nomeDaVariavel['número de caractéres']"</span> e se for um número decimal seria o <span className='high_text'>"float"</span> isso seguido pelo nome da variável, exemplos:</p>
          <FaSquareRootVariable className='icon_content_1' />
          <div className='box_code'>
            <code>
              <p>int numero = 1;</p>
              <p>char caractere = 'A';</p>
              <p>char caracteres[11] = "Teste";</p>
              <p>float decimal = 1.5;</p>
            </code>
          </div>
          <p className='desc_main'>cada tipo de variável tem seu jeito de ser recebida, respectivamente temos, <span className='high_text'>"%d", "%c", "%s", "%f"</span>.</p>
        </div>;
      case '5':
        return <div className='box_content_banner_info'>
          <p className='title_main'>Comandos de Entrada e Saída</p>
          <p className='desc_main'>Agora para mostrarmos algo ou o valor de uma variável para o usuário temos o <span className='high_text'>printf()</span> e para recebermos e guardarmos um valor dentro de uma variável temos o <span className='high_text'>scanf()</span>;</p>
          <IoMdDocument className='icon_content_1' />
          <div className='box_code'>
            <code>
              <p>// Para mostrar algum texto:</p>
              <p>printf("Hello world!");</p>
              <br />
              <p>// Para mostrar uma variável:</p>
              <p>printf("Valor %d", num);</p>
              <br />
              <p>// Para receber um valor:</p>
              <p>scanf("%d", &num);</p>
            </code>
          </div>
        </div>;
      case '6':
        return <div className='box_content_banner_info'>
          <p className='title_main'>Condicional</p>
          <p className='desc_main'>A estrutura condicional simples, geralmente chamada de <span className='high_text'>"if"</span>, permite que o programa execute um bloco de código se uma condição especificada for verdadeira. Se a condição for falsa, o bloco de código não será executado.</p>
          <p className='title_main'>Exemplo:</p>
          <div className='box_code'>
            <code>
              <p>if()</p>
            </code>
          </div>
          <p className='desc_main'>A estrutura condicional composta, ou <span className='high_text'>"if-else"</span>, permite que o programa execute um bloco de código se uma condição especificada for verdadeira e outro bloco de código se a condição for falsa.</p>
          <div className='box_code'>
            <code>
              <p>{"if()"}</p>
              <br />
              <p>{"else{"}</p>
              <br />
              <p>{"})"}</p>
            </code>
          </div>
        </div>;
      case '7':
        return <div className='box_content_banner_info'>
          <p className='title_main'>Laços de Repetição</p>
          <p className='desc_main'>Laços de repetição em C permitem executar um bloco de código várias vezes.</p>
          <p className='title_main'>Apresentação de códigos</p>
          <div className='box_code'>
            <code>
              <p>{`for (int i = 0; i < 10; i++) {`}</p>
              <p>{`printf("%d\n", i);`}</p>
              <p>{`}`}</p>
              <p>{`int x = 0;`}</p>
              <p>{`while (x < 10) {`}</p>
              <p>{`printf("%d\n", x);`}</p>
              <p>{`x++;`}</p>
              <p>{`}`}</p>
              <p>{`int y = 0;`}</p>
              <p>{`do {`}</p>
              <p>{`printf("%d\n", y);`}</p>
              <p>{`y++;`}</p>
              <p>{`} while (y < 10);`}</p>
            </code>
          </div>
          <p className='desc_main'>Os laços de repetição mais comuns em  C são for, while e do-while.
            <span className='high_text'> for:</span> É usado quando o número de iterações é conhecido antecipadamente.
            <span className='high_text'> while:</span> É usado quando a condição de parada é verificada antes da execução do bloco de código.
            <span className='high_text'> do-while:</span> É semelhante ao while, mas garante que o bloco de código seja executado pelo menos uma vez e a condição seja verificada no final.</p>
          <p className='desc_main'>Permitem executar tarefas repetitivas de forma eficiente. Os diferentes tipos de laços oferecem flexibilidade para escolher a estrutura mais adequada para a situação.
            É possível criar loops infinitos acidentalmente se a condição de parada não for definida corretamente, o que pode travar o programa e consumir recursos excessivosda máquina.</p>
        </div>;
      case '8':
        return <div className='box_content_banner_info'>
          <p className='title_main'>Conhecendo o Arduino</p>
          <p className='desc_main'>O Arduino é uma plataforma de prototipagem eletrônica de código aberto, baseada em hardware e software flexível e fácil de usar.
            Existem várias placas <span className='high_text'>Arduino, como Arduino Uno, Mega, Nano, etc. </span>
            Possui uma comunidade ativa e recursos de aprendizado abundantes.
            Pode ser utilizado em uma ampla gama de projetos, desde simples até complexos.
            Os componentes são relativamente baratos e amplamente disponíveis.
          </p>
          <div className='box_image_arduino'>
            <img className='arduino_image' src={arduino} />
          </div>
          <p className='desc_main'>Para projetos mais avançados, pode ser necessário migrar para plataformas mais poderosas.
            Algumas placas Arduino têm limitações de memória que podem ser um obstáculo em projetos maiores.
          </p>
        </div>;
      case '9':
        return <div className='box_content_banner_info'>
          <p className='title_main'>Componentes básicos do Arduino</p>
          <p className='desc_main'>OOs componentes básicos do Arduino incluem resistores, LEDs, botões, sensores, motores, etc., que são usados para construir circuitos e interagir com o ambiente.
            Existem vários tipos de componentes básicos, cada um com sua função específica.</p>
          <div className='box_arduino'>
            <img className='componets_arduino' src={componetsArduino} />
          </div>
        </div>;
      case '10':
        return <div className='box_content_banner_info'>
          <p className='title_main'>Simuladores de Robótica</p>
          <p className='desc_main'>Os simuladores de robótica são ferramentas que permitem simular o funcionamento de robôs em um ambiente virtual.
            Elimina a necessidade de hardware real, reduzindo custos.
            Permite testar e depurar algoritmos sem risco de danificar equipamentos.
            Possibilita a simulação de diferentes cenários e condições.</p>
          <div className='box_arduino'>
            <img className='robotica_image' src={robotica} /> 
          </div>
          <p className='desc_main'>Nem sempre reproduzem fielmente o comportamento real dos robôs.
            Alguns simuladores podem ter uma curva de aprendizado íngreme.</p>
        </div>;
      default:
        return <div className='box_content_banner_info'>
          <p className='title_main'>Linguagem de Programação C</p>
          <p className='desc_main'>Os simuladores de robótica são ferramentas que permitem simular o funcionamento de robôs em um ambiente virtual.
            Elimina a necessidade de hardware real, reduzindo custos.
            Permite testar e depurar algoritmos sem risco de danificar equipamentos.
            Possibilita a simulação de diferentes cenários e condições.</p>
          <p className='desc_main'>Nem sempre reproduzem fielmente o comportamento real dos robôs.
            Alguns simuladores podem ter uma curva de aprendizado íngreme.</p>
        </div>;
    }
  };

  return (
    <>
      <div className='container_banner_content'>
        <MenuContent />
        <div className='box_content_render'>
          {renderContent()}
        </div>
        <img src={BannerMainL} className='banner_main_image' id='imgCenterContent' />
      </div>
    </>
  )
}

export default BannerContent