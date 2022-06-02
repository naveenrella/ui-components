import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';

// Uncomment below lines  once the brand variables are published. 

// import { BrandAlpha } from "../Assests/variables/BrandAlpha"; // you should publish this as a node module
// import { BrandBeta} from "../Assests/variables/BrandAlpha"; // you should publish this as a node module
// import { BrandCharlie} from "../Assests/variables/BrandAlpha"; // you should publish this as a node module
// import { BrandDelta } from "../Assests/variables/BrandAlpha"; // you should publish this as a node module

function App() {
  const firstButtonOptions = {
    "className": "button-default",
    "id": "firstButton",
    "buttonText": "First Button",
    "color": "green",
    "backgroundColor":"white"
  };

  const secondButtonOptions = {
    "className": "button-default",
    "id": "firstButton",
    "buttonText": "Second Button",
    "color": "blue",
    "backgroundColor":"white"
  };

  const thirdButtonOptions = {
    "className": "button-default",
    "id": "firstButton",
    "buttonText": "Third Button",
    "color": "red",
    "backgroundColor":"white"
  };

  const fourthButtonOptions = {
    "className": "button-default",
    "id": "firstButton",
    "buttonText": "Fourth Button",
    "color": "black",
    "backgroundColor":"white"
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <Button data={firstButtonOptions}></Button>
        <Button data={secondButtonOptions}></Button>
        <Button data={thirdButtonOptions}></Button>
        <Button data={fourthButtonOptions}></Button>


 {/* The below code will only when you publish the brand variables i.e. BrandAlpha, BrandBeta, BrandCharlie,  BrandDelta as a node mmodule nothing but a separate repo */}
        {/* <Button data={BrandAlpha}></Button>
        <Button data={BrandBeta}></Button>
        <Button data={BrandCharlie}></Button>
        <Button data={BrandDelta}></Button> */}
        
        </p>
      </header>
    </div>
  );
}

export default App;
