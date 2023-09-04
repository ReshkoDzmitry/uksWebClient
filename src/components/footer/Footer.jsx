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
                    <p className={s.infoDescription}>Интернациональная улица, 8 г. Минск</p>
                    <p className={s.infoDescription}>Понедельник — пятница: с 8.00 до 17.00
                        обед с 13.00 до 13.30</p>
                </div>
                <div className={s.infoFooter}>
                    <h4 className={s.infoTitle}>Связаться с нами</h4>
                    <p className={s.infoDescription}>8 017 626-83-66 приемная</p>
                    <p className={s.infoDescription}>oblstroy@uksmoik.by</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;