/* eslint-disable no-case-declarations */
import { configureStore } from "@reduxjs/toolkit";

// Action types
export const ADD_TASK = "task/add";
export const DELETE_TASK = "task/delete";
export const FETCH_TASK = "task/fetch";

// Action creators
export const addTask = (data) => {
    return { type: ADD_TASK, payload: data };
};

export const deleteTask = (id) => {
    return { type: DELETE_TASK, payload: id };
};

export const fetchTask = () => {
    return async (dispatch) => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3");
            const tasks = await res.json();
            dispatch({
                type: FETCH_TASK,
                payload: tasks.map((curTask) => curTask.title),
            });
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };
};

// Initial state
const initialState = {
    task: [],
    isLoading: false,
};

// Reducer
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                task: [...state.task, action.payload],
            };
        case DELETE_TASK:
            
            const updatedTask = state.task.filter((_, index) => index !== action.payload);
            return {
                ...state,
                task: updatedTask,
            };
        case FETCH_TASK:
            return {
                ...state,
                task: [...state.task, ...action.payload],
            };
        default:
            return state;
    }
};

// Store configuration
export const store = configureStore({
    reducer: {
        taskReducer, // Register the reducer here
    },
});

// Export the reducer as default for imports elsewhere
export default taskReducer;
