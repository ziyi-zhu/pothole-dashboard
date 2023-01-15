import React from "react";
import ReactApexChart from "react-apexcharts";

class PolarAreaCharts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [42, 47, 52, 58],
      options: {
        chart: {
          // width: 270,
          type: "polarArea",
          sparkline: {
            enabled: true,
          },
        },
        labels: ["Residential", "Main", "Industrial", "Motorways"],
        fill: {
          opacity: 1,
          colors: ["#707070", "#BFBFBF", "#F3F3F3", "#FE634E"],
        },
        stroke: {
          width: 0,
          colors: undefined,
        },
        yaxis: {
          show: false,
        },
        legend: {
          position: "bottom",
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0,
            },
            spokes: {
              strokeWidth: 0,
            },
          },
        },
        theme: {
          monochrome: {
            enabled: true,
            shadeTo: "light",
            shadeIntensity: 0,
          },
        },
      },
    };
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="polarArea"
        height="270px"
      />
    );
  }
}

export default PolarAreaCharts;
