import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class Donut extends Component {
  render() {
    const data = {
      weight: 0,
      defaultFontFamily: "Poppins",
      datasets: [
        {
          data: [this.props.value, 100 - this.props.value],
          borderWidth: 0,
          backgroundColor: ["#FE634E", this.props.backgroundColor2],
        },
      ],
    };

    const options = {
      width: 90,
     // cutoutPercentage: 70,
      cutout: "70%",
      responsive: false,
      maintainAspectRatio: true,
      tooltips: { enabled: false },
      hover: { mode: null },
    };
    return (
      <div className="donught-chart" style={{ marginTop: "-10px" }}>
        <Doughnut data={data} options={options} height={100} width={100} />
      </div>
    );
  }
}

export default Donut;
