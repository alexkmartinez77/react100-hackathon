import React, {Component} from "react";

class Form extends Component {
  render() {
    return (
      <React.Fragment>
        <h5>Tell us about yourself.</h5>
        <form action="#">
          <div onChange={(e) => this.props.handleInput(e)}>
            <label>
              <input className="with-gap" name="gender" value="male" type="radio" />
              <span>Male</span>
            </label>
            <label>
              <input className="with-gap" name="gender" value="female" type="radio" />
              <span>Female</span>
            </label>
          </div>

          <label htmlFor="age">Age</label>
          <input name="age" type="number" onChange={(e) => this.props.handleInput(e)}/>

          <label htmlFor="weight">Weight</label>
          <input name="weight" type="number" onChange={(e) => this.props.handleInput(e)}/>

          <label htmlFor="feet">Feet</label>
          <input name="feet" type="number" onChange={(e) => this.props.handleInput(e)}/>
          <label htmlFor="Inches">Inches</label>
          <input name="inches" type="number" onChange={(e) => this.props.handleInput(e)}/>

          <div onChange={(e) => this.props.handleInput(e)}>
            <label>
              <input className="with-gap" name="goals" value="maintenance" type="radio" />
              <span>Maintenance</span>
            </label>
            <label>
              <input className="with-gap" name="goals" value="weight loss" type="radio" />
              <span>Weight Loss</span>
            </label>
          </div>
        </form>
        <button className="waves-effect waves-light btn" onClick={() => {this.props.closePage('needInfo'); this.props.closePage('needToIntroduceChart'); this.props.calculateCalories()}}>Proceed</button>
      </React.Fragment>
    )
  }
}

export default Form;
