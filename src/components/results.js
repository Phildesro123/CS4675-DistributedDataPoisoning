
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


function Results(props) {
    let graph = null;
    switch (props.attack) {
        case 'Label Flipping':
            if (props.epochs === 50) {
                return <div><Container>
                    
    
                        <Card>
                            
                        <Card.Header as="h1">Quantitative Evaluation</Card.Header>
                        <Card.Body style={{ backgroundColor: "#CCD4F2"}}>
                        <Row>
                            <Col><Accuracy_MNIST_50/></Col>
                            <Col><h3>At 50 epoch, you can see that the model is able to handle the accuracy well, with roughly 98% accuracy.</h3> </Col>
                        </Row>
                        <Row>
                            <Col><Loss_MNIST_50/></Col>
                            <Col><h3>At 50 epochs, the loss curve is considered very normal with no significant event occuring.</h3></Col>
                        </Row>
                        <Row>
                            <Col><Precision_MNIST_50/></Col>
                            <Col><h3>Becasue our dataset has mutliple classes (as shwon with the digits 0-9), we can see the proportion of postive identifications were correct. We can see that majority of the pracisions aim closer to 1, meaning that there are less false positives, with digit 8 starting to show more false positives than the rest of the classes.</h3></Col>
                        </Row>
                        <Row>
                            <Col><Recall_MNIST_50/></Col>
                            <Col><h3>We can see how many were actually correctly classified, meaning that there were less false negatives throughout. Majority of the classes have a consistent recall score around .98</h3></Col>
                        </Row>
                        <Row>
                            <Col><Defense_MNIST_50/></Col>
                            <Col><h3>We can see the malicous paricipants are being clustered away from the benign activity. We can note that the defense isnt 100% perfect since there are some malicious participants still clustered with the benign activity.</h3></Col>
                        </Row>
                    
                        
  
                        </Card.Body>
                    </Card>

                     
                    
                    
                    </Container></div>
                   
            }
            if (props.epochs === 100) {
                return <div>
                    <Card>
                        <Card.Header as="h1">Quantitative Evaluation</Card.Header>
                        <Card.Body style={{ backgroundColor: "#CCD4F2" }}>
                        <Row>
                            <Col><Accuracy_MNIST_100/></Col>
                            <Col><h3>At 100 epoch, you can see that the model is able to handle the accuracy well as it quickly levels out with a consistent 99% accuracy.</h3> </Col>
                        </Row>
                        <Row>
                            <Col><Loss_MNIST_100/></Col>
                            <Col><h3>At 100 epochs, the loss curve is considered very normal with no significant event occuring.</h3></Col>
                        </Row>
                        <Row>
                            <Col><Precision_MNIST_100/></Col>
                            <Col><h3>Because our dataset has mutliple classes (as shown with the digits 0-9), we can see the proportion of postive identifications were correct. We can see that majority of the pracisions aim closer to 1, meaning that there are less false positives, with digit 2,8,9 starting to show more false positives than the rest of the classes.</h3></Col>
                        </Row>
                        <Row>
                            <Col><Recall_MNIST_100/></Col>
                            <Col><h3>We can see how many were actually correctly classified, meaning that there were less false negatives throughout. Majority of the classes still have a consistent recall score around .98</h3></Col>
                        </Row>
                        <Row>
                            <Col><Defense_MNIST_100/></Col>
                            <Col><h3>We can see the malicous paricipants are being clustered away from the benign activity. We can note that the defense was able to accuratly cluster the malicious participants with the benign activity as more epochs occured in the model.</h3></Col>
                        </Row>   
                        </Card.Body>
                    </Card>
                    
                </div>
            }
            if (props.epochs === 200) {
                return <div>
                    <Card>
                        <Card.Header as="h1">Quantitative Evaluation</Card.Header>
                        <Card.Body style={{ backgroundColor: "#CCD4F2" }}>
                        <Row>
                            <Col><Accuracy_MNIST_200/></Col>
                            <Col><h3>At 200 epoch, you can see that the model is able to handle the accuracy is very differnet when it comes two the attack vs normal model. We get a nice accruacy of 90% when not tampered with, and a very low accuracy around 10% when poisoned </h3> </Col>
                        </Row>
                        <Row>
                            <Col><Loss_MNIST_200/></Col>
                            <Col><h3>At 200 epochs, the poisoned loss curve signifys the model is having a hard time making a prediction, becuase of the poisoning on multiple clients, it shows the penalty for the model is high .</h3></Col>
                        </Row>
                        <Row>
                            <Col><Precision_MNIST_200/></Col>
                            <Col><h3>Because our dataset has mutliple classes (as shown with the digits 0-9), we can see the proportion of postive identifications were correct. We can see that majority of the precision aim closer to .2 or less, meaning that there are more false positives than usual, with digit 5 showing less false positives than the rest of the classes.</h3></Col>
                        </Row>
                        <Row>
                            <Col><Recall_MNIST_200/></Col>
                            <Col><h3>We can see how many were actually correctly classified, meaning that there were less false negatives throughout. Majority of the classes still have a consistent recall score around .98</h3></Col>
                        </Row>
                        <Row>
                            <Col><Defense_MNIST_200/></Col>
                            <Col><h3>We can see the malicous paricipants are being clustered away from the benign activity. We can note that the defense was able to accurately cluster the malicious participants with the benign activity as more epochs occured in the model.</h3></Col>
                        </Row>   
                        </Card.Body>
                    </Card>          
                    
                </div>
            } else {
                return null;
            }
        case 'Backdoor':
            if (props.dataset === 'MNIST') {
                if (props.epochs === 10) {
                    return <div>
                    <Card>
                        <Card.Header as="h1">Quantitative Evaluation</Card.Header>
                        <Card.Body style={{ backgroundColor: "#CCD4F2" }}>
                        <Row>
                            <Col><BDMNIST_10/></Col>
                            <Col><h3>At 10 epochs, we can see that the backdoor attack keeps the accuracy almost at 100% no matter what. The normal model with defense is able to keep the accruacy almost a near 100% accuracy as well.</h3></Col>
                        </Row>
                        </Card.Body>
                    </Card>                          
                </div>
                } else if (props.epochs === 20) {
                    return <div>
                    <Card>
                        <Card.Header as="h1">Quantitative Evaluation</Card.Header>
                        <Card.Body style={{ backgroundColor: "#CCD4F2" }}>
                        <Row>
                            <Col><BDMNIST_20/></Col>
                            <Col><h3>At 20 epochs, we can see not much change.The backdoor attack keeps the accuracy almost at 100% no matter what. The normal model with defense is able to keep the accruacy almost a near 100% accuracy as well.</h3></Col>
                        </Row>
                        </Card.Body>
                    </Card>  
                </div>
                } else if (props.epochs === 30) {
                    return <div>
                    <Card>
                        <Card.Header as="h1">Quantitative Evaluation</Card.Header>
                        <Card.Body style={{ backgroundColor: "#CCD4F2" }}>
                        <Row>
                            <Col><BDMNIST_30/></Col>
                            <Col><h3>At 30 epochs, suprisingly, the accuracy still remeains near 100% for both the attack and defense. We can see that the backdoor attack keeps the accuracy almost at 100% no matter what the epoch number. The normal model with defense is ablle to keep the accruacy almost a near 100% accuracy as well.</h3></Col>
                        </Row>
                        </Card.Body>
                    </Card>    
                </div>
                } else {
                    return null;
                }
            } else if (props.dataset === 'CIFAR-10') {
                if (props.epochs === 10) {
                    return <div>
                        
                    <Card>
                        <Card.Header as="h1">Quantitative Evaluation</Card.Header>
                        <Card.Body style={{ backgroundColor: "#CCD4F2" }}>
                        <Row>
                            <Col><BDCifar10_10/></Col>
                            <Col><h3>At 10 epochs, You can see that with the backdoor attack occuring, the model suffers heavily with a low fluxiating accuracy, around less than 10% accuracy. As for the normal model, it is able to handle the attack very well and have an accuracy around 65%. </h3></Col>
                        </Row>
                            
                        </Card.Body>
                    </Card>       
                                 
                </div>
                } else if (props.epochs === 20) {
                    return <div>
                    <Card>
                        <Card.Header as="h1">Quantitative Evaluation</Card.Header>
                        <Card.Body style={{ backgroundColor: "#CCD4F2" }}>
                        <Row>
                            <Col><BDCifar10_20/></Col>
                            <Col><h3>At 20 epochs,You can see that with the backdoor attack occuring, the model suffers still heavily with a low fluxiating accuracy, around less than 10% accuracy. However, it does seem to have occuring spikes in accuracy over time, with the accuracy slowler reaching towards 0%. As for the normal model, it is able to handle the attack very well and have an accuracy around 70%.</h3></Col>
                        </Row>
                        </Card.Body>
                    </Card>                           
                </div>
                } else if (props.epochs === 30) {
                    return <div>
                    <Card>
                        <Card.Header as="h1">Quantitative Evaluation</Card.Header>
                        <Card.Body style={{ backgroundColor: "#CCD4F2"}}>
                        <Row>
                            <Col><BDCifar10_30/></Col>
                            <Col><h3>At 30 epochs, You can see that with the accuraies start to stay consistent, the model suffers still heavily with a low fluxiating accuracy when under the backdoor attack, around less than 10% accuracy. However, it still does seem to have occuring spikes in accuracy over time, with the accuracy slowler reaching towards 0%. As for the normal model, it is able to handle the attack very well and have an accuracy around 70%, but is seen slowly begin to decline towards 60% accuracy over time.   </h3></Col>
                        </Row>
                        </Card.Body>
                    </Card>                           
                </div>
                } else {
                    return null;
                }
            }
    }

    return (
      <div className="Results">    
        <Card>
            <Card.Header as="h1">Quantitative Evaluation</Card.Header>
            <Card.Body style={{ backgroundColor: "#CCD4F2"}}>
                {graph}
            </Card.Body>
        </Card>
      </div>
    );
  }
export default Results;
