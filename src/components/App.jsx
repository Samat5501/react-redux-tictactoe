import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./app.css";
import styled from 'styled-components';
import Board from "./Board";
import Input from "./Input";
import { restart_board } from '../store/action/action'
import Swal from 'sweetalert2'


export const App = () => {
  const state = useSelector((state) => state.repos);
  const player2 = useSelector((state) => state.players);
  const [boardSize, setBoardSize] = useState(state.boardSize);
  const [moveLimit, setMovelimit] = useState(state.boardSize);
  const [board, setBoard] = useState([...Array(state.boardSize).fill()]);
  const [size, setSize] = useState(state.size);

  const [moves, setMoves] = useState(state.moves);
  const [winner, setWinner] = useState(state.winner);
  const [player, setPlayer] = useState(state.player);

  let obj = {
    boardSize: boardSize,
    board: board,
    winner: winner,
    player: player,
    moves: state.moves,
    moveLimit: moveLimit,
}

  const dispatch = useDispatch();
  const handleRestart = () => {
    dispatch(restart_board(obj))
    setBoard([...Array(moveLimit).fill(null)]);
    setPlayer(player === 'X' ? 'O' : 'X');
    // setMoves(state.moves);
    setWinner("");
};

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

  const BoardStyle = styled.div`
  color: ${(player === 'X') ? 'blue' : 'yellow'};
  `;
  const BoardStyle2 = styled.div`
  color: ${(player === 'X') ? 'yellow' : 'blue'};
  `;
  
  const win = () =>{
    Swal.fire('The winner is ' + winner);
  }
  
  const draw = () => {
    Swal.fire("it's a Draw");
  }

  return (
    <div className="App">
      <h1>Tic-tac-toe</h1>
      <p>Who will be first</p>
      <div className='block'>
        <div className="btns">
          <button className="btn x" onClick={() => setPlayer("X")}>
            {player2.p1}
          </button>
          <button className="btn o" onClick={() => setPlayer("O")}>
            {player2.p2}
          </button>
        </div>
        <Input
          type="number"
          value={size}
          onKeyPress={setFromInputSize}
          onChange={getInputValue}
        />
      
        <div className='block__second'>
          <BoardStyle>
        {winner ? (
          win()
        ) : moves === moveLimit ? (
          draw()
                
        ) : (
          <div className='player'>
            Player <BoardStyle2>{player}</BoardStyle2>turn.
          </div>
            )}
          </BoardStyle>
        <p className='moves'>Moves: {moves}</p>
      </div>
      </div>
     
      <div className='b'>
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
      <button className='button' onClick={handleRestart}>Restart</button>
    </div>
  );
};