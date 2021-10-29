import React, {Component} from "react";

class RecipesOption extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let switchCopy = JSON.parse(JSON.stringify(this.props.switch));
    switchCopy.showRecipesOption = !switchCopy.showRecipesOption;
    this.props.closePage(switchCopy);
    this.props.retrieveRecipes();
  }
  render() {
    return (
      <React.Fragment>
        <p>You have {this.props.caloriesRemaining} calories remaining. Would you like to see a list of recipes for foods that fall within this calorie range?</p>
        <button className="waves-effect waves-light btn" onClick={() => this.handleClick()}>Retrieve Recipes</button>
      </React.Fragment>
    )
  }
}

export default RecipesOption;
