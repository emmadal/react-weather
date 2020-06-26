import React from "react";
import "./App.css";
import { InputForm } from "./InputForm";
import { H1 } from './components'

function App() {
  return (
    <div className="App-header">
      <H1>React weather </H1>
      <InputForm />
    </div>
  );
}

export default App;
