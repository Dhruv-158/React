/* eslint-disable no-unused-vars */
import React from "react";
import { useCart } from "../context/CartContext"; // Import the Cart context

const CartPage = () => {
    const { cart, setCart } = useCart(); // Access cart state from context

    const handleQuantityChange = (id, quantity) => {
        setCart(
            cart.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const handlePurchase = () => {
        alert("Thank you for your purchase!");
        setCart([]); // Clear the cart after purchase
    };

    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto p-4 md:p-6">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            {cart.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li
                            key={item.id}
                            className="flex flex-col md:flex-row items-start md:items-center justify-between border-b py-4"
                        >
                            {/* Item Image and Details */}
                            <div className="flex items-center space-x-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-20 h-20 object-cover rounded"
                                />
                                <div>
                                    <h2 className="text-lg font-semibold">{item.title}</h2>
                                    <p className="text-gray-600">${item.price}</p>
                                </div>
                            </div>

                            {/* Quantity and Total Price */}
                            <div className="flex items-center space-x-2 mt-4 md:mt-0">
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) =>
                                        handleQuantityChange(item.id, Number(e.target.value))
                                    }
                                    className="w-16 border rounded p-1 text-center"
                                />
                                <p className="text-lg font-semibold">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </p>
                            </div>

                            {/* Remove Button */}
                            <button
                                onClick={() => handleRemoveItem(item.id)}
                                className="mt-4 md:mt-0 bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            {/* Total Amount and Buy Button */}
            {cart.length > 0 && (
                <div className="mt-6 text-right">
                    <h2 className="text-xl font-bold">Total: ${totalAmount.toFixed(2)}</h2>
                    <button
                        onClick={handlePurchase}
                        className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                    >
                        Buy Now
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartPage;
