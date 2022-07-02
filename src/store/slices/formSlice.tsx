import { createSlice} from '@reduxjs/toolkit';

type InitialType = {
    isOpen:boolean,
}

const initialState : InitialType = {
    isOpen:false,
}

const formSlice = createSlice({
    name:'closeForm',
    initialState,
    reducers:{
        closeForm(state : InitialType){
            state.isOpen = false;
        },

        openForm(state : InitialType){
            state.isOpen = true;
        }
    }
})

export const formActions = formSlice.actions;
export default formSlice;
