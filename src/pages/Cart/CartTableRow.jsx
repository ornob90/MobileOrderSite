import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import QuantityBtn from "../../components/shared/QuantityBtn";

const CartTableRow = () => {
  const [productQuantity, setProductQuantity] = useState(0);

  const handleQuantity = async (action) => {
    let newQuantity;
    if (action === "+") {
      newQuantity = productQuantity + 1;
    } else {
      newQuantity = productQuantity - 1;
    }

    setProductQuantity(newQuantity);
  };

  return (
    <tr className="grid grid-cols-4 border-b pb-4 mt-2 overflow-scroll min-w-[500px] no-scrollbar">
      <td className="flex  col-span-2 justify-between">
        <input type="checkbox" name="" id="" />
        <div className="w-[15%] lg:w-[20%] ">
          <img
            src=""
            alt=""
            className="w-full h-full object-cover bg-[#F0F0F4] p-1"
          />
        </div>
        <div className="flex flex-col justify-center w-[50%] gap-1">
          <p className=" font-poppins font-bold text-sm md:text-base">Name</p>
          <p className="text-[10px] lg:text-[12px] text-gray-400">Size - 3</p>
          <p className=" font-clashRegular text-sm">1200</p>
        </div>
      </td>
      <td className="col-span-1 flex flex-col  justify-center pb-[10%]">
        <QuantityBtn
          productQuantity={productQuantity}
          handleQuantity={handleQuantity}
        />
      </td>
      <td className="col-span-1 flex flex-col justify-center">
        <div className="flex justify-between">
          <p className=" font-clashRegular text-sm">${200}</p>
        </div>
      </td>
    </tr>
  );
};

export default CartTableRow;
