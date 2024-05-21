import React from 'react'
import './SideMenu.css'

import { RiHome3Fill, RiBook2Fill, RiQuestionFill, RiChat3Fill } from "react-icons/ri";
import Avatar, { genConfig } from 'react-nice-avatar'
import { TbHazeMoon, TbSunset2 } from "react-icons/tb";
import { changeTheme } from '../../utils/ChangeTheme'
import { useEffect } from 'react';

function SideMenu() {
  const ref = React.useRef(null)
  const config = genConfig()

  const user = JSON.parse(window.localStorage.getItem('user'))

  const changeLocalTheme = () => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
      localStorage.setItem('theme', 'dark');
      ref.current.checked = false;
    } else {
      localStorage.setItem('theme', 'light');
      ref.current.checked = true;
    }

    changeTheme(currentTheme)
  }

  useEffect(() => {
    changeLocalTheme()
  }, [])

  return (
    <div className='container_sidemenu'>
      <div className='box_options'>
        <RiHome3Fill className='icon_menu' />
        <RiBook2Fill className='icon_menu' />
        <RiQuestionFill className='icon_menu' />
        <RiChat3Fill className='icon_menu' />
      </div>
      <div className='box_user'>
        <div className='user_info'>
          <Avatar className="avatar_image" {...config} />
          <p>{user.name}</p>
          <p className='pc_number'>{user.pc}</p>
        </div>
        <div className='menu_divider'></div>
        <div className="input_wrapper">
          <input type="checkbox" className="switch_4" onClick={() => { changeLocalTheme() }} ref={ref} />
          <TbHazeMoon className='is_checked' />
          <TbSunset2 className='is_unchecked' />
        </div>
      </div>
    </div>
  )
}

export default SideMenu
