import React, { Component } from "react";
import CubeScene from "./components/CubeScene";
import LengthControlForm from "./components/LengthControlForm";

class App extends Component {
  state = {
    sideLength: 150
  };

  onChange = e => {
    this.setState({ sideLength: e.target.value });
  };

  render() {
    const { sideLength } = this.state;

    return (
      <div>
        <CubeScene sideLength={sideLength} />
        <LengthControlForm sideLength={sideLength} onChange={this.onChange} />
      </div>
    );
  }
}

export default App;
