import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './app.css'
import {setCount} from '../reducers/reposReducer'
import Main from './Main'


export const App = () => {
    const dispatch = useDispatch()
    const item = useSelector(state => state.repos.count)
    function onCountClick() {
        dispatch(setCount(item + 5))
        // console.log(item);
    }
    return (
        <div className="app">
            <button onClick={() => onCountClick()}>sumbit</button>
            <div>{item}</div>
            <Main/>
        </div>
    )
}
