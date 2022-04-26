import React from "react";
import Plot from "react-plotly.js";
import { no_poisoning } from "./data/accuracy/Cifarfed_75/BDCifarfedno_poison_75";
import { poisoning } from "./data/accuracy/Cifarfed_75/BDCifarfed_poison_75";
function Accuracy_Cifarfed_75Backdoor() {
  return (
    <div>
      <Plot
        data={[no_poisoning, poisoning]}
        layout={{
          title: "Accuracy CifarFed Backdoor",
          xaxis: {
            title: "Epochs (75)",
          },
        }}
      />
    </div>
  );
}

export default Accuracy_Cifarfed_75Backdoor;
