import React, {Component} from "react";

class Recipe extends Component {
   render() {
     let recipeName =this.props.recipeData.recipe.label;
    return (
      <React.Fragment>
        <p>{recipeName}</p>
      </React.Fragment>
    )
  }
}

export default Recipe;
