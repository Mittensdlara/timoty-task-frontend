import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-semibold">
          Del &#x2764;
        </Link>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
