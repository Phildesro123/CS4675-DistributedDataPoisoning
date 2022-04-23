import { Button, Card, Col ,Row ,Container, Form } from "react-bootstrap"; 

function Options(props) {
    return (
      <div className="Controls">
        <Card>
        <Form>
          <Row>     
            <Col >
            Dataset
            <Form.Select aria-label={`Choose a Dataset`}>
            <option>{`Choose a Dataset`}</option>
            <option value='MNIST'>MNIST</option>
            <option value='CIFAR10'>CIFAR-10</option>            
          </Form.Select>
          </Col>
          <Col>
          Epoch Rounds
          <Form.Select aria-label={`Choose the number of epochs (rounds)`}>
            <option>Choose a number of epoch</option>
            <option value= "200">200</option>
            <option value= "300">300</option>
            <option value= "400">400</option>                        
          </Form.Select>
          </Col>
          <Col>
          Model
          <Form.Select aria-label={`Choose the number of epochs (rounds)`}>
            <option>Choose a model</option>
            <option value ="MNISTCNN">MNIST-CNN</option>
            <option value ="CIFARCNN">CIFAR10-CNN</option>
          </Form.Select>
          </Col>
          </Row>
          <Row>
          <Col>  Defense Algorithm
          <Form.Select aria-label={`Choose the number of epochs (rounds)`} >
            <option>Choose a defense algorithm</option>
            <option value ="def1">Update Evaluator</option>
            <option value ="def2">Neural Cleanser</option>
          </Form.Select>
          </Col>
          <Button type="button">Confirm</Button>

          </Row>

        </Form>
        </Card> 
      </div>
    );
  }
export default Options;
