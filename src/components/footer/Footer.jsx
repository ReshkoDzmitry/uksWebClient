import React from 'react';
import s from './footer.module.css'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.wrapper}>
                <div className={s.infoFooter}>
                    <h4 className={s.infoTitle}>УКС МИНОБЛИСПОЛКОМА</h4>
                    <p className={s.infoDescription}>Управление капитального строительства МИНОБЛИСПОЛКОМА предлагает полный спектр услуг по
                        строительству и техническому надзору строительного процесса.</p>
                </div>
                <div className={s.infoFooter}>
                    <h4 className={s.infoTitle}>Адрес предприятия</h4>
                    <p className={s.infoDescription}>г. Минск, ул. Интернациональная, д. 8 </p>
                    <p className={s.infoDescription}>Понедельник — пятница: с 8.30 до 17.00
                        обед с 13.00 до 13.30</p>
                </div>
                <div className={s.infoFooterLast}>
                    <h4 className={s.infoTitle}>Связаться с нами</h4>
                    <a className={s.infoDescription} href="tel:+80176268366">8 017 626-83-66 приемная</a>
                    <a className={s.infoDescription} href="mailto:oblstroy@uksmoik.by">oblstroy@uksmoik.by</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;