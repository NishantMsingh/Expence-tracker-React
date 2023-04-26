import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart(props) {
   
    const valueDatapoint=props.val.map(dataPoint=>{
        return dataPoint.value;
    });
    const totalMax=Math.max(...valueDatapoint);
  return (
    <div className="chart"> 
      {props.val.map((dataPoint) => {
        return (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
          key={dataPoint.label}
        />);
      })}
    </div>
  );
}

export default Chart;
