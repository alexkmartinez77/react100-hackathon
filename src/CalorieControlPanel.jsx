import React, {Component} from "react";

class CalorieControlPanel extends Component {
  constructor(props) {
    super(props);
    this.handleCaloriesInPanel = this.handleCaloriesInPanel.bind(this);
    this.handleCaloriesInLog = this.handleCaloriesInLog.bind(this);
    this.handleCaloriesOutPanel = this.handleCaloriesOutPanel.bind(this);
    this.handleCaloriesOutLog = this.handleCaloriesOutLog.bind(this);
    this.handleRecipesOption = this.handleRecipesOption.bind(this);
  }
  
  handleCaloriesInPanel(){
    let switchCopy = JSON.parse(JSON.stringify(this.props.switch));
    switchCopy.needCaloriesIn = true;
    switchCopy.showCalorieControlPanel = false;
    this.props.closePage(switchCopy);
  }

  handleCaloriesInLog(){
    let switchCopy = JSON.parse(JSON.stringify(this.props.switch));
    switchCopy.needCaloriesInLog = true;
    switchCopy.showCalorieControlPanel = false;
    this.props.closePage(switchCopy);
  }

  handleCaloriesOutPanel(){
    let switchCopy = JSON.parse(JSON.stringify(this.props.switch));
    switchCopy.needCaloriesOut = true;
    switchCopy.showCalorieControlPanel = false;
    this.props.closePage(switchCopy);
  }

  handleCaloriesOutLog(){
    let switchCopy = JSON.parse(JSON.stringify(this.props.switch));
    switchCopy.needCaloriesOutLog = true;
    switchCopy.showCalorieControlPanel = false;
    this.props.closePage(switchCopy);
  }

  handleRecipesOption(){
    let switchCopy = JSON.parse(JSON.stringify(this.props.switch));
    switchCopy.showRecipesOption = true;
    switchCopy.showCalorieControlPanel = false;
    this.props.closePage(switchCopy);
  }

  render() {
    return (
      <React.Fragment>
        <div className="row removeRowMargin">
            <div className="col s4 center-align">
              <div className="row removeRowMargin">
                <div className="col s4 offset-s2">
                  <span className="material-icons redColor pointer" onClick={() => this.handleCaloriesInPanel()}>playlist_add</span>
                </div>
                <div className="col s4">
                  <span className="material-icons redColor pointer" onClick={() => this.handleCaloriesInLog()}>manage_search</span>
                </div>
              </div>
            </div>
            <div className="col s4 center-align">
              <div className="row removeRowMargin">
                <div className="col s12">
                  <span className="material-icons yellowColor pointer" onClick={() => this.handleRecipesOption()}>manage_search</span>
                </div>
              </div>
            </div>
            <div className="col s4 center-align">
              <div className="row removeRowMargin">
                <div className="col s4 offset-s2">
                  <span className="material-icons greenColor pointer" onClick={() => this.handleCaloriesOutPanel()}>playlist_add</span>
                </div>
                <div className="col s4">
                  <span className="material-icons greenColor pointer" onClick={() => this.handleCaloriesOutLog()}>manage_search</span>
                </div>
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col s4 center-align">
              <div className="row">
                <div className="col s4 offset-s2">
                  <span className="redColor poppinsFont cpLabelFont">Add</span>
                </div>
                <div className="col s4">
                  <span className="redColor poppinsFont cpLabelFont">View</span>
                </div>
              </div>
            </div>
            <div className="col s4 center-align">
              <div className="row">
                <div className="col s12">
                  <span className="yellowColor poppinsFont cpLabelFont">Recipes</span>
                </div>
              </div>
            </div>
            <div className="col s4 center-align">
              <div className="row">
                <div className="col s4 offset-s2">
                  <span className="greenColor poppinsFont cpLabelFont">Add</span>
                </div>
                <div className="col s4">
                  <span className="greenColor poppinsFont cpLabelFont">View</span>
                </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default CalorieControlPanel;
