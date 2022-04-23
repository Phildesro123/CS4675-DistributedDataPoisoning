import { Row ,Container, Form } from "react-bootstrap"; 

function Options(props) {
    return (
      <div className="Controls">
        {props.name}
          <Form.Select aria-label={`Choose a ${props.name}`}>
            <option>{`Choose a ${props.name}`}</option>
            <option>MNIST</option>
            <option>CIFAR-10</option>            
          </Form.Select>
      </div>
    );
  }
export default Options;
