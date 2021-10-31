import React, {Component} from "react";
import CaloriesInItem from "./CaloriesInItem";

class CaloriesInLog extends Component {
  constructor(props) {
    super(props);
    this.handleCaloriesInLog = this.handleCaloriesInLog.bind(this);
  }
  
  handleCaloriesInLog(){
    let switchCopy = JSON.parse(JSON.stringify(this.props.switch));
    switchCopy.needCaloriesInLog = false;
    switchCopy.showCalorieControlPanel = true;
    this.props.closePage(switchCopy);
  }
  render() {
    let caloriesInLog;
    caloriesInLog = this.props.log.map((calorieInItem, index) => {
      return <CaloriesInItem key={index} caloriesInItem={calorieInItem}/>
    })
    return (
      <React.Fragment>
        <ul className="collection">
          {caloriesInLog}
        </ul>
        <div className="center-align">
          <span className="material-icons pointer" onClick={() => this.handleCaloriesInLog()}>cancel_presentation</span>
        </div>
      </React.Fragment>
    )
  }
}

export default CaloriesInLog;
