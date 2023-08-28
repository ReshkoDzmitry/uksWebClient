import React from 'react';
import Header from "../header/Header";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className=''>
            <header>
                <Header/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default Layout;