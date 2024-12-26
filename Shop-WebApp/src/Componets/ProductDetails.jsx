/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import { useDispatch } from "react-redux"; // Import useDispatch for dispatching actions
import { addToCart } from "../redux/cartSlice"; // Ensure you import the action
import fetchProductById from "../utils/api"

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const addToCartHandler = (product) => {
        dispatch(addToCart(product));
        alert("Product Add in Cart")
    };

    useEffect(() => {
        const getProductDetails = async () => {
            try {
                const productData = await fetchProductById(id);
                setProduct(productData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product details:", error.message);
                setError("Failed to fetch product details.");
                setLoading(false);
            }
        };
        getProductDetails();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-xl">Loading...</p>
            </div>
        );
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    if (!product) {
        return <p className="text-red-500">Product not found.</p>;
    }

    return (
        <div className="p-8 bg-gradient-to-b from-gray-100 to-white min-h-screen">
            <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">{product.title}</h2>
            <div className="flex justify-center">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-80 h-80 object-contain shadow-lg rounded-lg"
                />
            </div>
            <p className="text-xl font-bold mt-4 text-center text-gray-800">${product.price}</p>
            <p className="text-gray-500 mt-4 text-center">{product.description}</p>

            <div className="flex justify-center mt-6">
                <button
                    onClick={() => addToCartHandler(product)} // Call the handler
                    className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 focus:outline-none"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductDetails;
