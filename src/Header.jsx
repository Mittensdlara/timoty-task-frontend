import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r white py-6 shadow-lg">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-white text-4xl font-semibold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-800">
          Tales & Thoughts
          </span>
        </h1>
        <p className="text-gray-700 mt-2">
          Exploring Ideas, Sharing Stories, and More!
        </p>
      </div>
    </header>
  );
};

export default Header;
