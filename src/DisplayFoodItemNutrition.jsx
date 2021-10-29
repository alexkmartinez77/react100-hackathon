import React, {Component} from "react";

class DisplayFoodItemNutrition extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let switchCopy = JSON.parse(JSON.stringify(this.props.switch));
    switchCopy.needFoodData = !switchCopy.needFoodData;
    this.props.closePage(switchCopy);
    this.props.logCaloriesIn();
  }
  render() {
    const {name, calories, protein, fat, carbohydrate} = this.props.caloriesInItem;
    return (
      <React.Fragment>
        <p>A {name} has {calories} calories and the following pofile :</p>
        <p>Protein: {protein}g</p>
        <p>Fat: {fat}g</p>
        <p>Carbohydrates: {carbohydrate}g</p>
        <p>You can log this food item or calculate another.</p>
        <button className="waves-effect waves-light btn" onClick={() => this.handleClick()}>Log</button>
      </React.Fragment>
    )
  }
}

export default DisplayFoodItemNutrition;
