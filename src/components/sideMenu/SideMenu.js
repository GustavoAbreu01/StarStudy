import React from 'react'
import './SideMenu.css'

import { RiHome3Fill, RiBook2Fill, RiQuestionFill, RiChat3Fill } from "react-icons/ri";
import Avatar, { genConfig } from 'react-nice-avatar'
import { TbHazeMoon, TbSunset2 } from "react-icons/tb";
import { changeTheme } from '../../utils/ChangeTheme'
import { useEffect } from 'react';
import { getUser } from '../../utils/ChangeUser';

import logoDark from '../../assets/img/LogoDark.png'
import logoLight from '../../assets/img/LogoLight.png'

import Swal from 'sweetalert2'
import BannerMain from '../bannerMain/BannerMain';
import BannerContent from '../bannerContent/BannerContent';

function SideMenu() {
  const ref = React.useRef(null)
  const config = getUser()

  window.localStorage.setItem('user1', JSON.stringify({ name: 'John Doe', pc: '1' }))

  const user = JSON.parse(window.localStorage.getItem('user1'))
  const [option, setOption] = React.useState(1)

  const verifyTheme = localStorage.getItem('theme')
  const imageTheme = verifyTheme === 'dark' ? logoLight : logoDark

  const [verifyBanner, setVerifyBanner] = React.useState(1)


  const alternateOption = (option) => () => {
    setOption(option)
    if (option === 1) {
      setVerifyBanner(option)
    } else if (option === 4) {
      Swal.fire({
        title: 'Formulário',
        background: 'var(--base-color1)',
        html: `
          <form id="myForm">
            <label for="numberInput" style="font-size: 1.2rem; color: var(--black);">Número do computador:</label><br>
            <input type="number" id="numberInput" name="numberInput" style="font-size: 1.2rem; color: var(--black); width: 95%; padding: 5px; margin: 5px 0; border: 1px solid var(--black); border-radius: 5px; outline: 0;"><br>
            <label for="textInput" style="font-size: 1.2rem; color: var(--black);">Pergunta:</label><br>
            <textarea id="textInput" name="textInput" style="max-width: 95%; font-size: 1.2rem; color: var(--black); width: 95%; padding: 5px; margin: 5px 0; border: 1px solid var(--black); border-radius: 5px; outline: 0;"></textarea><br>
          </form>
        `,
        confirmButtonText: 'Enviar dúvida!',
        preConfirm: () => {
          const numberInput = Swal.getPopup().querySelector('#numberInput').value
          const textInput = Swal.getPopup().querySelector('#textInput').value
          if (!numberInput || !textInput) {
            Swal.showValidationMessage(`Por favor, preencha todos os campos`)
          }
          return { numberInput: numberInput, textInput: textInput }
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          fetch('https://665516cfb6f0fa9155532f2f.wnology.io/api/v1/email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              number: result.value.numberInput,
              question: result.value.textInput
            })
          }).then((response) => {
            if (response.status === 200) {
              Swal.fire('Enviado!', 'Sua dúvida foi enviada com sucesso!', 'success')
            } else {
              Swal.fire('Erro!', 'Ocorreu um erro ao enviar sua dúvida!', 'error')
            }
          })
        }
      })
    } else if (option === 2) {
      setVerifyBanner(option)
    }
  }

  const reloadPage = () => {
    setTimeout(() => {
      window.location.reload()
    }, 200)
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
    }, 1000)
  }

  useEffect(() => {
    changeLocalTheme()
  }, [])

  return (
    <><div className='container_sidemenu'>
      <div className='box_options'>
        <img src={imageTheme} className='logo_menu' />
        <RiHome3Fill onClick={alternateOption(1)} className={`icon_menu ${option === 1 ? 'active' : ''}`} />
        <RiBook2Fill onClick={alternateOption(2)} className={`icon_menu ${option === 2 ? 'active' : ''}`} />
        <RiChat3Fill onClick={alternateOption(4)} className={`icon_menu ${option === 4 ? 'active' : ''}`} />
      </div>
      <div className='box_user'>
        <div className='user_info'>
          <Avatar className="avatar_image" {...config} />
          <p>{user.name}</p>
          <p className='pc_number'>{user.pc}</p>
        </div>
        <div className='menu_divider'></div>
        <div onClick={() => { changeLocalTheme(); }} className="input_wrapper">
          <input onClick={reloadPage} type="checkbox" className="switch_4" ref={ref} />
          <TbHazeMoon onClick={() => { changeLocalTheme(); }} className='is_checked' />
          <TbSunset2 onClick={() => { changeLocalTheme(); }} className='is_unchecked' />
        </div>
      </div>
    </div>
      {verifyBanner === 1 && <BannerMain />}
      {verifyBanner === 2 && <BannerContent />}
    </>
  )
}

export default SideMenu
