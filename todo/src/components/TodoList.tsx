import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListState } from '../recoil/atom'
import TodoItem from './TodoItem'
import "./TodoList.css"

type Props = {}

const TodoList = (props: Props) => {

const todoList = useRecoilValue(todoListState)

    return (
    <div className='list'>
    <ul>
      {todoList.map((todo)=> (
        <TodoItem key={todo.id} todo={todo}/>
      ))}
    </ul>
    </div>

    
  ) 
}

export default TodoList;

