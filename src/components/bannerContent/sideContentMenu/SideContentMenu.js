import React from 'react'
import './SideContentMenu.css'
import { BiArrowFromRight } from 'react-icons/bi'
import { LuCircle } from "react-icons/lu";

function SideContentMenu() {
    return (
        <div className='container_side_content'>
            <p className='title_menu_content'>Conteúdos Disponíveis</p>
            <div className='options_content'>
                <p className='option_menu_content'><span className='option_menu_content_icon'><LuCircle /></span> Lógica de Programação</p>
                <p className='option_menu_content'><span className='option_menu_content_icon'><LuCircle /></span> Linguagem de Programação C</p>
                <p className='option_menu_content'><span className='option_menu_content_icon'><LuCircle /></span> Bibliotecas básicas em C</p>
                <p className='option_menu_content'><span className='option_menu_content_icon'><LuCircle /></span> Declaração de variáveis</p>
                <p className='option_menu_content'><span className='option_menu_content_icon'><LuCircle /></span> Comandos de Entrada e Saída</p>
                <p className='option_menu_content'><span className='option_menu_content_icon'><LuCircle /></span> Condicional</p>
                <p className='option_menu_content'><span className='option_menu_content_icon'><LuCircle /></span> Laços de Repetição</p>
                <p className='option_menu_content'><span className='option_menu_content_icon'><LuCircle /></span> Conhecendo o Arduino</p>
                <p className='option_menu_content'><span className='option_menu_content_icon'><LuCircle /></span> Componentes básicos do Arduino</p>
                <p className='option_menu_content'><span className='option_menu_content_icon'><LuCircle /></span> Simuladores de robótica</p>
            </div>
        </div>
    )
}

export default SideContentMenu