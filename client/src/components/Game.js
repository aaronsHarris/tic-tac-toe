import React from "react";
import { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helper";
const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xisNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xisNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    //return if won or occupied
    if (winner || square[i]) return;
    //select square
    square[i] = xO;
    setHistory([...historyPoint, square]);
    setStepNumber(historyPoint.length);
    setXisNext(!xisNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0)
  };
  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to Start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });
  return (
    <>
      <h1>React Tic Tac Toe with Hooks</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <h3>history</h3>
          {renderMoves()}
        </div>
        <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
      </div>
    </>
  );
};

export default Game;
