import axios from "axios";
//Calculates Basal Metabolic Rate (BMR)
import bmrFx from './bmrFx.js';
//React Components
import React, { Component } from "react";
import Welcome from './Welcome';
import Form from './Form';
import ChartIntro from "./ChartIntro";
import RadialChart from "./RadialChart";
import CaloriesIn from "./CaloriesIn";
import DisplayFoodItemNutrition from "./DisplayFoodItemNutrition";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //create switch object
      firstTime: true,
      needInfo: true,
      needToIntroduceChart: false,
      needCaloriesIn:false,
      needFoodData:false,
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
        caloriesRemain:0,
        foodItem: 'food',
      },
      userCalories:{
        caloriesIn:{
          total: 0,
          item:{},
          array:[],
        },
        caloriesOut:{
          total: 0,
          item:{},
          array:[],
        },
      }
    };
    this.closePage = this.closePage.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.calculateCalorieNeeds = this.calculateCalorieNeeds.bind(this);
    this.getNutritionData = this.getNutritionData.bind(this);
    this.logCaloriesIn = this.logCaloriesIn.bind(this);
    this.calculateCaloriesIn = this.calculateCaloriesIn.bind(this);
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

  calculateCalorieNeeds(){
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

  getNutritionData(){
    let objCopy = JSON.parse(JSON.stringify(this.state.userProfile));
    let userCaloriesCopy = JSON.parse(JSON.stringify(this.state.userCalories))

    axios.get(`/nutrients/${objCopy.foodItem}`)
         .then((result) => {
            userCaloriesCopy.caloriesIn.item = {
              name: result.data.food_name,
              calories: result.data.nf_calories,
              protein: result.data.nf_protein,
              fat: result.data.nf_total_fat,
              carbohydrate: result.data.nf_total_carbohydrate,
          }
           this.setState({
              userCalories: userCaloriesCopy,
           })
          })
         .catch((error) => {
            console.error(error);
          })   
          
  } 

  calculateCaloriesIn(){
    let userCaloriesCopy = JSON.parse(JSON.stringify(this.state.userCalories));
    let totalCaloriesIn = 0;
    userCaloriesCopy.caloriesIn.array.map(calorieInItem =>{
      totalCaloriesIn += calorieInItem.calories;
    })
    userCaloriesCopy.caloriesIn.total = totalCaloriesIn;
    console.log(userCaloriesCopy.caloriesIn.total);
    this.setState({
      userCalories: userCaloriesCopy,
    });
  }

  logCaloriesIn(){
    let userCaloriesCopy = JSON.parse(JSON.stringify(this.state.userCalories));
    let newArray = userCaloriesCopy.caloriesIn.array.concat(this.state.userCalories.caloriesIn.item);
    userCaloriesCopy.caloriesIn.array = newArray;
    this.setState({
      userCalories: userCaloriesCopy,
      });
  }


  render() {

    let chartIntro, caloriesIn, foodItemNutrition;
    if(this.state.needToIntroduceChart) {
      chartIntro = <ChartIntro closePage={this.closePage} goals={this.state.userProfile.goals} caloricGoals={this.state.userProfile.caloricGoals}/>
    }
    if(this.state.needCaloriesIn) {
      caloriesIn = <CaloriesIn closePage={this.closePage} handleInput={this.handleInput} getNutritionData={this.getNutritionData}/>;
    }
    if(this.state.needFoodData) {
      foodItemNutrition = <DisplayFoodItemNutrition closePage={this.closePage} caloriesInItem={this.state.userCalories.caloriesIn.item} logCaloriesIn={this.logCaloriesIn}/>;
    }

    let percent = (this.state.userProfile.caloriesRemain/this.state.userProfile.caloricGoals)*100;

    return (
      <div className="container">
        {
          this.state.firstTime 
          ? <Welcome closePage={this.closePage}/> 
          : this.state.needInfo 
          ? <Form closePage={this.closePage} handleInput={this.handleInput} calculateCalorieNeeds={this.calculateCalorieNeeds}/> 
          : <RadialChart leftOver={[percent]}/>
        }
        {chartIntro}
        {caloriesIn}
        {foodItemNutrition}
      </div>
    );
  }
}

export default App;