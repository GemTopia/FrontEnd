import React, { useState, useEffect } from "react";
import { Chart  as GoogleChart} from "react-google-charts";

const Chart: React.FC<{ className?: any ,width:any,height:any}> = (props) => {
    const data = [
        ["share of all Gemytos", "Token"],
        ["Reward", 300000000],
        ["Pool", 100000000],
        ["Adviser", 80000000],
        ["Team", 80000000],
      ];
      const options = {
        is3D: true,
        legend: {
          textStyle: { color: 'white' }
      },
        colors: ["#051ab7","#241a8f", "#0051ff", "#0070b6"],
        backgroundColor:'#040c37',
      };
    
    return(
        <GoogleChart
            chartType="PieChart"
            data={data}
            options={options}
            width={props.width}
            height={props.height}
            className={props.className}
          />
    );
}
export default Chart;