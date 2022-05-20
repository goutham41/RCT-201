import React, { memo } from "react";
import { Todo } from "./TodosCall";

type TodoTogle = {
  handleTogle: (s: number) => void;
};

export const Todoitem = (props: Todo & TodoTogle) => {
  console.log("Rendering todoitem", props.title);

  const handleStatus = () => {
    props.handleTogle(props.id);
  };

  return (
    <div style={{display:"flex",justifyContent:"space-around",width:"30%",height:"30px",margin:"auto"}}>
      <p>
        {props.title} - {props.status ? "Done" : "Not done"}
      </p>
      <button style={{marginTop:"10px"}} onClick={handleStatus}>Toggle</button>
    </div>
  );
};

export const MemoTodoItem = memo(Todoitem);
