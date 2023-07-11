import React from "react";
import { styles } from "../style";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        Tes Lagu A
      </div>
    </nav>
  );
};

export default Navbar;
