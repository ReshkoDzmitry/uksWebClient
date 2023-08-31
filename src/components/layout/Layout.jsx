import React from 'react';
import Header from "../header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../footer/Footer";
import s from "./footer.module.css"

const Layout = () => {
    return (
        <div className={s.wrapper}>
            <header>
                <Header/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Layout;