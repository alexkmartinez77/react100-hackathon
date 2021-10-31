import React, {Component} from "react";

class DisplayFoodItemNutrition extends Component {
  constructor(props) {
    super(props);
    this.handleLogClick = this.handleLogClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  handleLogClick(){
    let switchCopy = JSON.parse(JSON.stringify(this.props.switch));
    switchCopy.needFoodData = false;
    switchCopy.needCaloriesIn = false;
    switchCopy.needCaloriesInLog = false;
    switchCopy.showCalorieControlPanel = true;
    this.props.closePage(switchCopy);
    this.props.logCaloriesIn();
  }

  handleCloseClick(){
    let switchCopy = JSON.parse(JSON.stringify(this.props.switch));
    switchCopy.needFoodData = false;
    switchCopy.needCaloriesIn = false;
    switchCopy.needCaloriesInLog = false;
    switchCopy.showCalorieControlPanel = true;
    this.props.closePage(switchCopy);
  }

  render() {
    const {name, calories, protein, fat, carbohydrate} = this.props.caloriesInItem;
    return (
      <React.Fragment>
        <div className="calorieBorderBox ">
          <div className="matchColPadding">
            <h5>Nutrition Facts</h5>
            <span className="calorieBold">{name}</span>
          </div>
          <div>
            <div className="col s6 caloriesHeader left-align nutritionLabelPadding">
              <span className="calorieBold">Calories</span>
            </div>
            <div className="col s6 caloriesHeader right-align nutritionLabelPadding">
              <span>{calories}</span>
            </div>
          </div>
          <div className="caloriesRow matchColPadding nutritionLabelPadding">
            <span className="calorieBold">Fat: </span>
            <span>{fat} g</span>
          </div>
          <div className="caloriesRow matchColPadding nutritionLabelPadding">
            <span className="calorieBold">Protein: </span>
            <span>{protein} g</span>
          </div>
          <div className=" matchColPadding nutritionLabelPadding">
            <span className="calorieBold">Carb: </span>
            <span>{carbohydrate} g</span>
          </div>
        </div>
        <div className="row">
          <div className="col s2 offset-s4">
            <span className="material-icons pointer" onClick={() => this.handleLogClick()}>playlist_add</span>
          </div>
          <div className="col s2">
            <span className="material-icons pointer" onClick={() => this.handleCloseClick()}>cancel_presentation</span>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default DisplayFoodItemNutrition;
