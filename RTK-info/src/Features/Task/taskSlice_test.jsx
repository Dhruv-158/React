import { store } from "../../redux/store";
import { addTask, deleteTask } from "./taskslice";

// Dispatching actions
store.dispatch(addTask("Buy fruits"));
console.log(store.getState()); // Logs: { taskReducer: { task: ["Buy fruits"] } }

store.dispatch(addTask("Buy vegetables"));
console.log(store.getState()); // Logs: { taskReducer: { task: ["Buy fruits", "Buy vegetables"] } }

store.dispatch(deleteTask(0));
console.log(store.getState()); // Logs: { taskReducer: { task: ["Buy vegetables"] } }
