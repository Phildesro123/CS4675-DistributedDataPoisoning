import React from "react";
import Plot from "react-plotly.js";
import { no_poisoning } from "./data/accuracy/no_poison_200";
import { poisoning } from "./data/accuracy/poison_100";
function Accuracy_MNIST_100() {
  return (
    <div>
      <Plot
        data={[ poisoning]}
        layout={{
          title: "Accuracy",
          xaxis: {
            title: "Epochs (Round number)",
          },
        }}
      />
    </div>
  );
}

export default Accuracy_MNIST_100;
