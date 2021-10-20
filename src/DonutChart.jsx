import React, { Component } from 'react';
import Chart from 'react-apexcharts'

export class DonutChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ['Carbs', 'Protein', 'Fats']
      },
      series: [55, 35, 10],
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