import React, {Component} from "react";

class CaloriesInItem extends Component {

  render() {
    const {name, calories} = this.props.calorieInItem;

    return (
      <React.Fragment>
        <p>{name} {calories}</p>
      </React.Fragment>
    )
  }
}

export default CaloriesInItem;
