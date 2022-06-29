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

type uiSliceObj = {
    status : string,
    title : string,
    message : string,
}

const initialState: uiSliceObj = {
    status : "",
    title : "",
    message : "",
}

const uiSlice = createSlice({
    name:'ui',
    initialState,
    reducers:{
        showNotification(state : uiSliceObj,action:PayloadAction<uiSliceObj>){
            state.status = action.payload.status;
            state.message = action.payload.message;
        },
        clearNotification(state:uiSliceObj){
            state.status = '';
            state.message = '';
        },
    }
})

export const uiActions= uiSlice.actions;
export default uiSlice;
