/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'


function TodosIteam({ todo, OnDelete }) {
    return (
        <div className='container-lg m-4'>
            <h5>{todo.title}</h5>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={() => {OnDelete(todo)}} >Delete</button>
        </div>
    )
}

export default TodosIteam