import React, {Component} from "react";

class CalorieControlPanel extends Component {
  constructor(props) {
    super(props);
    this.handleCaloriesInPanel = this.handleCaloriesInPanel.bind(this);
  }
  
  handleCaloriesInPanel(){
    let switchCopy = JSON.parse(JSON.stringify(this.props.switch));
    switchCopy.needCaloriesIn = true;
    switchCopy.showCalorieControlPanel = false;
    //switchCopy.needCaloriesOutLog = !switchCopy.needCaloriesOutLog;
    this.props.closePage(switchCopy);
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
            <div className="col s4 center-align">
              <div className="row">
                <div className="col s4 offset-s2">
                  <span className="material-icons redColor pointer" onClick={() => this.handleCaloriesInPanel()}>playlist_add</span>
                </div>
                <div className="col s4">
                  <span className="material-icons redColor">manage_search</span>
                </div>
              </div>
            </div>
            <div className="col s4 center-align">
              <div className="row">
                <div className="col s12">
                  <span className="material-icons yellowColor">manage_search</span>
                </div>
              </div>
            </div>
            <div className="col s4 center-align">
              <div className="row">
                <div className="col s4 offset-s2">
                  <span className="material-icons greenColor">playlist_add</span>
                </div>
                <div className="col s4">
                  <span className="material-icons greenColor">manage_search</span>
                </div>
              </div>
            </div>
          </div>
      </React.Fragment>
    )
  }
}

export default CalorieControlPanel;
