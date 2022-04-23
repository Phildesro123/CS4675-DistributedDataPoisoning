import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header';
import Options from './components/options';

import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
   
      < Header />
      <Options name = "Dataset"/>

      <header className="App-header">
    
      </header>
    </div>
  );
}

export default App;
