import React from "react";
import Plot from "react-plotly.js";
import { no_poisoning } from "./data/accuracy/MNIST_30/BDMNISTno_poison_30";
import { poisoning } from "./data/accuracy/MNIST_30/BDMNIST_poison_30";
function Accuracy_MNIST_30Backdoor() {
  return (
    <div>
      <Plot
        data={[no_poisoning, poisoning]}
        layout={{
          title: "Accuracy MNIST Backdoor",
          xaxis: {
            title: "Epochs (30)",
          },
        }}
      />
    </div>
  );
}

export default Accuracy_MNIST_30Backdoor;
