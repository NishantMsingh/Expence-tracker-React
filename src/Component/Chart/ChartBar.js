import React from "react";
import "./ChartBar.css";

function ChartBar(props) {
    let barFilledHeight="0%";
    if(props.maxValue>0)
    {
        barFilledHeight=Math.round((props.value/props.maxValue)*100)+"%";
    }
  return (
    <div className="chart-bar">
      <div className="chart-bar_inner">
        <div className="chart-bar_fill" style={{height:barFilledHeight}}></div>
      </div>
        <div className="chart-bar_label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
