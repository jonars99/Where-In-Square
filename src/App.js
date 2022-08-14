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
      <div className="square" onClick={handleClick}></div>
      <small>mouseX: {coords[0]}</small>
      <small>mouseY: {coords[1]}</small>
    </div>
  );
}

export default App;
