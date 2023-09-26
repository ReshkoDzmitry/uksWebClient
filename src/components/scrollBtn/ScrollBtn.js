import React from 'react';
import styleScrollBtn from './scrollBtn.module.scss'

const ScrollBtn = () => {

    const handleScrollBtn = () => {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        });

    }

    return (
        <div className={styleScrollBtn.scrollBtn} onClick={handleScrollBtn}>
            <span>

            </span>
        </div>
    );
};

export default ScrollBtn;