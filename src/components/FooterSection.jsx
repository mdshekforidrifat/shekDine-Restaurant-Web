import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const FooterSection = () => {
  return (
    // 🔲 পুরো Footer Wrapper
    <footer className="bg-black text-white mt-20 py-10">
      {/* 🔹 Container: Responsive flex layout */}
      <div
        className="container mx-auto px-6 
                      flex flex-col md:flex-row   // 👉 ছোট স্ক্রিনে column, বড় স্ক্রিনে row
                      justify-between items-center md:items-start 
                      gap-10"
      >
        {" "}
        {/* 👉 gap যোগ করা হয়েছে spacing এর জন্য */}
        {/* 🔸 Brand / Logo Section */}
        <div className="text-center md:text-left">
          {/* 👉 Footer Title */}
          <a
            className="text-orange-500 text-2xl sm:text-3xl lg:text-4xl font-semibold"
            href="#"
          >
            Shek Dine
          </a>
          {/* 👉 Short tagline */}
          <p className="mt-3 text-sm text-gray-300 max-w-xs mx-auto md:mx-0">
            The best food experience in town. Fresh, fast & flavorful 🍕
          </p>
        </div>
        {/* 🔸 Navigation Links */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-orange-500">
            Links
          </h1>
          {/* 👉 Hover effect সহ smooth transition */}
          <a className="hover:text-orange-500 transition" href="#home">
            Home
          </a>
          <a className="hover:text-orange-500 transition" href="#menu">
            Menu
          </a>
          <a className="hover:text-orange-500 transition" href="#about">
            About
          </a>
          <a className="hover:text-orange-500 transition" href="#reviews">
            Reviews
          </a>
        </div>
        {/* 🔸 Contact Information */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h1 className="font-semibold text-lg sm:text-xl lg:text-2xl text-orange-500">
            Contact Us
          </h1>
          <p>example@gmail.com</p>
          <p>+8801987456321</p>

          {/* 🔸 Social Media Icons */}
          <div className="flex space-x-3 mt-2">
            {/* 👉 hover করলে রঙ পরিবর্তন + scale effect */}
            <a
              href="https://www.facebook.com/codekakku"
              className="hover:text-orange-500 hover:scale-105 transition"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/code_kakku/"
              className="hover:text-orange-500 hover:scale-105 transition"
            >
              <Instagram />
            </a>
            <a
              href="https://x.com/shekforidrifat"
              className="hover:text-orange-500 hover:scale-105 transition"
            >
              <Twitter />
            </a>
          </div>
        </div>
      </div>

      {/* 🔸 নিচের কপিরাইট লাইন */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-5">
        © 2025 Code kakku. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
