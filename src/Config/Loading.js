import React from 'react';
import {Spinner} from "react-bootstrap";
import css from './loading.module.css';
import Header from "../Container/Header";
import Footer from "../Container/Footer";

const Loading = () => {
    return (
        <div>
            <Header/>
            <div className={css.lodaingDiv}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
            <Footer/>
        </div>

    );
};

export default Loading;