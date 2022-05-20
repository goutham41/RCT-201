import React, { useEffect } from 'react'
import {v4 as uuid} from 'uuid'
import axios,{AxiosResponse} from 'axios';
   type TodoType = {
     id: string;
     title: string;
     status: boolean;
   };
const TodosMemo = () => {
    const [text,setText] = React.useState("")
    const [todos, setTodos] = React.useState<TodoType[]>([]);
   
    const getData = ()=>{
        axios.get("http://localhost:8000/todos")
        .then((response:AxiosResponse<TodoType[]>)=>{
            const {data} = response;
            setTodos(data)
        })
    }
     useEffect(() => {
       getData();
     }, []);
  return (
    <div>
      <h1>Todos</h1>
      <input value={text} onChange={(e)=> setText(e.target.value)} />
       <button  
        onClick={()=>{
            const payload ={
                id:uuid(),
                title:text,
                status:false
            }
             axios.post("http://localhost:8000/todos", payload);
            setTodos([...todos,payload]);
            setText("");
            
        }}
       >Add Todo</button>
       {todos.map((t)=>(
               <div key={t.id}>{t.title} - {t.status ? "Done" : "Not Done"}</div>
           ))}
    </div>
  );
}

export default TodosMemo;