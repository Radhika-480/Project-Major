import { useState } from "react";
import { ChevronDown, Menu, Search, ShoppingCart, User, X } from "lucide-react"; // Import icons
import { Link } from "react-router-dom";
import "./Header.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu

  return (
    <>
      <div className="w-full bg-white shadow-md">
        {/* Top Bar (Hidden in Mobile) */}
        {!isMenuOpen && (
          <div className="bg-black top-bar text-white text-center text-sm h-8 flex items-center justify-center md:flex">
            Sign up and get 20% off on your first order.{" "}
            <span className="ml-2 font-semibold cursor-pointer">Sign Up Now</span>
          </div>
        )}

        {/* Navbar */}
        <nav className="w-full flex items-center justify-between h-14 px-6 md:px-10">
          {/* Left Section */}
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 mr-3"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <h1 className="text-2xl font-extrabold flex">
              SHOP.CO
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-4 md:gap-6 items-center">
            <Link to="/" className="hover:text-gray-600">On Sale</Link>
            <Link to="/NewArrivals" className="hover:text-gray-600">Arrivals</Link>
            <Link to = "/Contact" className="hover:text-gray-600">Contact</Link>

            {/* Search Input Field */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-100 px-4 py-1 pl-10 rounded border focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <Search
                size={16}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
            </div>
          </ul>

          {/* Icons (Cart & User) */}
          <div className="flex gap-3">
            <ShoppingCart />
          <Link to="/SignUp">  <User /></Link>
          </div>
        </nav>

        {/* Mobile Menu (Only Visible When isMenuOpen is true) */}
        {isMenuOpen && (
          <ul className="md:hidden bg-white text-black w-full flex flex-col items-center gap-4 py-4 shadow-lg">
            <Link to="/" className="hover:text-gray-600">On Sale</Link>
            <Link to="/NewArrivals" className="hover:text-gray-600">Arrivals</Link>
            <li className="hover:text-gray-600">Contact</li>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-100 px-4 py-1 pl-10 rounded border focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <Search
                size={16}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
            </div>
          </ul>
        )}
      </div>
    </>
  );
}
