import React from "react";
import bg_image from '../assets/hero img.png'
const Home = () => {
  return (
    <div className="max-w-screen bg-[var(--color-cream)] mx-auto">
    <div className="flex justify-between w-full lg:pl-42 py-4 bg-[var(--color-primary-dark)] px-2 items-center mx-auto">
        <p className="text-white font-bold text-sm">Starbucks® Rewards</p>
        <a className="text-white px-3 py-1 border-white border-1 rounded-full text-sm font-semibold cursor-pointer md:hidden">Join in the app</a>
    </div>
      <div className="max-w-screen-xl mx-auto flex md:flex-row flex-col items-center justify-between md:items-start md:text-start ">
        {/* TEXT DIV */}
        <div className="flex w-1/2 gap-4 py-4 md:py-12 flex-col items-center lg:items-start md:px-8 my-auto lg:gap-8">
          <p className="text-center text-[25px] leading-8 text-[var(--color-primary-dark)] font-bold md:font-semibold md:text-[40px] lg:text-start lg:text-[50px] lg:font-bold lg:leading-12 max-w-xl ">
            It's a great day for<br></br> free coffee
          </p>
          <p className="text-sm text-center text-black opacity-70 max-w-md font-semibold md:text-md lg:text-lg lg:text-start">Sign up and start enjoying the perks of Starbucks® Rewards.</p>
          <button className="bg-[var(--color-primary)] px-4 py-2 rounded-full font-semibold text-md text-white cursor-pointer hover:bg-[var(--color-primary-dark)]">Join in the app</button>
          <a href="http://freeporn.gg" className="underline cursor-pointer hover:no-underline">Or, join online</a>
        </div>
        {/* END OF TEXT DIV */}
        {/* BG-IMAGE */}
        <img className="md:w-1/2 w-full my-auto object-cover md:object-contain"  src={bg_image}/>
        {/* END OF BG-IMAGE */}
      </div>
    </div>
  );
};

export default Home;
