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
            // [GI: all u gotta do is just put ur graphs in here ]
            break;
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
