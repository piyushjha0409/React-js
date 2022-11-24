import React from 'react'
import GuestGreetings from './GuestGreetings';
import userGreetings from './userGreetings';
const Greetings = (props) => {
  const isLoggedIn = props.isLoggedIn;

  if(isLoggedIn){
    return <userGreetings />
  }else{
    return <GuestGreetings />
  }
}

export default Greetings