import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class SalesRevenue extends Component {
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
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "My First dataset",
          data: [35, 40, 30, 38, 32, 42, 30, 35, 22, 30, 45, 30],
          borderColor: "rgba(254, 99, 78, 1)",
          borderWidth: "8",
          backgroundColor: "rgba(254, 99, 78, 0.1)",
		  tension:0.4,
		  fill:true
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        point: {
          radius: 0,
        },
      },
      plugins:{
		  legend: false,
	  },

      scales: {
        y: 
          {
            grid: {
              color: "rgba(89, 59, 219,0.1)",
              drawBorder: true,
            },
            ticks: {
              fontColor: "#e3e3e3",
            },
          },

        x: 
          {
            grid: {
              display: false,
              zeroLineColor: "transparent",
            },
            ticks: {
              stepSize: 5,
              fontColor: "#e3e3e3",
              fontFamily: "Nunito, sans-serif",
            },
          },
        
      },
      tooltips: {
        enabled: false,
        mode: "index",
        intersect: false,
        titleFontColor: "#888",
        bodyFontColor: "#555",
        titleFontSize: 12,
        bodyFontSize: 15,
        backgroundColor: "rgba(256,256,256,0.95)",
        displayColors: true,
        xPadding: 10,
        yPadding: 7,
        borderColor: "rgba(220, 220, 220, 0.9)",
        borderWidth: 2,
        caretSize: 6,
        caretPadding: 10,
      },
    };

    return (
      <div style={{ height: "300px" }}>
        <Line data={data} options={options} height={300} />
      </div>
    );
  }
}

export default SalesRevenue;
