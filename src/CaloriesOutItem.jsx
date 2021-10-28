import React, {Component} from "react";

class CaloriesOutItem extends Component {

  render() {
    const {name, calories} = this.props.calorieOutItem;

    return (
      <React.Fragment>
        <p>{name} {calories}</p>
      </React.Fragment>
    )
  }
}

export default CaloriesOutItem;
