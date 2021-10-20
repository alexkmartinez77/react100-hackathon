import React, { Component } from "react";
import Welcome from './Welcome';
import Form from './Form';
import ManageCalories from './ManageCalories';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstTime: true,
      needInfo: true,
      
    };
  }

  render() {
    return (
      <div className="container">
        {this.state.firstTime ? <Welcome /> : this.state.needInfo ? <Form/> : <ManageCalories/>}
      </div>
    );
  }
}

export default App;