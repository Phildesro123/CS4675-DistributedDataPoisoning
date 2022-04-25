import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header';
import Options from './components/options';
import Accuracy_MNIST_200 from './components/graphs/accuracy_MNIST_200';
import Precision_MNIST_200 from './components/graphs/precision_MNIST_200';
import Loss_MNIST_200 from './components/graphs/loss_MNIST_200';


function App() {
  return (
    <div className="App">
   
      < Header />
      <Accuracy_MNIST_200/>
      <Precision_MNIST_200/>
      <Loss_MNIST_200/>
    </div>
  );
}

export default App;
