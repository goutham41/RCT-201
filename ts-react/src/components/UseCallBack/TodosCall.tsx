import React,{useCallback, useState} from 'react'
import { Todoitem,MemoTodoItem } from './TodosItemsCall';


 export type  Todo = {
    id:number;
    title:string;
    status:boolean;
}
export const Todo = () => {
    const [text, setText] = useState("")
    const [list, setList] = useState<Todo[]>([])

    const handleTogle = (id:number)=>{
setList(list.map((elem)=>(elem.id===id ? {...elem, status:!elem.status}:elem)))
    }

    const callback = useCallback(handleTogle,[list]);

    const handleadd=()=>{
        setList([
            ...list,{
                id:Math.random(),
                title:text,
                status:false
            }
        ])
        setText(" ")
    }
  return (
    <div><h1>Todo</h1>
    <input type="text" onChange={(e)=>setText(e.target.value)} />
    <button onClick={handleadd}> add </button>

    <div>
        {list.map((item)=><MemoTodoItem key={item.id} {...item}   handleTogle={callback}/>)}
    </div>
    </div>
  )
}