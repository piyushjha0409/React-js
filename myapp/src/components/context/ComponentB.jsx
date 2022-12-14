import React, {createContext} from 'react'
import { LastName } from '../../App'
import ComponentC from './ComponentC'

const ComponentB = () => {
  return (
    <LastName.Consumer>
        {(SisName) =>{
            return <h1>I am bhai of my {SisName}</h1>
        }}
    </LastName.Consumer>
  )
}

export default ComponentB