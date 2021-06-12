import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import DieuHuong from "./DieuHuong/DieuHuong";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <DieuHuong />
        </div>
      </Router>
    );
  }
}

export default App;
