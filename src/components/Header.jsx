import React, { useState } from "react";
import "../index.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="relative flex items-center px-6 mt-8 z-50">
        <span
          onClick={toggleMenu}
          className="material-symbols-outlined text-3xl cursor-pointer hover:opacity-70 transition-opacity z-50 relative"
        >
          {isMenuOpen ? "close" : "menu"}
        </span>
        <h1 className="absolute left-1/2 -translate-x-1/2 font-bodoni tracking-widest font-semi-bold text-4xl text-center">
          AXELERATE
        </h1>
      </nav>

      {/* Side Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a
            href="#philosophy"
            onClick={closeMenu}
            className="font-bodoni text-3xl md:text-4xl uppercase tracking-widest hover:text-gray-500 transition-colors"
          >
            Philosophy
          </a>
          <a
            href="#protocol"
            onClick={closeMenu}
            className="font-bodoni text-3xl md:text-4xl uppercase tracking-widest hover:text-gray-500 transition-colors"
          >
            Growth Protocol
          </a>
          <a
            href="#why-axelerate"
            onClick={closeMenu}
            className="font-bodoni text-3xl md:text-4xl uppercase tracking-widest hover:text-gray-500 transition-colors"
          >
            About
          </a>
          <a
            href="#partnership"
            onClick={closeMenu}
            className="font-bodoni text-3xl md:text-4xl uppercase tracking-widest hover:text-gray-500 transition-colors"
          >
            Partnership
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
