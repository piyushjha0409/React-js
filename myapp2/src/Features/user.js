import React from 'react'
import {createSlice} from "@reduxjs/toolkit"

const initialState = {name:"", age:0, email:""}

export const userSlice = createSlice({
    name:"user",
    initialState: { value: initialState },
    reducers: {
        login: (state, action)=>{
          state.value = action.payload
        },

        logout:(state)=>{
          state.value = initialState
        }
    },
   
})

export const { login , logout } = userSlice.actions;


//wanna access this reducer in our index.js
export default userSlice.reducer