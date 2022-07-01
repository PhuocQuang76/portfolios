import React from 'react';
import { RootState } from '../../store/store';
import {useSelector, useDispatch} from "react-redux";
import { uiActions } from '../../store/slices/uiSlice';
import classes from './Confirm.module.css';
import { useTranslation } from "react-i18next";

const Confirm = () => {
    const dispatch = useDispatch();
    const status = useSelector((state:RootState) => state.ui.status);
    const messageStatus =  useSelector((state:RootState) => state.ui.message);
    const { t } = useTranslation();

    const onClose = () => {
        dispatch(uiActions.clearNotification());
    };

    return (
       <React.Fragment>
          <div className={classes.backdrop}  onClick={onClose}/>
         <div className={classes.detail_modal}>

            {status === "Success" && <h4>{t('sent_success')}</h4>}
            {status === "Success" && <p> {t('success_message')} </p>}

            {status === "Error" && <h4>{t('sent_fail')}</h4>}
            {status === "Error" && <p> {t('fail_message')}</p>}

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

export default Confirm;