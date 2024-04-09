import './App.css';
import List from './components/generics/List';
import CustomButton from './components/html/Button';
import DOMRef from './components/ref/DOMRef';
import MutableRef from './components/ref/MutableRef';
import { RandomNumber } from './components/restriction/RandomNumber';
import Toast from './components/templateLiterals/Toast';

function App() {
  return (
    <div className="App">
      <CustomButton variant="primary" onClick={() => console.log("clicked")}>
        Primary Button
      </CustomButton>
      {/* <Toast position="top-left" /> */}
      {/* <RandomNumber value={10} isPositive={true} /> */}
      {/* <List 
      items={['Batman', 'Superman', 'Wonder women']}
      onClick={(item) => console.log(item)} />
      
      <List 
      items={[1, 2, 3]}
      onClick={(item) => console.log(item)} /> */}
      {/* <DOMRef />
      <MutableRef /> */}
    </div>
  );
}

export default App;
