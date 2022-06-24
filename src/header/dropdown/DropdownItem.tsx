
import React from 'react';
import classes from './Dropdown.module.css';
import Flag from 'react-flagkit';
import { IconContext } from 'react-icons';
import i18next from 'i18next';
import { translateActions } from '../../store/slices/translateSlice';
import {useSelector, useDispatch} from "react-redux";

const DropdownItem:React.FC<{
        country_code:string,
        language_code:string,
        sidebar_theme:string,
        header_theme:string,
        body_theme:string,
    }> = (props) => {

    const dispatch = useDispatch();
    const {country_code,language_code,sidebar_theme,header_theme,body_theme} = props;

    const changeLanguageHandler = () => {
        dispatch(
            translateActions.changeLanguage({
                country_code:country_code,
                language_code:country_code,
                sidebar_theme:sidebar_theme,
                header_theme:header_theme,
                body_theme:body_theme,
            })
        );
    }
    return (
        <div>
            <div onClick={changeLanguageHandler}>
                <Flag country={props.country_code} onClick={()=>i18next.changeLanguage(props.language_code)}/>
            </div>
        </div>
    )
}
export default DropdownItem;