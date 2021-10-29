import React, {Component} from "react";

class DisplayExerciseItemStats extends Component {
  render() {
    const {name, calories, duration} = this.props.caloriesOutItem;
    return (
      <React.Fragment>
        <p>Performing {duration} of {name} burns {calories}.</p>
        <button className="waves-effect waves-light btn" onClick={() => {this.props.logCaloriesOut(), this.props.closePage('needExerciseData')}}>Log</button>
      </React.Fragment>
    )
  }
}

export default DisplayExerciseItemStats;
