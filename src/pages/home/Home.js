import React from 'react'
import './Home.css'
import SideMenu from '../../components/sideMenu/SideMenu'

function Home() {

  window.localStorage.setItem('user', JSON.stringify({name: 'John Doe', pc: '34'}))

  return (
    <div className='container_home'>
      <SideMenu />
      <div className='bot'>

      </div>
    </div>  
  )
}

export default Home