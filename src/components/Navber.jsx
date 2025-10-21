import React, { useState } from "react";
import { NavItems } from "../Constains";
import { Menu, X } from "lucide-react";

const Navber = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const showToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const handelclick =()=>{
    setMobileMenu(false)
  }
  return (
    <nav className="fixed text-black bg-white w-full shadow-xl z-50">
      <div className=" container w-full  mx-auto  flex justify-between items-center p-6 ">
        <div>
          <h1 className="text-xl text-orange-500 lg:text-2xl font-extrabold">
            Shek Dine
          </h1>
        </div>
        <div className="hidden lg:flex space-x-10">
          {NavItems.map((item, index) => (
            <ul className="text-lg font-semibold">
              <li key={index}>
                <a className="hover:text-orange-500 hover:scale-95 transition" href={item.href}>{item.label}</a>
              </li>
            </ul>
          ))}
          <button className=" hover:bg-orange-500 hover:text-white  hover:scale-95 transition px-3 border border-orange-500 text-orange-400 text-lg font-semibold rounded-md cursor-pointer">
            Login
          </button>
        </div>
        {/* -------Mobile menuBar----- */}
        <div className=" lg:hidden md:flex flex-col justify-end">
          <button onClick={showToggle}>{mobileMenu ? <X /> : <Menu />}</button>
        </div>
        {mobileMenu && (
          <div className=" lg:hidden flex flex-col mt-15  justify-center h-70 items-center w-full fixed right-0  inset-0 p-12 bg-transparent backdrop-blur-xl z-50">
            <ul className="flex flex-col gap-2 mb-5 text-white font-semibold">
              {NavItems.map((item) => (
                <li key={item}>
                  <a onClick={handelclick} href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <button className="px-3 border border-orange-500 text-orange-400 text-lg font-semibold rounded-md cursor-pointer">
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navber;
