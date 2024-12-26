import { configureStore, } from "@reduxjs/toolkit";
import { taskReducer } from "../Features/Task/taskslice";


export const store = configureStore({
    reducer: {
        taskReducer: taskReducer.reducer,
    },
});

