import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header';
import Options from './components/options';
import Accuracy_MNIST_200 from './components/graphs/accuracy_MNIST_200';
import Precision_MNIST_200 from './components/graphs/precision_MNIST_200';
import Loss_MNIST_200 from './components/graphs/loss_MNIST_200';
import Defense_MNIST_200 from './components/graphs/LF_defense_MNIST_200';
import Defense_MNIST_100 from './components/graphs/LF_defense_MNIST_100';
import Defense_MNIST_50 from './components/graphs/LF_defense_MNIST_50';
import BDCifar10_10 from './components/graphs/accuracy_Cifar10_10Backdoor';
import BDCifar10_20 from './components/graphs/accuracy_Cifar10_20Backdoor';
import BDCifar10_30 from './components/graphs/accuracy_Cifar10_30Backdoor';
import BDMNIST_10 from './components/graphs/accuracy_MNIST_10Backdoor';
import BDMNIST_20 from './components/graphs/accuracy_MNIST_20Backdoor';
import BDMNIST_30 from './components/graphs/accuracy_MNIST_30Backdoor';
import BDCifarfed_25 from './components/graphs/accuracy_Cifarfed_25Backdoor';
import BDCifarfed_50 from './components/graphs/accuracy_Cifarfed_50Backdoor';
import BDCifarfed_75 from './components/graphs/accuracy_Cifarfed_75Backdoor';




function App() {
  return (
    <div className="App">
   
      < Header />
      <Accuracy_MNIST_200/>
      <Precision_MNIST_200/>
      <Loss_MNIST_200/>
      <Defense_MNIST_200/>
      <Defense_MNIST_100/>
      <Defense_MNIST_50/>
      
      Back Door Attacks

      <BDCifar10_10/>
      <BDCifar10_20/>
      <BDCifar10_30/>


      <BDMNIST_10/>
      <BDMNIST_20/>
      <BDMNIST_30/>

      <BDCifarfed_25/>
      <BDCifarfed_50/>
      <BDCifarfed_75/>
    </div>
  );
}

export default App;
