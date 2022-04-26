import { Card } from "react-bootstrap"; 
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

function Results(props) {
    let graph = null;
    switch (props.attack) {
        case 'Label Flipping':
            if (props.epochs === 50) {
                return <div>
                    <Accuracy_MNIST_50/>
                    <Loss_MNIST_50/>
                    <Precision_MNIST_50/>
                    <Recall_MNIST_50/>
                    <Defense_MNIST_50/>
                    </div>
            }
            if (props.epochs === 100) {
                return <div>
                    <Accuracy_MNIST_100/>
                    <Loss_MNIST_100/>
                    <Precision_MNIST_100/>
                    <Recall_MNIST_100/>
                    <Defense_MNIST_100/>
                </div>
            }
            if (props.epochs === 200) {
                return <div>
                    <Accuracy_MNIST_200/>
                    <Loss_MNIST_200/>
                    <Precision_MNIST_200/>
                    <Recall_MNIST_200/>
                    <Defense_MNIST_200/>
                    
                </div>
            } else {
                return null;
            }
        case 'Backdoor':
            if (props.dataset === 'MNIST') {
                if (props.epochs === 10) {

                } else if (props.epochs === 20) {

                } else if (props.epochs === 30) {

                } else {
                    return null;
                }
            } else if (props.dataset === 'CIFAR-10') {
                if (props.epochs === 10) {

                } else if (props.epochs === 20) {

                } else if (props.epochs === 30) {

                } else {
                    return null;
                }
            }
    }

    return (
      <div className="Results">    
        <Card>
            <Card.Header as="h5">Quantitative Evaluation</Card.Header>
            <Card.Body style={{ backgroundColor: "#CCD4F2" }}>
                {graph}
            </Card.Body>
        </Card>
      </div>
    );
  }
export default Results;
