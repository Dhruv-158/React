/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
// import { useCart } from "../context/CartContext";
import { useCart } from "../context/CartContext"

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const { cart, setCart } = useCart();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
                localStorage.setItem("products", JSON.stringify(data));
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        const storedProducts = localStorage.getItem("products");
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        } else {
            fetchProducts();
        }
    }, []);

    const handleAddToCart = (product) => {
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...existingProduct, quantity: existingProduct.quantity + 1 }
                        : item
                )
            );
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {products.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                    <ProductCard
                        product={product}
                        onAddToCart={() => handleAddToCart(product)}
                    />
                </Link>
            ))}
        </div>
    );
};

export default ProductList;
