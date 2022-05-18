import { useRef, useState } from "react";

const useStopwatch = (num: number) => {
  const [milisecond, setMilisecond] = useState<number>(num);
  const [second, setSecond] = useState<number>(0);

  let timerid = useRef<any>();

  const start = () => {
    timerid.current = setInterval(() => {
      setMilisecond((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timerid.current);
  };

  const stop = () => {
    clearInterval(timerid.current);
  };

  const reset = () => {
    setMilisecond(num);
  };

  return { milisecond, start, stop, reset };
};

export default useStopwatch;
