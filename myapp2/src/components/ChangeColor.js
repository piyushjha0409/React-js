import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { changeColor } from '../Features/theme'

const ChangeColor = () => {

const dispatch = useDispatch()
const [color, setColor] =  useState("") //initializing as the empty string

  return (
    <div>
        <input type="text" onChange={(event)=>{setColor(event.target.value)}}/>
        <button onClick={()=>{dispatch(changeColor(color))}}>Change Color</button>
    </div>
  )
}

export default ChangeColor