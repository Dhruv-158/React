/* eslint-disable no-case-declarations */

import { ADD_TASK , DELETE_TASK , FETCH_TASK } from "./action";

const initialState = {
    task: [],
    isLoading: false
}


const taskReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                task: [...state.task, action.payload],
            };
        case DELETE_TASK:
            const updatedTask = state.task.filter((curTask, index) => {
                return index !== action.payload;
            });
            return {
                ...state,
                task:  updatedTask,
            };
        case FETCH_TASK:
            return{
                ...state,
                task:[...state.task , ...action.payload]
            }
        
        default:
            return state;
    }
};

export default taskReducer;