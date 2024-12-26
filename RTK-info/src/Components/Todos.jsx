// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { addTask , deleteTask } from "../Features/Task/taskslice";

function Todos() {
    const [userTask, setUserTask] = useState("");
    const tasks = useSelector((state) => state.taskReducer.task); // Fetch tasks
    const dispatch = useDispatch();

    const handleFromSubmit = (e) => {
        e.preventDefault();
        if (userTask.trim() === "") return; // Prevent adding empty tasks
        dispatch(addTask(userTask));
        setUserTask(""); // Clear input field
    };

    const handleTaskDelete = (index) => {
        dispatch(deleteTask(index)); // Dispatch delete action
    };

    return (
        <div className="container">
            <div className="todo-app">
                <h1>To-do List</h1>

                {/* Input Form */}
                <form onSubmit={handleFromSubmit}>
                    <input
                        type="text"
                        value={userTask}
                        onChange={(e) => setUserTask(e.target.value)}
                        placeholder="Add a new task"
                    />
                    <button type="submit">Add Task</button>
                </form>

                {/* Task List */}
                <ul>
                    {tasks.length === 0 ? (
                        <p>No tasks available</p>
                    ) : (
                        tasks.map((curTask, index) => (
                            <li key={index} style={{ display: "flex", alignItems: "center" }}>
                                <p style={{ marginRight: "10px" }}>
                                    {index + 1}. {curTask}
                                </p>
                                <MdDelete
                                    style={{ cursor: "pointer", color: "red" }}
                                    onClick={() => handleTaskDelete(index)}
                                />
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Todos;
