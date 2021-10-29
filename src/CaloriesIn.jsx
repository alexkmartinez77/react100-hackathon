import React, {Component} from "react";

class CaloriesIn extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.getNutritionData();
    this.props.closePage('needFoodData');
  }
  render() {
    return (
      <React.Fragment>
        <form action="#">
          <p>Total Calories In: {this.props.caloriesInTotal}</p>
          <label htmlFor="footItem">Enter Food Item</label>
          <input name="foodItem" type="text" placeholder="ex. Steak Burrito" onChange={(e) => this.props.handleItemInput(e)}/>
        </form>
        <button className="waves-effect waves-light btn" onClick={() => this.handleClick()}>Calculate</button>
      </React.Fragment>
    )
  }
}

export default CaloriesIn;
