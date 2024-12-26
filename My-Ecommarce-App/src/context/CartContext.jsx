/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// src/context/CartContext.js
import React, { createContext, useContext, useState } from "react";

// Create the context
const CartContext = createContext();

// Custom hook to use the Cart context
export const useCart = () => useContext(CartContext);

// CartProvider component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, setCart, totalCount }}>
            {children}
        </CartContext.Provider>
    );
};
