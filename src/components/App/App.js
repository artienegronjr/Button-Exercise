import React from 'react';
import './App.css';
import Button from '../Button/Button';

function App() {
  const [counter, setCounter] = React.useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  }

  return (
    <div className="App">
      <Button fontSize={32} onClick={increaseCounter}></Button>
      <p>This button has been clicked {counter} time(s).</p>
    </div>
  );
}

export default App;
