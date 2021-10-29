import React, {Component} from "react";

class RecipesOption extends Component {
  render() {
    return (
      <React.Fragment>
        <p>You have {this.props.caloriesRemaining} calories remaining. Would you like to see a list of recipes for foods that fall within this calorie range?</p>
        <button className="waves-effect waves-light btn" onClick={() => {this.props.retrieveRecipes(), this.props.closePage('showRecipesOption')}}>Retrieve Recipes</button>
      </React.Fragment>
    )
  }
}

export default RecipesOption;
