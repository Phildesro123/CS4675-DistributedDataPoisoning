import React from "react";
import Plot from "react-plotly.js";
import { no_poisoning } from "./data/accuracy/Cifarfed_25/BDCifarfedno_poison_25";
import { poisoning } from "./data/accuracy/Cifarfed_25/BDCifarfed_poison_25";
function Accuracy_Cifarfed_25Backdoor() {
  return (
    <div>
      <Plot
        data={[no_poisoning, poisoning]}
        layout={{
          title: "Accuracy CifarFed Backdoor",
          xaxis: {
            title: "Epochs (25)",
          },
        }}
      />
    </div>
  );
}

export default Accuracy_Cifarfed_25Backdoor;
