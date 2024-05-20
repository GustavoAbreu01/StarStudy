import React from 'react'
import './SideMenu.css'

import { RiHome3Fill, RiBook2Fill, RiQuestionFill, RiChat3Fill  } from "react-icons/ri";

function SideMenu() {
  return (
    <div className='container_sidemenu'>
      <div className='box_options'>
        <RiHome3Fill className='icon_menu' />
        <RiBook2Fill className='icon_menu' />
        <RiQuestionFill className='icon_menu' />
        <RiChat3Fill className='icon_menu' />
      </div>
      <div className='box_user'>
        
      </div>
    </div>
  )
}

export default SideMenu
