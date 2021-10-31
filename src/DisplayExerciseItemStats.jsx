import React, {Component} from "react";

class DisplayExerciseItemStats extends Component {
  constructor(props) {
    super(props);
    this.handleLogClick = this.handleLogClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }
  
  handleLogClick(){
    let switchCopy = JSON.parse(JSON.stringify(this.props.switch));
    switchCopy.needExerciseData = !switchCopy.needExerciseData;
    switchCopy.needCaloriesOutLog = !switchCopy.needCaloriesOutLog;
    this.props.closePage(switchCopy);
    this.props.logCaloriesOut();
  }

  handleCloseClick(){
    let switchCopy = JSON.parse(JSON.stringify(this.props.switch));
    switchCopy.needExerciseData = !switchCopy.needExerciseData;
    switchCopy.needCaloriesOutLog = !switchCopy.needCaloriesOutLog;
    this.props.closePage(switchCopy);
  }

  render() {
    const {name, calories, duration} = this.props.caloriesOutItem;
    return (
      <React.Fragment>
        <p>Performing {duration} min of {name} burns {calories} calories.</p>
        <div>
          <a className="btn-floating green" onClick={() => this.handleLogClick()}><i className="material-icons">add</i></a>
          <a className="btn-floating red" onClick={() => this.handleCloseClick()}><i className="material-icons">clear</i></a>
        </div>

      </React.Fragment>
    )
  }
}

export default DisplayExerciseItemStats;
