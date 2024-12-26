import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Services", path: "services" },
    { link: "Portfolio", path: "projects" },
    {link: "Working", path: "working"},
    { link: "Contact", path: "contact" },
  ];

  return (
    <footer className="w-full bg-black text-white py-6 px-8">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl md:text-4xl font-rubik font-bold">
          Prime<span className="text-yellow-500 italic">Structure</span>
        </h1>
        <ul className="flex flex-wrap justify-center items-center gap-6">
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <Link
                className="text-white font-rubik font-medium cursor-pointer hover:text-yellow-500 transition duration-300"
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <hr className="w-full border-t border-gray-600 my-4" />
        <p className="text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} Prime Structure. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
