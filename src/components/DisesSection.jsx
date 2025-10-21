import React from "react";
import { MenuFoods } from "../Constains";

const DisesSection = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-center text-xl sm:text-3xl lg:text-4xl font-extrabold relative inline-block after:content-[' '] after:w-20 after:block after:h-[2px] after:bg-black after:mx-auto after:mt-2">
          Our<span className="text-orange-500"> Menu</span>
        </h2>
        <div className=" lg:mt-20 mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {
            MenuFoods.map((food,index)=>(
                <div key={index} className=" rounded-2xl border border-black shadow-xl ">
            <div className="w-full">
                <img
              className=" w-full h-50 object-cover object-center rounded-t-2xl"
              src={food.Img}
              alt="img"
            />
            </div>
            <h2 className="text-xl lg:text-2xl font-semibold mt-3">{food.title}</h2>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-6 p-3 ">
              <p className="text-sm mb-2 lg:mb-0 lg:text-lg">{food.price}</p>
              <button className="cursor-pointer hover:scale-95 transition text-[12px] lg:text-lg px-2 lg:px-3 py-2 bg-orange-500 rounded-md text-white font-semibold">
                Order Now
              </button>
            </div>
          </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default DisesSection;
