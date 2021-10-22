import React, {Component} from "react";

class ChartIntro extends Component {

  render() {
    return (
      <React.Fragment>
        <p>Based on the data you provided, your calorie intake should be {this.props.caloricGoals} 
            for your {this.props.goals} goals. The chart above will keep track of the calories you have
            consumed {`(red bar)`} vs calories you have left {`(green bar)`} to eat for the day.
        </p>
        <p><a style={{color: 'blue', cursor: 'pointer'}} onClick={() => this.props.closePage('needToIntroduceChart')}>Start logging</a> your calories.</p>
      </React.Fragment>
    )
  }
}

export default ChartIntro;
