import React, {Component} from "react";

class Welcome extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Welcome to F3</h1>
        <p>Feast - Fast - Fitness</p>
        <p>This app assists with your weight loss/maintenance goals by tracking food choices and recommending recipes and excercises to stay on track.</p>
        <button className="waves-effect waves-light btn" onClick={() => this.props.closePage('firstTime')}>Enter</button>
      </React.Fragment>
    )
  }
}

export default Welcome;
