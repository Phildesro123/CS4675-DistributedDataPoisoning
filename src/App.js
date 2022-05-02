import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Card, Container,Button, Col, Row, Form  } from "react-bootstrap"; 
import Header from './components/header';
import Options from './components/options';
import Results from './components/results';
import Instructions from './components/instructions';
import React, { useState, useEffect } from 'react';

function App() {
  const [attack, setAttack] = useState('');
  const [epochs, setEpochs] = useState(0);
  const [dataset, setDataset] = useState('');
  const [model, setModel] = useState('');

  const props = {
    attack, epochs, dataset, model,
  }

  const handleChange = (a,e,d,m) => {
    setAttack(a);
    setEpochs(e);
    setDataset(d);
    setModel(m);
  }

  return (
    <div className="App" style={{zoom:.8}}>
      < Header />
      <Options handleChange = {handleChange}  />

      <Row>
      <Col><Results {...props}/></Col>
      <Col><Instructions/></Col>
      </Row>
     
     

      
    </div>
  );
}

export default App;
