import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

const data = {
   labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
   ],
   datasets: [
      {
         label: "My First dataset",
         data: [15, 40, 55, 40, 25, 35, 40, 50, 85, 40],
         borderColor: "rgba(254, 99, 78, 1)",
         borderWidth: "0",
         backgroundColor: "rgba(254, 99, 78, 1)",
         hoverBackgroundColor: "rgba(254, 99, 78, 1)",
		 barThickness : 3
      },
   ],
};

const options = {
   responsive: true,
   maintainAspectRatio: false,
	
	plugins:{
	   legend: {
		  display: false,
	   }
	},
   scales: {
      y: 
         {
            display: false,
            ticks: {
               beginAtZero: true,
               display: false,
               max: 100,
               min: 0,
               stepSize: 10,
            },
            grid: {
               display: false,
               drawBorder: false,
            },
         },
      
      x: 
         {
            display: false,
            barPercentage: 0.4,
            gridLines: {
               display: false,
               drawBorder: false,
            },
            ticks: {
               display: false,
            },
         },
      
   },
};

class ActiveChart1 extends Component {
   render() {
      return (
         <div
            className="lineChart chartjs-render-monitor"
            style={{ display: "block", width: "130px", height: "85px" }}
         >
            <Bar data={data} height={85} options={options} />
         </div>
      );
   }
}

export default ActiveChart1;
