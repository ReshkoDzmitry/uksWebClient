import React from 'react';
import s from './header.module.css';
import logo from '../../image/001MinskObl.png';
import house from '../../image/временная.jpeg';

const Header = () => {
    return (
        <div className={s.headerBackground}>
            <div className={s.headerContainer}>
                <div className={s.headerTitleWrapper}>
                    <img className={s.logo} src={logo} alt="logo"/>
                    <h1 className={s.headerTitle}><span className={s.headerTitleSpan}>КОММУНАЛЬНОЕ УНИТАРНОЕ ПРЕДПРИЯТИЕ</span><br/>
                        "УПРАВЛЕНИЕ КАПИТАЛЬНОГО СТРОИТЕЛЬСТВА МИНОБЛИСПОЛКОМА"</h1>
                </div>

                <div className={s.headerNav}>
                    <div className={s.headerNavItem}>ГЛАВНАЯ</div>
                    <div className={s.headerNavItem}>УСЛУГИ</div>
                    <div className={s.headerNavItem}>ПРОЕКТЫ</div>
                    <div className={s.headerNavItem}>КОНТАКТЫ</div>
                </div>

            </div>

            {/*<div>*/}
            {/*    <img className={s.house} src={house} alt="house"/>*/}
            {/*</div>*/}
        </div>

    );
};

export default Header;