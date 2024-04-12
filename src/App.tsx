import './App.css';
import User from './features/access-modifiers';
// import Text from './components/polymorphic/text';

function App() {
  const u1 = new User('Prashant');
u1.setName("John" as string);
// u1.name = "Krishna"; // Private variable not accessible outside 
u1.displayName();
// u1.getNameLength(); // Private function not accessible outside

  return (
    <div className="App">
      {/* <Text as="h1" size="lg">
        Heading Text
      </Text> */}
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
