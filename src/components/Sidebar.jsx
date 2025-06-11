import React, { useContext } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { ContextValue } from "../Context/ContextProvider";

const Sidebar = () => {
  const { clicked } = useContext(ContextValue);
  return (
    <div
      className={`h-screen min-w-[400px] shadow-md bg-white absolute top-21 ${
        clicked ? "-right-30" : "-right-300"
      } transition duration-300`}
    >
      <ul className="flex flex-col gap-6 px-8 pb-10 pt-16">
        <li className="text-2xl cursor-pointer">Menu</li>
        <li className="text-2xl cursor-pointer">Rewards</li>
        <li className="text-2xl cursor-pointer">Gift Cards</li>
      </ul>
      <div className="h-[1.5px] w-[220px] bg-black opacity-20 ml-8 "></div>
      <div className="flex gap-4 px-8 items-center pt-6">
        <div className="font-semiBold text-md  px-3 py-1 border-1 rounded-full  cursor-pointer">
          Sign in
        </div>
        <div className="bg-black px-3 py-1 text-white rounded-full cursor-pointer ">
          Join Now
        </div>
      </div>
      <div className="px-8 pt-6 flex gap-2 items-center">
        <IoLocationSharp className="text-2xl" />
        <p className="text-md font-bold">Find a store</p>
      </div>
    </div>
  );
};

export default Sidebar;
