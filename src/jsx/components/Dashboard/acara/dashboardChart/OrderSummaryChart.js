import React from "react";
import ReactApexChart from "react-apexcharts";

class OrderSummaryChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [45, 30, 25],
      options: {
        chart: {
          type: "donut",
        },
        legend: {
          show: false,
        },
        plotOptions: {
          pie: {
            donut: {
              size: "40%",
            },
          },
        },
        stroke: {
          width: "10",
        },
        dataLabels: {
          formatter(val, opts) {
            //const name = opts.w.globals.labels[opts.seriesIndex];
            return [val.toFixed() + "%"];
          },
          dropShadow: {
            enabled: false,
          },
          style: {
            fontSize: "15px",
            colors: ["#fff"],
          },
        },
        colors: ["#214BB8", "#45ADDA", "#FE634E"],
        /* responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
				show:false,
              position: 'bottom'
            }
          }
        }] */
      },
    };
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="donut"
        // height="200px"
      />
    );
  }
}

export default OrderSummaryChart;
