/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { fetchProductCategories } from "../utils/api";
import { Modal, Button } from "antd";
import Newcart from "./Newcart";
import { FaShoppingCart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

function Header({ onCategoryChange }) {
  const [categories, setCategories] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const categoriesData = await fetchProductCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    getCategories();
  }, []);

  const handleCategoryChange = (event) => {
    onCategoryChange(event.target.value);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg">
      <div className="h-20 flex items-center justify-between px-6 lg:px-10">
        <div className="text-2xl font-extrabold tracking-wide">ShopEase</div>
        
        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            <FiMenu />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          <select
            className="bg-white text-gray-700 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={handleCategoryChange}
          >
            <option value="all">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search for products..."
            className="p-3 w-96 rounded-lg bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Button
          type="primary"
          onClick={showModal}
          className="bg-white text-indigo-600 hover:bg-indigo-500 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
        >
          <FaShoppingCart />
        </Button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} px-6 pb-4`}>
        <select
          className="w-full bg-white text-gray-700 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          onChange={handleCategoryChange}
        >
          <option value="all">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search for products..."
          className="mt-4 p-3 w-full rounded-lg bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <Button
          type="primary"
          onClick={showModal}
          className="bg-white text-indigo-600 hover:bg-indigo-500 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 m-5"
        >
          <FaShoppingCart />
        </Button>
      </div>

      <Modal
        title={<span className="text-lg font-semibold">Your Shopping Cart</span>}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        centered
      >
        <Newcart />
      </Modal>
    </div>
  );
}

export default Header;
