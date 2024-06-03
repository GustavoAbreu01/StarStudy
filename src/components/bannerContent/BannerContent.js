import React from 'react'
import './BannerContent.css'

import BannerMainL from '../../assets/img/BannerMainLight.png'
import MenuContent from './menucontent/MenuContent'
import { useParams } from 'react-router-dom';

function BannerContent() {

  const { id } = useParams();

  const renderContent = () => {
    switch (id) {
      case '1':
        return <div className='box_content_banner_info'>
          <p className='title_main'>Lógica de Programação</p>
          <p className='desc_main'>Os laços de repetição mais comuns em C são for, while e do-while.
            <span className='high_text'>for:</span> É usado quando o número de iterações é conhecido antecipadamente.
            <span className='high_text'>while:</span> É usado quando a condição de parada é verificada antes da execução do bloco de código.
            <span className='high_text'>do-while:</span> É semelhante ao while, mas garante que o bloco de código seja executado pelo menos uma vez e a condição seja verificada no final.</p>
          <p className='title_main'>Apresentação de códigos</p>
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
          <p className='title_main'>Teste de códigos</p>
          <input type='text' className='input_code' placeholder='Digite o código acima' />
        </div>;
      case '2':
        return <div className='box_content_banner_info'>
          <p className='title_main'>Linguagem de Programação C</p>
          <p className='desc_main'>Os laços de repetição mais comuns em C são for, while e do-while.
            <span className='high_text'>for:</span> É usado quando o número de iterações é conhecido antecipadamente.
            <span className='high_text'>while:</span> É usado quando a condição de parada é verificada antes da execução do bloco de código.
            <span className='high_text'>do-while:</span> É semelhante ao while, mas garante que o bloco de código seja executado pelo menos uma vez e a condição seja verificada no final.</p>
          <p className='title_main'>Apresentação de códigos</p>
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
          <p className='title_main'>Teste de códigos</p>
          <input type='text' className='input_code' placeholder='Digite o código acima' />
        </div>;
      case '3':
        return <div className='box_content_banner_info'>
          <p className='title_main'>Bibliotecas básicas em C</p>
          <p className='desc_main'>Os laços de repetição mais comuns em C são for, while e do-while.
            <span className='high_text'>for:</span> É usado quando o número de iterações é conhecido antecipadamente.
            <span className='high_text'>while:</span> É usado quando a condição de parada é verificada antes da execução do bloco de código.
            <span className='high_text'>do-while:</span> É semelhante ao while, mas garante que o bloco de código seja executado pelo menos uma vez e a condição seja verificada no final.</p>
          <p className='title_main'>Apresentação de códigos</p>
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
          <p className='title_main'>Teste de códigos</p>
          <input type='text' className='input_code' placeholder='Digite o código acima' />
        </div>;
      case '4':
        return <div className='box_content_banner_info'>
          <p className='title_main'>Declaração de variáveis</p>
          <p className='desc_main'>Os laços de repetição mais comuns em C são for, while e do-while.
            <span className='high_text'>for:</span> É usado quando o número de iterações é conhecido antecipadamente.
            <span className='high_text'>while:</span> É usado quando a condição de parada é verificada antes da execução do bloco de código.
            <span className='high_text'>do-while:</span> É semelhante ao while, mas garante que o bloco de código seja executado pelo menos uma vez e a condição seja verificada no final.</p>
          <p className='title_main'>Apresentação de códigos</p>
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
          <p className='title_main'>Teste de códigos</p>
          <input type='text' className='input_code' placeholder='Digite o código acima' />
        </div>;
      case '5':
        return <div className='box_content_banner_info'>
          <p className='title_main'>Comandos de Entrada e Saída</p>
          <p className='desc_main'>Os laços de repetição mais comuns em C são for, while e do-while.
            <span className='high_text'>for:</span> É usado quando o número de iterações é conhecido antecipadamente.
            <span className='high_text'>while:</span> É usado quando a condição de parada é verificada antes da execução do bloco de código.
            <span className='high_text'>do-while:</span> É semelhante ao while, mas garante que o bloco de código seja executado pelo menos uma vez e a condição seja verificada no final.</p>
          <p className='title_main'>Apresentação de códigos</p>
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
          <p className='title_main'>Teste de códigos</p>
          <input type='text' className='input_code' placeholder='Digite o código acima' />
        </div>;
      case '6':
        return <div className='box_content_banner_info'>
          <p className='title_main'>Condicional</p>
          <p className='desc_main'>Os laços de repetição mais comuns em C são for, while e do-while.
            <span className='high_text'>for:</span> É usado quando o número de iterações é conhecido antecipadamente.
            <span className='high_text'>while:</span> É usado quando a condição de parada é verificada antes da execução do bloco de código.
            <span className='high_text'>do-while:</span> É semelhante ao while, mas garante que o bloco de código seja executado pelo menos uma vez e a condição seja verificada no final.</p>
          <p className='title_main'>Apresentação de códigos</p>
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
          <p className='title_main'>Teste de códigos</p>
          <input type='text' className='input_code' placeholder='Digite o código acima' />
        </div>;
      case '7':
        return <div className='box_content_banner_info'>
          <p className='title_main'>Laços de Repetição</p>
          <p className='desc_main'>Os laços de repetição mais comuns em C são for, while e do-while.
            <span className='high_text'>for:</span> É usado quando o número de iterações é conhecido antecipadamente.
            <span className='high_text'>while:</span> É usado quando a condição de parada é verificada antes da execução do bloco de código.
            <span className='high_text'>do-while:</span> É semelhante ao while, mas garante que o bloco de código seja executado pelo menos uma vez e a condição seja verificada no final.</p>
          <p className='title_main'>Apresentação de códigos</p>
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
          <p className='title_main'>Teste de códigos</p>
          <input type='text' className='input_code' placeholder='Digite o código acima' />
        </div>;
      case '8':
        return <div className='box_content_banner_info'>
          <p className='title_main'>Conhecendo o Arduino</p>
          <p className='desc_main'>Os laços de repetição mais comuns em C são for, while e do-while.
            <span className='high_text'>for:</span> É usado quando o número de iterações é conhecido antecipadamente.
            <span className='high_text'>while:</span> É usado quando a condição de parada é verificada antes da execução do bloco de código.
            <span className='high_text'>do-while:</span> É semelhante ao while, mas garante que o bloco de código seja executado pelo menos uma vez e a condição seja verificada no final.</p>
          <p className='title_main'>Apresentação de códigos</p>
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
          <p className='title_main'>Teste de códigos</p>
          <input type='text' className='input_code' placeholder='Digite o código acima' />
        </div>;
      case '9':
        return <div className='box_content_banner_info'>
          <p className='title_main'>Componentes básicos do Arduino</p>
          <p className='desc_main'>Os laços de repetição mais comuns em C são for, while e do-while.
            <span className='high_text'>for:</span> É usado quando o número de iterações é conhecido antecipadamente.
            <span className='high_text'>while:</span> É usado quando a condição de parada é verificada antes da execução do bloco de código.
            <span className='high_text'>do-while:</span> É semelhante ao while, mas garante que o bloco de código seja executado pelo menos uma vez e a condição seja verificada no final.</p>
          <p className='title_main'>Apresentação de códigos</p>
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
          <p className='title_main'>Teste de códigos</p>
          <input type='text' className='input_code' placeholder='Digite o código acima' />
        </div>;
      case '10':
        return <div className='box_content_banner_info'>
          <p className='title_main'>Simuladores de robótica</p>
          <p className='desc_main'>Os laços de repetição mais comuns em C são for, while e do-while.
            <span className='high_text'>for:</span> É usado quando o número de iterações é conhecido antecipadamente.
            <span className='high_text'>while:</span> É usado quando a condição de parada é verificada antes da execução do bloco de código.
            <span className='high_text'>do-while:</span> É semelhante ao while, mas garante que o bloco de código seja executado pelo menos uma vez e a condição seja verificada no final.</p>
          <p className='title_main'>Apresentação de códigos</p>
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
          <p className='title_main'>Teste de códigos</p>
          <input type='text' className='input_code' placeholder='Digite o código acima' />
        </div>;
      default:
        return <div className='box_content_banner_info'>
          <p className='title_main'>Linguagem de Programação C</p>
          <p className='desc_main'>Os laços de repetição mais comuns em C são for, while e do-while.
            <span className='high_text'>for:</span> É usado quando o número de iterações é conhecido antecipadamente.
            <span className='high_text'>while:</span> É usado quando a condição de parada é verificada antes da execução do bloco de código.
            <span className='high_text'>do-while:</span> É semelhante ao while, mas garante que o bloco de código seja executado pelo menos uma vez e a condição seja verificada no final.</p>
          <p className='title_main'>Apresentação de códigos</p>
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
          <p className='title_main'>Teste de códigos</p>
          <input type='text' className='input_code' placeholder='Digite o código acima' />
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