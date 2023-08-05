import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListState } from '../recoil/atom'

type Props = {}

const TodoList = (props: Props) => {

const todoList = useRecoilValue(todoListState)

    return (
    <div>TodoList</div>
  )
}

export default TodoList;