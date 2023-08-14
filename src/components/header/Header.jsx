import React from 'react';
import s from './header.module.css';

const Header = () => {
    return (
        <div className={s.headerBackground}>
            <div className={s.headerContainer}>
                <h1 className={s.headerTitle}>УКС Миноблисполкома</h1>
            </div>
        </div>
    );
};

export default Header;