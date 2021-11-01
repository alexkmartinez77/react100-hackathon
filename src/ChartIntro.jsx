import React, {Component} from "react";
import WeightLoss from "./WeightLoss";

class ChartIntro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activityLevel: [
        {level: 'sedentary', factor: 1.2},
        {level: 'lightly active', factor: 1.375},
        {level: 'moderately active', factor: 1.55},
        {level: 'very active', factor: 1.725},
        {level: 'extra active', factor: 1.9},
      ]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let switchCopy = JSON.parse(JSON.stringify(this.props.switch));
    switchCopy.needToIntroduceChart = false;
    switchCopy.showCalorieCard = true; 
    switchCopy.showCalorieControlPanel = true; 
    this.props.closePage(switchCopy);
  }
  render() {
    let weightLoss;
    if(this.props.goals == "weight loss"){
      weightLoss = <WeightLoss />
    }
    return (
      <React.Fragment>
        <p className="poppinsFont">Based on the data you provided, your daily calorie intake should be <span className="blueColor">{this.props.calorieProfile.caloricGoals}</span> calories for your <span className="blueColor">{this.props.goals}</span> goals.</p> 
        <div className="row removeRowMargin">
          <div className="col s8 poppinsFont"><span>Basal Metabolic Rate: </span></div>
          <div className="col s4 right-align poppinsFont">{this.props.calorieProfile.bmr} cal</div>
        </div>
        <div className="row">
          <div className="col s8"><span className="greyColor">Amount of calories your body burns at rest. </span></div>
          <div className="col s4 right-align poppinsFont"></div>
        </div>
        <div className="row removeRowMargin">
          <div className="col s8 poppinsFont"><span>Base Activity Level: </span></div>
          <div className="col s4 right-align poppinsFont">+ {parseFloat((this.props.calorieProfile.bmr * .2).toFixed(0))} cal</div>
        </div>
        <div className="row">
          <div className="col s8"><span className="greyColor">Calories burned going about regular daily activities.</span></div>
          <div className="col s4"></div>
        </div>
        {weightLoss}
        <div className="row">
          <div className="col s8 poppinsFont"><span>Total: </span></div>
          <div className="col s4 right-align poppinsFont">{this.props.calorieProfile.caloricGoals} cal</div>
        </div>
        <p className="poppinsFont">Use this app to track your food {`(Calories In)`} and exercise {`(calories Out)`} for the day. The chart above will keep track of the calories you have left to eat for the day. <a className="pointer blueColor"onClick={() => this.handleClick()}>Start logging</a> your calories.</p>
      </React.Fragment>
    )
  }
}

export default ChartIntro;
