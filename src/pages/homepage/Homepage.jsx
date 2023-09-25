import React from 'react';
import s from './homepage.module.css';
import phoneLogo from '../../image/phone-call-logo.png';
import mailLogo from '../../image/email-logo.png';
import minobl from '../../image/001GerbMinskObl.png';
import president from '../../image/president.gov.by.png';
import pravo from '../../image/pravoBy.png';
import mas from '../../image/mas.gov.by.png';
import so from '../../image/so.png';
import okeyLogo from '../../image/okey.png';
import bild from '../../image/006Bild.jpg';
import tech from '../../image/002Bild.jpeg';
import {NavLink} from "react-router-dom";


const Homepage = () => {
    return (
        <>
            <div className={s.containerFirstScreen}>
                <div className={s.wrapperTitleFirstScreen}>
                    <h2 className={s.titleFirstScreen}>УКС МИНОБЛИСПОЛКОМА</h2>
                    <h3 className={s.descriptionFirstScreen}>
                        Полный спектр услуг <br/> по строительству и техническому надзору строительного процесса
                    </h3>
                </div>

                <div className={s.wrapperContactFirstScreen}>
                    <a className={s.wrapperContactPhone} href="tel:+80176268366">
                        <div className={s.wrapperPhoneLogo}>
                            <img className={s.phoneLogo} src={phoneLogo} alt="phoneLogo"/>
                        </div>
                        <div className={s.wrapperPhone}>
                            <p className={s.phoneTitle}>Приемная, секретарь</p>
                            <p className={s.phoneNumber}>8 017 626-83-66</p>
                        </div>
                    </a>


                    <a className={s.wrapperContactMail} href="mailto:oblstroy@uksmoik.by">
                        <div className={s.wrapperMailLogo}>
                            <img className={s.mailLogo} src={mailLogo} alt="mailLogo"/>
                        </div>
                        <div className={s.wrapperMail}>
                            <p className={s.mailTitle}>Электронная почта</p>
                            <p className={s.mailNumber}>oblstroy@uksmoik.by</p>
                        </div>
                    </a>
                </div>
            </div>


            <div className={s.wrapperAdvantages}>
                <div className={s.wrapperBlockAdvantage}>
                    <div className={s.blockAdvantageTitle}>
                        <img className={s.okeyLogo} src={okeyLogo} alt="logo"/>
                        <h4 className={s.advantageTitle}>
                            Более 20 лет опыта работы
                        </h4>
                    </div>
                    <p className={s.blockAdvantageDescription}>Предприятие успешно работает в сфере строительства и технического надзора уже более 20 лет.</p>
                </div>

                <div className={s.wrapperBlockAdvantage}>
                    <div className={s.blockAdvantageTitle}>
                        <img className={s.okeyLogo} src={okeyLogo} alt="logo"/>
                        <h4 className={s.advantageTitle}>
                            Современное оборудование
                        </h4>
                    </div>

                    <p className={s.blockAdvantageDescription}>Для качественной реализации всех этапов строительных процессов и решения сложных комплексных задач.</p>
                </div>

                <div className={s.wrapperBlockAdvantage}>

                    <div className={s.blockAdvantageTitle}>
                        <img className={s.okeyLogo} src={okeyLogo} alt="logo"/>
                        <h4 className={s.advantageTitle}>
                            Направления деятельности
                        </h4>
                    </div>
                    <p className={s.blockAdvantageDescription}>Архитектура и инженерные изыскания, технические консультации, общее строительство зданий и сооружение.</p>
                </div>
            </div>


            <div className={s.wrapperServicesHomePage}>
                <h3 className={s.titleServicesHomePage}>
                    УСЛУГИ ПРЕДПРИЯТИЯ
                </h3>

                <div className={s.wrapperServicesBlock}>

                    <NavLink className={s.wrapperServicesBuild} to={'/projects'}>
                        <div className={s.servicesBuildImg}>
                            <img className={s.bildImage} src={bild} alt="bild"/>
                        </div>
                        <h4 className={s.servicesBuildTitle}>Строительство</h4>
                        <p className={s.servicesBuildDescription}>Строительство зданий и сооружений в минской области</p>
                    </NavLink>

                    <NavLink className={s.wrapperServicesTech} to={'/projects'}>
                        <div className={s.servicesTechImg}>
                            <img className={s.bildImage} src={tech} alt="tech"/>
                        </div>
                        <h4 className={s.servicesTechTitle}>Инженерные услуги</h4>
                        <p className={s.servicesTechDescription}>Инженерные услуги по объектам 1-4 класса сложности</p>
                    </NavLink>
                </div>
            </div>

            <div className={s.wrapperLinks}>
                <a className={s.link} href="https://www.minsk-region.gov.by/" target="_blank">
                    <img className={s.linkLogo} src={minobl} alt="minsk-region.gov.by"/>
                    <p>Минский областной исполнительный комитет</p>
                </a>

                <a className={s.link} href="https://president.gov.by/" target="_blank">
                    <img className={s.linkLogo} src={president} alt="president.gov.by"/>
                    <p>Официальный Интернет-портал Президента Республики Беларусь</p>
                </a>

                <a className={s.link} href="https://pravo.by/" target="_blank">
                    <img className={s.linkLogo} src={pravo} alt="pravo.by"/>
                    <p>Национальный правовой Интернет-портал Республики Беларусь</p>
                </a>

                <a className={s.link} href="http://mas.gov.by/" target="_blank">
                    <img className={s.linkLogo} src={mas} alt="mas.gov.by"/>
                    <p>Министерство архитектуры и строительства Республики Беларусь</p>
                </a>

                <a className={s.link} href="https://xn--80abnmycp7evc.xn--90ais/" target="_blank">
                    <img className={s.linkLogo} src={so} alt="обращения.бел"/>
                    <p>Система электронных обращений</p>
                </a>
            </div>
        </>
    );
};

export default Homepage;