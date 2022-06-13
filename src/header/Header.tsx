import React from 'react';
import classes from './Header.module.css';
import USAFlag from './usa-flag.png';
import i18next from 'i18next';
import { useTranslation } from "react-i18next";

const languages = [
    {
        code: 'en',
        name: 'English',
        country_code: 'gb'
    },
    {
        code:'jp',
        name: 'Japanese',
        country_code: 'jp'
    }

]

const Header = () => {
    const { t } = useTranslation();
    const onChangeLanguage = (code:string) => {
    }
    return(
        <div className={classes.header_container}>
            <h1>{t('app_title')}</h1>
                <ul>
                    {languages.map(({code,name,country_code}) => (
                        <li key={country_code}>
                            <button
                            onClick={()=>i18next.changeLanguage(code)}
                            >
                                {name}
                            </button>
                        </li>
                    ))}
                </ul>

        </div>
    )
}

export default Header;