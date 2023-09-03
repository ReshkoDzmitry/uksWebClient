import React from 'react';
import s from './header.module.css';
import logo from '../../image/001MinskObl.png';
import Navigation from "../navigation/Navigation";
import imgFirstScreen from "../../image/1.jpg";

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

                <div className={s.navigationWrapper}>
                    <Navigation/>
                </div>
            </div>

            <div className={s.containerFirstScreen}>
                {/*<img className={s.house} src={imgFirstScreen} alt="imgFirstScreen"/>*/}
                <div className={s.wrapperTitleFirstScreen}>
                    <h2 className={s.titleFirstScreen}>УКС МИНОБЛИСПОЛКОМА</h2>
                    <h3 className={s.descriptionFirstScreen}>
                        Полный спектр услуг <br/> по строительству и техническому надзору строительного процесса
                    </h3>
                </div>

                <div className={s.wrapperContactFirstScreen}>
                    <div className={s.wrapperContactPhone}>
                        8 017 626-83-66
                    </div>
                    <div className={s.wrapperContactMail}>
                        oblstroy@uksmoik.by
                    </div>

                </div>
            </div>


        </div>

    );
};

export default Header;