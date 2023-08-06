import { useState } from "react"
import React from 'react'
import { useRecoilState } from "recoil"
import { todoListState } from "../recoil/atom"
import './TodoItem.css'

type Props = {
    todo: {
        id: number,
        text: string,
        isCompleted: boolean
    }
}

const TodoItem = (props: Props) => {

 
 const [items, setItems] = useRecoilState(todoListState)
 
 const handleToggle = () => {
   
        // var styleItem = document.getElementById("item") as HTMLElement;
        // items.map((item)=> item.isCompleted === false ? styleItem.style.textDecoration = 'line-through' : styleItem.style.textDecoration = 'none' )
         
        const updatedList = items.map((item) =>
        item.id === props.todo.id ? { ...item, isCompleted: !item.isCompleted } : item
      );
        setItems(updatedList)
        
    }
  return (
    <div className="todos">
        <input type="checkbox" checked={props.todo.isCompleted} onChange={handleToggle}/>
        <div className={`todoItem ${props.todo.isCompleted ? 'completed' : ''}`}>
        {props.todo.text}
        </div>
    </div>
  )
}

export default TodoItem;