import React, { Component } from 'react';
import Chart from 'react-apexcharts'

export class DonutChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [20, 20, 20, 20, 20],
      labels: ['A', 'B', 'C', 'D', 'E']
    }
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
      </div>
    );
  }
}

export default DonutChart;