// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { addTask, deleteTask, fetchTask } from '../redux/store';

function Todos() {
    const [task, setTask] = useState("");
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const Taskss = useSelector((state) => state.taskReducer.task);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (task !== "") {
            dispatch(addTask(task));
            setTask("");
            setMessage("");
        } else {
            setMessage("Please enter a Task first");
            setTimeout(() => setMessage(""), 1200);
        }
    };

    const handleTaskDelete = (id) => dispatch(deleteTask(id));

    const handleFetchTasks = () => dispatch(fetchTask());

    return (
        <div className="container">
            <div className="todo-app">
                <h1>
                    <i className="fa-regular fa-pen-to-square"></i> To-do List:
                </h1>
                {message && <p style={{ color: "red", fontSize: "35px" }}>{message}</p>}
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Add a new task"
                    />
                    <button>Add Task</button>
                </form>
                <button onClick={handleFetchTasks}>Fetch Tasks</button>
                <ul id="list-container">
                    {Taskss.map((curTask, index) => (
                        <li key={index}>
                            <div style={{ width: "300px", display: "flex", justifyContent: "space-between" }}>
                                <p>{index}:</p>
                                <p>{curTask}</p>
                                <MdDelete className="icon-style" onClick={() => handleTaskDelete(index)} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todos;
