import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-between h-12 bg-red-600 text-white items-center relative w-full">
      <div className="ml-3">Navbar</div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } bg-amber-500 md:static md:bg-transparent absolute top-12 w-full md:flex`}
      >
        <Link className="mx-4 block" to="/home">
          Home
        </Link>
        <Link className="mx-4 block" to="/cart">
          Cart
        </Link>
      </div>

      {/* Burger Icon for Mobile */}
      <button
        className="block md:hidden focus:outline-none mr-3"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <svg
          className="h-6 w-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
