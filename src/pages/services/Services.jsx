import React from 'react';
import s from './services.module.scss'
import {engineeringServices, technicalSupervision} from "../../data/data";

const Services = () => {
    return (
        <div className={s.services}>
            <div className={s.servicesTitleWrapper}>
                <h2 className={s.servicesPageTitle}>
                    Строительство и инженерные услуги
                </h2>
            </div>

            <div className={s.engineeringServicesWrapper}>
                <h3 className={s.servicesBlockTitle}>КУП "Управление капитального строительства Миноблисполкома"
                    оказывает широкий спектр работ, которые обеспечивают качественное
                    выполнение задач по возведению объектов 1-4 класса сложности.</h3>
                <h4 className={s.servicesBlockTitleServices}>В рамках договора на оказание инжиниринговых услуг наше
                    предприятие предлагает следующие услуги:</h4>
                <div className={s.servicesBlockWrapper}>
                    {
                        engineeringServices.map(m => {
                            return (
                                <div className={s.servicesBlockInner}>
                                    <p className={s.servicesBlockText}>{m.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className={s.technical}>
                <div className={s.technicalSupervision}>
                    <div className={s.technicalSupervisionTitleWrapper}>
                        <h4 className={s.engineeringServicesTitle}>Технический контроль на всех стадиях строительного
                            процесса:</h4>
                    </div>

                    <div className={s.technicalServicesInfo}>
                        {
                            technicalSupervision.map(m => {
                                return (
                                    <div className={s.technicalServicesInfoInner}>
                                        <p>{m.description}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Services;