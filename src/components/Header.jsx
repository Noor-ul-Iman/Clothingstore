import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import CartContext from "../CartContext";

const Header = () => {
  const { cartCount } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md py-4 z-50 relative">
        <nav className="container mx-auto flex justify-between items-center px-4">

          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            <Link to="/" className="hover:text-pink-600">
              <span className="text-pink-600">Eastern</span>Wear
            </Link>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <li><Link to="/" className="hover:text-pink-600">Home</Link></li>
            <li className="group relative cursor-pointer">
              <span className="hover:text-pink-600">Shop</span>
              <ul className="absolute top-6 left-0 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-10 w-40">
                <li><Link to="/Tops" className="block px-4 py-2 hover:bg-pink-100 text-sm">Tops</Link></li>
                <li><Link to="/Jeans" className="block px-4 py-2 hover:bg-pink-100 text-sm">Jeans</Link></li>
                <li><Link to="/Shoes" className="block px-4 py-2 hover:bg-pink-100 text-sm">Shoes</Link></li>
              </ul>
            </li>
            <li><Link to="/Contact" className="hover:text-pink-600">Contact</Link></li>
          </ul>

          {/* Icons & Hamburger */}
          <div className="flex items-center space-x-4 text-gray-700 text-lg">
            <Link to="/Cart" className="relative">
              <FaShoppingCart className="hover:text-pink-600 cursor-pointer" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link to="/Login">
              <FaUser className="hover:text-pink-600 cursor-pointer" />
            </Link>

            {/* Hamburger for Mobile */}
            <button className="md:hidden focus:outline-none" onClick={() => setIsMenuOpen(true)}>
              <FaBars className="text-xl" />
            </button>
          </div>
        </nav>
      </header>

      {/* Overlay */}
      {isMenuOpen && (
        <div
       className="fixed inset-0 bg-transparent backdrop-blur-sm z-40"

          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Slide-in Menu from right */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Close Button */}
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-lg font-bold text-gray-800">Menu</h2>
          <button onClick={() => setIsMenuOpen(false)} className="text-gray-800 text-xl">
            <FaTimes />
          </button>
        </div>

        {/* Menu Links */}
        <div className="p-4 space-y-4 text-gray-700 font-medium">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="block hover:text-pink-600">Home</Link>

          <div>
            <span className="block hover:text-pink-600">Shop</span>
            <div className="ml-4 mt-1 space-y-1">
              <Link to="/Tops" onClick={() => setIsMenuOpen(false)} className="block text-sm hover:text-pink-600">Tops</Link>
              <Link to="/Jeans" onClick={() => setIsMenuOpen(false)} className="block text-sm hover:text-pink-600">Jeans</Link>
              <Link to="/Shoes" onClick={() => setIsMenuOpen(false)} className="block text-sm hover:text-pink-600">Shoes</Link>
            </div>
          </div>

          <Link to="/Contact" onClick={() => setIsMenuOpen(false)} className="block hover:text-pink-600">Contact</Link>
         
        </div>
      </div>
    </>
  );
};

export default Header;
