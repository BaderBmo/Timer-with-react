import React from "react";
import ReactDOM from "react-dom";
import Timer from "./Timer";
import "./App.css";



function App() {
  return  <div>
      <div className="App">
        <Timer/>
      </div>
    </div>;}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;