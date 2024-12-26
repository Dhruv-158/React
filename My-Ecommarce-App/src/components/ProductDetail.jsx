/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const { cart, setCart } = useCart();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };
        fetchProduct();
    }, [id]);

    const handleBuyNow = (e) => {
        e.preventDefault();
        navigate("/checkout", { state: { product } }); // Redirect to checkout page
    };

    const handleRemoveItem = () => {
        setCart(cart.filter((item) => item.id !== product.id));
    };

    const handleAddToCart = () => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...existingProduct, quantity: existingProduct.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    if (!product) return <p>Loading...</p>;

    return (
        <div className="container mx-auto p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center">
                <img
                    className="w-full md:w-1/3 rounded-lg shadow-md mb-4 md:mb-0"
                    src={product.image}
                    alt={product.title}
                />
                <div className="md:ml-6">
                    <h1 className="text-2xl font-bold">{product.title}</h1>
                    <p className="text-lg text-gray-600 mt-2">${product.price}</p>
                    <p className="mt-4 text-gray-700">{product.description}</p>

                    <button
                        onClick={handleBuyNow}
                        className="mt-2 w-full md:w-56 md:mx-5 py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded"
                    >
                        Buy Now
                    </button>

                    <button
                        onClick={handleAddToCart}
                        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                        Add to Cart
                    </button>

                    <button
                        onClick={handleRemoveItem}
                        className="mt-6 mx-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
