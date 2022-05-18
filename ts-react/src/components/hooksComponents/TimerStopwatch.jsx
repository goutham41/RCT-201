import React, { useEffect, useState } from "react";
import styles from './googletimer.css'

export const TimerStopwatch = () => {
  const [time, settime] = useState(0);
  const [timerOn, settimerOn] = useState(false);
  const [stopWatch, setstopWatch]= useState(true)
  const [start, setstart] = useState(0);
  const [end, setend] = useState(0);
  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        settime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <>
      <div>
        <button className="maintimer" onClick={() => setstopWatch(false)}>
          Timer
        </button>
        <button className="maintimer" onClick={() => setstopWatch(true)}>
          Stop Watch
        </button>
      </div>
      <div id="timerMain">
        {stopWatch ? (
          <>
            <p className="stopWatch">Stop Watch</p>
            <div>
              <span className="secc">
                {Math.floor(time / 60000) % 60 < 10
                  ? "0" + (Math.floor(time / 60000) % 60)
                  : Math.floor(time / 60000) % 60}{" "}
                :{" "}
              </span>
              <span className="secc">
                {Math.floor(time / 1000) % 60 < 10
                  ? "0" + (Math.floor(time / 1000) % 60)
                  : Math.floor(time / 1000) % 60}{" "}
                :{" "}
              </span>
              <span className="secc">
                {(time / 10) % 100 < 10
                  ? "0" + ((time / 10) % 100)
                  : (time / 10) % 100}
              </span>
            </div>

            <div>
              {!timerOn ? (
                <button className="start" onClick={() => settimerOn(true)}>
                  Start
                </button>
              ) : (
                <button className="stop" onClick={() => settimerOn(false)}>
                  Stop
                </button>
              )}
              {timerOn ? (
                <button
                  className="start"
                  onClick={() => {
                    settime(0);
                    settimerOn(false);
                  }}
                >
                  Restart
                </button>
              ) : (
                <button className="restart" onClick={() => settimerOn(true)}>
                  Resume
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <p className="stopWatch"> Timer </p>
            <input
              className="startTimer"
              type="number"
              placeholder="Start value"
              value={start}
              onChange={(e) => setstart(e.target.value)}
            />
            {`${" : "}`}
            <input
              className="startTimer"
              type="number"
              placeholder="End value"
              value={end}
              onChange={(e) => setend(e.target.value)}
            />
          </>
        )}
      </div>
    </>
  );
};