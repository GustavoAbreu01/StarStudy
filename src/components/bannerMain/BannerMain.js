import React, { useEffect } from 'react'
import './BannerMain.css'

import BannerMainL from '../../assets/img/BannerMainLight.png'
import ThemesBanners from '../themesBanners/ThemesBanners'
import { Link } from 'react-router-dom'

function BannerMain() {
  return (
    <>
      <div className='container_banner_main'>
        <div className='box_main_banner_info'>
          <p className='title_main'>Introdução a Programção e Robótica</p>
          <p className='desc_main'>Este material foi criado para fornecer uma base sólida nos conceitos fundamentais dessas áreas. Você aprenderá os princípios da lógica de programação, estruturas de dados e algoritmos, bem como a aplicação prática desses conhecimentos na construção e programação de robôs.</p>
          <ThemesBanners />
          <Link to="/content" class="button_main" role="button">Saiba mais</Link>
        </div>
        <img className='banner_main_image' id="imgCenterMain" src={BannerMainL}/>
      </div>
    </>
  )
}

export default BannerMain