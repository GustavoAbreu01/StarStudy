import React, { useEffect } from 'react'
import './Loading.css'

import banner from '../../assets/img/Sem título-2.png'

function Loading() {

    const themeColor = () => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            return true
        } else {
            return false
        }
    }

    return (
        <>
            <div className={`container_loading ${themeColor() ? 'light' : 'dark'}`}>
                <span class={`loader ${themeColor() ? 'light' : 'dark'}`}></span>
            </div>
            <img src={banner} className='image_loading' />
        </>
    )
}

export default Loading
