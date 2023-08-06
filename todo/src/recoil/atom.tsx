import { atom, selector} from "recoil";

export interface Todo {
    id: number,
    text: string,
    isCompleted: boolean
}

export const todoListState = atom<Todo[]>({
    key: "TodoList",
    default:[]
})

export const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'ALL'
})
