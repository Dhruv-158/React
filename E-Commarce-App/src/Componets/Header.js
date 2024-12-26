import React, { useState, useEffect } from "react";
import { fetchProductCategories } from "../utils/api";
import { Modal, Button } from "antd";
import Newcart from "./Newcart";

function Header({ onCategoryChange }) {
  const [categories, setCategories] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const categoriesData = await fetchProductCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
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

  return (
    <div className="text-black h-16 flex items-center justify-between px-6 bg-gray-100">
      <div className="text-xl font-semibold">Header</div>
      <div className="flex items-center space-x-4">
        <select
          className="bg-white text-black p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          placeholder="Search..."
          className="p-2 w-80 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <Button
        type="primary"
        onClick={showModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Cart
      </Button>
      <Modal
        title="Cart"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            OK
          </Button>,
        ]}
      >
        <Newcart />
      </Modal>
    </div>
  );
}

export default Header;
