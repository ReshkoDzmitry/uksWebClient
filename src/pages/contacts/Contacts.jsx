import React from 'react';
import s from  './contacts.module.scss';

const Contacts = () => {
    return (
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
    );
};

export default Contacts;