/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, onAddToCart }) => {
    const [addedMessage, setAddedMessage] = useState(false);
    const navigate = useNavigate();

    const handleAddToCart = (e) => {
        e.preventDefault(); // Prevent navigation
        onAddToCart();
        setAddedMessage(true);
        setTimeout(() => setAddedMessage(false), 2000); // Message disappears after 2 seconds
    };

    const handleBuyNow = (e) => {
        e.preventDefault(); // Prevent navigation
        navigate("/checkout", { state: { product } }); // Redirect to checkout page
    };

    return (
        <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
            <img className="w-full h-48 object-fill" src={product.image} alt={product.title} />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
                <p className="text-gray-600">${product.price}</p>

                
                <button
                    onClick={handleAddToCart}
                    className="mt-4 w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded"
                >
                    Add to Cart
                </button>

            
                <button
                    onClick={handleBuyNow}
                    className="mt-2 w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded"
                >
                    Buy Now
                </button>

                
                {addedMessage && (
                    <div className="absolute top-2 right-2 bg-green-200 text-green-800 px-2 py-1 rounded text-xs">
                        Added to Cart
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
