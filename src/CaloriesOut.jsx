import React, {Component} from "react";

class CaloriesIn extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    let switchCopy = JSON.parse(JSON.stringify(this.props.switch));
    switchCopy.needExerciseData = true;
    this.props.closePage(switchCopy);
    this.props.getExerciseData();
  }
  render() {
    return (
      <div className="row card">
        <div className="col s12">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="exerciseItem">Enter Exercise Activity</label>
            <input name="exerciseItem" type="text" placeholder="ex. 20 min walking" onChange={(e) => this.props.handleItemInput(e)} required/>
            <div className="center-align row">
              <button type="submit" className="waves-effect waves-light btn buttonColor">Calculate</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default CaloriesIn;
