/**
 * Created by sushanta on 2/26/18.
 */
import React from 'react';

let LoadingSvg = ({ style }) => (
  <svg
    height="20px"
    viewBox="0 0 100 100"
    style={style}
    preserveAspectRatio="xMidYMid">
    <circle
      cx="50" cy="50" fill="none"
      stroke="#db7093" strokeWidth="8" r="40"
      strokeDasharray="188.49555921538757 64.83185307179586"
      transform="rotate(132 50 50)">
      <animateTransform
        attributeName="transform" type="rotate"
        calcMode="linear" values="0 50 50;360 50 50"
        keyTimes="0;1" dur="1s" begin="0s"
        repeatCount="indefinite"/>
    </circle>
  </svg>
);

export default LoadingSvg;