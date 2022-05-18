import React, { useState } from 'react'
import useStopwatch from '../Hooks/useStopwatch'
import styles from "./googletimer.css";

const Stopwatch = () => {
    const {milisecond,reset,stop,start} = useStopwatch(0)
    const [off,setOff] = useState(false)
    return (
      <>
        <div style={{height:"180px",padding:"20px 10px",width:"25%",margin:"auto",justifyContent:"center",backgroundColor:"#fff",marginTop:"50px"}}>
          <h2>{milisecond}</h2>
          <button
            className="start"
            onClick={() => {
              start();
              setOff(true);
            }}
            off={off ? true : false}
          >
            Start
          </button>
          <button
            className="stop"
            onClick={() => {
              stop();
              setOff(false);
            }}
          >
            Stop
          </button>
          <button className="restart" onClick={() => reset()}>
            Reset
          </button>
        </div>
      </>
    );
}

export default Stopwatch
