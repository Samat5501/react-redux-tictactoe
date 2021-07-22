import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./app.css";
import Board from "./Board";
import Input from "./Input";
export const App = () => {
  const state = useSelector((state) => state.repos);
  const player2 = useSelector((state) => state.players);
  const [boardSize, setBoardSize] = useState(state.boardSize);
  const [moveLimit, setMovelimit] = useState(state.boardSize);
  const [board, setBoard] = useState([...Array(state.boardSize).fill()]);
  const [size, setSize] = useState(state.size1);

  const [moves, setMoves] = useState(state.moves);
  const [winner, setWinner] = useState(state.winner1);
  const [player, setPlayer] = useState(state.player);

  function getInputValue(event) {
    const sizeInput = event.target.value;
    setSize(sizeInput);
  }
  function setFromInputSize(event) {
    if (event.key === "Enter" && size !== "") {
      setBoardSize(Math.pow(size, 2));
      setMovelimit(Math.pow(size, 2));
      setBoard([...Array(Math.pow(size, 2)).fill()]);
    }
  }
  console.log(state.moves);
  return (
    <div className="App">
      <h1>Tic-tac-toe</h1>
      <p>Who will be first</p>
      <div>
        <div className="btns">
          <button className="btn" onClick={() => setPlayer("X")}>
            {player2.p1}
          </button>
          <button className="btn" onClick={() => setPlayer("O")}>
            {player2.p2}
          </button>
        </div>
        <Input
          type="number"
          value={size}
          onKeyPress={setFromInputSize}
          onChange={getInputValue}
        />
      </div>
      <div>
        {winner ? (
          <h3>The winner is {winner}</h3>
        ) : moves === moveLimit ? (
          <h3>it's a Draw</h3>
        ) : (
          <div>
            <b>Player {player} turn.</b>
          </div>
        )}
        <p>Moves: {moves}</p>
      </div>
      <div>
        <Board
          boardSize={boardSize}
          board={board}
          setBoard={setBoard}
          winner={winner}
          setWinner={setWinner}
          player={player}
          setPlayer={setPlayer}
          moves={moves}
          setMoves={setMoves}
          moveLimit={moveLimit}
          setMovelimit={setMovelimit}
        />
      </div>
      <button>Restart</button>
    </div>
  );
};
