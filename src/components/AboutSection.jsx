import React from "react";
import AboutImg from "../assets/About.png";

const AboutSection = () => {
  return (
    <div className="w-full lg:h-[80vh]">
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-center text-xl sm:text-3xl lg:text-4xl font-extrabold relative inline-block after:content-[' '] after:w-20 after:block after:h-[2px] after:bg-black after:mx-auto after:mt-2">
          <span className="text-orange-500">About</span>
        </h2>
        <div className="lg:mt-10 flex flex-col lg:flex-row w-full items-center">
          <div className="lg:w-1/2 ">
            <img
              className="w-full cursor-pointer hover:scale-110 transition"
              src={AboutImg}
              alt="aboutimg"
            />
          </div>
          <div className="text-left lg:w-1/2">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Welcome to{" "}
              <span className="font-semibold text-orange-600">Shek Dine</span> —
              where taste meets perfection! We are passionate about serving
              freshly made, high-quality dishes prepared with love and the
              finest ingredients. Our goal is to make every meal memorable,
              whether you dine in or take away.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              From sizzling pizzas to juicy burgers and fresh salads — every
              item on our menu is crafted to satisfy your cravings. Experience
              the warmth, flavor, and hospitality that make
              <span className="font-semibold text-orange-600">
                {" "}
                Shek Dine{" "}
              </span>{" "}
              special.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-white font-semibold rounded-xl">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
