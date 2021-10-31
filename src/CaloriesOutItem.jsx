import React, {Component} from "react";

class CaloriesOutItem extends Component {

  render() {
    const {name, calories} = this.props.caloriesOutItem;

    return (
      <li className="collection-item">
          <span className="greenColor caloriesData">{name} </span>
          <span className="caloriesData"> {calories} cal</span>
      </li>
    )
  }
}

export default CaloriesOutItem;
