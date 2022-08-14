import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [ coords, setCoords ] = useState({
    start: [],
    end: [],
  });
  const c = useRef();

  const drawLine = () => {
    var ctx = c.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(coords.start[0], coords.start[1]);
    ctx.lineTo(coords.end[0], coords.end[1]);
    ctx.stroke();
  }

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect()
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    if (coords.start.length == 0) {
      setCoords({
        start: [Math.floor(x), Math.floor(y)],
        end: [Math.floor(x), Math.floor(y)],
      })
    }
    else {
      setCoords({
        start: [coords.end[0], coords.end[1]],
        end: [Math.floor(x), Math.floor(y)],
      })
    }
  }

  useEffect(() => {
    drawLine();
  }, [coords]);

  return (
    <div className="App App-header">
      <h2>Where in the Square ?</h2>
      <canvas width="350" height="350" ref={c} className="square" onClick={handleClick}></canvas>
      <small>line start: x:{coords.start[0]}  y:{coords.start[1]}</small>
      <small>line end: x:{coords.end[0]} y:{coords.end[1]}</small>
    </div>
  );
}

export default App;
