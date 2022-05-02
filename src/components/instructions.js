
import { Card, Container,Button, Col, Row, Form  } from "react-bootstrap"; 
import Accuracy_MNIST_100 from "./graphs/LF_accuracy_MNIST_100";
import Accuracy_MNIST_200 from "./graphs/LF_accuracy_MNIST_200";
import Accuracy_MNIST_50 from "./graphs/LF_accuracy_MNIST_50";
import Defense_MNIST_200 from "./graphs/LF_defense_MNIST_200";
import Defense_MNIST_100 from "./graphs/LF_defense_MNIST_100";
import Defense_MNIST_50 from "./graphs/LF_defense_MNIST_50";
import Loss_MNIST_100 from "./graphs/LF_loss_MNIST_100";
import Loss_MNIST_200 from "./graphs/LF_loss_MNIST_200";
import Loss_MNIST_50 from "./graphs/LF_loss_MNIST_50";
import Precision_MNIST_100 from "./graphs/LF_precision_MNIST_100";
import Precision_MNIST_200 from "./graphs/LF_precision_MNIST_200";
import Precision_MNIST_50 from "./graphs/LF_precision_MNIST_50";
import Recall_MNIST_100 from "./graphs/LF_recall_MNIST_100";
import Recall_MNIST_200 from "./graphs/LF_recall_MNIST_200";
import Recall_MNIST_50 from "./graphs/LF_recall_MNIST_50";
import BDCifar10_10 from './graphs/accuracy_Cifar10_10Backdoor';
import BDCifar10_20 from './graphs/accuracy_Cifar10_20Backdoor';
import BDCifar10_30 from './graphs/accuracy_Cifar10_30Backdoor';
import BDMNIST_10 from './graphs/accuracy_MNIST_10Backdoor';
import BDMNIST_20 from './graphs/accuracy_MNIST_20Backdoor';
import BDMNIST_30 from './graphs/accuracy_MNIST_30Backdoor';
import BDCifarfed_25 from './graphs/accuracy_Cifarfed_25Backdoor';
import BDCifarfed_50 from './graphs/accuracy_Cifarfed_50Backdoor';
import BDCifarfed_75 from './graphs/accuracy_Cifarfed_75Backdoor'; 
//import AccuracyCompare_MNIST_100 from "./graphs/LF_accuracyCompare_MNIST_100";
//import AccuracyCompare_MNIST_200 from "./graphs/LF_accuracyCompare_MNIST_200";
import AccuracyCompare_MNIST_50 from "./graphs/LF_accuracyCompare_MNIST_50";
import Compare from './compare';


function Instructions() {
    
    return (
        <Card>
            <Card.Header as="h1">Introduction</Card.Header>
            
            <h3>This visualization tool is a virtual education platform highlighting the security concerns regarding data poisoning attack in AI/ML.<br></br>
            <br></br>
                Through one visual recognition task of image classification, this project allows a user to experiment the simulation of injecting poisoned data into a ML model and seing its results difference, when compared to a normal model under various defense algorithms. Users can see how a well-trained deep learning model can easily be misled and lead to various errors in prediction.<br></br>
                <br></br>    
                1. Select a "Attack", a "Epochs", a "Dataset",a "Model" and a "Defense Algorithm" from the dropdown list and click <strong>CONFIRM</strong>
                <br></br>    
                <br></br> 
                2. A set of graphs will be shown in rows, with a descritpion/analysis to the right of it. 
            </h3>
                        <Card.Body style={{ backgroundColor: "#CCD4F2"}}></Card.Body>
                        <Compare/>                
        </Card>
        
    )
  }
export default Instructions;
