import React, { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Services", path: "services" },
    { link: "Projects", path: "projects" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <nav className="w-full flex bg-white justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50">
      <h1 className="text-black md:text-4xl font-rubik font-bold">
        Prime
        <span className="text-yellow-500 italic">Structure</span>
      </h1>

      <ul className="lg:flex justify-center items-center gap-6 hidden ">
        {navItems.map(({ link, path }) => (
          <li key={path}>
            <Link
              className="text-black font-rubik font-semibold cursor-pointer"
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="bg-yellow-500 hover:bg-black hover:text-white text-black px-10 py-3 rounded-full font-semibold transform transition duration-300 ease-in-out hover:scale-110 hidden lg:block"
      >
        Reach Us
      </button>

      <div className="flex lg:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaXmark className="text-yellow-500 text-3xl cursor-pointer" />
          ) : (
            <FaBars className="text-yellow-500 text-3xl cursor-pointer" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-yellow-400 flex flex-col items-center gap-6 py-4 shadow-lg lg:hidden">
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <Link
                className="text-white font-rubik font-semibold cursor-pointer"
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Header;
