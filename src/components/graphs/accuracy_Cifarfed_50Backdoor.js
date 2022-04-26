import React from "react";
import Plot from "react-plotly.js";
import { no_poisoning } from "./data/accuracy/Cifarfed_50/BDCifarfedno_poison_50";
import { poisoning } from "./data/accuracy/Cifarfed_50/BDCifarfed_poison_50";
function Accuracy_Cifarfed_50Backdoor() {
  return (
    <div>
      <Plot
        data={[no_poisoning, poisoning]}
        layout={{
          title: "Accuracy CifarFed Backdoor",
          xaxis: {
            title: "Epochs (50)",
          },
        }}
      />
    </div>
  );
}

export default Accuracy_Cifarfed_50Backdoor;
