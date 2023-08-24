import React from 'react';
import s from './main.module.css';
import Header from "../components/header/Header";

const Main = () => {
    return (
        <div>
            <div>
                <Header/>
            </div>

            <div className={s.container}>
                {/*<p>Body</p>*/}
            </div>
        </div>
    );
};

export default Main;