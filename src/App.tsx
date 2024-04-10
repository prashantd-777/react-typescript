import './App.css';
import Text from './components/polymorphic/text';

function App() {
  return (
    <div className="App">
      <Text as="h1" size="lg">
        Heading Text
      </Text>
      {/* <CustomButton variant="primary" onClick={() => console.log("clicked")}>
        Primary Button
      </CustomButton> */}
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
