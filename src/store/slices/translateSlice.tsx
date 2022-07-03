import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type TranslateAction = {
    language_code:string,
    country_code:string,
    sidebar_theme:string,
    header_theme:string,
    body_theme:string,
}

type TranslateObj = {
    language_code:string,
    country_code:string,
    sidebar_theme:string,
    header_theme:string,
    body_theme:string,
    isOpen:boolean,
}
//
const languageGet = window.localStorage.getItem('language');
let initialState: TranslateObj;

if(languageGet === "JP"){
   initialState = {
           language_code:'jp',
           country_code:'JP',
           sidebar_theme:'sidebar_JP',
           header_theme:'header_container_JP',
           body_theme:'main_container_JP',
           isOpen:false,
      }
}else{
   initialState = {
           language_code:'en',
           country_code:'US',
           sidebar_theme:'sidebar_US',
           header_theme:'header_container_US',
           body_theme:'main_container_US',
           isOpen:false,
       }
}

const translateSlice = createSlice({
    name:'translate',
    initialState,
    reducers:{
        changeLanguage(
            state : TranslateObj,
            action : PayloadAction<TranslateAction>,
        ){
            state.isOpen = !state.isOpen;
            state.language_code = action.payload.language_code;
            state.country_code = action.payload.country_code;
            state.sidebar_theme = action.payload.sidebar_theme;
            state.header_theme = action.payload.header_theme;
            state.body_theme= action.payload.body_theme;

            window.localStorage.setItem('language',state.language_code );
        },
        toggleDropdown(state){
            state.isOpen = !state.isOpen;
        }
    }
})

export const translateActions = translateSlice.actions;
export default translateSlice;
