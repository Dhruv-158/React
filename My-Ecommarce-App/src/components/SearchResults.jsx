/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const SearchResults = ({ products }) => {
    const location = useLocation();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const query = new URLSearchParams(location.search).get("query");
        if (query) {
            const results = products.filter(product =>
                product.title.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredProducts(results);
        }
    }, [location.search, products]);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Search Results</h1>
            {filteredProducts.length ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default SearchResults;
