import React, { useEffect } from 'react'
import './Home.css'
import SideMenu from '../../components/sideMenu/SideMenu'
import BannerNews from '../../components/bannerNews/BannerNews'

function Home() {

  const verifyTheme = localStorage.getItem('theme')

  return (
    <div className='container_home'>
      <SideMenu />
      <BannerNews />
      <img style={{backgroundImage: 'var("--image-detail")'}} className='image_detail'>
      </img>
    </div>
  )
}

export default Home