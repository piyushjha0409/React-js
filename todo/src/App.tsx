import React from "react"
import { useState } from "react"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"

const App: React.FC = () => {
  return (
   <div>
    <h1 style={{display:"flex", justifyContent:"center"}}>Todo app using Recoiljs</h1>
    <div className="components">
    <TodoList />
    <AddTodo />
    </div>
   </div>

  )
}

export default App;