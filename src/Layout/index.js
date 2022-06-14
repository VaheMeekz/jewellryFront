import React from 'react';
import Header from "../Container/Header";
import Footer from "../Container/Footer";
import {Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <div>
                <Header/>
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;