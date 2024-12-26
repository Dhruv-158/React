

import { createStore, applyMiddleware } from "redux";
import taskReducer from "./reducers";
import { ADD_TASK, DELETE_TASK ,FETCH_TASK } from "./action";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

export const store = createStore(taskReducer, composeWithDevTools(applyMiddleware(thunk)))
console.log(store)
// console.log("initial State :",store.getState());

export const addTask = (data) => {
    return { type: ADD_TASK, payload: data }
}

export const deleteTask = (id) => {
    return { type: DELETE_TASK, payload: id }
}

// That is A our Middleware Which we use for Thunk in redux
// it help to fetch Data

export const fetchTask = () => {
    return async (dispatch) => {
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3");
                const task = await res.json();
                console.log(task)
            dispatch({ type: FETCH_TASK, payload: task.map((curTask) => curTask.title)})
        }
        catch(error){
            console.log(error)
        }
    }
}

// store.dispatch(addTask("hello"))
// console.log("Add State :",store.getState());

// store.dispatch(addTask("my name is john"))
// console.log("Add State :",store.getState());

// store.dispatch(addTask("hello tom"))
// console.log("Add State :",store.getState());

// store.dispatch(addTask("my Caption"))
// console.log("Add State :",store.getState());

// store.dispatch(addTask("I am a Ironman"))
// console.log("Add State :",store.getState());

// store.dispatch(addTask("I am a Hulk"))
// console.log("Add State :",store.getState());

// console.log("Add State :",store.getState());

// store.dispatch(deleteTask(0))
// console.log("Delete State :",store.getState());


// store.dispatch({type: ADD_TASK , payload:' My name is dhruv. '})
// console.log("Add State",store.getState());

// store.dispatch({type:DELETE_TASK,payload:1})
// console.log("Updated State :", store.getState())