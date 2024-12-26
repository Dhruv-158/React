
/* eslint-disable no-unused-vars */
import React, { useState ,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from 'react-icons/md';
import { addTask, deleteTask , fetchTask } from '../redux/store';

function Todos() {
    
    const [task, setTask] = useState("");
    const [message, setMessage] = useState("");
    const dispatch = useDispatch()
    const Taskss = useSelector((state) => state.task)
    // console.log("React redux state :-", taskS.task);


    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (task != "") {
            dispatch(addTask(task))
            setTask("")
            setMessage("")
        }
        else {
            setMessage("Please enter a Task first");
            setTimeout(() => {
                setMessage("");
            }, 1200);
        }
    }

    const handleTaskDelete = (id) => {
        return dispatch(deleteTask(id))
    }

    const handleFetchTasks = () => {
        dispatch(fetchTask())
    }

    return (
        <>
            <div className='container'>
                <div className='todo-app'>
                    <h1>
                        <i className='fa-regular fa-pen-to-square'></i>To-do List:
                    </h1>
                    {message && <p style={{ color: "red", fontSize:'35px' }}>{message}</p>}
                    <div className='row'>
                        <form onSubmit={handleFormSubmit}>
                            <input type='text' id='input-box' value={task} onChange={(e) => setTask(e.target.value)} placeholder='Add a new task' />
                            <button >Add Task</button>
                        </form>
                    </div>
                    <button onClick={handleFetchTasks}>Fetch Task</button>
                    <ul id='list-conatiner'>
                        {
                            Taskss.map((curTask, index) => {
                                return (
                                    <li key={index}>
                                        <div style={{ width: '300px', display: 'flex', justifyContent: 'space-between' }}>
                                            <p>{index}:</p>
                                            <p>{curTask}</p>
                                            <p><MdDelete className='icon-style' onClick={() => handleTaskDelete(index)}/>
                                            </p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Todos