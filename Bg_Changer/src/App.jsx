/* eslint-disable no-unused-vars */
import { Input } from 'postcss'
import React, { useState } from 'react'

function App() {

  const [input, setinput] = useState('')
  const [task, settask] = useState([])

  const addTask = () => {
    settask([...task, { text: input, completed: false }])
    console.log(input)
    setinput('')
  }

  const [counter, Setcounter] = useState(1)

  return (
    <>
      <div className='w-full h-screen bg-slate-500 grid place-items-center '>
        <div className='w-1/2 h-auto grid place-items-center'>
          <div className='w-full border border-solid border-black overflow-auto rounded-lg flex'>
            <input className='focus:outline-none focus:ring-0 px-4 py-2' type='text' value={input} onChange={(e) => setinput(e.target.value)} /><button className='w-1/3 bg-blue-600' onClick={addTask}>Add</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App