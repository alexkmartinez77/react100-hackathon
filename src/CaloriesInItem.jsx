import React, {Component} from "react";

class CaloriesInItem extends Component {

  render() {
    const {name, calories} = this.props.caloriesInItem;

    return (
      <li className="collection-item">
          <span className="redColor caloriesData">{name} </span>
          <span className="caloriesData"> {calories} cal</span>
      </li>
    )
  }
}

export default CaloriesInItem;
