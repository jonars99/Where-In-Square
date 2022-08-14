import './App.css';
import { useState } from 'react';

function App() {
  const [ coords, setCoords ] = useState([]);

  const handleClick = (e) => {
    setCoords([e.pageX, e.pageY]);
  }

  return (
    <div className="App App-header">
      <h2>Where in the Square ?</h2>
      <canvas className="square" onClick={handleClick}></canvas>
      <small>mouseX: {coords[0]}</small>
      <small>mouseY: {coords[1]}</small>
    </div>
  );
}

export default App;
