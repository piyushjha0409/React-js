import React from 'react'
import GuestGreetings from './GuestGreetings';
import UserGreetings from './UserGreetings';
const Greetings = (props) => {
  const isLoggedIn = props.isLoggedIn;

  if(isLoggedIn){
    return <UserGreetings />
  }else{
    return <GuestGreetings />
  }
}

export default Greetings