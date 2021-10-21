import React, {Component} from "react";
import DonutChart from "./DonutChart";

class ManageCalories extends Component {
  render() {
    return (
      <div>
        <DonutChart userProfile={this.props.userProfile}/>
      </div>
    )
  }
}

export default ManageCalories;
