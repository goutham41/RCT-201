import React from 'react'
import { Post } from "./VerifyPost";


type onClick = {
  handleToggle: (id: number) => void;
};

const Singletodo = (Props: Post & onClick) => {
  const [color, setColor] = React.useState("");

  const [loading, setLoading] = React.useState(false);

  const colorHandler = () => {
    let r = Math.floor(Math.random() * 205);
    let g = Math.floor(Math.random() * 205);
    let b = Math.floor(Math.random() * 205);
    return `rgb(${r},${g},${b})`;
  };

  const MemoColor = React.useMemo(colorHandler, [Props.verify]);

  const timerFunc = () => {
    let timer = setTimeout(() => {
      setColor(MemoColor);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  };

  const callback = React.useCallback(timerFunc, [MemoColor]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "50%",
          border: "1px solid gray",
          height: "auto",
          padding: "25px 10px",
          justifyContent: "space-around",
          margin:"auto",
          marginTop:"10px"
        }}
      >
        <div
          style={{
            background: `${color && Props.verify && !loading ? color : "red"}`,
            height: "30px",
            width: "30px",
            margin: "1rem",
          }}
        ></div>
        <div >
          <div style={{color:"red",fontSize:"16px",width:"500px"}}>{Props.title}</div>
          <div style={{color:"blue",fontSize:"16px",width:"500px"}}>{Props.body}</div>
        </div>
        <div >
          <button
            style={{
              marginTop: "15px",
              width: "100px",
              height: "45px",
              backgroundColor: "#fff",
            }}
            onClick={() => {
              Props.handleToggle(Props.id);
              if (!Props.verify) {
                callback();
              }
              setLoading(true);
            }}
          >
            {!Props.verify ? "verify" : loading ? "Loading..." : "verified"}
          </button>
        </div>
      </div>
    </div>
  );
};

export const MemoSingleData = React.memo(Singletodo);