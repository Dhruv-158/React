/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { CountContext } from '../context/Counter'

function Increment() {

    const {CountDisplay , MemoizedCountTitle , CounterButton } = useContext(CountContext)

    return (
        <>
            <div>
                <MemoizedCountTitle/>
                <CountDisplay/>
                <CounterButton/>
            </div>
        </>
    )
}

export default Increment