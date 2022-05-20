import React,{useState,useMemo} from 'react'

const Fibonacci = () => {
    const [text ,setText]=useState("");
    const fibo = (n:number): number =>{
        if(n<=1){
            return n
        }
        return fibo(n-1)+fibo(n-2);
    }
    const memoisedFibo = useMemo(()=>{
        return fibo(Number(text))
    },[text])

    const calcFibo = ()=>{
        console.time("t1");
        console.log("nth Fibo", memoisedFibo)
        console.timeEnd("t1")
    }
  return (
    <>
    <input type="text" onChange={(e) =>setText(e.target.value)} />
     <button onClick={calcFibo}>Calculate</button>
    </>
  )
}

export default Fibonacci