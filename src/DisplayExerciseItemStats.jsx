import React, {Component} from "react";

class DisplayExerciseItemStats extends Component {
  constructor(props) {
    super(props);
    this.handleLogClick = this.handleLogClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }
  
  handleLogClick(){
    let switchCopy = JSON.parse(JSON.stringify(this.props.switch));
    switchCopy.needExerciseData = false;
    switchCopy.needCaloriesOut = false;
    switchCopy.needCaloriesOutLog = false;
    switchCopy.showCalorieControlPanel = true;
    this.props.closePage(switchCopy);
    this.props.logCaloriesOut();
  }

  handleCloseClick(){
    let switchCopy = JSON.parse(JSON.stringify(this.props.switch));
    switchCopy.needExerciseData = false;
    switchCopy.needCaloriesOut = false;
    switchCopy.needCaloriesOutLog = false;
    switchCopy.showCalorieControlPanel = true;
    this.props.closePage(switchCopy);
  }

  render() {
    const {name, calories, duration} = this.props.caloriesOutItem;
    return (
      <React.Fragment>
        <p className="caloriesData">Performing <span className="greenColor">{duration}</span> min of <span className="greenColor">{name}</span> burns {calories} calories.</p>
        <div className="row">
          <div className="col s2 offset-s4">
            <span className="material-icons pointer" onClick={() => this.handleLogClick()}>playlist_add</span>
          </div>
          <div className="col s2">
            <span className="material-icons pointer" onClick={() => this.handleCloseClick()}>cancel_presentation</span>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default DisplayExerciseItemStats;
