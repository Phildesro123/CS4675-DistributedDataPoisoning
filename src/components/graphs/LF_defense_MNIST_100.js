import React from "react";
import Plot from "react-plotly.js";
import { Malicious_Activity } from "./data/defense/defense_100/Malicious_Activity";
import { Good_Activity } from "./data/defense/defense_100/Good_Activity";
function Defense_MNIST_100() {
  return (
    <div>
      <Plot
        data={[Good_Activity, Malicious_Activity]}
        layout={{
          title: "Defense Gradient",
        }}
      />
    </div>
  );
}

export default Defense_MNIST_100;
