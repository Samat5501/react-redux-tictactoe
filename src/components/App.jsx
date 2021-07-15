import React, {useState} from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import './app.css'
// import {setCount} from '../reducers/reposReducer'


export const App = () => {
    const [value, setValue] = useState();
  const [value1, setValue1] = useState();

   
  const press = (event) => {
    if (event.key === 'Enter' && value !== '') {
      setValue1(value);
      setValue('');
    }
  };
  return (
    <div>
      <h1>Tic-toc-toe</h1>
      <p>Who will be first</p>
      <div>
        <div>
          <button>O</button>
          <button>X</button>
        </div>
        <input
          type="number"
          value={value}
          onKeyPress={press}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div>
        <h4>The winner is Player 1</h4>
        <p>movies 3</p>
      </div>
      <button>restart</button>
      <ul>
        <li className="row">{value1}</li>
        {/* {square.map((item, index) => {
                    return (
                        <li className="row">{item}</li>
                    )
                })} */}
      </ul>
    </div>
  );
}
