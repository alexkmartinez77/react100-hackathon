import React, {Component} from "react";

class CalorieControlPanel extends Component {
  constructor(props) {
    super(props);
    this.handleCaloriesInAdd = this.handleCaloriesInAdd.bind(this);
  }
  
  handleCaloriesInAdd(){
    let switchCopy = JSON.parse(JSON.stringify(this.props.switch));
    switchCopy.needExerciseData = !switchCopy.needExerciseData;
    //switchCopy.needCaloriesOutLog = !switchCopy.needCaloriesOutLog;
    this.props.closePage(switchCopy);
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
            <div className="col s4 center-align">
              <div className="row">
                <div className="col s4 offset-s2">
                  <span class="material-icons redColor" onClick={()=> this.handleClick()}>playlist_add</span>
                </div>
                <div className="col s4">
                  <span class="material-icons redColor">manage_search</span>
                </div>
              </div>
            </div>
            <div className="col s4 center-align">
              <div className="row">
                <div className="col s12">
                  <span class="material-icons yellowColor">manage_search</span>
                </div>
              </div>
            </div>
            <div className="col s4 center-align">
              <div className="row">
                <div className="col s4 offset-s2">
                  <span class="material-icons greenColor">playlist_add</span>
                </div>
                <div className="col s4">
                  <span class="material-icons greenColor">manage_search</span>
                </div>
              </div>
            </div>
          </div>
      </React.Fragment>
    )
  }
}

export default CalorieControlPanel;
