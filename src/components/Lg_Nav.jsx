import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const Lg_Nav = () => {
  return (
    <div className="hidden md:flex items-center justify-between w-full px-12">
      <ul className="uppercase flex gap-4 tracking-tighter">
        <li className="text-sm lg:text-xl font-semibold">MENU</li>
        <li className="text-sm lg:text-xl font-semibold">Rewards</li>
        <li className="text-sm lg:text-xl font-semibold">gift cards</li>
      </ul>
      <ul className="flex items-center justify-center gap-4 lg:gap-8">
        <div className="flex gap-1 items-center">
          <IoLocationSharp className="text-4xl cursor-pointer hover:text-[var(--color-primary)]" />
          <li className="font-bold text-sm lg:text-md cursor-pointer hover:text-[var(--color-primary)]">Find a store</li>
        </div>
        <div className="flex gap-2 lg:gap-4 items-center ">
        
          <div className="font-semiBold text-sm font-semibold lg:text-md px-2 py-2 lg:px-3 lg:py-2 border-1 rounded-full  cursor-pointer">
            Join Now
          </div>
            <div className="bg-black border-2 border-black font-semibold text-white font-semiBold text-sm py-2 lg:text-md px-3 lg:px-3 lg:py-2 rounded-full  cursor-pointer">
            Sign in
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Lg_Nav;
