import React from 'react'
import './BannerContent.css'

import BannerMainD from '../../assets/img/BannerMainDark.png'
import BannerMainL from '../../assets/img/BannerMainLight.png'
import ThemesBanners from '../themesBanners/ThemesBanners'


function BannerContent() {

  const verifyTheme = localStorage.getItem('theme')
  const imageTheme = verifyTheme === 'dark' ? BannerMainL : BannerMainD
  return (
    <>
      <div className='container_banner_content'>
        <div className='box_content_banner_info'>
          <p className='title_main'>Formatos de Texto:</p>
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
        </div>
        <img src={imageTheme} className='banner_main_image' />

      </div>
    </>
  )
}

export default BannerContent