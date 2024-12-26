import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, initializeCart, updateCart } from "../redux/cartSlice";
import { fetchAllProducts, fetchProductsByCategory } from "../utils/api";

function ProductCard({ selectedCategory }) {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const getProducts = async () => {
      try {
        let productsData;
        if (selectedCategory === "all") {
          productsData = await fetchAllProducts();
        } else {
          productsData = await fetchProductsByCategory(selectedCategory);
        }
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error.message);
        console.error(error);
      }
    };

    getProducts();  
  }, [selectedCategory]);

  useEffect(() => {
    if (!cart.id) {
      dispatch(initializeCart());
    }
  }, [cart.id, dispatch]);

  const handleAddToCart = async (product) => {
    try {
      if (!cart.id) {
        console.error("Cart ID is not available. Please ensure the cart is initialized.");
        return;
      }

      const updatedProducts = [
        ...cart.items.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
        })),
        { productId: product.id, quantity: 1 },
      ];

      const response = await fetch(`https://fakestoreapi.com/carts/${cart.id}`, {
        method: "POST ",
        body: JSON.stringify({
          userId: cart.id,
          date: new Date().toISOString().split("T")[0],
          products: updatedProducts,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const updatedCart = await response.json();
      dispatch(addToCart(product)); // Update local state
      console.log("Cart updated:", updatedCart);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-gray-900 font-bold mb-2">${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
