import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Increase extends Component {
  render() {
    const data = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Aug",
      ],

      datasets: [
        {
          label: "Sales Stats",
          backgroundColor: ["rgba(19, 180, 151, 0)"],
          borderColor: "#FE634E",
          pointBackgroundColor: "#FE634E",
          pointBorderColor: "#FE634E",
          borderWidth: 6,
          borderRadius: 10,
          pointHoverBackgroundColor: "#FE634E",
          pointHoverBorderColor: "#FE634E",
		  tension:0.4,
          data: [5, 1, 5, 1, 7, 2, 6, 1],
        },
      ],
    };

    const options = {
		plugins:{			
		  legend: {
			display: !1,
		  }
		},
      title: {
        display: !1,
      },
      tooltips: {
        intersect: !1,
        mode: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10,
      },
		
      responsive: true,
      maintainAspectRatio: false,
      hover: {
        mode: "index",
      },
      scales: {
        x: 
          {
            display: !1,
            grid: !1,
            scaleLabel: {
              display: !0,
              labelString: "Month",
            },
          },
        y: 
          {
            display: !1,
            gridLines: !1,
            scaleLabel: {
              display: !0,
              labelString: "Value",
            },
            ticks: {
              beginAtZero: !0,
            },
          },
      },
      elements: {
        point: {
          radius: 0,
          borderWidth: 0,
        },
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 5,
          bottom: 0,
        },
      },
    };
    return <Line data={data} options={options} height={50} />;
  }
}

export default Increase;
