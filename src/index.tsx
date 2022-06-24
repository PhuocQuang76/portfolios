import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store/store';
import {Provider} from "react-redux";

import {BrowserRouter} from "react-router-dom";

import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import {useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs:['en','jp'],
    fallbackLng: 'en',
    detection: {
        order:[ 'cookie','htmlTag','localStorage','path','subdomain'],
        caches:['cookie'],
    },
    backend:{
        loadPath:'/assets/locales/{{lng}}/translation.json',
    },
    react:{useSuspense:false},
  });

// function App() {
//   const { t } = useTranslation();
//   return <h2>{t('about_me')}</h2>;
// }

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
);


