import React from "react";
import ReactDOM from "react-dom";
import Invoice from "./Invoice";
function App() {
  return (
    <div className="App">
      <Invoice />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
