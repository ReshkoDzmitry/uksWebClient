import React from 'react';
import s from './main.module.css';
import Header from "../components/header/Header";
import house from '../image/временная.jpeg';

const Main = () => {
    return (
        <div>
            <div>
                <img className={s.house} src={house} alt="house"/>
            </div>

            <div className={s.container}>
                {/*<p>Body</p>*/}
            </div>
        </div>
    );
};

export default Main;