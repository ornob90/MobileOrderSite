import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartCountIcon = () => {
  return (
    <div className="relative">
      <p className="absolute w-[15px] h-[15px] top-[-20%] right-[-20%] bg-primary text-white flex justify-center  items-center rounded-full  text-[10px]">
        3
      </p>
      <AiOutlineShoppingCart className="text-xl md:text-2xl" />
    </div>
  );
};

export default CartCountIcon;
