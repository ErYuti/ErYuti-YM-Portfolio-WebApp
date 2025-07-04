import React, { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import ColorSelector from "../others/ColorSelector";

const Header = ({ darkMode, setDarkMode, themeColor, setThemeColor }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Introduction", href: "#info" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Skills", href: "#skill" },
    { name: "Projects", href: "#project" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 shadow-md transition-colors duration-300 border-b-2 border-white" 
      ${
        darkMode ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <h1
          className="text-4xl font-bold transition-transform duration-300 hover:scale-90 font-serif"
          style={{ color: themeColor }}
        >
          YutImeher
        </h1>

        <nav className="hidden lg:flex gap-6 font-medium text-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group transition-colors duration-300"
            >
              <span className="group-hover:opacity-0 transition-opacity">
                {link.name}
              </span>
              <span
                className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: themeColor }}
              >
                {link.name}
              </span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ColorSelector themeColor={themeColor} setThemeColor={setThemeColor}/>

          <button
            onClick={toggleDarkMode}
            className="text-2xl cursor-pointer"
            style={{ color: themeColor }}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button
            onClick={toggleMenu}
            className="text-2xl lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-3/4 max-w-sm z-40 bg-black text-white transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-600">
          <h2 className="text-xl font-semibold" style={{ color: themeColor }}>
            Menu
          </h2>
          <button onClick={toggleMenu} className="text-2xl">
            <FaTimes />
          </button>
        </div>

        <nav className="flex flex-col px-6 pt-6 space-y-6 text-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
