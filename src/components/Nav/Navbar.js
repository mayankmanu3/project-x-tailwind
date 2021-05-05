import React from "react";
import { Link } from "react-router-dom";
import { navLogo } from "../../constants/NavItems";
import NavMenus from "./NavMenus";

const Navbar = ({ toggleBackdrop }) => {
  return (
    <nav className="flex justify-between py-2 bg-indigo-500 text-gray-50 items-center shadow-lg w-full">
      <div className="px-3 py-2">
        <Link to="/">{navLogo}</Link>
      </div>
      <div className="flex">
        <NavMenus toggleBackdrop={toggleBackdrop} />
      </div>
    </nav>
  );
};

export default Navbar;
