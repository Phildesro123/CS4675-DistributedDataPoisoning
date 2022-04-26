import React from "react";
import Plot from "react-plotly.js";
import { no_poisoning } from "./data/accuracy/MNIST_20/BDMNISTno_poison_20";
import { poisoning } from "./data/accuracy/MNIST_20/BDMNIST_poison_20";
function Accuracy_MNIST_20Backdoor() {
  return (
    <div>
      <Plot
        data={[no_poisoning, poisoning]}
        layout={{
          title: "Accuracy MNIST Backdoor",
          xaxis: {
            title: "Epochs (20)",
          },
        }}
      />
    </div>
  );
}

export default Accuracy_MNIST_20Backdoor;
