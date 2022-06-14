import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from '../src/Redux/store';
import i18n from 'i18next'
import {initReactI18next} from "react-i18next";
import i18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'
import i18nextHttpBackend from 'i18next-http-backend'

i18n
    .use(initReactI18next)
    .use(i18nextBrowserLanguageDetector)
    .use(i18nextHttpBackend)
    .init({
        supportedLngs: ['en', 'am', 'ru'], fallbackLng: 'en', detection: {
            order: ['cookie'], caches: ['cookie']
        }, backend: {
            loadPath: '/locales/{{lng}}/translation.json'
        }
    })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
    <Suspense fallback={true}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Suspense>
</Provider>);