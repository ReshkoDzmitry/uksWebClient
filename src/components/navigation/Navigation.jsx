import React from 'react';
import s from "./navigation.module.scss";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={s.wrapper}>
                <NavLink className={({isActive})=>isActive ? `${s.activeLink}`: `${s.link}`} to={'/'}>Главная</NavLink>
                <NavLink className={({isActive})=>isActive ? `${s.activeLink}`: `${s.link}`} to={'/services'}>Услуги</NavLink>
                <NavLink className={({isActive})=>isActive ? `${s.activeLink}`: `${s.link}`} to={'/news'}>Проекты</NavLink>
                <NavLink className={({isActive})=>isActive ? `${s.activeLink}`: `${s.link}`} to={'/contacts'}>Контакты</NavLink>
        </nav>
    );
};

export default Navigation;