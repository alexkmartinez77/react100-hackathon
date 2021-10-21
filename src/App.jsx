import React, { Component } from "react";
import Welcome from './Welcome';
import Form from './Form';
import ManageCalories from './ManageCalories';
import bmrFx from './bmrFx.js';

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
        bmr: 0,
        caloricNeeds:0,
        caloricGoals:0,
      },
      activityLevel: [
        {level: 'sedentary', factor: 1.2},
        {level: 'lightly active', factor: 1.375},
        {level: 'moderately active', factor: 1.55},
        {level: 'very active', factor: 1.725},
        {level: 'extra active', factor: 1.9},
        ]
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
    let objCopy = JSON.parse(JSON.stringify(this.state.userProfile));
    let {age, feet, inches, weight, gender, goals} = objCopy;

    objCopy.bmr = bmrFx(gender, parseFloat(feet) * 12 + parseFloat(inches), parseFloat(weight), parseFloat(age));
    objCopy.caloricNeeds = parseFloat((objCopy.bmr * 1.2).toFixed(0));
    objCopy.caloricGoals = (goals == 'weight loss') ? objCopy.caloricNeeds - 500 : objCopy.caloricNeeds;

    this.setState({
      userProfile: objCopy,
    })
  }

  render() {
    return (
      <div className="container">
        {this.state.firstTime ? <Welcome closePage={this.closePage}/> : this.state.needInfo ? <Form closePage={this.closePage} handleInput={this.handleInput} calculateCalories={this.calculateCalories}/> : <ManageCalories userProfile={this.state.userProfile}/>}
      </div>
    );
  }
}

export default App;