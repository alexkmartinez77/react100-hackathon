import React, {Component} from "react";

class WeightLoss extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="row removeRowMargin">
          <div className="col s8 poppinsFont"><span>Weight Loss Goal: </span></div>
          <div className="col s4 right-align poppinsFont">- 500 cal</div>
        </div>
        <div className="row">
          <div className="col s8"><span className="greyColor">500 calories is the recommended maximum deficit.</span></div>
          <div className="col s4"></div>
        </div>
      </React.Fragment>
    )
  }
}

export default WeightLoss;
