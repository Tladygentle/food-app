import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 flex justify-between items-center">
      {/* left-side */}

      <div className="flex">
        <div>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold"> Eats </span>
        </h1>
        <div className="hidden lg:flex item-center bg-gray-200 rounded-full">
          <p className="bg-black text-white rounded-full p-2"> Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* search input */}
      <div className="bg-gray-200 flex items-center rounded-full w-[200px] px-2 sm:w-[400px] lg:width-500px">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent w-full p-2 focus:outline-none"
          type="text"
          placeholder="Search foods"
        />
      </div>

      {/* cart button */}
      <div>
        <button className="bg-black text-white hidden md:flex items-center p-2 rounded-full">
          <BsFillCartFill size={20}/>
          Cart
        </button>
      </div>
    </div>
  );
};

export default Navbar;
