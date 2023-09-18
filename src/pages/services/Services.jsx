import React from 'react';
import s from './services.module.scss'
import {engineeringServices, services, technicalSupervision} from "../../data/data";

const Services = () => {
    return (
        /*<>

            <div className={s.servicesTitleWrapper}>
                <h2 className={s.servicesPageTitle}>
                    Технический надзор и инженерные услуги
                </h2>
            </div>

            <h3 className={s.titleItem}>
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

            <h3 className={s.titleItem}>
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

        </>*/
        <>
            <div className={s.servicesTitleWrapper}>
                <h2 className={s.servicesPageTitle}>
                    Технический надзор и инженерные услуги
                </h2>
            </div>

            <div className={s.engineeringServicesWrapper}>
                <div>
                    <h3>Инженерные Услуги</h3>
                    <p>ПО ОБЪЕКТАМ 1-4 КЛАССА СЛОЖНОСТИ:</p>
                </div>
                {
                    engineeringServices.map(m=> {
                        return (
                            <div className={s.engineeringServicesInner}>
                                <h4>{m.title}</h4>
                                <p>{m.description}</p>
                            </div>
                        )
                    })
                }
            </div>

            <div className={s.technical}>
                <div className={s.technicalSupervision}>
                    <div className={s.technicalSupervisionTitleWrapper}>
                        <div className={s.engineeringServicesTitleInner}>
                            <h4 className={s.engineeringServicesTitle}>Технический Надзор</h4>
                            <p>ПРЕДПРИЯТИЕ «УКС МИНОБЛИСПОЛКОМА» ОСУЩЕСТВЛЯЕТ ТЕХНИЧЕСКИЙ КОНТРОЛЬ ВСЕХ СТАДИЙ СТРОИТЕЛЬНОГО ПРОЦЕССА:</p>
                        </div>
                        <img className={s.technicalSupervisionImg} src="" alt=""/>
                    </div>

                 <div className={s.technicalServicesInfo}>
                     {
                         technicalSupervision.map(m=>{
                             return(
                                 <div className={s.technicalServicesInfoInner}>
                                     <h4>{m.title}</h4>
                                     <p>{m.description}</p>
                                 </div>
                             )
                         })
                     }
                 </div>
                </div>
            </div>

        </>

    );
};

export default Services;