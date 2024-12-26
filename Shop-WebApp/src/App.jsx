/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router and Routes
import Header from "./Componets/Header";
import ProductCard from "./Componets/Productcard";
import Prectise from "./Componets/Prectise";
import Footer from "./Componets/Footer";
import ProductDetails from "./Componets/ProductDetails"; // Import the ProductDetails component

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <Router>
      <div>
        <Header onCategoryChange={setSelectedCategory} />
        
        <Routes>
          
          <Route path="/" element={<ProductCard selectedCategory={selectedCategory} />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
