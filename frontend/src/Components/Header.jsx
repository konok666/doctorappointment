import React from "react";

const Header = () => {
  return (
    <header className="bg-teal-600 px-6 py-3 flex items-center justify-between shadow-md">
      {/* Left Side - Logo and Title */}
      <div className="flex items-center space-x-2">
        <img
          src="/logo.png" // Replace with actual logo path
          alt="Medical Logo"
          className="w-10 h-10 rounded-full bg-white p-1"
        />
        <span className="text-white text-xl font-bold">MEDICAL</span>
      </div>

      {/* Middle - Navigation Links */}
      <nav className="hidden md:flex space-x-6 text-white text-sm font-semibold">
        <a href="/" className="hover:underline">HOME</a>
        <a href="/about" className="hover:underline">ABOUT</a>
        <a href="/contact" className="hover:underline">CONTACT</a>
      </nav>

      {/* Right Side - Buttons */}
      <div className="flex space-x-3">
        <button className="bg-blue-500 text-white px-4 py-1.5 rounded-full hover:bg-blue-600">
          LOGIN
        </button>
        <button className="bg-green-500 text-white px-4 py-1.5 rounded-full hover:bg-green-600">
          SIGNUP
        </button>
      </div>
    </header>
  );
};

export default Header;