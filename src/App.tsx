import './App.css';
import List from './components/generics/List';
import DOMRef from './components/ref/DOMRef';
import MutableRef from './components/ref/MutableRef';
import { RandomNumber } from './components/restriction/RandomNumber';
import Toast from './components/templateLiterals/Toast';

function App() {
  return (
    <div className="App">
      <Toast position="top-left" />
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
