import React from 'react'
import './BannerMain.css'

import BannerMainD from '../../assets/img/BannerMainDark.png'
import BannerMainL from '../../assets/img/BannerMainLight.png'
import ThemesBanners from '../themesBanners/ThemesBanners'

function BannerMain() {

  const verifyTheme = localStorage.getItem('theme')
  const imageTheme = verifyTheme === 'dark' ? BannerMainL : BannerMainD
  return (
    <>
      <div className='container_banner_main'>
        <div className='box_main_banner_info'>
          <p className='title_main'>Introdução a Programção e Robótica</p>
          <p className='desc_main'>Este material foi criado para fornecer uma base sólida nos conceitos fundamentais dessas áreas. Você aprenderá os princípios da lógica de programação, estruturas de dados e algoritmos, bem como a aplicação prática desses conhecimentos na construção e programação de robôs.</p>
          <ThemesBanners />
          <button class="button_main" role="button">Ir para o Material</button>
        </div>
        <img src={imageTheme} className='banner_main_image' />

      </div>
    </>
  )
}

export default BannerMain