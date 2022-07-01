// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { RootState } from '../store';
//
//
// type InitialType = {
//     status : string,
//     title : string,
//     message : string,
// }
//
// const initialState : InitialType = {
//     status : "",
//     title : "",
//     message : "",
// }
//
// const uiSlice = createSlice({
//     name:'ui',
//     initialState:initialState,
//     reducers:{
//         showNotification(state:InitialType,action:PayloadAction<InitialType> ){
//             state.status = action.payload.status,
//         },
//
//     },
// });
//
// export const uiActions = uiSlice.actions;
// export default uiSlice;


import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UiSliceType = {
    status : string,
    title : string,
    message : string,
}

type InitialType = {
    status : string,
    title : string,
    message : string,
    isSend : boolean;
}

const initialState: InitialType = {
    status : "",
    title : "",
    message : "",
    isSend : false,
}

const uiSlice = createSlice({
    name:'ui',
    initialState,
    reducers:{
        showNotification(state : InitialType,action:PayloadAction<UiSliceType>){
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.isSend = true;
        },
        clearNotification(state:InitialType){
            state.status = '';
            state.message = '';
            state.isSend = false;

        },
    }
})

export const uiActions= uiSlice.actions;
export default uiSlice;
