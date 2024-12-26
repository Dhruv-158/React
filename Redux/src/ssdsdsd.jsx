// // it is also store.jsx file before partiction 

// import { createStore } from "redux";

// const ADD_TASK = "task/add";
// const DELETE_TASK = "task/delete"


// const initialState = {
//     task: [],
//     isLoading: false
// }


// const taskReducer = (state = initialState, action) => {
//     switch (action.type) {

//         case ADD_TASK:
//             return {
//                 ...state,
//                 task: [...state.task, action.payload],
//             };

//         case DELETE_TASK:
//             const updatedTask = state.task.filter((curTask, index) => {
//                 return index !== action.payload;
//             });
//             return {
//                 ...state,
//                 task: [...state.task, updatedTask],
//             };

//         default:
//             return state;
//     }
// };

// const store = createStore(taskReducer)
// console.log(store)
// console.log("initial State :",store.getState());

// store.dispatch({type: ADD_TASK , payload:' My name is dhruv. '})
// console.log("Add State",store.getState());

// store.dispatch({type:ADD_TASK , payload:'I learn react for development'})
// console.log("Add State :",store.getState());

// store.dispatch({type:ADD_TASK, payload:'But i want to Learn Python'})
// console.log("Add State :",store.getState());

// store.dispatch({type:ADD_TASK, payload:'For Ai ML'})
// console.log("Add State :",store.getState());

// store.dispatch({type:DELETE_TASK,payload:1})
// console.log("Updated State :", store.getState())

// import { composeWithDevTools } from "@redux-devtools/extension";