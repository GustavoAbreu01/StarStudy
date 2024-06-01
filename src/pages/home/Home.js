import React, { useEffect, useState } from 'react'
import './Home.css'
import SideMenu from '../../components/sideMenu/SideMenu'
import BannerNews from '../../components/bannerNews/BannerNews'

import light from '../../assets/img/Ativo 3.png'
import Loading from '../loading/Loading'

function Home() {

  const [isLoading, setIsLoading] = useState(true);

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
      <BannerNews />
      <img className='image_detail' id='imgRightBottom' src={light}>
      </img>
    </div>
  )
}

export default Home