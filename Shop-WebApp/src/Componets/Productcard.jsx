/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { addToCart, initializeCart } from "../redux/cartSlice";
import { fetchAllProducts, fetchProductsByCategory } from "../utils/api";

function ProductCard({ selectedCategory }) {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate(); // Hook to navigate

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = selectedCategory === "all"
          ? await fetchAllProducts()
          : await fetchProductsByCategory(selectedCategory);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };
    getProducts();
  }, [selectedCategory]);

  useEffect(() => {
    if (!cart.id) {
      dispatch(initializeCart());
    }
  }, [cart.id, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`); // Navigate to product details page
  };

  const truncateDescription = (description) => {
    const words = description.split(" ");
    return words.length > 15 ? words.slice(0, 15).join(" ") + "..." : description;
  };

  return (
    <div className="p-8 bg-gradient-to-b from-gray-100 to-white min-h-screen">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
        Explore Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl cursor-pointer"
            onClick={() => handleProductClick(product.id)} // Handle product click
          >
            <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />
            <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
            <p className="text-gray-500">{truncateDescription(product.description)}</p>
            <p className="text-xl font-bold">${product.price}</p>
            <button onClick={() => handleAddToCart(product)} className="w-full bg-indigo-600 text-white mt-4 py-2 rounded-lg">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
