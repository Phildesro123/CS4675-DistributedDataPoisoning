import React from 'react';
import Plot from "react-plotly.js";
import { LR } from './data/loss/poison_100/poison_100';

function Loss_MNIST_100() {
    return ( <div>
        <Plot data ={[LR]}/>

    </div> );
}

export default Loss_MNIST_100;