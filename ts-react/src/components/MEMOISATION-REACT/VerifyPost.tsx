import React, { useCallback, useState, useRef, useEffect } from "react";
import {v4 as uuid} from 'uuid'
import { MemoSingleData } from "./PostItems";
export type Post = {
  id: number;
  title: string;
  body: string;
  verify: boolean;
};

const VerifyPost = () => {
    const [timer,setTimer] = useState<number>(0);
    const timerid = useRef<any>();

   const [title, setTitle] = useState("");
   const [body, setBody] = useState("");
   const [data, setData] = useState<Post[]>([]);
     useEffect(() => {
       timerid.current = setInterval(() => {
         setTimer((prev) => prev + 1);
       }, 1000);
       return () => clearInterval(timerid.current);
     }, []);
    

    const handleToggle = (id: number) => {
      setData(
        data.map((el) => (el.id === id ? { ...el, verify: !el.verify } : el)),
      );
    };
    const Callback = useCallback(handleToggle, [data]);
  return (
    <div>
      <p>{timer}</p>
      <div
        style={{
          border: "1px solid gray",
          width: "30%",
          margin: "auto",
          padding: "30px 30px",
          marginTop: "40px",
          height: "250px",
        }}
      >
        <input
          style={{ width: "70%", height: "35px" }}
          placeholder="Enter Title"
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          style={{ width: "90%", height: "170px", marginTop: "15px" }}
          placeholder="Write What Ever You Want"
          name="body"
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <button
          style={{ width: "30%", height: "35px", backgroundColor: "#fff" }}
          onClick={() => {
            if (body && title) {
              setData([
                ...data,
                { id: Math.random(), title, body, verify: false },
              ]);
              setBody("");
              setTitle("");
            } else {
              alert("Please fill the input");
            }
          }}
        >
          POST
        </button>
      </div>
      <div>
        {data.map((item) => {
          return (
            <MemoSingleData key={item.id} {...item} handleToggle={Callback} />
          );
        })}
      </div>
    </div>
  );
}

export default VerifyPost