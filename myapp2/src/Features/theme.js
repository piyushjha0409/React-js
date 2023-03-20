import { createSlice } from "@reduxjs/toolkit";

const initialState  = "" 

export const themesSlice = createSlice({
    name:"theme",
    initialState: {value: initialState},
    reducers:{
        changeColor:(state, action)=>{
           state.value = action.payload
        }
    }
})

export const {changeColor} = themesSlice.actions

export default themesSlice.reducer