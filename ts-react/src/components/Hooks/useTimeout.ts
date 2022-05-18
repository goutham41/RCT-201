import React,{useState,useEffect} from "react";

export function useTimeout(delay:number) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setReady(true), delay);

    return () => clearTimeout(timer);
  }, []);

  return ready;
}
