import React, { useContext, useState } from "react";
import "./Hamburger.css";
import { ContextValue } from "../Context/ContextProvider";
import { IoCloseOutline } from "react-icons/io5";

const Hamburger = () => {
  const [hover, setHover] = useState(false);
  const { clicked, setClicked } = useContext(ContextValue);
  console.log(clicked);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setClicked(true)}
      className={`relative flex flex-col w-[45px] h-[45px] rounded-full cursor-pointer items-center justify-center gap-1 
      before:content-[''] before:absolute before:w-full before:h-full 
      before:left-0 before:top-0 before:bg-[var(--color-muted-green)] before:opacity-50${
        hover
          ? "before:opacity-100 before:transform before:scale-100"
          : "before:opacity-0 before:transform before:scale-0"
      } before:transition before:duration-300 before:rounded-full shadow-2xl ${clicked? 'hidden':'block'}`}
    >
        <div className="w-[40%] h-[2px] bg-[var(--color-black)] opacity-60"></div>
        <div className="w-[40%] h-[2px] bg-[var(--color-black)] opacity-60"></div>
        <div className="w-[40%] h-[2px] bg-[var(--color-black)] opacity-60"></div>
    </div>
  );
};

export default Hamburger;
