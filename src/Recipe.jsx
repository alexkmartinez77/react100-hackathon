import React, {Component} from "react";
import M from "materialize-css";

class Recipe extends Component {
  componentDidMount() {
  var elem = document.querySelector('.carousel');
  var instance = M.Carousel.init(elem, { duration: 200 });
}
   render() {
     //let recipeName =this.props.recipeData.recipe.label;
    return (
      <React.Fragment>
        <div className="carousel">
          <a className="carousel-item" href="#"><img src={this.props.recipeData[0].recipe.image}></img></a>
          <a className="carousel-item" href="#"><img src={this.props.recipeData[1].recipe.image}></img></a>
          <a className="carousel-item" href="#"><img src={this.props.recipeData[2].recipe.image}></img></a>
          <a className="carousel-item" href="#"><img src={this.props.recipeData[3].recipe.image}></img></a>
          <a className="carousel-item" href="#"><img src={this.props.recipeData[4].recipe.image}></img></a>
          <a className="carousel-item" href="#"><img src={this.props.recipeData[5].recipe.image}></img></a>
          <a className="carousel-item" href="#"><img src={this.props.recipeData[6].recipe.image}></img></a>
          <a className="carousel-item" href="#"><img src={this.props.recipeData[7].recipe.image}></img></a>
          <a className="carousel-item" href="#"><img src={this.props.recipeData[8].recipe.image}></img></a>
          <a className="carousel-item" href="#"><img src={this.props.recipeData[9].recipe.image}></img></a>
        </div>      
      </React.Fragment>
    )
  }
}

export default Recipe;
