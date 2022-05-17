import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/ClassTime/Counter";
import Todos from "./components/ClassTime/Todos";
import { ProductForm } from "./components/ProductManagement/ProductForm";

function App() {
  return (
    <div className="App">
      {/* <Counter init={0} /> */}
      {/* <Counter /> */}
      {/* <Todos/> */}
       <ProductForm/>
    </div>
  );
}

export default App;
