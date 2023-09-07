import React from 'react';
import s from './homepage.module.css';
import phoneLogo from '../../image/phone-call-logo.png';
import mailLogo from '../../image/email-logo.png';

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

            <div className={s.wrapperServicesHomePage}>
                <h3 className={s.titleServicesHomePage}>
                    УСЛУГИ ПРЕДПРИЯТИЯ
                </h3>

                <div className={s.wrapperServicesBlock}>

                    <div className={s.wrapperServicesBuild}>
                        <div className={s.servicesBuildImg}>
                            Photo
                        </div>
                        <h4 className={s.servicesBuildTitle}>Строительство</h4>
                        <p className={s.servicesBuildDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ipsum, libero.</p>
                    </div>

                    <div className={s.wrapperServicesTech}>
                        <div className={s.servicesTechImg}>
                            Photo
                        </div>
                        <h4 className={s.servicesTechTitle}>Технадзор</h4>
                        <p className={s.servicesTechDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ut!</p>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Homepage;