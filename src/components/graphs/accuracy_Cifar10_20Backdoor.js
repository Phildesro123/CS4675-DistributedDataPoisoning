import React from "react";
import Plot from "react-plotly.js";
import { no_poisoning } from "./data/accuracy/Cifar10_20/BDCifarno_poison_20";
import { poisoning } from "./data/accuracy/Cifar10_20/BDCifar_poison_20";
function Accuracy_Cifar10_20Backdoor() {
  return (
    <div>
      <Plot
        data={[no_poisoning, poisoning]}
        layout={{
          title: "Accuracy Cifar-10 Backdoor",
          xaxis: {
            title: "Epochs (20)",
          },
        }}
      />
    </div>
  );
}

export default Accuracy_Cifar10_20Backdoor;
