import React from 'react'
import './Home.css'
import SideMenu from '../../components/sideMenu/SideMenu'

import imageDetail from '../../assets/img/Ativo 3.png'
import BannerNews from '../../components/bannerNews/BannerNews'

function Home() {

  window.localStorage.setItem('user1', JSON.stringify({ name: 'John Doe', pc: '34' }))

  return (
    <div className='container_home'>
      <SideMenu />
      <BannerNews />
      <img src={imageDetail} className='image_detail'>
      </img>
    </div>
  )
}

export default Home