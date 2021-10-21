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
      userProfile: {
        age: 0,
        feet: 0,
        inches: 0,
        weight: 0,
        gender: 'male',
        goals: 'maintain',
        activityLevel: 0,
        bmr: 0,
        caloricNeeds:0,
      }
      
    };
    this.closePage = this.closePage.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.calculateCalories = this.calculateCalories.bind(this);

  }

  closePage(page){
    this.setState({
      [page]: false,
    })
  }

  handleInput(event){
    const {name, value} = event.target;
    let objCopy = JSON.parse(JSON.stringify(this.state.userProfile));
    objCopy[name] = value;

    this.setState({
      userProfile: objCopy,
    })
  }

  calculateCalories(){
    console.log('Calculate Calories');
  }

  render() {
    return (
      <div className="container">
        {this.state.firstTime ? <Welcome closePage={this.closePage}/> : this.state.needInfo ? <Form closePage={this.closePage} handleInput={this.handleInput} calculateCalories={this.calculateCalories}/> : <ManageCalories/>}
      </div>
    );
  }
}

export default App;