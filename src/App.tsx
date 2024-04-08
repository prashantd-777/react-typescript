import './App.css';
import List from './components/generics/List';
import DOMRef from './components/ref/DOMRef';
import MutableRef from './components/ref/MutableRef';
import { RandomNumber } from './components/restriction/RandomNumber';

function App() {
  return (
    <div className="App">
      <RandomNumber value={10} isPositive={true} />
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
