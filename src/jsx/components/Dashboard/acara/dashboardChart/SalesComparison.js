import React from "react";
import ReactApexChart from "react-apexcharts";

class SalesComparison extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Aplication Sent",
          data: [40, 60, 20, 45, 70, 35, 40, 75, 45, 30, 55, 65, 20],
        },
        {
          name: "Appllication Answered",
          data: [20, 35, 40, 60, 35, 16, 60, 45, 60, 45, 20, 35, 55],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 250,
          stacked: true,
          toolbar: {
            show: false,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "30%",

            endingShape: "rounded",
            startingShape: "rounded",
            backgroundRadius: 10,
            colors: {
              backgroundBarColors: [
                "#ECECEC",
                "#ECECEC",
                "#ECECEC",
                "#ECECEC",
                "#ECECEC",
                "#ECECEC",
                "#ECECEC",
              ],
              backgroundBarOpacity: 1,
              backgroundBarRadius: 10,
            },
          },
        },
        colors: ["#707070", "#FE634E"],
        xaxis: {
          show: true,
          axisBorder: {
            show: false,
          },

          labels: {
            style: {
              colors: "#828282",
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: "light",
              cssClass: "apexcharts-xaxis-label",
            },
          },
          crosshairs: {
            show: false,
          },

          categories: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
          ],
        },
        yaxis: {
          show: false,
        },
        grid: {
          show: false,
        },
        toolbar: {
          enabled: false,
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        fill: {
          opacity: 1,
        },
      },
    };
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="bar"
        height="250px"
      />
    );
  }
}

export default SalesComparison;
