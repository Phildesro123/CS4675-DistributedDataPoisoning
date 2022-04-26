import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header';
import Options from './components/options';
import Results from './components/results';
import { Container } from "react-bootstrap"; 


function App() {
  return (
    <div className="App">
   
      < Header />
      <Container>
        <Options/>
        <Results/>
      </Container>
    </div>
  );
}

export default App;
