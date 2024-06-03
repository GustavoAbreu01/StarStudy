import React, { useEffect, useState } from 'react'
import './Home.css'
import SideMenu from '../../components/sideMenu/SideMenu'
import BannerNews from '../../components/bannerNews/BannerNews'

import light from '../../assets/img/Ativo 3.png'
import Loading from '../loading/Loading'
import BannerMain from '../../components/bannerMain/BannerMain'

function Home() {

  return (
    <div className='container_home'>
      <BannerMain />
      <BannerNews />
      <img className='image_detail' id='imgRightBottom' src={light}>
      </img>
    </div>
  )
}

export default Home