import {React, useContext} from "react";
import Habmurger from "../components/Habmurger";
import Sidebar from "../components/Sidebar";
import { IoCloseOutline } from 'react-icons/io5';
import { ContextValue } from './../Context/ContextProvider';

const Navbar = () => {
    const {clicked, setClicked} = useContext(ContextValue) 
  return (
    <div className="min-w-full px-6 py-4 flex justify-between items-center relative shadow-sm">
      <img
        className="w-[50px] "
        src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/800px-Starbucks_Corporation_Logo_2011.svg.png"
        alt="This is logo"
      />
      <div className='flex items-center gap-2'>
        <IoCloseOutline onClick={() => setClicked(false)} className={`text-2xl absolute ${clicked? 'right-8 block opacity-100':'right-16 hidden opacity-0'} cursor-pointer opacity-40 transition duration-800`}  />
      <Habmurger />
      </div>
      <Sidebar />
    </div>
  );
};

export default Navbar;
