import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/ClassTime/Counter";
import Todos from "./components/ClassTime/Todos";
import { ProductForm } from "./components/ProductManagement/ProductForm";
import {useTimeout} from "./components/Hooks/useTimeout"
import Githubmin from "./components/ClassTime/Githubmin";
import { TimerStopwatch } from "./components/hooksComponents/TimerStopwatch";
import Stopwatch from "./components/hooksComponents/Stopwatch";
function App() {
  const isReady = useTimeout(1000);
  return (
    <div className="App">
      {/* <Counter init={0} /> */}
      {/* <Counter /> */}
      {/* <Todos/> */}
      {/* <ProductForm /> */}
      {/* <Githubmin/> */}
      {/* <TimerStopwatch/> */}
      {/* <ProductForm /> */}
      {isReady && <Stopwatch/>}
      {!isReady && <h3 style={{ marginTop: "50px" }}>Data Loading .......</h3>}
    </div>
  );
}

export default App;
