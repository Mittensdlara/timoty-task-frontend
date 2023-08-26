import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-8">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="mb-6 md:mb-0">
        <h3 className="text-lg font-semibold mb-4">About Us</h3>
        <p className="text-gray-400">We are dedicated to providing the best content and user experience.</p>
      </div>
      <div className="mb-6 md:mb-0">
        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
        <p className="text-gray-400">Email: pooraghaeedelara@gmail.com</p>
        <p className="text-gray-400">WhatsApp: +989909012309</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/Mittensdlara/" className="text-gray-400 hover:text-white transition duration-300">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
    <hr className="my-6 border-gray-800" />
    <p className="text-center text-gray-400">
      Designed with &#x2764; by Del | Open-source on <a href="https://github.com/your-github-repo" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
    </p>
  </div>
</footer>

    </>
  );
};

export default Footer;
