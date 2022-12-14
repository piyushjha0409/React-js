import React, {createContext} from 'react'
import ComponentB from './ComponentB'
import { LastName } from '../../App'

const ComponentA = () => {
  return (
    <>
    <LastName.Provider value={"didi"}>
      <ComponentB />
    </LastName.Provider>
    </>
  )
}

export default ComponentA