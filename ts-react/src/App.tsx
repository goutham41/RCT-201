import React from "react";
import "./App.css";
// import Counter from "./components/ClassTime/Counter";
// import Todos from "./components/ClassTime/Todos";
// import { ProductForm } from "./components/ProductManagement/ProductForm";
import {useTimeout} from "./components/Hooks/useTimeout"
import VerifyPost from "./components/MEMOISATION-REACT/VerifyPost";
// import Githubmin from "./components/ClassTime/Githubmin";
// import { TimerStopwatch } from "./components/hooksComponents/TimerStopwatch";
// import Stopwatch from "./components/hooksComponents/Stopwatch";
// import CountrySearch from "./components/hooksComponents/CountrySearch"
// import MergeState from "./components/hooksComponents/MargeState";
// import Fibonacci from "./components/ClassTime/Fibonacci";
   import {Todo} from "./components/UseCallBack/TodosCall";
function App() {
  const isReady = useTimeout(500);
  return (
    <div className="App">
      {/* <Counter init={0} /> */}
      {/* <Counter /> */}
      {/* <Todos/> */}
      {/* <ProductForm /> */}
      {/* <Githubmin/> */}
      {/* <TimerStopwatch/> */}
      {/* <ProductForm /> */}
      {/* <Stopwatch/> */}

      {isReady && (
        <>
          {/* <CountrySearch /> */}
          {/* <MergeState/> */}
          {/* <Fibonacci /> */}
          {/* <Todo /> */}
          <VerifyPost/>
        </>
      )}
      {!isReady && <h3 style={{ marginTop: "50px" }}>Data Loading .......</h3>}
    </div>
  );
}

export default App;
