import React from "react";
import Plot from "react-plotly.js";
import { no_poisoning } from "./data/accuracy/MNIST_10/BDMNISTno_poison_10";
import { poisoning } from "./data/accuracy/MNIST_10/BDMNIST_poison_10";
function Accuracy_MNIST_10Backdoor() {
  return (
    <div>
      <Plot
        data={[no_poisoning, poisoning]}
        layout={{
          title: "Accuracy MNIST Backdoor",
          xaxis: {
            title: "Epochs (10)",
          },
        }}
      />
    </div>
  );
}

export default Accuracy_MNIST_10Backdoor;
