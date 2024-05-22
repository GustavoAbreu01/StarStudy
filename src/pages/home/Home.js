import React, { useEffect } from 'react'
import './Home.css'
import SideMenu from '../../components/sideMenu/SideMenu'
import BannerNews from '../../components/bannerNews/BannerNews'

import svg1 from '../../assets/img/Ativo 3.png'
import svg2 from '../../assets/img/Ativo 4.png'
import BannerMain from '../../components/bannerMain/BannerMain'

function Home() {

  const verifyTheme = localStorage.getItem('theme')
  const imageTheme = verifyTheme === 'dark' ? svg1 : svg2

  return (
    <div className='container_home'>
      <SideMenu />
      <BannerMain />
      <BannerNews />
      <img src={imageTheme}  className='image_detail'>
      </img>
    </div>
  )
}

export default Home