import React from "react";
import { navItems, globalNavItemStyleClass } from "../../constants/NavItems";
const NavMenus = ({ toggleBackdrop }) => {
  return (
    <>
      {navItems.map(({ icon }) => (
        <div className={globalNavItemStyleClass} onClick={toggleBackdrop}>
          {icon}
        </div>
      ))}
    </>
  );
};

export default NavMenus;
