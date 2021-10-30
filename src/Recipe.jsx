import React, {Component} from "react";

class Recipe extends Component {
   render() {
    return (
      <div className="card carousel-item">
        <div>
          <div className="col s6 caloriesHeader left-align">
            <span>Calories</span>
          </div>
          <div className="col s6 caloriesHeader right-align">
            <span>{(this.props.recipe.recipe.calories/this.props.recipe.recipe.yield).toFixed(2)}</span>
          </div>
        </div>
        <img src={this.props.recipe.recipe.image}></img>
        <div className="caloriesHeader">
          <span>{this.props.recipe.recipe.label}</span>
        </div>
        <div>
          <a className="valign-wrapper" href={this.props.recipe.recipe.url} target="_blank">
            <span className="material-icons">link</span>Recipe
          </a>
        </div>
      </div>
    )
  }
}

export default Recipe;
