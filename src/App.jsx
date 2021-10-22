import React, { Component } from "react";
import Welcome from './Welcome';
import Form from './Form';
import bmrFx from './bmrFx.js';
import DonutChart from "./DonutChart";
import ChartIntro from "./ChartIntro";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstTime: true,
      needInfo: true,
      needToIntroduceChart: false,
      userProfile: {
        age: 43,
        feet: 6,
        inches: 3,
        weight: 200,
        gender: 'male',
        goals: 'maintenance',
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
    console.log(page);
    this.setState({
      [page]: !this.state[page],
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

    let chartIntro;
    if(this.state.needToIntroduceChart) {
      chartIntro = <ChartIntro closePage={this.closePage} goals={this.state.userProfile.goals} caloricGoals={this.state.userProfile.caloricGoals}/>
    }

    let total = this.state.userProfile.caloricGoals;
    let eaten = 1200;
    let consumed = parseFloat((eaten/total*100).toFixed(0));
    let leftOver = 100 - consumed;

    let array = [consumed, leftOver];

    return (
      <div className="container">
        { 
          this.state.firstTime 
          ? <Welcome closePage={this.closePage}/> 
          : this.state.needInfo 
          ? <Form closePage={this.closePage} handleInput={this.handleInput} calculateCalories={this.calculateCalories}/> 
          : <DonutChart array={array}/>
        }
        {chartIntro}

      </div>
    );
  }
}

export default App;