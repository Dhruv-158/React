/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decremrnt, increment } from './redux/action'
import './App.css'

function App() {

    const count = useSelector((state) => state.count)
    const dispatch = useDispatch();

    return (
        <>
        <div>
            <h1>Count : {count}</h1>
            <button style={{margin:'1pc'}}  onClick={() => dispatch(increment())} >+1</button>
            <button style={{margin:'1pc'}}  onClick={() => dispatch(decremrnt())}>-1</button>
        </div>
        </>
    )
}

export default App