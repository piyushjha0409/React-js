import { atom } from "recoil";

export interface Todo {
    id: number,
    text: string,
    isCompleted: boolean
}

export const todoListState = atom<Todo[]>({
    key: "TodoList",
    default:[]
})

