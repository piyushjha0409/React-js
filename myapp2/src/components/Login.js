import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from "../Features/user"

const Login = () => {

  const dispatch = useDispatch()

  return (
    <div>

        <button onClick={()=> {dispatch(login({ name: "Piyush Jha", age: 20, email:"peeyush0409@gmail.com"}))}}>
          Login
        </button>
        <br></br>
        <button onClick={()=> {dispatch(logout())}}>
          Logout
        </button>
    </div>
  )
}

export default Login