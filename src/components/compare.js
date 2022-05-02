
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


function Compare() {
    
    return (
        <Card>
                        <Card.Header as="h1">Accuracy Comparion with Backdoor Attack</Card.Header>
                        <Card.Body style={{ backgroundColor: "#CCD4F2"}}>
                        <Row>
                        <Col><AccuracyCompare_MNIST_50/></Col>
                        <h3>When we compare the accuracy of both attacks on the MNIST dataset, we can see that the models were able to rebound back from the attack. With only just 30 epoch rounds, both models were keep a constant precise accuracy hovering at 98-99%. There is some slight variable between the accuries between the two attacks, with roughly 2% difference between the two. One note, is that there is more variance with the backdoor attack compared to the label attack around the epochs of 15-20. In additon, we can see that the backdoor attack keeps the model around 100% accuracy from the start of the first epoch as compared the label atack. This may occur because 
                            "An attacker selected in a single round of federated learning can cause the global model to instantly reach 100% accuracy on the backdoor [attack]" . </h3>
                    </Row>
                        </Card.Body>
                        
                        <Card.Header as="h1">Github Repositories and References</Card.Header>
                        <h4> 1. Ebagdasa. (n.d.). EBAGDASA/backdoors101: Backdoors Framework for Deep Learning and Federated Learning. A light-weight tool to conduct your research on backdoors. GitHub. Retrieved May 1, 2022, from <a href="https://github.com/ebagdasa/backdoors101">Link to Github</a> </h4> <br></br>
                        <h4> 2. Git-Disl. (n.d.). Git-disl/datapoisoning_fl: Code for data poisoning attacks against Federated Learning Systems. GitHub. Retrieved May 1, 2022, from <a href="https://github.com/git-disl/DataPoisoning_FL"> Link to Github</a> </h4> <br></br>
                        <h4> 3. Bagdasaryan, E., Veit, A., Hua, Y., Estrin, D., &amp; Shmatikov, V. (2019, August 6). How to backdoor federated learning. arXiv.org. Retrieved May 1, 2022, from <a href="https://arxiv.org/abs/1807.00459"> https://arxiv.org/abs/1807.00459</a> </h4> <br></br>
                        <h4> 4. Distributed machine learning - brown university. (n.d.). Retrieved May 2, 2022, from <a href="https://cs.brown.edu/people/acrotty/pubs/Galakatos2017_ReferenceWorkEntry_DistributedMachineLearning.pdf"> https://cs.brown.edu/people/acrotty/pubs/Galakatos2017_ReferenceWorkEntry_DistributedMachineLearning.pdf</a> </h4> <br></br>
                        <h4> 5. Tolpegin, V., Truex, S., Gursoy, M. E., &amp; Liu, L. (2020, August 11). Data poisoning attacks against Federated Learning Systems. arXiv.org. Retrieved May 1, 2022, from <a href="https://arxiv.org/abs/2007.08432">https://arxiv.org/abs/2007.08432</a> </h4> <br></br>
    </Card>
    )
  }
export default Compare;
