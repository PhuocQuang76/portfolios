import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type closeFormObj = {
    isOpen:boolean,
}

const initialState : closeFormObj = {
    isOpen:false,
}

const closeFormSlice = createSlice({
    name:'closeForm',
    initialState,
    reducers:{
        closeForm(state : closeFormObj){
            state.isOpen = false;
        },

        openForm(state : closeFormObj){
            state.isOpen = true;

        }
    }
})

export const closeFormActions = closeFormSlice.actions;
export default closeFormSlice;
