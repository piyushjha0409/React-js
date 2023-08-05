import React, {useState} from 'react'
import { todoListState } from '../recoil/atom'
import { useRecoilValue, useSetRecoilState, } from 'recoil'
type Props = {}

const AddTodo = (props: Props) => {

    const [Inputvalue, setInputValue] = useState("");
    const setTodoList = useSetRecoilState(todoListState);  //useSetRecoilState is the setter function 

    //function for handling the todo 
    const handleAddTodo = () => {
          if(Inputvalue){
            setTodoList((oldTodo)=> [
                ...oldTodo,
                {id: Date.now(), text: Inputvalue, isCompleted: false}
            ]);
            setInputValue(' ')
          }
    }

  return (
    <div>
        <input type='text' placeholder='Enter the task' value={Inputvalue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={handleAddTodo}>Add</button>
    </div>
  )
}

export default AddTodo