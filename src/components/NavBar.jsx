import React, { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="p-8 flex justify-between text-white items-center ">
        <h1 className="text-3xl font-extrabold cursor-pointer">LOGO</h1>
        <ul className="hidden sm:flex justify-between gap-10 text-base font-extralight cursor-pointer">
          <li className="hover:border-b-2 border-yellow-600 ">Home</li>
          <li className="hover:border-b-2 border-yellow-600 ">About Us</li>
          <li className="hover:border-b-2 border-yellow-600 ">Protfolio</li>
          <li className="hover:border-b-2 border-yellow-600 ">News</li>
          <button className="bg-orange-400 px-3 py-1 rounded  hover:bg-yellow-400">
            Contact Us
          </button>
        </ul>
      </div>

      <div className="text-white">
        <h1 onClick={handleNav} className="sm:hidden z-10">
          NavBar
        </h1>
        <div
          onClick={handleNav}
          className={
            nav
              ? "overflow-y-hidden sm:hidden ease-in duration-300 absolute text-accent left-0 top-0 h-screen w-full bg-black/95 px-4 py-7 flex flex-col"
              : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
          }
        >
          <ul className="h-full w-full text-center text-2xl font-semibold pt-12 space-y-8 cursor-pointer">
            <li className="hover:border-b-2 border-yellow-600 ">Home</li>
            <li className="hover:border-b-2 border-yellow-600 ">About Us</li>
            <li className="hover:border-b-2 border-yellow-600 ">Protfolio</li>
            <li className="hover:border-b-2 border-yellow-600 ">News</li>
            <button className="bg-orange-400 px-3 py-1 rounded  hover:bg-yellow-400">
              Contact Us
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
