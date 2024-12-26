/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes, FaArrowLeft } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const Navbar = () => {
    const { totalCount } = useCart();
    const [searchQuery, setSearchQuery] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?query=${searchQuery}`);
            setSearchQuery(""); // Clear the search query after submission
        }
    };

    return (
        <header className="fixed top-0 w-full bg-slate-600 text-white shadow-md z-50 ">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to="/" className="text-white hover:text-gray-300">MyShop</Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex gap-4">
                    <Link to="/cart" className="relative flex items-center text-white hover:text-blue-400">
                        <FaShoppingCart />
                        <span className="absolute -top-2 -right-2 bg-red-600 text-xs rounded-full px-1 text-white">{totalCount}</span>
                    </Link>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white z-auto">
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className={`fixed inset-0 bg-gray-800 p-8 flex flex-col space-y-4 items-center transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:flex md:relative md:inset-auto md:flex-row md:space-x-6 md:p-0 md:bg-transparent md:translate-x-0`}>
                    <ul className="flex flex-col md:flex-row md:space-x-6">
                        <li><Link to="/" className="text-white hover:text-blue-400">Home</Link></li>
                        <li><Link to="/electronics" className="text-white hover:text-blue-400">Electronics</Link></li>
                        <li><Link to="/fashion" className="text-white hover:text-blue-400">Fashion</Link></li>
                        <li><Link to="/toys" className="text-white hover:text-blue-400">Toys</Link></li>
                        <li>
                            <div className="md:hidden">
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white z-auto">
                                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                                </button>
                            </div>
                        </li>
                    </ul>
                </nav>

                {/* Search Bar */}
                <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center border rounded-full overflow-hidden bg-gray-700">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search products..."
                        className="p-2 px-4 bg-transparent focus:outline-none text-white"
                    />
                    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-r-full hover:bg-blue-700">Search</button>
                </form>

                {/* Icons */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link to="/login" className="text-white hover:text-blue-400">Login/Signup</Link>
                    <Link to="/cart" className="relative flex items-center text-white hover:text-blue-400">
                        <FaShoppingCart />
                        <span className="absolute -top-2 -right-2 bg-red-600 text-xs rounded-full px-1 text-white">{totalCount}</span>
                    </Link>
                </div>
            </div>

            {/* Mobile Search Bar and Back Button */}
            <div className={`md:hidden h-32 flex items-center justify-between bg-gray-700 p-4 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`}>
                <button onClick={() => setIsMenuOpen(false)} className="flex items-center text-white">
                    <FaArrowLeft className="mr-2" /> Back
                </button>
                <form onSubmit={handleSearchSubmit} className="flex items-center w-full">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="p-2 px-4 w-full bg-gray-800 text-white focus:outline-none"
                    />
                    <button type="submit" className="px-4 bg-blue-600 text-white rounded-full hover:bg-blue-700">Search</button>
                </form>
                <Link to="/cart" className="relative flex items-center text-white">
                    <FaShoppingCart />
                    <span className="absolute -top-2 -right-2 bg-red-600 text-xs rounded-full px-1 text-white">{totalCount}</span>
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
