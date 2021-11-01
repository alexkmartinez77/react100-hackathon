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
        <h1 className="center-align">Welcome to <span className="adventProFont"><span>F</span><span className="blueColor">3</span></span></h1>
        <p className="center-align adventProFont welcomeFontSize"><span className="blueColor">Feast</span> - <span className="blueColor">Fast</span> - <span className="blueColor">Fitness</span></p>
        <p className="poppinsFont">This app assists with your weight loss / maintenance goals by tracking food choices and recommending recipes and excercises to stay on track.</p>
        <p>{this.props.switch.firstTime}</p>
        <div className="center-align row">
          <button className="waves-effect waves-light btn buttonColor" onClick={() => this.handleClick()}>Enter</button>
        </div>
      </React.Fragment>
    )
  }
}

export default Welcome;
