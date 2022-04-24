import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header';
import Options from './components/options';
import Result1 from './components/graphs/accuracy_MNIST_200';


function App() {
  return (
    <div className="App">
   
      < Header />
      <Result1/>
    </div>
  );
}

export default App;
