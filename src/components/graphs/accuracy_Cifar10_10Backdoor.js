import React from "react";
import Plot from "react-plotly.js";
import { no_poisoning } from "./data/accuracy/Cifar10_10/BDCifarno_poison_10";
import { poisoning } from "./data/accuracy/Cifar10_10/BDCifar_poison_10";
function Accuracy_Cifar10_10Backdoor() {
  return (
    <div>
      <Plot
        data={[no_poisoning, poisoning]}
        layout={{
          title: "Accuracy Cifar-10 Backdoor",
          xaxis: {
            title: "Epochs (10)",
          },
        }}
      />
    </div>
  );
}

export default Accuracy_Cifar10_10Backdoor;
