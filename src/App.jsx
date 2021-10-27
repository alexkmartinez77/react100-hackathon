import React, { Component } from "react";
import Welcome from './Welcome';
import Form from './Form';
import bmrFx from './bmrFx.js';
import ChartIntro from "./ChartIntro";
import RadialChart from "./RadialChart";
import CaloriesIn from "./CaloriesIn";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstTime: true,
      needInfo: true,
      needToIntroduceChart: false,
      needCaloriesIn:false,
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
        caloriesIn:0,
        caloriesOut:0,
        caloriesRemain:0,
        foodItem: 'food',
      },
      foodItemData:{},
      dailyFoodLog: [],
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
    this.calculateCaloriesIn = this.calculateCaloriesIn.bind(this);
    this.logFoodItem = this.logFoodItem.bind(this);
  }

  closePage(page){
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
    objCopy.caloriesRemain = objCopy.caloricGoals;
    this.setState({
      userProfile: objCopy,
    })
  }

  calculateCaloriesIn(){
    let objCopy = JSON.parse(JSON.stringify(this.state.userProfile));

    axios.get(`/nutrients/${objCopy.foodItem}`)
         .then((result) => {
           console.log(result);
           this.setState({
              foodItemData:{
                name: result.data.food_name,
                calories: result.data.nf_calories,
                protein: result.data.nf_protein,
                fat: result.data.nf_total_fat,
                carbs: result.data.nf_total_carbohydrate,
              }
           })
          })
         .catch((error) => {
            console.error(error);
          })   
  } 

  logFoodItem(){
    let newArray = this.state.dailyFoodLog.concat(this.state.foodItemData);
    this.setState({
      dailyFoodLog: newArray,
    })
  }

  render() {

    let chartIntro, caloriesIn;
    if(this.state.needToIntroduceChart) {
      chartIntro = <ChartIntro closePage={this.closePage} goals={this.state.userProfile.goals} caloricGoals={this.state.userProfile.caloricGoals}/>
    }
    if(this.state.needCaloriesIn) {
      caloriesIn = <CaloriesIn handleInput={this.handleInput} calculateCaloriesIn={this.calculateCaloriesIn} logFoodItem={this.logFoodItem}/>;
    }

    let total = this.state.userProfile.caloricGoals;
    let eaten = 1200;
    let consumed = parseFloat((eaten/total*100).toFixed(0));
    let leftOver = 100 - consumed;

    return (
      <div className="container">
        {
          this.state.firstTime 
          ? <Welcome closePage={this.closePage}/> 
          : this.state.needInfo 
          ? <Form closePage={this.closePage} handleInput={this.handleInput} calculateCalories={this.calculateCalories}/> 
          : <RadialChart leftOver={[leftOver]}/>
        }
        {chartIntro}
        {caloriesIn}
      </div>
    );
  }
}

export default App;