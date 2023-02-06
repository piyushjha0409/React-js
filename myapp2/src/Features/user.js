import React from 'react'
import {createSlice} from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name:"user",
    initialState: { value: {name: "Piyush", age: 0, email:""} },
    reducers: {
        login: (state, action)=>{
          state.value = action.payload
        },
    },
   
})
//wanna access this reducer in our index.js
export default userSlice.reducer