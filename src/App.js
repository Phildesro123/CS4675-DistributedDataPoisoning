import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header';
import Options from './components/options';
import Results from './components/results';
import React, { useState, useEffect } from 'react';

function App() {
  const [attack, setAttack] = useState('');
  const [epochs, setEpochs] = useState(0);
  const [datset, setDataset] = useState('');
  const [model, setModel] = useState('');

  const props = {
    attack, epochs, datset, model,
  }

  const handleChange = (a,e,d,m) => {
    setAttack(a);
    setEpochs(e);
    setDataset(d);
    setModel(m);
  }

  return (
    <div className="App">
      < Header />
      <Options handleChange = {handleChange}  />
      <Results {...props}/>
    </div>
  );
}

export default App;
