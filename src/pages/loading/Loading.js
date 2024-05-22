import React, { useEffect } from 'react'
import './Loading.css'

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
        <div className={`container_loading ${themeColor() ? 'light' : 'dark'}`}>
            <span class="loader"></span>
        </div>
    )
}

export default Loading
