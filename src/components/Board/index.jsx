import React, {  useEffect } from 'react'
import { checkBoard } from '../Checkboard/CheckBoard';
import './board.css'
import styled from 'styled-components';

const Board = ({boardSize,board,setBoard,winner,setWinner,player,setPlayer,moves,setMoves,moveLimit}) => {
  
  document.body.style.setProperty("--board-size", `${Math.sqrt(boardSize)}`);

    
  useEffect(() => {
    if (checkBoard(board))
      setWinner(checkBoard(board) === "X" ? "Player X" : "Player O");
  }, [board, setWinner]);
    
    const handleClick = (index) => {
    if (winner) return;
    if (moves === moveLimit) return;
    if (board[index]) return;

    const tempBoard = [...board];
    tempBoard[index] = player;
    setBoard(tempBoard);

    setPlayer(player === 'X' ? 'O' : 'X');
    setMoves((prevState) => prevState + 1);
    
  };

  const BoardStyle = styled.div`
  color: ${(player === 'X') ? 'blue' : 'yellow'};
  `;
  
    return (
      <div className="board-container">
          {board.map((__, idx) => (
            <div
              key={idx}
              className='board'
              onClick={() => handleClick(idx)}
          >
              <BoardStyle>
                {board[idx] === 'X' ? "X" : board[idx] === 'O' ? "O" : null}
            </BoardStyle>
            
          </div>
        ))}
      </div>
    )
}

export default Board
