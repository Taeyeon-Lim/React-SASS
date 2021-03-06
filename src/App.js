import Button from './Components/Button';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <div className='buttons'>
        <Button size='large'>Button</Button>
        <Button>Button</Button>
        <Button size='small'>Button</Button>
      </div>
      <div className='buttons'>
        <Button color='lime' size='large'>
          Button
        </Button>
        <Button color='lime'>Button</Button>
        <Button color='lime' size='small'>
          Button
        </Button>
      </div>
      <div className='buttons'>
        <Button color='green' size='large'>
          Button
        </Button>
        <Button color='green'>Button</Button>
        <Button color='green' size='small'>
          Button
        </Button>
      </div>
      <div className='buttons'>
        <Button size='large' fullWidth className='customized-button'>
          Button
        </Button>
        <Button color='lime' fullWidth>
          Button
        </Button>
        <Button
          color='green'
          size='small'
          fullWidth
          onClick={() => {
            console.log('클릭');
          }}
          onMouseMove={() => {
            console.log('이동');
          }}
        >
          Button
        </Button>
      </div>
    </div>
  );
}

export default App;
