
import classes from "../contact/Contact.module.css";
import {PersonContactData} from "../../data/PersonContactData";
import { useTranslation } from "react-i18next";
import Card from "../../ui/Card";
import {useState} from 'react';
import useInput from "../../hooks/use-input";
import Confirm from "./Confirm";
import { RootState } from '../../store/store';
import {useDispatch, useSelector} from "react-redux";
import { uiActions } from '../../store/slices/uiSlice';
import RestClient from './RestClient';

const Contact:React.FC = () => {
    const dispatch = useDispatch();
    const [enteredMessage, setEnteredMessage] = useState("");
    const isSend = useSelector((state:RootState) => state.ui.isSend);

    const emailRegex = /\S+@\S+\.\S+/;
    const {t} = useTranslation();
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        reset: resetName,
        valueChangeHandler: nameInputChangeHandler,
        valueBlurHandler: nameInputBlurHandler,

    } = useInput((value:string) => value.trim() !== "");

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        reset: resetEmail,
        valueChangeHandler: emailInputChangeHandler,
        valueBlurHandler: emailInputBlurHandler,

    } = useInput((value:string) => emailRegex.test(value));

    const onSubmitHandler = async (event:React.FormEvent) => {
        event.preventDefault();
        if(!enteredNameIsValid || !enteredEmailIsValid ){
            return
        }

        const formData = {
            name:enteredName,
            email:enteredEmail,
            message:enteredMessage,
        }

        const sendFormDataResponse = await RestClient.sendFormData(formData);

        if(sendFormDataResponse){
            dispatch(uiActions.showNotification({
                status:'Success',
                title: 'success',
                message: 'Thank you very much for your message.I will contact you soon!',
            }));
        }else{
             dispatch(uiActions.showNotification({
                status:'Error',
                title: 'Error',
                message:'Sending form data failed!',
            }));
        }

        resetName();
        resetEmail();
        setEnteredMessage("");

    }

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const nameInputClasses = nameInputHasError
    ? 'form-control invalid' : 'form-control';

    const emailInputClasses = emailInputHasError
        ? 'form-control invalid' : 'form-control';

    return(
            <div className={classes.content}>
                {isSend && <Confirm />}
                 <h2>{t('contact_page')}</h2>
                 <Card>
                     <div className={classes.control_group}>
                         <h4>{t('contact_info')}:</h4>
                         <div className={classes.p_group}>
                             <p><span>{t('full_name')}</span>: {PersonContactData.name}</p>
                             <p><span>{t('email')}</span>: {PersonContactData.email}</p>

                         </div>

                     </div>
                 </Card>

                 <Card>
                     <div className={classes.control_group}>
                        <h4>{t('email_me')}:</h4>
                        <form onSubmit={onSubmitHandler}>
                            <div className={classes.p_group}>
                                <div className= {emailInputClasses} >
                                    <label htmlFor='name'>{t('name')}</label>
                                    <input
                                        type='text'
                                        id='name'
                                        onChange={nameInputChangeHandler}
                                        onBlur={nameInputBlurHandler}
                                        value={enteredName}
                                    />
                                    {nameInputHasError && <p className='error-text'>Name must not be empty!</p>}
                                </div>

                                <div className= {emailInputClasses}>
                                     <label htmlFor='email'>{t('email')}</label>
                                     <input

                                        type='text'
                                        id='email'
                                        onChange={emailInputChangeHandler}
                                        onBlur={emailInputBlurHandler}
                                        value={enteredEmail}
                                     />
                                     {emailInputHasError && <p className='error-text'>Email must not be empty!</p>}
                                 </div>

                                  <div >
                                     <label htmlFor='description'>{t('message')}</label>
                                      <textarea
                                         id="description"
                                         name="description"
                                         value={enteredMessage}
                                         onChange={e => setEnteredMessage(e.target.value)}
                                      ></textarea>
                                 </div>

                                <div className={classes.actions}>
                                    <button disabled={!formIsValid} >{t('submit')}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Card>
            </div>
    )
}

export default Contact;