import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Revenue extends Component {
   render() {
      const data = {
         defaultFontFamily: "Poppins",
         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
         datasets: [
            {
               label: "My First dataset",
               data: [80, 50, 70, 40, 60, 30, 50],
               borderColor: "#FE634E",
               borderWidth: this.props.borderWidth
                  ? this.props.borderWidth
                  : "4",
               // pointBackgroundColor: "rgba(64, 24, 157, 1)",
               backgroundColor: "rgba(64, 24, 157, 0)",
			  // tension:0.4,
            },
         ],
      };

      const options = {
         plugins:{
			 legend: false	
		 },
         scales: {
            y: 
               {
                  ticks: {
                     beginAtZero: true,
                     max: 100,
                     min: 0,
                     stepSize: 20,
                     padding: 0,
                  },
               },
            
            x:
               {
                  ticks: {
                     padding: 0,
                  },
                  grid: {
                     display: false,
                     drawBorder: false,
                  },
               },
         },
      };
      return (
         <>
            <Line
               className="chartjs-render-monitor"
               data={data}
               options={options}
               height={this.props.height ? this.props.height : 507}
               width={this.props.width ? this.props.width : 435}
               style={{ display: "block", width: "435px", height: "507px" }}
            />
         </>
      );
   }

   // componentDidMount() {
   //     const { datasets } = this.refs.chart.chartInstance.data
   //     console.log(datasets[0].data);
   // }
}

export default Revenue;
