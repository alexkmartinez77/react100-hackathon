import React, {Component} from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let switchCopy = JSON.parse(JSON.stringify(this.props.switch));
    switchCopy.needInfo = false;
    switchCopy.needToIntroduceChart = true;
    this.props.closePage(switchCopy);
    this.props.calculateCalorieNeeds();
  }

  render() {
    return (
      <React.Fragment>
        <h5>Tell us about yourself.</h5>
        <form action="#">
          <div onChange={(e) => this.props.handleInput(e)}>
            <span className="poppinsFont">Gender: </span>
            <label>
              <input className="with-gap" name="gender" value="male" type="radio" />
              <span className="radioPadding poppinsFont">Male</span>
            </label>
            <label>
              <input className="with-gap" name="gender" value="female" type="radio" />
              <span className="radioPadding poppinsFont">Female</span>
            </label>
          </div>
          <label className="poppinsFont" htmlFor="age">Age</label>
          <input className="poppinsFont" name="age" type="number" onChange={(e) => this.props.handleInput(e)}/>
          <label className="poppinsFont" htmlFor="weight">Weight</label>
          <input className="poppinsFont" name="weight" type="number" onChange={(e) => this.props.handleInput(e)}/>
          <label className="poppinsFont" htmlFor="feet">Height: Feet</label>
          <input className="poppinsFont" name="feet" type="number" onChange={(e) => this.props.handleInput(e)}/>
          <label className="poppinsFont" htmlFor="Inches">Height: Inches</label>
          <input className="poppinsFont" name="inches" type="number" onChange={(e) => this.props.handleInput(e)}/>
          <div onChange={(e) => this.props.handleInput(e)}>
            <span className="poppinsFont">Goals:</span>
            <label>
              <input className="with-gap" name="goals" value="maintenance" type="radio" />
              <span className="radioPadding poppinsFont">Maintenance</span>
            </label>
            <label>
              <input className="with-gap" name="goals" value="weight loss" type="radio" />
              <span className="radioPadding poppinsFont">Weight Loss</span>
            </label>
          </div>
          <br></br>
          <div className="center-align row">
              <button type="button" className="waves-effect waves-light btn buttonColor" onClick={() => this.handleClick()}>Proceed</button>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

export default Form;
