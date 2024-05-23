import React from 'react'
import './BannerMain.css'

import BannerMainD from '../../assets/img/BannerMainDark.png'
import BannerMainL from '../../assets/img/BannerMainLight.png'

function BannerMain() {

  const verifyTheme = localStorage.getItem('theme')
  const imageTheme = verifyTheme === 'dark' ? BannerMainL : BannerMainD

  return (
    <>
      <div className='container_banner_main'>
        <img src={imageTheme} className='banner_main_image' >

        </img>
      </div>
    </>
  )
}

export default BannerMain