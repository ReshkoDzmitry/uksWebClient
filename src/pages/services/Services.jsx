import React from 'react';
import s from './services.module.scss'
import {services} from "../../data/data";

const Services = () => {
    return (
        <div className={s.servicesWrapper}>
            {
                services.map(m=>{
                    return (
                        <div className={s.servicesInner}>
                            <img className={s.servicesLogo} src="" alt=""/>
                            <h4 className={s.servicesTitle}>{m.title}</h4>
                            <p className={s.servicesNumber}>{m.phoneNumber}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Services;