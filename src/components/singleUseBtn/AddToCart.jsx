import React from "react";
import { FaPlus } from "react-icons/fa";
import Button from "../html/Button";
import { CiShoppingCart } from "react-icons/ci";

const AddToCart = ({ type = "icon" }) => {
  return (
    <>
      {type === "icon" ? (
        <div className="w-[25px] h-[25px] flex justify-center items-center bg-primary text-white rounded-full cursor-pointer ">
          <FaPlus className="text-[12px] " />
        </div>
      ) : (
        <div>
          <Button className="flex justify-between items-center gap-2 bg-black text-white py-2 px-5 text-sm md:text-base mt-4 md:mt-0">
            Add To Cart <CiShoppingCart className="text-xl" />
          </Button>
        </div>
      )}
    </>
  );
};

export default AddToCart;
