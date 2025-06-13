import { React, useContext } from "react";
import Habmurger from "../components/Habmurger";
import Sidebar from "../components/Sidebar";
import { IoCloseOutline } from "react-icons/io5";
import { ContextValue } from "./../Context/ContextProvider";
import Lg_Nav from "../components/Lg_Nav";

const Navbar = () => {
  const { clicked, setClicked } = useContext(ContextValue);
  return (
    <>
    <div className="max-w-screen border-b-1 shadow-md border-gray-200 px-8 md:px-16 lg:px-32 py-2 md:py-6 lg:py-8 flex justify-between items-center relative z-40 bg-white">
      <img
        className="w-[40px] md:w-[50px] lg:w-[60px]"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/800px-Starbucks_Corporation_Logo_2011.svg.png"
        alt="This is logo"
      />
      <Lg_Nav/>

      <div className="flex items-center gap-2 md:hidden">
        <IoCloseOutline
          onClick={() => setClicked(false)}
          className={`text-2xl absolute cursor-pointer 
    transition-opacity duration-500 ease-in
    ${
      clicked
        ? "opacity-100 pointer-events-auto right-8"
        : "opacity-0 pointer-events-none right-2"
    }`}
        />

        <Habmurger />
      </div>
     
    </div>
     <Sidebar sidebar={clicked} />
     </>
  );
};

export default Navbar;
