import React, {Component} from "react";

class CaloriesIn extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let switchCopy = JSON.parse(JSON.stringify(this.props.switch));
    switchCopy.needFoodData = true;
    this.props.closePage(switchCopy);
    this.props.getNutritionData();
  }
  render() {
    return (
      <div className="row card">
        <div className="col s12">
          <form action="#">
            <label htmlFor="footItem">Enter Food Item</label>
            <input name="foodItem" type="text" placeholder="ex. Steak Burrito" onChange={(e) => this.props.handleItemInput(e)}/>
            <div className="center-align row">
              <button type="button" className="waves-effect waves-light btn buttonColor" onClick={() => this.handleClick()}>Calculate</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default CaloriesIn;
