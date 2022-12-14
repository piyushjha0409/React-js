import React, {createContext} from 'react'
import { LastName } from '../../App'

const ComponentC = () => {
  return (
    <>
    <LastName.Consumer>
        {(LName) =>{
            return <h1>My name is {LName}</h1>
        }}
    </LastName.Consumer>
    </>
  )
}

export default ComponentC