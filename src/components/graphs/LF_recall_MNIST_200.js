import React from "react";
import Plot from "react-plotly.js";
import { Class1Recall } from "./data/recall/poison_200/class_1";
import { Class0Recall } from "./data/recall/poison_200/class_0";
import { Class2Recall } from "./data/recall/poison_200/class_2";
import { Class3Recall } from "./data/recall/poison_200/class_3";
import { Class4Recall } from "./data/recall/poison_200/class_4";
import { Class5Recall } from "./data/recall/poison_200/class_5";
import { Class6Recall } from "./data/recall/poison_200/class_6";
import { Class7Recall } from "./data/recall/poison_200/class_7";
import { Class8Recall } from "./data/recall/poison_200/class_8";
import { Class9Recall } from "./data/recall/poison_200/class_9";

function Recall_MNIST_200() {
  return (
    <div>
      <Plot
        data={[
          Class0Recall,
          Class1Recall,
          Class2Recall,
          Class3Recall,
          Class4Recall,
          Class5Recall,
          Class6Recall,
          Class7Recall,
          Class8Recall,
          Class9Recall,
        ]}
        layout={{
          title: "Recall",
          xaxis: {
            title: "Epochs (Number of Rounds)",
          },
        }}
      />
    </div>
  );
}

export default Recall_MNIST_200;
