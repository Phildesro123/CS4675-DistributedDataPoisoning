import React from "react";
import Plot from "react-plotly.js";
import { no_poisoning } from "./data/accuracy/comparison_50/nopoison";
import { poisoning } from "./data/accuracy/comparison_50/poison";
function AccuracyCompare_MNIST_50() {
  return (
    <div>
      <Plot
        data={[no_poisoning, poisoning]}
        layout={{
          title: "Accuracy comparison between Label attack vs Backdoor attack",
          xaxis: {
            title: "Epochs",
          },
        }}
      />
    </div>
  );
}

export default AccuracyCompare_MNIST_50;