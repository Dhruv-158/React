/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useCart } from "../context/CartContext"; // Import the Cart context

const ProductPage = ({ product }) => {
    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const { addToCart } = useCart(); // Access addToCart from context

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="container mx-auto p-6">
            <div className="flex flex-col md:flex-row">
                
                <div className="md:w-1/2">
                    <img src={selectedImage} alt={product.title} className="w-full h-auto rounded-lg" />
                    <div className="mt-4 flex space-x-2">
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index}`}
                                className={`w-24 h-24 rounded-lg cursor-pointer ${selectedImage === image ? 'border-2 border-blue-500' : ''}`}
                                onClick={() => setSelectedImage(image)}
                            />
                        ))}
                    </div>
                </div>
                <div className="md:w-1/2 md:pl-6">
                    <h1 className="text-2xl font-bold">{product.title}</h1>
                    <p className="text-lg text-gray-700 mt-2">{product.price}</p>
                    <button
                        onClick={handleAddToCart}
                        className="mt-4 w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
