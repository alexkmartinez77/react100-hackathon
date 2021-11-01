import React, {Component} from "react";

class RecipesOption extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let switchCopy = JSON.parse(JSON.stringify(this.props.switch));
    switchCopy.showRecipesOption = false;
    switchCopy.showRecipes = true;
    this.props.closePage(switchCopy);
    this.props.retrieveRecipes();
  }
  render() {
    return (
      <React.Fragment>
        <p>You have <span className="blueColor">{this.props.caloriesRemaining}</span> calories remaining. Would you like to see a list of recipes for foods that fall within this calorie range?</p>
        <div className="center-align">
          <button className="waves-effect waves-light btn buttonColor" onClick={() => this.handleClick()}>Retrieve Recipes</button>
        </div>
      </React.Fragment>
    )
  }
}

export default RecipesOption;
