import React, {Component} from "react";

class CaloriesIn extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let switchCopy = JSON.parse(JSON.stringify(this.props.switch));
    switchCopy.needExerciseData = !switchCopy.needExerciseData;
    switchCopy.needCaloriesOutLog = !switchCopy.needCaloriesOutLog;
    this.props.closePage(switchCopy);
    this.props.getExerciseData();
  }
  render() {
    return (
      <React.Fragment>
        <form action="#">
          <p>Total Calories Out: {this.props.caloriesOutTotal}</p>
          <label htmlFor="exerciseItem">Enter Exercise Activity</label>
          <input name="exerciseItem" type="text" placeholder="ex. 20 min walking" onChange={(e) => this.props.handleItemInput(e)}/>
        </form>
        <button className="waves-effect waves-light btn" onClick={() => this.handleClick()}>Calculate</button>
      </React.Fragment>
    )
  }
}

export default CaloriesIn;
