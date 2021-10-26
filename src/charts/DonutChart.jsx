import React, { Component } from 'react';
import Chart from 'react-apexcharts'

export class DonutChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ['Consumed', 'Left Over'],
        colors: ['#339933', '#cc0000'],
        title: {
          text: 'Calories',
          align: 'center',
          style: {
            fontSize: '30px',
          }
        },
        plotOptions: {
          pie: {
            startAngle:0,
            endAngle: 360,
            expandOnClick: false,
            dataLabels: {
              offset: 0,
              minAngleToShowLabel: 10
            },
            donut: {
              size: '90px',
              labels: {
                show: true,
                showAlways: true,
                fontSize: '50px',
                color: '#2787AB'
              }
            }
          }
        },
        dataLabels: {
          enabled: true,
        }
      },
      series: [8,16],
    }
  }

  render() {
    
    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.props.array} type="donut" width="380" />
      </div>
    );
  }
}

export default DonutChart;