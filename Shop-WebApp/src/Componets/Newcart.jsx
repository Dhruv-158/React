/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initializeCart, removeFromCart, clearCart, increment, decrement } from "../redux/cartSlice";

function NewCart() {
  const cart = useSelector((state) => state.cart); // Access cart state from Redux
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cart.items || cart.items.length === 0) {
      dispatch(initializeCart()); // Ensure cart is initialized when empty
    }
  }, [cart.items, dispatch]);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id })); // Dispatch action to remove item from cart
  };

  const handleIncrement = (item) => {
    dispatch(increment({ id: item.id })); // Dispatch action to increment quantity
  };

  const handleDecrement = (id) => {
    dispatch(decrement({ id })); // Dispatch action to decrement quantity
  };

  const handleClearCart = () => {
    dispatch(clearCart()); // Dispatch action to clear the cart
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.items && cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.items.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain mr-4" />
                <h3>{item.title}</h3>
              </div>
              <div className="flex items-center">
                <button 
                  onClick={() => handleDecrement(item.id)} 
                  className="bg-red-500 text-white px-4 py-2">-</button>
                <span className="mx-4">{item.quantity}</span>
                <button 
                  onClick={() => handleIncrement(item)} 
                  className="bg-green-500 text-white px-4 py-2">+</button>
              </div>
              <button 
                onClick={() => handleRemoveFromCart(item.id)} 
                className="bg-red-500 text-white px-4 py-2">
                Remove
              </button>
            </div>
          ))}
          <button onClick={handleClearCart} className="bg-gray-500 text-white px-4 py-2 mt-4">
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default NewCart;
