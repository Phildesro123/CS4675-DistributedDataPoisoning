import React from "react";
import Plot from "react-plotly.js";
import { no_poisoning } from "./data/accuracy/Cifar10_30/BDCifarno_poison_30";
import { poisoning } from "./data/accuracy/Cifar10_30/BDCifar_poison_30";
function Accuracy_Cifar10_30Backdoor() {
  return (
    <div>
      <Plot
        data={[no_poisoning, poisoning]}
        layout={{
          title: "Accuracy Cifar-10 Backdoor",
          xaxis: {
            title: "Epochs (30)",
          },
        }}
      />
    </div>
  );
}

export default Accuracy_Cifar10_30Backdoor;
