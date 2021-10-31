import React, { Component } from "react";
import axios from "axios";
//Helper functions
import calculateCalorieTotal from "./calculateCalorieTotal";
import calculateCalorieProfile from "./calculateCalorieProfile";
import calculateCaloriesOut from "./calculateCaloriesOut";
//React Components
import Welcome from './Welcome';
import Form from './Form';
import ChartIntro from "./ChartIntro";
import RadialChart from "./RadialChart";
import CaloriesIn from "./CaloriesIn";
import CaloriesOut from "./CaloriesOut";
import DisplayFoodItemNutrition from "./DisplayFoodItemNutrition";
import DisplayExerciseItemStats from "./DisplayExerciseItemStats";
import CaloriesInLog from "./CaloriesInLog";
import CaloriesOutItem from "./CaloriesOutItem";
import RecipesOption from "./RecipesOption";
import Recipes from "./Recipes";
import CalorieCard from "./CalorieCard";
import CalorieControlPanel from "./CalorieControlPanel";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      switch:{
        firstTime: true,
        needInfo: true,
        needToIntroduceChart: false,
        needCaloriesIn: false,
        needCaloriesOut: false,
        needFoodData: false,
        needExerciseData: false,
        showRecipesOption: true,
        showCalorieCard: false,
        showCalorieControlPanel: false,
        needCaloriesInLog: false,
        needCaloriesOutLog: false,
      },
      userProfile: {
        age: 43,
        feet: 6,
        inches: 3,
        weight: 200,
        gender: 'male',
        goals: 'maintenance',
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
      exerciseItem: '20 min walk',
      recipes: []
    };
    this.closePage = this.closePage.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleItemInput = this.handleItemInput.bind(this);
    this.calculateCalorieNeeds = this.calculateCalorieNeeds.bind(this);
    this.getNutritionData = this.getNutritionData.bind(this);
    this.getExerciseData = this.getExerciseData.bind(this);
    this.logCaloriesIn = this.logCaloriesIn.bind(this);
    this.logCaloriesOut = this.logCaloriesOut.bind(this);
    this.retrieveRecipes = this.retrieveRecipes.bind(this);
  }

  closePage(switchCopy){
    this.setState({
      switch: switchCopy,
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

  handleItemInput(event){

    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  calculateCalorieNeeds(){
    let userProfileCopy = JSON.parse(JSON.stringify(this.state.userProfile));
    let newCalorieProfile = calculateCalorieProfile(userProfileCopy);
    let newCaloriesOut = calculateCaloriesOut(newCalorieProfile);
    let userCaloriesCopy = JSON.parse(JSON.stringify(this.state.userCalories));
    userCaloriesCopy.calorieProfile = newCalorieProfile;
    userCaloriesCopy.caloriesOut = newCaloriesOut;
    this.setState({
      userCalories: userCaloriesCopy,
    })
  }

  getNutritionData(){
    let userCaloriesCopy = JSON.parse(JSON.stringify(this.state.userCalories))

    axios.get(`/nutrients/${this.state.foodItem}`)
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
          });   
  } 

  getExerciseData(){
    let userCaloriesCopy = JSON.parse(JSON.stringify(this.state.userCalories));
    let exerciseQuery = {
      "query": this.state.exerciseItem,
      "gender": this.state.userProfile.gender,
      "weight_kg": parseFloat((this.state.userProfile.weight / 2.2).toFixed(2)),
      "height_cm": parseFloat((((this.state.userProfile.feet * 12) + this.state.userProfile.inches) * 2.54).toFixed(2)),
      "age": this.state.userProfile.age
    }

    axios({
      method: 'post',
      url: '/exercise',
      data: exerciseQuery,
    })
    .then((result) => {
        userCaloriesCopy.caloriesOut.item = {
          name: result.data.exercises[0].name,
          calories: result.data.exercises[0].nf_calories,
          duration: result.data.exercises[0].duration_min
      };
      this.setState({
        userCalories: userCaloriesCopy,
     });
    })
    .catch((error) => {
        console.error(error);
        res.send('An error occured.');
    })
  } 

  logCaloriesIn(){
    let userCaloriesCopy = JSON.parse(JSON.stringify(this.state.userCalories));
    let newArray = userCaloriesCopy.caloriesIn.array.concat(this.state.userCalories.caloriesIn.item);
    let calorieTotal = parseFloat((calculateCalorieTotal(newArray)).toFixed(2));
    userCaloriesCopy.caloriesIn.array = newArray;
    userCaloriesCopy.caloriesIn.total = calorieTotal;
    userCaloriesCopy.calorieProfile.caloriesRemaining = userCaloriesCopy.caloriesOut.total - userCaloriesCopy.caloriesIn.total;
    userCaloriesCopy.calorieProfile.percentRemaining = parseFloat((userCaloriesCopy.calorieProfile.caloriesRemaining/userCaloriesCopy.calorieProfile.caloricGoals*100).toFixed(0));
    this.setState({
      userCalories: userCaloriesCopy,
      });
  }

  logCaloriesOut(){
    let userCaloriesCopy = JSON.parse(JSON.stringify(this.state.userCalories));
    let newArray = userCaloriesCopy.caloriesOut.array.concat(this.state.userCalories.caloriesOut.item);
    let calorieTotal = parseFloat((calculateCalorieTotal(newArray)).toFixed(2));
    userCaloriesCopy.caloriesOut.array = newArray;
    userCaloriesCopy.caloriesOut.total = calorieTotal;
    userCaloriesCopy.calorieProfile.caloriesRemaining = userCaloriesCopy.caloriesOut.total - userCaloriesCopy.caloriesIn.total;
    userCaloriesCopy.calorieProfile.percentRemaining = parseFloat((userCaloriesCopy.calorieProfile.caloriesRemaining/userCaloriesCopy.calorieProfile.caloricGoals*100).toFixed(0));
    this.setState({
      userCalories: userCaloriesCopy,
      });
  }

  retrieveRecipes(){
    let maxCalories = parseFloat(this.state.userCalories.calorieProfile.caloriesRemaining.toFixed(0));
    axios({method: 'get', url: `/recipes/${maxCalories}`})
    .then((result) => {
      this.setState({
        recipes: result.data.hits,
     });
    })
    .catch((error) => {console.error(error);res.send('An error occured.');})
  }

  componentDidUpdate() {

    let collapsible = document.querySelectorAll(".collapsible");

    M.Collapsible.init(collapsible, {});
  }

  render() {

    let chartIntro, caloriesIn, caloriesOut, foodItem, exerciseItem, caloriesInLog, caloriesOutLog, recipesOption, recipes, calorieCard, calorieControlPanel, caloriesOutItem;

    if(this.state.switch.needToIntroduceChart) {
      chartIntro = <ChartIntro switch={this.state.switch} closePage={this.closePage} goals={this.state.userProfile.goals} caloricGoals={this.state.userCalories.calorieProfile.caloricGoals}/>
    }
    if(this.state.switch.showCalorieCard) {
      calorieCard = <CalorieCard userCalories={this.state.userCalories}/>
    }
    if(this.state.switch.showCalorieControlPanel) {
      calorieControlPanel = <CalorieControlPanel switch={this.state.switch} closePage={this.closePage}/>
    }
    if(this.state.switch.needCaloriesIn) {
      caloriesIn = <CaloriesIn caloriesInTotal={this.state.userCalories.caloriesIn.total} switch={this.state.switch} closePage={this.closePage} handleItemInput={this.handleItemInput} getNutritionData={this.getNutritionData}/>;
    }
    if(this.state.switch.needCaloriesOut) {
      caloriesOut = <CaloriesOut caloriesOutTotal={this.state.userCalories.caloriesOut.total} switch={this.state.switch} closePage={this.closePage} handleItemInput={this.handleItemInput} getExerciseData={this.getExerciseData}/>;
    }
    if(this.state.switch.needFoodData) {
      foodItem = <DisplayFoodItemNutrition switch={this.state.switch} closePage={this.closePage} caloriesInItem={this.state.userCalories.caloriesIn.item} logCaloriesIn={this.logCaloriesIn}/>;
    }
    if(this.state.switch.needExerciseData) {
      exerciseItem = <DisplayExerciseItemStats switch={this.state.switch} closePage={this.closePage} caloriesOutItem={this.state.userCalories.caloriesOut.item} logCaloriesOut={this.logCaloriesOut}/>;
    }
    if((this.state.userCalories.calorieProfile.caloriesRemaining <= 700) && (this.state.userCalories.calorieProfile.caloriesRemaining > 100) && this.state.switch.showRecipesOption){
      recipesOption = <RecipesOption switch={this.state.switch} closePage={this.closePage} retrieveRecipes={this.retrieveRecipes} caloriesRemaining={this.state.userCalories.calorieProfile.caloriesRemaining}/>
    }
    if((this.state.userCalories.caloriesIn.array.length > 0) && this.state.switch.needCaloriesInLog){
      caloriesInLog = <CaloriesInLog switch={this.state.switch} closePage={this.closePage} log={this.state.userCalories.caloriesIn.array}/>
    }
    
    if((this.state.userCalories.caloriesOut.array.length > 0) && this.state.switch.needCaloriesOutLog){
      caloriesOutLog = this.state.userCalories.caloriesOut.array.map((calorieOutItem, index) => {
        return <CaloriesOutItem key={index} calorieOutItem={calorieOutItem}/>
      });
    }

    if(this.state.recipes.length > 0){
        recipes = <Recipes recipeData={this.state.recipes}/>
    }
    
    return (
      <div className="container">
        <div className="row card">
          <div className="col s12">
            {
              this.state.switch.firstTime 
              ? <Welcome switch={this.state.switch} closePage={this.closePage}/> 
              : this.state.switch.needInfo 
              ? <Form switch={this.state.switch} closePage={this.closePage} handleInput={this.handleInput} calculateCalorieNeeds={this.calculateCalorieNeeds}/> 
              : <RadialChart remainingCalories={this.state.userCalories.calorieProfile.caloriesRemaining} leftOver={[this.state.userCalories.calorieProfile.percentRemaining]}/>
            }
            {chartIntro}
          </div>
        </div>
        {calorieCard}
        {calorieControlPanel}
        <div className="row">
          <div className="col s12">
            {caloriesIn}
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            {foodItem}
            {caloriesInLog}
          </div>
        </div>
        <div className="row">
          <div className="col s6">
            <div className="row">
              {/*caloriesIn*/}
              {/*foodItem*/}
              {/*caloriesInLog*/}
            </div>
          </div>
          <div className="col s6">
            <div className="row">
              {/*caloriesOut*/}
              {/*exerciseItem*/}
              {/*caloriesOutLog*/}
            </div>
          </div>
        </div>
        <div className="row">
          {recipesOption}
          {recipes}
        </div>
      </div>
    );
  }
}

export default App;