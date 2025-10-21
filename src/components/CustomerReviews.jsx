import React from "react";
import { Reviwers } from "../Constains";

const CustomerReviews = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-center text-xl sm:text-3xl lg:text-4xl font-extrabold relative inline-block after:content-[' '] after:w-20 after:block after:h-[2px] after:bg-black after:mx-auto after:mt-2">
          Customer <span className="text-orange-500">Reviwes</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {Reviwers.map((item,index) => (
            <div
              key={index}
              className="mt-15 flex flex-col justify-center items-center p-5  rounded-2xl shadow-lg bg-neutral-50"
            >
              <div>
                <img
                  className="w-20 h-20 rounded-full"
                  src={item.image}
                  alt=""
                />
              </div>
              <h2 className="text-base mt-5 mb-2 font-semibold lg:text-xl">
                {item.name}
              </h2>
              <p className="text-sm lg:text-lg text-neutral-500 text-left">
                {item.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
