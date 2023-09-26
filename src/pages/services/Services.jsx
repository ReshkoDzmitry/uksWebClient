import React from 'react';
import s from './services.module.scss'
import {engineeringServices, services, technicalSupervision} from "../../data/data";
import build from '../../image/001Bild.jpg'

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
                    Строительство и инженерные услуги
                </h2>
            </div>

            <div className={s.engineeringServicesWrapper}>
                <h3 className={s.servicesBlockTitle}>КУП "Управление капитального строительства Миноблисполкома" оказывает широкий спектр работ, которые обеспечивают качественное
                    выполнение задач по возведению объектов 1-4 класса сложности.</h3>

                <h4>В рамках договора на оказание инжиниринговых услуг наше предприятие предлагает следующие услуги:</h4>
                <div className={s.servicesBlockWrapper}>
                    <div className={s.servicesBlockInner}>
                        <p className={s.servicesBlockText}>Разработка архитектурно-планировочной концепции строящегося объекта</p>
                    </div>
                    <div className={s.servicesBlockInner}>
                        <p className={s.servicesBlockText}>Управление проектированием</p>
                    </div>
                    <div className={s.servicesBlockInner}>
                        <p className={s.servicesBlockText}>Управление строительством</p>
                    </div>
                    <div className={s.servicesBlockInner}>
                        <p className={s.servicesBlockText}>Управление капитальными затратами</p>
                    </div>
                </div>


                {/*<img className={s.imgBuild} src={build} alt="build"/>*/}

                {/*{*/}
                {/*    engineeringServices.map(m=> {*/}
                {/*        return (*/}
                {/*            <div className={s.engineeringServicesInner}>*/}
                {/*                <h4>{m.title}</h4>*/}
                {/*                <p>{m.description}</p>*/}
                {/*            </div>*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}
            </div>

            <div className={s.technical}>
                <div className={s.technicalSupervision}>
                    <div className={s.technicalSupervisionTitleWrapper}>
                        <div className={s.engineeringServicesTitleInner}>
                            <h4>Технический контроль на всех стадиях строительного процесса:</h4>
                        </div>
                    </div>

                 <div className={s.technicalServicesInfo}>
                     {
                         technicalSupervision.map(m=>{
                             return(
                                 <div className={s.technicalServicesInfoInner}>
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