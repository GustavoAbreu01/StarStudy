import React, { useEffect } from 'react'
import './Home.css'
import SideMenu from '../../components/sideMenu/SideMenu'
import BannerNews from '../../components/bannerNews/BannerNews'

import svg from '../../assets/img/Ativo 3.png'

function Home() {

  const verifyTheme = localStorage.getItem('theme')

  return (
    <div className='container_home'>
      <SideMenu />
      <BannerNews />
      <img src={svg}  className='image_detail'>
      </img>
    </div>
  )
}

export default Home