import React from 'react'
import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"user",
    initialState: { value: {name: "", age: 0, email:" "} },
    reducers: {
        
    }

})
const user = () => {
  return (
    <div>user</div>
  )
}

export default user