import React, {Component} from "react";
import Recipe from "./Recipe";
import M from "materialize-css";

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.closeRecipes = this.closeRecipes.bind(this);
  }
  
  closeRecipes(){
    let switchCopy = JSON.parse(JSON.stringify(this.props.switch));
    switchCopy.showRecipes = false;
    switchCopy.showCalorieControlPanel = true;
    this.props.closePage(switchCopy);
  }

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
      <React.Fragment>
        <div className="carousel carousel-slider">
          {displayRecipe}
        </div>     
        <div className="center-align">
          <span className="material-icons pointer" onClick={() => this.closeRecipes()}>cancel_presentation</span>
        </div>
      </React.Fragment> 
    )
  }
}

export default Recipes;
