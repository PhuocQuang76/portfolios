import classes from "./DropdownList.module.css";
import USAFlag from './usa-flag.png';
import i18next from 'i18next';
import { useTranslation } from "react-i18next";
import * as FaIcons from 'react-icons/fa';
import DropdownButton from './DropdownButton';
import Flag from 'react-flagkit';
import DropdownItem from './DropdownItem';
import {useSelector, useDispatch} from "react-redux";
import { RootState } from '../../store/store';
import { translateActions } from '../../store/slices/translateSlice';


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
const DropdownList = () => {
    const dispatch = useDispatch();
    const language_code = useSelector((state:RootState) => state.translate.language_code);
    const country_code = useSelector((state:RootState) => state.translate.country_code);
    const isOpen = useSelector((state:RootState) => state.translate.isOpen);

//     const changeLanguageHandler = () => {
//         dispatch(
//             translateActions.changeLanguage({
//
//             })
//         );
//     }
    return(
        <div className={classes.content}>
            {languages.map((language) => (
                    <div key={language.country_code}>
                        <DropdownItem

                            language_code = {language.language_code}
                            country_code = {language.country_code}
                            sidebar_theme = {language.sidebar_theme}
                            header_theme = {language.header_theme}
                            body_theme = {language.body_theme}
                        />
                    </div>
                )
            )}
        </div>
    )
}

export default DropdownList;