import React, { Component } from "react";
import DonutChart from './DonutChart';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div >
        <DonutChart />
      </div>
    );
  }
}

export default App;