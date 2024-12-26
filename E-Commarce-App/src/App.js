import React, { useState } from "react";
import Header from "./Componets/Header";
import "./index.css";
import ProductCard from "./Componets/Productcard";
import Prectise from "./Componets/Prectise";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div>
      <Header onCategoryChange={setSelectedCategory} />
      <ProductCard selectedCategory={selectedCategory} />
      {/* <Prectise/>  */}
    </div>
  );
}

export default App;
