import Button from "./Components/Button";
import './App.scss'

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">Button</Button>
        <Button size='medium'>Button</Button>
        <Button size='small'>Button</Button>
      </div>
      <div className="buttons">
        <Button color='lime' size="large">Button</Button>
        <Button color='lime' size='medium'>Button</Button>
        <Button color='lime' size='small'>Button</Button>
      </div>
      <div className="buttons">
        <Button color='green' size="large">Button</Button>
        <Button color='green' size='medium'>Button</Button>
        <Button color='green' size='small'>Button</Button>
      </div>
    </div>
  );
}

export default App;
