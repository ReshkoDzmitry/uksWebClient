import React from 'react';
import s from './header.module.css';
import logo from '../../image/001MinskObl.png';
import Navigation from "../navigation/Navigation";

const Header = () => {
    return (
        <div className={s.headerBackground}>
            <div className={s.headerContainer}>
                <div className={s.headerTitleWrapper}>
                    <img className={s.logo} src={logo} alt="logo"/>
                    <h1 className={s.headerTitle}><span
                        className={s.headerTitleSpan}>КОММУНАЛЬНОЕ УНИТАРНОЕ ПРЕДПРИЯТИЕ</span><br/>
                        "УПРАВЛЕНИЕ КАПИТАЛЬНОГО СТРОИТЕЛЬСТВА МИНОБЛИСПОЛКОМА"</h1>
                </div>

                <Navigation/>

            </div>

            {/*<div>*/}
            {/*    <img className={s.house} src={house} alt="house"/>*/}
            {/*</div>*/}
        </div>

    );
};

export default Header;