import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class RadialChart extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    series: [50],
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
        offsetY: -10
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          hollow: {
            margin: 30,
            size: '60%',
            image: undefined,
            imageWidth: 64,
            imageHeight: 64,
            imageClipped: false
          },
          dataLabels: {
            name: {
              fontSize: '16px',
              color: undefined,
              offsetY: 120
            },
            value: {
              offsetY: 76,
              fontSize: '22px',
              color: undefined,
              formatter: function (val) {
                return val + "%";
              }
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
        },
      },
      stroke: {
        dashArray: 4
      },
      labels: ['Calories Left'],
    },
  };
}

  render() {
    return (
      <div id="chart">
        <Chart options={this.state.options} series={this.props.leftOver} type="radialBar" height={350} />
      </div>          
      );
  }
}

export default RadialChart;
    