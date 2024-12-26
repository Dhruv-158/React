/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar
import Footer from "./components/Footer"; // Import Footer
import ProductList from "./components/ProductList/";
import ProductDetail from "./components/ProductDetail";
import CartPage from "./components/CartPage";

const App = () => {
    return (
        <Router>
            <Navbar />
            <main className="h-screen items-center mt-24 mx-6 md:overflow-hidden ">
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;

