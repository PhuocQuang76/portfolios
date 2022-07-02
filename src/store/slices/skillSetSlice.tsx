

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type skillType = {
    id : number,
    techName : string,
    level : string,
    detail : string,
}

const initialState : skillType = {
    id:0,
    techName: "",
    level: "",
    detail: "",
}

const skillSetSlice = createSlice({
    name:'skillSet',
    initialState,
    reducers:{
        setSkillSet(
            state : skillType,
            action : PayloadAction<skillType>,
        ){

            state.id = action.payload.id;
            state.techName = action.payload.techName;
            state.level = action.payload.level;
            state.detail = action.payload.detail;

        },
        setInitial(state : skillType){
            state.id = 0;
            state.techName = "";
            state.level = "";
            state.detail = "";
        }
    }
})

export const skillSetActions = skillSetSlice.actions;
export default skillSetSlice;
