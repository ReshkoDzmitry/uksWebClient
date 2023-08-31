import React from 'react';
import s from './homepage.module.css';
import house from '../../image/временная.jpeg';

const Homepage = () => {
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

export default Homepage;