import React, {Component} from "react";

class CaloriesIn extends Component {
  render() {
    return (
      <React.Fragment>
        <form action="#">

          <label htmlFor="footItem">Calories In</label>
          <input name="foodItem" type="text" placeholder="Enter Food Item" onChange={(e) => this.props.handleInput(e)}/>

        </form>
        <button className="waves-effect waves-light btn" onClick={() => {this.props.calculateCaloriesIn()}}>Calculate Calories</button>
      </React.Fragment>
    )
  }
}

export default CaloriesIn;
