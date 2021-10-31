import React, {Component} from "react";

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
    switchCopy.needToIntroduceChart = !switchCopy.needToIntroduceChart;
    switchCopy.needCaloriesIn = !switchCopy.needCaloriesIn;
    switchCopy.needCaloriesOut = !switchCopy.needCaloriesOut;
    switchCopy.needCaloriesOutLog = !switchCopy.needCaloriesOutLog; 
    switchCopy.needCaloriesInLog = !switchCopy.needCaloriesInLog;
    switchCopy.showCalorieCard = !switchCopy.showCalorieCard; 
    this.props.closePage(switchCopy);
  }
  render() {
    return (
      <React.Fragment>
        <p>Based on the data you provided, your calorie intake should be {this.props.caloricGoals} for your {this.props.goals} goals. The chart above will keep track of the calories you have left to eat for the day.</p>
        <p><a style={{color: 'blue', cursor: 'pointer'}} onClick={() => this.handleClick()}>Start logging</a> your calories.</p>
      </React.Fragment>
    )
  }
}

export default ChartIntro;
