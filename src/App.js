import React, { Component } from "react";
import Invoice from "./components/Invoice";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Invoice />
      </div>
    );
  }
}

export default App;
