import React,{useState} from 'react'

type CounterProps = {
    init?:number
}
const Counter = (props:CounterProps) => {
    const {init = 5} = props   
    const [Counter,setCounter] = useState(init)
    return (
      <div>
        <h3>counter: {Counter}</h3>
        <button onClick={()=>setCounter(Counter + 1)}>Add</button>
      </div>
    );
}

export default Counter