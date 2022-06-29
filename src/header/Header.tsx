import React from 'react';
import classes from './Header.module.css';
import USAFlag from './usa-flag.png';
import i18next from 'i18next';
import { useTranslation } from "react-i18next";
import * as FaIcons from 'react-icons/fa';
import DropdownItem from './dropdown/DropdownItem';
import Flag from 'react-flagkit';
import { useState } from 'react';
import DropdownButton from './dropdown/DropdownButton';
import DropdownList from './dropdown/DropdownList';
import {useSelector, useDispatch} from "react-redux";
import { RootState } from '../store/store';
import { translateActions } from '../store/slices/translateSlice';

const languages = [
    {
        language_code:'en',
        country_code:'US',
        sidebar_theme:'sidebar_US',
        header_theme:'header_container_US',
        body_theme:'main_container_US',
    },
    {
        language_code:'jp',
        country_code:'JP',
        sidebar_theme:'sidebar_JP',
        header_theme:'header_container_JP',
        body_theme:'main_container_JP',
    },
]

const Header = () => {
    const dispatch = useDispatch();
    const language_code = useSelector((state:RootState) => state.translate.language_code);
    const country_code = useSelector((state:RootState) => state.translate.country_code);
    const isOpen = useSelector((state:RootState) => state.translate.isOpen);
    const header_theme = useSelector((state:RootState) => state.translate.header_theme);
    const [selectedOption, setSelectedOption] = useState(null);

    const { t } = useTranslation();
//     const onChangeLanguage = (code:string) => {
//     }

//    const changeLanguageHandler = () => {
//         setIsEnglish(!isEnglish);
//         setIsJapanese(!isJapanese);
//         console.log("isJapanese: " + isJapanese);
//         console.log("isEnglish:" + isEnglish);
//    }

    const toggleDropdownHandler = () => {
        console.log("toggle: " + isOpen);
        dispatch(translateActions.toggleDropdown());
    }

    return(
        <div className={header_theme}>
            <h1 className={classes.app_title}>{t('app_title')}</h1>

            <div className={classes.header_icon}>
                <div onClick={toggleDropdownHandler}>
                   <DropdownButton country_code={country_code}/>
                </div>

                <div>
                   { isOpen && <DropdownList /> }
                </div>
            </div>
        </div>
    )
}

export default Header;

// const Header = () => {
//     const [isEnglish, setIsEnglish] = useState(true);
//     const [isJapanese, setIsJapanese] = useState(false);
//
//     const { t } = useTranslation();
//     const onChangeLanguage = (code:string) => {
//     }
//
//     const changeLanguageHandler = () => {
//         setIsEnglish(!isEnglish);
//         setIsJapanese(!isJapanese);
//         console.log("isJapanese: " + isJapanese);
//         console.log("isEnglish:" + isEnglish);
//     }
//    return(
//         <div className={classes.header_container_US}>
//             <h1 className={classes.app_title}>{t('app_title')}</h1>
//             <div className={classes.header_icon}>
//                     <div
//
//                         onClick={changeLanguageHandler}>
//                         {isEnglish &&
//                             <Dropdown
//                                 code= "en"
//                                 country_code="US"
//                             />}
//                         {isJapanese &&
//                             <Dropdown
//                                 code= "jp"
//                                 country_code="JP"
//                             />}
//                     </div>
//
//             </div>
//         </div>
//     )
// }
//
// export default Header;





