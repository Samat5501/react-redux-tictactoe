import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import './app.css'
import Board from './Board';
import Input from './Input';


export const App = () => {
    const boardSize1 = useSelector(state => state.repos.boardSize)
    const [boardSize, setBoardSize] = useState(boardSize1);
    const [moveLimit, setMovelimit] = useState(boardSize);
    const [board, setBoard] = useState([...Array(boardSize).fill(null)]);
    const size1 = useSelector(state => state.repos.size)
    const [size, setSize] = useState(size1);

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
    
  return (
    <div className="App">
      <h1>Tic-toc-toe</h1>
      <p>Who will be first</p>
      <div>
        <div>
            <button>X</button>
            <button>O</button>
        </div>
        <Input
          type="number"
          value={size}
          onKeyPress={setFromInputSize}
          onChange={getInputValue}
        />
      </div>
          <button>Restart</button>
          <div><Board
              boardSize={boardSize}
              board={board}
              setBoard={setBoard}
              setMovelimit={setMovelimit}
          /></div>
    </div>
  );
}
