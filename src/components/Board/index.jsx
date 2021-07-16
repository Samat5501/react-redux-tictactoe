import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import './board.css'


const Board = ({boardSize,board}) => {
  
  document.body.style.setProperty("--board-size", `${Math.sqrt(boardSize)}`);
    return (
        <div>
      <div className="board-container">
        {board.map((cell, index) => (
          <div key={index} className="board">
            {board}
          </div>
        ))}
      </div>
    </div>
    )
}

export default Board
