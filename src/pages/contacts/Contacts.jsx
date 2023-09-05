import React from 'react';
import s from  './contacts.module.scss';

const Contacts = () => {
    return (
        <>
        <div className={s.contactsWrapper}>
            <div>
                <h3>УПРАВЛЕНИЕ КАПИТАЛЬНОГО СТРОИТЕЛЬСТВА МИНОБЛИСПОЛКОМА</h3>
                <div className={s.contactsInner}>
                    <h4 className={s.contactsTitle}>Адрес предприятия</h4>
                    <p className={s.contactsDescription}>Интернациональная улица, 8 г. Минск</p>
                </div>
                <div className={s.contactsInner}>
                    <h4 className={s.contactsTitle}>Режим работы</h4>
                    <p className={s.contactsDescription}>Понедельник — пятница: с 8.30 до 17.00 обед с 13.00 до 13.30</p>
                    <p className={s.contactsDescription}>Суббота, воскресенье: выходные дни</p>
                </div>
                <div className={s.contactsInner}>
                    <h4 className={s.contactsTitle}>Электронная почта</h4>
                    <a className={s.contactsMail} href="mailto:oblstroy@uksmoik.by">
                        <div>
                            oblstroy@uksmoik.by
                        </div>
                    </a>
                </div>
            </div>
            <div>
                <h4>Работники</h4>
                <p>заполнить</p>
            </div>
            <div>
                <h4>Работники</h4>
                <p>заполнить</p>
            </div>

        </div>

            <div className={s.map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.745679352952!2d27.552162!3d53.900724100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfe99b2cf569%3A0x8cc180edf168f678!2z0YPQuy4g0JjQvdGC0LXRgNC90LDRhtC40L7QvdCw0LvRjNC90LDRjyA4LCDQnNC40L3RgdC6!5e0!3m2!1sru!2sby!4v1693947167089!5m2!1sru!2sby"
                        width="1200" height="450">
                </iframe>
            </div>

        </>
    );
};

export default Contacts;