import axios from "axios";
//Helper functions
import calculateCalorieTotal from "./calculateCalorieTotal.js";
import calculateCalorieProfile from "./calculateCalorieProfile";
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
        foodItem: 'food',
      },
      userCalories:{
        calorieProfile:{
          bmr: 0,
          caloricNeeds:0,
          caloricGoals:0,
          caloriesRemaining:0,
          percentRemaining:0,
        },
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
      },
      foodItem:'food',
    };
    this.closePage = this.closePage.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.calculateCalorieNeeds = this.calculateCalorieNeeds.bind(this);
    this.getNutritionData = this.getNutritionData.bind(this);
    this.logCaloriesIn = this.logCaloriesIn.bind(this);
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
    let userProfileCopy = JSON.parse(JSON.stringify(this.state.userProfile));
    let userCalorieProfile = calculateCalorieProfile(userProfileCopy);
    let userCaloriesCopy = JSON.parse(JSON.stringify(this.state.userCalories));
    userCaloriesCopy.calorieProfile = userCalorieProfile;

    this.setState({
      userCalories: userCaloriesCopy,
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

  logCaloriesIn(){
    let userCaloriesCopy = JSON.parse(JSON.stringify(this.state.userCalories));
    let newArray = userCaloriesCopy.caloriesIn.array.concat(this.state.userCalories.caloriesIn.item);
    let calorieTotal = parseFloat((calculateCalorieTotal(newArray)).toFixed(2));
    userCaloriesCopy.caloriesIn.array = newArray;
    userCaloriesCopy.caloriesIn.total = calorieTotal;
    userCaloriesCopy.calorieProfile.caloriesRemaining = userCaloriesCopy.calorieProfile.caloricGoals - calorieTotal;
    userCaloriesCopy.calorieProfile.percentRemaining = parseFloat((userCaloriesCopy.calorieProfile.caloriesRemaining/userCaloriesCopy.calorieProfile.caloricGoals*100).toFixed(0));
    this.setState({
      userCalories: userCaloriesCopy,
      });
  }


  render() {

    let chartIntro, caloriesIn, foodItemNutrition;
    if(this.state.needToIntroduceChart) {
      chartIntro = <ChartIntro closePage={this.closePage} goals={this.state.userProfile.goals} caloricGoals={this.state.userCalories.calorieProfile.caloricGoals}/>
    }
    if(this.state.needCaloriesIn) {
      caloriesIn = <CaloriesIn closePage={this.closePage} handleInput={this.handleInput} getNutritionData={this.getNutritionData}/>;
    }
    if(this.state.needFoodData) {
      foodItemNutrition = <DisplayFoodItemNutrition closePage={this.closePage} caloriesInItem={this.state.userCalories.caloriesIn.item} logCaloriesIn={this.logCaloriesIn}/>;
    }

    return (
      <div className="container">
        {
          this.state.firstTime 
          ? <Welcome closePage={this.closePage}/> 
          : this.state.needInfo 
          ? <Form closePage={this.closePage} handleInput={this.handleInput} calculateCalorieNeeds={this.calculateCalorieNeeds}/> 
          : <RadialChart leftOver={[this.state.userCalories.calorieProfile.percentRemaining]}/>
        }
        {chartIntro}
        {caloriesIn}
        {foodItemNutrition}
      </div>
    );
  }
}

export default App;