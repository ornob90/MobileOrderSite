import React from "react";
import Button from "../html/Button";
import { FaArrowAltCircleRight, FaPlus } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div className="h-[420px] border">
      <div className="h-[65%] flex justify-center  items-center">
        <img
          src="https://unboxingtech.com.bd/public/uploads/all/Q5kNlBsUWFveqlPvD2GqwwKZm6FNTvBMmZZX8fjj.jpg"
          alt=""
          className="h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center text-sm">
          <p className="font-bold">Samsung v2</p>
          <div className="w-[25px] h-[25px] flex justify-center items-center bg-primary text-white rounded-full cursor-pointer ">
            <FaPlus className="text-[12px] " />
          </div>
        </div>
        <p className="mt-3 text-gray-500">BRAND</p>
        <div className="flex justify-between items-center text-sm mt-2">
          <p>
            Price: <span className="font-medium text-lg">12.00$</span>
          </p>
          <Button className="bg-black flex items-center gap-2 text-white py-1 px-2 rounded-md">
            Details
            <FaArrowAltCircleRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
