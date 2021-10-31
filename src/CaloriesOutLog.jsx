import React, {Component} from "react";
import CaloriesOutItem from "./CaloriesOutItem";

class CaloriesOutLog extends Component {
  constructor(props) {
    super(props);
    this.handleCaloriesOutLog = this.handleCaloriesOutLog.bind(this);
  }
  
  handleCaloriesOutLog(){
    let switchCopy = JSON.parse(JSON.stringify(this.props.switch));
    switchCopy.needCaloriesOutLog = false;
    switchCopy.showCalorieControlPanel = true;
    this.props.closePage(switchCopy);
  }
  render() {
    let caloriesOutLog;
    caloriesOutLog = this.props.log.map((calorieOutItem, index) => {
      return <CaloriesOutItem key={index} caloriesOutItem={calorieOutItem}/>
    })
    return (
      <React.Fragment>
        <ul className="collection">
          {caloriesOutLog}
        </ul>
        <div className="center-align">
          <span className="material-icons pointer" onClick={() => this.handleCaloriesOutLog()}>cancel_presentation</span>
        </div>
      </React.Fragment>
    )
  }
}

export default CaloriesOutLog;
