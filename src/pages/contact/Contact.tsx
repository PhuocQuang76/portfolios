import React from "react";
import classes from "../contact/Contact.module.css";
import {PersonContactData} from "../../data/PersonContactData";
import { useTranslation } from "react-i18next";
import Card from "../../ui/Card";
import {useRef, useEffect, useState} from 'react';

const Contact = () => {
    const emailRegex = /\S+@\S+\.\S+/;

    const [enterName, setEnterName] = useState("");
    const [enterEmail, setEnterEmail] = useState("");
    const [enterMessage, setEnterMessage] = useState("");

    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
    const [enteredMessageTouched, setEnteredMessageTouched] = useState(false);
    const { t } = useTranslation();

    const enteredNameIsValid = enterName.trim() !=="";
    const enteredEmailIsValid = emailRegex.test(enterEmail);
    const enteredMessageIsValid = enterMessage.trim() !=="";

    let formIsValid = false;
    if(enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid){
        formIsValid = true;
    }
     const onSubmitHandler = (event:React.FormEvent) => {
        event.preventDefault();
        setEnteredNameTouched(true);
        setEnteredEmailTouched(true);
        setEnteredMessageTouched(true);

        if(!enteredNameIsValid || !enteredEmailIsValid || !enteredMessageIsValid){
            return
        }
        setEnterName('');
        setEnterEmail('');
        setEnterMessage('');
        setEnteredNameTouched(false);
        setEnteredEmailTouched(false);
        setEnteredMessageTouched(false);

     }


     const nameInputChangeHandler = (event:any)=> {
        setEnterName(event.target.value);

     }
     const nameInputBlurHandler = () => {
        setEnteredNameTouched(true);
     }

      const messageInputChangeHandler = (event:any)=> {
         setEnterMessage(event.target.value);

      }
      const messageInputBlurHandler = () => {
         setEnteredMessageTouched(true);
      }

      const emailInputChangeHandler = (event:any)=> {
         setEnterEmail(event.target.value);

      }
      const emailInputBlurHandler = () => {
         setEnteredEmailTouched(true);
      }

     const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
     const nameInputClasses = nameInputIsInvalid
         ? 'invalid'
         : 'form-control';

      const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
      const emailInputClasses = emailInputIsInvalid
          ? 'invalid'
          : 'form-control';

      const messageInputIsInvalid = !enteredMessageIsValid && enteredMessageTouched;
      const messageInputClasses = messageInputIsInvalid
          ? 'invalid'
          : 'form-control';


    return (
        <div className={classes.content}>
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
                            <div className= {nameInputClasses} >
                                <label htmlFor='name'>{t('name')}</label>
                                <input
                                    type='text'
                                    id='name'
                                    onChange={nameInputChangeHandler}
                                    onBlur={nameInputBlurHandler}
                                    value={enterName}
                                />
                                {nameInputIsInvalid && <p className='error-text'>Name must not be empty!</p>}
                            </div>

                            <div className= {emailInputClasses}>
                                 <label htmlFor='email'>{t('email')}</label>
                                 <input
                                    type='text'
                                    id='email'
                                    onChange={emailInputChangeHandler}
                                    onBlur={emailInputBlurHandler}
                                    value={enterEmail}
                                 />
                                 {emailInputIsInvalid && <p className='error-text'>Email must not be empty!</p>}
                             </div>

                             <div className= {messageInputClasses}>
                                 <label htmlFor='description'>{t('message')}</label>
                                 <textarea
                                    id='description'
                                    required
                                    onChange={messageInputChangeHandler}
                                    onBlur={messageInputBlurHandler}
                                    value={enterMessage}
                                 ></textarea>
                                 {messageInputIsInvalid && <p className='error-text'>Message must not be empty!</p>}
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
//  <div className={classes.control}>
//                                 <label htmlFor='last'>Last Name</label>
//                                 <input
//                                     type='text'
//                                     id='last'
//                                 />
//                             </div>
//
//                             <div className={classes.control}>
//                                 <label htmlFor='email'>E-Mail</label>
//                                 <input
//                                     type='text'
//                                     id='email'
//                                 />
//
//                             </div>
//
//                             <div>
//                                 <label htmlFor='description'>Message</label>
//                                 <textarea
//                                     id='description'
//                                     required
//
//                                 ></textarea>
//                             </div>