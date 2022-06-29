import React from 'react';
import { RootState } from '../../store/store';
import {useSelector, useDispatch} from "react-redux";
import { closeFormActions } from '../../store/slices/closeFormSlice';
import classes from './Confirm.module.css';

const Confirm = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state:RootState) => state.closeForm.isOpen);
    const status = useSelector((state:RootState) => state.ui.status);


    const onClose = () => {

        dispatch(closeFormActions.closeForm());
    };

    return (
       <React.Fragment>
          <div className={classes.backdrop}  onClick={onClose}/>

         {status != "" &&
         <div className={classes.detail_modal}>

            <h1>{status}</h1>
            <h4> Submitted. Thank you very much ! </h4>

            <div className={classes.detail_modal__actions}>
               <button
                 type="button"
                    onClick={onClose}
                 >
                    close
               </button>
            </div>
         </div>
             }
       </React.Fragment>
    )
}

export default Confirm;