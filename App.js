import React, { useState } from "react";
import "./App.css";
function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}
const App = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const handleClick = (i) => {
    if (calculateWinner(square)) {
      return;
    }
    square[i] = isX ? "X" : "O";
    setSquare(square);
    setIsX(!isX);
  };

  const winner = calculateWinner(square);
  let status;

  if (winner) {
    status = `winner : ${winner}`;
  } else {
    status = `Next Player : ` + (isX ? "X" : "O");
  }

  function calculateWinner(square) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c])
        return square[a];
    }
    return null;
  }
  function handleRestart() {
    setIsX(true);
    setSquare(Array(9).fill(null));
  }
  return (
    <div className="broad">
      <div className="broad-row">
        <Square value={square[0]} onClick={() => handleClick(0)} />
        <Square value={square[1]} onClick={() => handleClick(1)} />
        <Square value={square[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="broad-row">
        <Square value={square[3]} onClick={() => handleClick(3)} />
        <Square value={square[4]} onClick={() => handleClick(4)} />
        <Square value={square[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="broad-row">
        <Square value={square[6]} onClick={() => handleClick(6)} />
        <Square value={square[7]} onClick={() => handleClick(7)} />
        <Square value={square[8]} onClick={() => handleClick(8)} />
      </div>
      <div className="status">{status}</div>
      <button className="restart" onClick={handleRestart}>
        Restart Game
      </button>
    </div>
  );
};

export default App;
