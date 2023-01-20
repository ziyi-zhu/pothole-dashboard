import React from "react";
import ReactApexChart from "react-apexcharts";

class SalesChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [89.1],
      options: {
        chart: {
          height: 250,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "55%",
              background: "#fff",
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: "front",
            },
            dataLabels: {
              value: {
                offsetY: 0,
                fontSize: "24px",
                color: "black",
              },
            },
          },
        },
        fill: {
          type: "gradient",
          colors: "#FE634E",
          gradient: {
            shade: "dark",
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91],
          },
        },
        stroke: {
          lineCap: "round",
          colors: "#FE634E",
        },
        labels: [""],
      },
    };
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="radialBar"
        height="250px"
      />
    );
  }
}

export default SalesChart;
