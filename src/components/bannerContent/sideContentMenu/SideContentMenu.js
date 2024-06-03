import React from 'react'
import './SideContentMenu.css'

import { RiMenu3Fill, } from "react-icons/ri";
import { GiCoffeeCup } from "react-icons/gi";
import { LuCircle } from "react-icons/lu";
import { FaCircle } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';

function SideContentMenu() {

    const { id } = useParams();

    console.log(id);

    return (
        <div className='container_banner_news_content'>
            <div className='icon_weather'>
                <RiMenu3Fill />
            </div>
            <p className='title_menu_content'>Menu Conteúdos</p>
            <div className='box_details_content'>
                <div className='options_content'>
                    <Link to="/content/1" className='option_menu_content'><span className='option_menu_content_icon'>{ id == 1 ? <FaCircle /> : <LuCircle />}</span> Lógica de Programação</Link>
                    <Link to="/content/2" className='option_menu_content'><span className='option_menu_content_icon'>{ id == 2 ? <FaCircle /> : <LuCircle />}</span> Linguagem de Programação C</Link>
                    <Link to="/content/3" className='option_menu_content'><span className='option_menu_content_icon'>{ id == 3 ? <FaCircle /> : <LuCircle />}</span> Bibliotecas básicas em C</Link>
                    <Link to="/content/4" className='option_menu_content'><span className='option_menu_content_icon'>{ id == 4 ? <FaCircle /> : <LuCircle />}</span> Declaração de variáveis</Link>
                    <Link to="/content/5" className='option_menu_content'><span className='option_menu_content_icon'>{ id == 5 ? <FaCircle /> : <LuCircle />}</span> Comandos de Entrada e Saída</Link>
                    <Link to="/content/6" className='option_menu_content'><span className='option_menu_content_icon'>{ id == 6 ? <FaCircle /> : <LuCircle />}</span> Condicional</Link>
                    <Link to="/content/7" className='option_menu_content'><span className='option_menu_content_icon'>{ id == 7 ? <FaCircle /> : <LuCircle />}</span> Laços de Repetição</Link>
                    <Link to="/content/8" className='option_menu_content'><span className='option_menu_content_icon'>{ id == 8 ? <FaCircle /> : <LuCircle />}</span> Conhecendo o Arduino</Link>
                    <Link to="/content/9" className='option_menu_content'><span className='option_menu_content_icon'>{ id == 9 ? <FaCircle /> : <LuCircle />}</span> Componentes básicos do Arduino</Link>
                    <Link to="/content/10" className='option_menu_content'><span className='option_menu_content_icon'>{ id == 10 ? <FaCircle />  : <LuCircle />}</span> Simuladores de robótica</Link>
                </div> 
            </div>
            <div className='icon_cup'>
                <GiCoffeeCup />
            </div>
        </div>
    )
}

export default SideContentMenu