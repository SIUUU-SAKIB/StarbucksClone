import React from "react";
import Habmurger from "../components/Habmurger";
import Sidebar from "../components/Sidebar";

const Navbar = () => {
  return (
    <div className="min-w-full px-6 py-4 flex justify-between items-center relative shadow-sm z-10">
      <img
        className="w-[50px] "
        src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/800px-Starbucks_Corporation_Logo_2011.svg.png"
        alt="This is logo"
      />
      <Habmurger />
      <Sidebar className="z-0"/>
    </div>
  );
};

export default Navbar;
