import React from 'react'
import './MenuContent.css'

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function MenuContent() {
    return (
        <div className='container_menu_content'>
            <div className='box_menu_content'>
                <FaArrowLeft className='icon_arrow' />
                <FaArrowRight className='icon_arrow' />
            </div>
        </div>
    )
}

export default MenuContent