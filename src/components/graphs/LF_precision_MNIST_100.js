import React from "react";
import Plot from "react-plotly.js";
import { Class0Precision } from "./data/precision/poison_100/class_0";
import { Class1Precision } from "./data/precision/poison_100/class_1";
import { Class2Precision } from "./data/precision/poison_100/class_2";
import { Class3Precision } from "./data/precision/poison_100/class_3";
import { Class4Precision } from "./data/precision/poison_100/class_4";
import { Class5Precision } from "./data/precision/poison_100/class_5";
import { Class6Precision } from "./data/precision/poison_100/class_6";
import { Class7Precision } from "./data/precision/poison_100/class_7";
import { Class8Precision } from "./data/precision/poison_100/class_8";
import { Class9Precision } from "./data/precision/poison_100/class_9";

function Precision_MNIST_100() {
  return (
    <div>
      <Plot
        data={[
          Class0Precision,
          Class1Precision,
          Class2Precision,
          Class3Precision,
          Class4Precision,
          Class5Precision,
          Class6Precision,
          Class7Precision,
          Class8Precision,
          Class9Precision
        ]}
        layout={{ title: "Precision", xaxis: {
          title: "Epochs (Number of Rounds)"
        } }}
      />
    </div>
  );
}

export default Precision_MNIST_100;
