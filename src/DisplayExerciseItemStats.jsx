import React, {Component} from "react";

class DisplayExerciseItemStats extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.logCaloriesOut();
    this.props.closePage('needExerciseData');
  }
  render() {
    const {name, calories, duration} = this.props.caloriesOutItem;
    return (
      <React.Fragment>
        <p>Performing {duration} of {name} burns {calories}.</p>
        <button className="waves-effect waves-light btn" onClick={() => this.handleClick()}>Log</button>
      </React.Fragment>
    )
  }
}

export default DisplayExerciseItemStats;
