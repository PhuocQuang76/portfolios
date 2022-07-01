import React, { Fragment } from 'react';
import classes from "../contact/Contact.module.css";
import {PersonContactData} from "../../data/PersonContactData";
import { useTranslation } from "react-i18next";
import Card from "../../ui/Card";
import {useRef, useEffect, useState} from 'react';
import useInput from "../../hooks/use-input";
import Confirm from "./Confirm";
import { sendFormData } from "../../store/slices/httpRequest";
import { RootState } from '../../store/store';
import {useDispatch, useSelector} from "react-redux";
import { closeFormActions } from '../../store/slices/closeFormSlice';
import { uiActions } from '../../store/slices/uiSlice';

const Contact:React.FC = () => {
    const dispatch = useDispatch();
    const [enteredMessage, setEnteredMessage] = useState("");
    const isSend = useSelector((state:RootState) => state.ui.isSend);
//     const status = useSelector((state:RootState) => state.ui.status);
//     const messageStatus =  useSelector((state:RootState) => state.ui.message);
//     const messageInputRef = useRef<HTMLTextAreaElement>(null);
//     const enteredMessage = messageInputRef.current!.value;


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

//     const {
//         value: enteredMessage,
//         isValid: enteredMessageIsValid,
//         hasError: messageInputHasError,
//         reset: resetMessage,
// //         valueChangeHandler: messageInputChangeHandler,
//         valueBlurHandler: messageInputBlurHandler,
//     } = useInput((value:string) => value.trim() !== "");

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        reset: resetEmail,
        valueChangeHandler: emailInputChangeHandler,
        valueBlurHandler: emailInputBlurHandler,

    } = useInput((value:string) => emailRegex.test(value));


    const onSubmitHandler = (event:React.FormEvent) => {
        event.preventDefault();
//         if(!enteredNameIsValid || !enteredEmailIsValid || !enteredMessageIsValid){
//             return
//         }
        if(!enteredNameIsValid || !enteredEmailIsValid ){
            return
        }



        const formData = {
            name:enteredName,
            email:enteredEmail,
            message:enteredMessage,
        }

        dispatch(sendFormData(formData));


        resetName();
        resetEmail();
        setEnteredMessage("");

        console.log("isSend: " + isSend);
    }

    let formIsValid = false;
//     if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
//         formIsValid = true;
//     }
    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const nameInputClasses = nameInputHasError
    ? 'form-control invalid' : 'form-control';

    const emailInputClasses = emailInputHasError
        ? 'form-control invalid' : 'form-control';

//     const messageInputClasses = messageInputHasError
//         ? 'form-control invalid' : 'form-control';

    return(
            <div className={classes.content}>
                {isSend && <Confirm />}
                 <h2>{t('contact_page')}</h2>
                 <Card>

                     <div className={classes.control_group}>

                         <h4>{t('contact_info')}:</h4>
                         <div className={classes.p_group}>
                             <p><span>{t('full_name')}</span>: {PersonContactData.name}</p>
                             <p><span>{t('address')}</span>: {PersonContactData.address}</p>
                             <p><span>{t('phone_number')}</span>:{PersonContactData.phone} </p>
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


//
//   const emailRegex = /\S+@\S+\.\S+/;
//
//     const [enterName, setEnterName] = useState("");
//     const [enterEmail, setEnterEmail] = useState("");
//     const [enterMessage, setEnterMessage] = useState("");
//
//     const [enteredNameTouched, setEnteredNameTouched] = useState(false);
//     const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
//     const [enteredMessageTouched, setEnteredMessageTouched] = useState(false);
//     const { t } = useTranslation();
//
//     const enteredNameIsValid = enterName.trim() !=="";
//     const enteredEmailIsValid = emailRegex.test(enterEmail);
//     const enteredMessageIsValid = enterMessage.trim() !=="";
//
//     let formIsValid = false;
//     if(enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid){
//         formIsValid = true;
//     }
//      const onSubmitHandler = (event:React.FormEvent) => {
//         event.preventDefault();
//         setEnteredNameTouched(true);
//         setEnteredEmailTouched(true);
//         setEnteredMessageTouched(true);
//
//         if(!enteredNameIsValid || !enteredEmailIsValid || !enteredMessageIsValid){
//             return
//         }
//         setEnterName('');
//         setEnterEmail('');
//         setEnterMessage('');
//         setEnteredNameTouched(false);
//         setEnteredEmailTouched(false);
//         setEnteredMessageTouched(false);
//
//      }
//
//
//      const nameInputChangeHandler = (event:any)=> {
//         setEnterName(event.target.value);
//
//      }
//      const nameInputBlurHandler = () => {
//         setEnteredNameTouched(true);
//      }
//
//       const messageInputChangeHandler = (event:any)=> {
//          setEnterMessage(event.target.value);
//
//       }
//       const messageInputBlurHandler = () => {
//          setEnteredMessageTouched(true);
//       }
//
//       const emailInputChangeHandler = (event:any)=> {
//          setEnterEmail(event.target.value);
//
//       }
//       const emailInputBlurHandler = () => {
//          setEnteredEmailTouched(true);
//       }
//
//      const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
//      const nameInputClasses = nameInputIsInvalid
//          ? 'invalid'
//          : 'form-control';
//
//       const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
//       const emailInputClasses = emailInputIsInvalid
//           ? 'invalid'
//           : 'form-control';
//
//       const messageInputIsInvalid = !enteredMessageIsValid && enteredMessageTouched;
//       const messageInputClasses = messageInputIsInvalid
//           ? 'invalid'
//           : 'form-control';
//
//
//     return (
//         <div className={classes.content}>
//             <h2>{t('contact_page')}</h2>
//              <Card>
//                  <div className={classes.control_group}>
//                      <h4>{t('contact_info')}:</h4>
//                      <div className={classes.p_group}>
//                          <p><span>{t('full_name')}</span>: {PersonContactData.name}</p>
//                          <p><span>{t('address')}</span>: {PersonContactData.address}</p>
//                          <p><span>{t('phone_number')}</span>:{PersonContactData.phone} </p>
//                      </div>
//
//                  </div>
//              </Card>
//
//              <Card>
//                  <div className={classes.control_group}>
//                     <h4>{t('email_me')}:</h4>
//                     <form onSubmit={onSubmitHandler}>
//                         <div className={classes.p_group}>
//                             <div className= {nameInputClasses} >
//                                 <label htmlFor='name'>{t('name')}</label>
//                                 <input
//                                     type='text'
//                                     id='name'
//                                     onChange={nameInputChangeHandler}
//                                     onBlur={nameInputBlurHandler}
//                                     value={enterName}
//                                 />
//                                 {nameInputIsInvalid && <p className='error-text'>Name must not be empty!</p>}
//                             </div>
//
//                             <div className= {emailInputClasses}>
//                                  <label htmlFor='email'>{t('email')}</label>
//                                  <input
//                                     type='text'
//                                     id='email'
//                                     onChange={emailInputChangeHandler}
//                                     onBlur={emailInputBlurHandler}
//                                     value={enterEmail}
//                                  />
//                                  {emailInputIsInvalid && <p className='error-text'>Email must not be empty!</p>}
//                              </div>
//
//                              <div className= {messageInputClasses}>
//                                  <label htmlFor='description'>{t('message')}</label>
//                                  <textarea
//                                     id='description'
//                                     required
//                                     onChange={messageInputChangeHandler}
//                                     onBlur={messageInputBlurHandler}
//                                     value={enterMessage}
//                                  ></textarea>
//                                  {messageInputIsInvalid && <p className='error-text'>Message must not be empty!</p>}
//                             </div>
//
//                             <div className={classes.actions}>
//                                 <button disabled={!formIsValid} >{t('submit')}</button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//
//             </Card>
//         </div>
//         )