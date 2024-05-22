import React, { useEffect, useState } from 'react'
import './Home.css'
import SideMenu from '../../components/sideMenu/SideMenu'
import BannerNews from '../../components/bannerNews/BannerNews'

import svg1 from '../../assets/img/Ativo 3.png'
import svg2 from '../../assets/img/Ativo 4.png'
import BannerMain from '../../components/bannerMain/BannerMain'
import Loading from '../loading/Loading'

function Home() {

  const [isLoading, setIsLoading] = useState(true);

  const verifyTheme = localStorage.getItem('theme')
  const imageTheme = verifyTheme === 'dark' ? svg1 : svg2

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
        setIsLoading(false);
    }, 2000);
    return () => {
        clearTimeout(loadingTimeout);
    };
}, []);

  return (
    <div className='container_home'>
      <div className={`loading_page ${isLoading ? 'visible' : 'hidden'}`}>
        <Loading />
      </div>
      <SideMenu />
      <BannerMain />
      <BannerNews />
      <img src={imageTheme} className='image_detail'>
      </img>
    </div>
  )
}

export default Home