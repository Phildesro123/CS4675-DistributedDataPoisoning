import { Button, Card, Col ,Row ,Container, Form } from "react-bootstrap";
import React, {Component} from "react"; 

class Options extends Component {
  constructor() {
    super();
    this.state = {
      Attack: [],
      Epochs: [],
      Dataset: [],
      Defense: [],
      Model: [],
      selectAttack: ''

    };
  }

  componentDidMount() {
    this.setState({
      Attack: [
        {name: 'Label Flipping', Epochs: [50, 100, 200], Dataset: ['MNIST'], Defense: ['Update Evaluator'], Model: ['CNN']},
        {name: 'Backdoor', Epochs: [10, 25, 50], Dataset: ['MNIST', 'CIFAR-10'], Defense: ['Neural Cleanser'], Model: ['CNN']}
      ],
    });
  }

  selectChange(e) {
    this.setState({selectAttack:e.target.value});
    this.setState({ Epochs:this.state.Attack.find(x => x.name===e.target.value).Epochs});
    this.setState({ Dataset:this.state.Attack.find(x => x.name===e.target.value).Dataset});
    this.setState({ Defense:this.state.Attack.find(x => x.name===e.target.value).Defense});
    this.setState({ Model:this.state.Attack.find(x => x.name===e.target.value).Model});
  }


  render() {
    return (
      <div className="Controls">
        
        <Form>
          <Row style={{paddingVertical:10}}>     
            <Col >
            Attack
            <Form.Select value={this.state.selectAttack} onChange={this.selectChange.bind(this)} aria-label={`Choose an attack type`}>
            <option>Choose an attack type</option>
            {this.state.Attack.map(x => {
              return <option>{x.name}</option>
            })}         
          </Form.Select>
          </Col>
          <Col>
          Epochs (Rounds)
          <Form.Select aria-label={`Choose the number of epochs (rounds)`}>
            <option>Choose an epoch number</option>  
            {this.state.Epochs.map(x => {
              return <option>{x}</option>
            })}                         
          </Form.Select>
          </Col>
          <Col>
          Dataset
          <Form.Select aria-label={`Choose the model`}>
            <option>Choose a dataset</option>
            {this.state.Dataset.map(x => {
              return <option>{x}</option>
            })}   
          </Form.Select>
          </Col>
          </Row>
          <Row style={{paddingVertical:10}}>
          <Col> 
          Model
          <Form.Select aria-label={`Choose the attack type`} >
            <option>Choose a model</option>
            {this.state.Model.map(x => {
              return <option>{x}</option>
            })}  
          </Form.Select>
          </Col>
          <Col>  Defense Algorithm
          <Form.Select aria-label={`Choose the defense algorithm`} >
            <option>Choose a defense algorithm</option>
            {this.state.Defense.map(x => {
              return <option>{x}</option>
            })}  
          </Form.Select>
          </Col>

          </Row>

          <Row className="mt-20">
            <Col>
              <Button style={{ backgroundColor: "#CCD4F2" }} type="button" onClick={()=>console.log('rest')}>Confirm</Button>
            </Col>
          </Row>

        </Form>
        
      </div>
    )
  }
}

export default Options;

// function Options(props) {
//     return (
//       <div className="Controls">
//         <Card>
//         <Form>
//           <Row>     
//             <Col >
//             Dataset
//             <Form.Select aria-label={`Choose a Dataset`}>
//             {/* <option>{`Choose a Dataset`}</option> */}
//             <option value='MNIST'>MNIST</option>
//             <option value='CIFAR10'>CIFAR-10</option>            
//           </Form.Select>
//           </Col>
//           <Col>
//           Epoch Rounds
//           <Form.Select aria-label={`Choose the number of epochs (rounds)`}>
//             {/* <option>Choose a number of epoch</option> */}
//             <option value= "10">10</option>
//             <option value= "25">25</option>
//             <option value= "50">50</option>
//             <option value= "100">100</option>
//             <option value= "200">200</option>                            
//           </Form.Select>
//           </Col>
//           <Col>
//           Model
//           <Form.Select aria-label={`Choose the model`}>
//             {/* <option>Choose a model</option> */}
//             <option value ="MNISTCNN">MNIST-CNN</option>
//             <option value ="CIFARCNN">CIFAR10-CNN</option>
//           </Form.Select>
//           </Col>
//           </Row>
//           <Row>
//           <Col> Attack Type
//           <Form.Select aria-label={`Choose the attack type`} >
//             {/* <option>Choose a defense algorithm</option> */}
//             <option value ="Label Flipping">Label Flipping</option>
//             <option value ="Backdoor">Backdoor</option>
//           </Form.Select>
//           </Col>
//           <Col>  Defense Algorithm
//           <Form.Select aria-label={`Choose the defense algorithm`} >
//             {/* <option>Choose a defense algorithm</option> */}
//             <option value ="Update Evaluator">Update Evaluator</option>
//             <option value ="Neural Cleansern">Neural Cleanser</option>
//           </Form.Select>
//           </Col>
//           <Button type="button">Confirm</Button>

//           </Row>

//         </Form>
//         </Card> 
//       </div>
//     );
//   }
// export default Options;
