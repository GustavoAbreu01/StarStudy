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
  const [option, setOption] = React.useState(1)

  const alternateOption = (option) => () => {
    setOption(option)
  }

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
        <img src='https://i.imgur.com/7bIq1vz.png' className='logo_menu' />
        <RiHome3Fill onClick={alternateOption(1)} className={`icon_menu ${option == 1 ? 'active' : ''}`} />
        <RiBook2Fill onClick={alternateOption(2)} className={`icon_menu ${option == 2 ? 'active' : ''}`} />
        <RiQuestionFill onClick={alternateOption(3)} className={`icon_menu ${option == 3 ? 'active' : ''}`} />
        <RiChat3Fill onClick={alternateOption(4)} className={`icon_menu ${option == 4 ? 'active' : ''}`} />
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
