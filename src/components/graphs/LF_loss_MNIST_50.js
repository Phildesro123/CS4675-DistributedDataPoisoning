import React from 'react';
import Plot from "react-plotly.js";
import { LR } from './data/loss/poison_50/poison_50';

function Loss_MNIST_50() {
    return ( <div>
        <Plot data ={[LR]} layout={{
          title: "Loss",
          xaxis: {
            title: "Epochs (Round number)",
          },
        }}/>

    </div> );
}

export default Loss_MNIST_50;