
import classes from "./SkillDetail.module.css";
import React from 'react';
import { useTranslation } from "react-i18next";
import {useSelector, useDispatch} from "react-redux";
import { closeFormActions } from '../../store/slices/closeFormSlice';
import { uiActions } from '../../store/slices/uiSlice';

const SkillDetail:React.FC<{techName:string,detail:string}>= (props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(closeFormActions.closeForm());
        dispatch(uiActions.clearNotification());
    };

    return(
        <React.Fragment>
            <div className={classes.backdrop}  onClick={onClose}/>
                <div className={classes.detail_modal}>
                    <h4>{props.techName} {t('skills_page')}: </h4>
                    <p>{t(props.detail)}</p>
                    <div className={classes.detail_modal__actions}>
                        <button
                            type="button"
                            onClick={onClose}
                         >
                            close
                        </button>
                    </div>
                </div>

        </React.Fragment>

    )
}

export default SkillDetail;