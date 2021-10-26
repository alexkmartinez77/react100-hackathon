import React, {Component} from "react";

class CaloriesIn extends Component {
  render() {
    return (
      <React.Fragment>
        <form action="#">

          <label htmlFor="caloriesIn">Calories In</label>
          <input name="caloriesIn" type="text" placeholder="Enter Food Item" onChange={(e) => this.props.handleInput(e)}/>

        </form>
        <button className="waves-effect waves-light btn" onClick={() => {this.props.closePage('needInfo'); this.props.closePage('needToIntroduceChart'); this.props.calculateCalories()}}>Calculate Calories</button>
      </React.Fragment>
    )
  }
}

export default CaloriesIn;
