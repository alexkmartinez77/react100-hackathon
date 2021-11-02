import React, {Component} from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
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
        <form onSubmit={this.handleSubmit}>
          <div onChange={(e) => this.props.handleInput(e)}>
            <span className="poppinsFont">Gender: </span>
            <label>
              <input className="with-gap" name="gender" value="male" type="radio" required/>
              <span className="radioPadding poppinsFont">Male</span>
            </label>
            <label>
              <input className="with-gap" name="gender" value="female" type="radio" />
              <span className="radioPadding poppinsFont">Female</span>
            </label>
          </div>
          <div className="input-field col s12">
            <input id="age" className="validate" name="age" type="number" data-length="2" min="1" onChange={(e) => this.props.handleInput(e)} required/>
            <label className="poppinsFont" htmlFor="age">Age</label>
            <span className="helper-text" data-error="wrong" data-success="right"></span>
          </div>
          <div className="input-field col s12">
            <input id="weight" className="validate" name="weight" type="number" data-length="3" min="1" step="1" onChange={(e) => this.props.handleInput(e)} required/>
            <label className="poppinsFont" htmlFor="weight">Weight</label>
            <span className="helper-text" data-error="wrong" data-success="right"></span>
          </div>
          <div className="input-field col s12">
            <input id="feet" className="validate" name="feet" type="number" data-length="2" min="1" step="1" onChange={(e) => this.props.handleInput(e)} required/>
            <label className="poppinsFont" htmlFor="feet">Height: Feet</label>
            <span className="helper-text" data-error="wrong" data-success="right"></span>
          </div>
          <div className="input-field col s12">
            <input id="inches" className="validate" name="inches" type="number" data-length="2" min="0" step="1" onChange={(e) => this.props.handleInput(e)} required/>
            <label className="poppinsFont" htmlFor="inches">Height: Inches</label>
            <span className="helper-text" data-error="wrong" data-success="right"></span>
          </div>
          <div onChange={(e) => this.props.handleInput(e)}>
            <span className="poppinsFont">Goals:</span>
            <label>
              <input className="with-gap" name="goals" value="maintenance" type="radio" required/>
              <span className="radioPadding poppinsFont">Maintenance</span>
            </label>
            <label>
              <input className="with-gap" name="goals" value="weight loss" type="radio" />
              <span className="radioPadding poppinsFont">Weight Loss</span>
            </label>
          </div>
          <br></br>
          <div className="center-align row">
            {/*<input type="submit" value="Proceed"></input>*/}
            <button type="submit" name="action" className="waves-effect waves-light btn buttonColor">Proceed</button>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

export default Form;
