import React from 'react';
import './MenuContent.css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useParams, useNavigate } from 'react-router-dom';

function MenuContent() {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleContent = (content) => {
        let currentId = parseInt(id);
        if (isNaN(currentId)) {
            currentId = 0;
        }
        let newId;
        if (content === 1 && currentId > 1) {
            newId = currentId - 1; 
        } else if (content === 2 && currentId < 10) {
            newId = currentId + 1; 
        } else {
            return;
        }
        navigate(`/content/${newId}`);
    };

    return (
        <div className='container_menu_content'>
            <div className='box_menu_content'>
                <FaArrowLeft onClick={() => handleContent(1)} className='icon_arrow' />
                <FaArrowRight onClick={() => handleContent(2)} className='icon_arrow' />
            </div>
        </div>
    );
}

export default MenuContent;
