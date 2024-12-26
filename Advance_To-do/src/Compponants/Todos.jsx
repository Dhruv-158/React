/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'
import TodoIteam from '../Compponants/TodosIteam'

function Todos(props) {

    return (
        <div className='container min-vh-100'>
            <h2 className='text-center my-3 '>Todos List</h2>
            {props.todos.length === 0 ? <h3 className='m-4'>no Todoes to display</h3> :
                props.todos.map((todo) => {
                    return <TodoIteam key={todo.Sno} todo={todo} OnDelete={props.onDelete} />
                })}
        </div>
    )
}

export default Todos
