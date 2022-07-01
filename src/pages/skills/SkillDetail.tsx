
import classes from "./SkillDetail.module.css";
import React from 'react';
import { useTranslation } from "react-i18next";
import {useSelector, useDispatch} from "react-redux";
import { closeFormActions } from '../../store/slices/closeFormSlice';
import { uiActions } from '../../store/slices/uiSlice';
import { RootState } from '../../store/store';

const SkillDetail:React.FC= () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const id = useSelector((state:RootState) => state.skillSet.id);
    const techName = useSelector((state:RootState) => state.skillSet.techName);

    const detail = 'skill_detail_' + techName;
    console.log("skill:" + detail);
    console.log("Tech: " + techName);
    const onClose = () => {
        dispatch(closeFormActions.closeForm());
        dispatch(uiActions.clearNotification());
    };

    return(
        <React.Fragment>
            <div className={classes.backdrop}  onClick={onClose}/>
                <div className={classes.detail_modal}>
                    <h4>{techName} {t('skills_page')}: </h4>
                    <textarea>{t(`${detail}`)}</textarea>
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