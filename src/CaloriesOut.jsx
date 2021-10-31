import React, {Component} from "react";

class CaloriesIn extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let switchCopy = JSON.parse(JSON.stringify(this.props.switch));
    switchCopy.needExerciseData = true;
    this.props.closePage(switchCopy);
    this.props.getExerciseData();
  }
  render() {
    return (
      <div className="row card">
        <div className="col s12">
          <form action="#">
            <label htmlFor="exerciseItem">Enter Exercise Activity</label>
            <input name="exerciseItem" type="text" placeholder="ex. 20 min walking" onChange={(e) => this.props.handleItemInput(e)}/>
          </form>
          <button className="waves-effect waves-light btn" onClick={() => this.handleClick()}>Calculate</button>
        </div>
      </div>
    )
  }
}

export default CaloriesIn;
