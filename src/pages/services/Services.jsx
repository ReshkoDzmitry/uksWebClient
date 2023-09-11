import React from 'react';
import s from './services.module.scss'
import {services} from "../../data/data";

const Services = () => {
    return (
        <div>

            <div className={s.servicesTitleWrapper}>
                <h2 className={s.servicesPageTitle}>
                    Технический надзор и инженерные услуги
                </h2>
            </div>

            <h3>
                Инженерные услуги
            </h3>
            <div className={s.servicesWrapper}>
                                {
                    services.map(m => {
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

            <h3>
                Технический надзор
            </h3>
            <div className={s.servicesWrapper}>
                {
                    services.map(m => {
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

        </div>

    );
};

export default Services;