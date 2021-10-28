import React, {Component} from "react";

class DisplayFoodItemNutrition extends Component {
  render() {
    const {name, calories, protein, fat, carbohydrate} = this.props.caloriesInItem;
    return (
      <React.Fragment>
        <p>A {name} has {calories} calories and the following pofile :</p>
        <p>Protein: {protein}g</p>
        <p>Fat: {fat}g</p>
        <p>Carbohydrates: {carbohydrate}g</p>
        <p>You can log this food item or calculate another.</p>
        <button className="waves-effect waves-light btn" onClick={() => {this.props.logCaloriesIn(), this.props.closePage('needFoodData')}}>Log</button>
      </React.Fragment>
    )
  }
}

export default DisplayFoodItemNutrition;
