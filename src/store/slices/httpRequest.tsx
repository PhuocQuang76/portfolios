import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { RootState } from '../store';
import { uiActions } from "./uiSlice";
import {useDispatch} from "react-redux";
import { Dispatch } from "redux"


type FormData = {
    name:string,
    email:string,
    message:string,
}

export const sendFormData = (formData:FormData) => {

    return async (dispatch:Dispatch<any>): Promise<void>  => {
        const sendRequest = async() => {
            const response = await fetch('https://react-http-f69a0-default-rtdb.firebaseio.com/pofolio.json',{
                method: 'POST',
                body:JSON.stringify(formData),
                headers:{
                    'Content-Type': 'application/json'
                },
            });

            if(!response.ok){
                throw new Error("Sending form is failed !")
            }
        };

        try{
            await sendRequest ();
            dispatch(uiActions.showNotification({
                status: '',
                title: '',
                message: '',
            }))
        }catch(error){
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!',
            }))
        }


    }
}

