import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  initializeCart,
  removeFromCart,
  clearCart,
  decrement,
  increment,
  // updateCart,
} from "../redux/cartSlice";

function NewCart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cart.id) {
      dispatch(initializeCart());
    }
  }, [cart.id, dispatch]);

  console.log("Cart state:", cart);

  const handleRemoveFromCart = (id) => {
    console.log("Removing product from cart:", id);
    dispatch(removeFromCart({ id }));
  };

  const handleClearCart = () => {
    console.log("Clearing cart");
    dispatch(clearCart());
  };

  const handleIncrement = async (item) => {
    console.log("Incrementing product quantity:", item.id);
    try {
      const response = await fetch(
        `https://fakestoreapi.com/carts/${cart.id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            userId: cart.id,
            date: new Date().toISOString().split("T")[0],
            products: cart.items.map((product) =>
              product.id === item.id
                ? { productId: product.id, quantity: product.quantity + 1 }
                : { productId: product.id, quantity: product.quantity }
            ),
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      } else {
        const updatedCart = await response.json();
        dispatch(increment({ id: item.id })); // Update local state
        console.log("Cart updated:", updatedCart);
      }
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  const handleDecrement = (id) => {
    console.log("Decrementing product quantity:", id);
    dispatch(decrement({ id }));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cart.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4"
            >
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-3"
                    onClick={() => handleDecrement(item.id)}
                  >
                    -
                  </button>
                  Quantity: {item.quantity}
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-3"
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>
                </p>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={handleClearCart}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default NewCart;
