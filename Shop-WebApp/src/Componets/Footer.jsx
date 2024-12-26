/* eslint-disable no-unused-vars */
import React from 'react';
import Link from 'antd/es/typography/Link';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4">About Us</h2>
                    <p className="text-gray-400 text-sm">We are a leading e-commerce platform providing a seamless shopping experience with high-quality products and exceptional service.</p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><Link to="#" className="hover:text-blue-400">Home</Link></li>
                        <li><Link to="#" className="hover:text-blue-400">Shop</Link></li>
                        <li><Link to="#" className="hover:text-blue-400">About</Link></li>
                        <li><Link to="#" className="hover:text-blue-400">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
                    <div className="flex space-x-6">
                        <Link to="#" className="text-gray-400 hover:text-blue-500 text-2xl"><FaFacebook /></Link>
                        <Link to="#" className="text-gray-400 hover:text-blue-500 text-2xl"><FaXTwitter /></Link>
                        <Link to="#" className="text-gray-400 hover:text-blue-500 text-2xl"><FaInstagramSquare /></Link>
                        <Link to="#" className="text-gray-400 hover:text-blue-500 text-2xl"><FaLinkedin /></Link>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
                    <form className="flex flex-col space-y-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded font-semibold"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="text-center mt-10 text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} E-Commerce Platform. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
