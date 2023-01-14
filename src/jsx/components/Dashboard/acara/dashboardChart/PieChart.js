import React from "react";
import ReactApexChart from "react-apexcharts";

class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [65, 55, 45],
      options: {
        chart: {
          type: "radialBar",
          height: 350,
          offsetY: 0,
          offsetX: 0,
          sparkline: {
            enabled: true,
          },
        },
        plotOptions: {
          radialBar: {
            size: undefined,
            inverseOrder: false,
            hollow: {
              margin: 0,
              size: "25%",
              background: "transparent",
            },

            track: {
              show: true,
              background: "#e1e5ff",
              strokeWidth: "12%",
              opacity: 1,
              margin: 10, // margin is in pixels
            },
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                offsetY: 0,
                offsetX: 0,
              },
              legend: {
                position: "bottom",
                offsetX: 0,
                offsetY: 0,
              },
            },
          },
        ],
        fill: {
          opacity: 1,
        },
        stroke: {
          lineCap: "round",
        },
        colors: ["#FE634E", "#707070", "#BFBFBF"],

        labels: ["Ticket A", "Ticket B", "Ticket C"],

        legend: {
          fontSize: "14px",
          show: true,
          position: "bottom",
        },
      },
    };
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="radialBar"
        height="350px"
      />
    );
  }
}

export default PieChart;
