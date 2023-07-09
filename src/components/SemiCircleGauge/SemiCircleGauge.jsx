import React, { useRef, useEffect } from "react";
import { gaugeChart } from "gauge-chart";

// Style
import "./SemiCircleGauge.css";

const SemiCircleGauge = ({ percentage }) => {
  const chart = useRef(null);

  useEffect(() => {
    let gaugeOptions = {
      hasNeedle: true,
      needleColor: "#1E1E28",
      needleUpdateSpeed: 1000,
      arcColors: ["rgba(0, 0, 0,0)", "rgba(0, 0, 0,0)"],
      // arcDelimiters: [percentage],
      // rangeLabel: ['0', '100'],
      centralLabel: " ",
    };

    gaugeChart(chart.current, 300, gaugeOptions).updateNeedle(percentage);
  }, [percentage, chart]);

  return (
    <div className="result_meter_round">
      <div className="result_meter_round2">
        <div className="result_meter_round3">
          <div className="result_meter" ref={chart}></div>
          <div className="result_meter_round4">
            <div className="result_meter_round5">{percentage}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemiCircleGauge;
