/* eslint-disable no-unused-vars */
// src/index.js
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartContext"; // Import CartProvider
import "./index.css";


const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <CartProvider> {/* Wrap your App with CartProvider */}
            <App />
        </CartProvider>
    </StrictMode>
);
