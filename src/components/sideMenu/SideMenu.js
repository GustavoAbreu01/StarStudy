import React from 'react'
import './SideMenu.css'

import { RiHome3Fill, RiBook2Fill, RiQuestionFill, RiChat3Fill } from "react-icons/ri";
import Avatar, { genConfig } from 'react-nice-avatar'
import { TbHazeMoon, TbSunset2 } from "react-icons/tb";
import { changeTheme } from '../../utils/ChangeTheme'
import { useEffect } from 'react';
import { getUser } from '../../utils/ChangeUser';

function SideMenu() {
  const ref = React.useRef(null)
  const config = getUser()

  window.localStorage.setItem('user1', JSON.stringify({ name: 'John Doe', pc: '1' }))

  const user = JSON.parse(window.localStorage.getItem('user1'))
  const [option, setOption] = React.useState(1)

  const alternateOption = (option) => () => {
    setOption(option)
  }

  const reloadPage = () => {
    setTimeout(() => {
    window.location.reload()
    } , 200)
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
    setInterval(() => {
    changeTheme(currentTheme)
    } , 1000)
  }

  useEffect(() => {
    changeLocalTheme()
  }, [])

  return (
    <div className='container_sidemenu'>
      <div className='box_options'>
        <img src='*' className='logo_menu' />
        <RiHome3Fill onClick={alternateOption(1)} className={`icon_menu ${option === 1 ? 'active' : ''}`} />
        <RiBook2Fill onClick={alternateOption(2)} className={`icon_menu ${option === 2 ? 'active' : ''}`} />
        <RiQuestionFill onClick={alternateOption(3)} className={`icon_menu ${option === 3 ? 'active' : ''}`} />
        <RiChat3Fill onClick={alternateOption(4)} className={`icon_menu ${option === 4 ? 'active' : ''}`} />
      </div>
      <div className='box_user'>
        <div className='user_info'>
          <Avatar className="avatar_image" {...config} />
          <p>{user.name}</p>
          <p className='pc_number'>{user.pc}</p>
        </div>
        <div className='menu_divider'></div>
        <div onClick={() => { changeLocalTheme() }} className="input_wrapper">
          <input onClick={reloadPage} type="checkbox" className="switch_4" ref={ref} />
          <TbHazeMoon className='is_checked' />
          <TbSunset2 className='is_unchecked' />
        </div>
      </div>
    </div>
  )
}

export default SideMenu
