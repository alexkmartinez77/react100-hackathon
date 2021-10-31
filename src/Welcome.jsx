import React, {Component} from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let switchCopy = JSON.parse(JSON.stringify(this.props.switch));
    switchCopy.firstTime = false;
    this.props.closePage(switchCopy);
  }
  render() {
    return (
      <React.Fragment>
        <h1>Welcome to F3</h1>
        <p>Feast - Fast - Fitness</p>
        <p>This app assists with your weight loss/maintenance goals by tracking food choices and recommending recipes and excercises to stay on track.</p>
        <p>{this.props.switch.firstTime}</p>
        <button className="waves-effect waves-light btn" onClick={() => this.handleClick()}>Enter</button>
      </React.Fragment>
    )
  }
}

export default Welcome;
