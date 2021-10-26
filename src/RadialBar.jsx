import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class RadialBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [70],
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            }
          },
        },
        labels: ['Calories Left'],
      },
    };
  }



render() {
  return (
    <div> 
      <Chart options={this.state.options} series={this.props.leftOver} type="radialBar" height={350} />
    </div>
    );
  }
}

export default RadialBar;