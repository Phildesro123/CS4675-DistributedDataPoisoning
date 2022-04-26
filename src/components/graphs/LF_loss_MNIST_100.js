import React from 'react';
import Plot from "react-plotly.js";
import { LR } from './data/loss/poision_100/poison_100';


function Loss_MNIST_100() {
    return ( <div>
        <Plot data ={[LR]} layout={{
          title: "Loss",
          xaxis: {
            title: "Epochs (Round number)",
          },
        }}/>

    </div> );
}

export default Loss_MNIST_100;