import React from 'react'
import './Names.css'
import { Link } from 'react-router-dom'

function Names() {
    return (
        <div className='box_names'>
            <p className='title_members'>Membros do Grupo:</p>
            <p className='members_name'>Gustavo Guilherme de Abreu</p>
            <p className='members_name'>Vitor Manoel Alves de Andrade</p>
            <p className='members_name'>Henrique Aldrovandi Lazzarino</p>
            <p className='members_name'>Maria Michel</p>
            <p className='members_name'>Ana Vitória Reichert</p>
            <Link to="/" className='btn_names'>Voltar</Link>
        </div>
    )
}

export default Names
