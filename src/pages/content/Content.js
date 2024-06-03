import React, { useEffect, useState } from 'react'
import BannerNews from '../../components/bannerNews/BannerNews'
import SideMenu from '../../components/sideMenu/SideMenu'
import Loading from '../loading/Loading'
import light from '../../assets/img/Ativo 3.png'
import BannerContent from '../../components/bannerContent/BannerContent'
import SideContentMenu from '../../components/bannerContent/sideContentMenu/SideContentMenu'

function Content() {

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
    <BannerContent />
    <SideContentMenu />
    <img className='image_detail' id='imgRightBottom' src={light}>
    </img>
  </div>
  )
}

export default Content