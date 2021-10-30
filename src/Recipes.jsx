import React, {Component} from "react";
import Recipe from "./Recipe";
import M from "materialize-css";

class Recipes extends Component {
  componentDidMount() {
  var elem = document.querySelector('.carousel');
  var instance = M.Carousel.init(elem, { duration: 200});
  }

  render() {
    let displayRecipe;
      displayRecipe = this.props.recipeData.map((recipe, index) => {
      return <Recipe key={index} recipe={recipe}/>
    })
    return (
      <div className="carousel">
        {displayRecipe}
      </div>      
    )
  }
}

export default Recipes;
