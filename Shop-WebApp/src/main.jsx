/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)