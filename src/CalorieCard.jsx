import React, {Component} from "react";

class CalorieCard extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="row card">
          <div class="center-align">
            <span className="caloriesTitle">CALORIES</span>
          </div>
          <div>
            <div className="col s4 center-align">
              <span className="material-icons redColor">fastfood</span>
              <span className="caloriesLabel">IN</span>
            </div>
            <div className="col s4 center-align">
              <span className="material-icons yellowColor">change_history</span>
              <span className="caloriesLabel">REMAIN</span>
            </div>
            <div className="col s4 center-align">
              <span className="material-icons greenColor">hiking</span>
              <span className="caloriesLabel">OUT</span>
            </div>
          </div>
          <div>
            <div className="col s4 center-align caloriesData">
              <span>{this.props.userCalories.caloriesIn.total}</span>
            </div>
            <div className="col s4 center-align caloriesData">
              <span>{this.props.userCalories.caloriesOut.total - this.props.userCalories.caloriesIn.total}</span>
            </div>
            <div className="col s4 center-align caloriesData">
              <span>{this.props.userCalories.caloriesOut.total}</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default CalorieCard;
