import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class RevenueAnalutics extends Component {
  render() {
    const data = {
      defaultFontFamily: "Poppins",
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "My First dataset",
          data: [80, 50, 70, 40, 60, 30, 50],
          borderColor: "#FE634E",
          borderWidth: "4",
          backgroundColor: "rgba(254, 99, 78, 0)",
		  tension:0.4,
        },
      ],
    };

    const options = {
		plugins:{
		 legend: false	
		},
		layout: {
            padding: 0
        },
      scales: {
        y: 
          {
			  max: 100,
              min: 0,
            // padding: 0,
              beginAtZero: true,
            ticks: {
				stepSize: 20, 
            },
          },
        
        x: 
          {
            ticks: {
             // padding: 0,
            },
            grid: {
              display: false,
              drawBorder: false,
            },
          },
        
      },
    };

    return <Line data={data} options={options} height={350} />;
  }
}

export default RevenueAnalutics;
