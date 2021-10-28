import React, {Component} from "react";

class CaloriesIn extends Component {
  render() {
    return (
      <React.Fragment>
        <form action="#">
          <p>Total Calories Out: {this.props.caloriesOutTotal}</p>
          <label htmlFor="exerciseItem">Enter Exercise Activity</label>
          <input name="exerciseItem" type="text" placeholder="ex. 20 min walking" onChange={(e) => this.props.handleInput(e)}/>
        </form>
        <button className="waves-effect waves-light btn" onClick={() => {this.props.getNutritionData(), this.props.closePage('needFoodData')}}>Calculate</button>
      </React.Fragment>
    )
  }
}

export default CaloriesIn;
