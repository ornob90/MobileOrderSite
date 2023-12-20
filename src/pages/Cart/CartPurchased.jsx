import React, { useState } from "react";
import CartSummery from "./CartSummary";
import CartCheckout from "./CartCheckout";
import { MdOutlineEventNote } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";

const CartPurchased = () => {
  const [isSummary, setIsSummary] = useState(true);

  return (
    <>
      <div className="lg:mx-10 grid grid-cols-2">
        <p
          onClick={() => setIsSummary(true)}
          className={`cursor-pointer text-center font-poppins font-bold text-md sm:text-lg  py-2 border-b flex items-center gap-2 justify-center  ${
            isSummary ? "bg-primary text-white" : "bg-white text-black"
          }`}
        >
          SUMMARY
          <MdOutlineEventNote />
        </p>
        <p
          onClick={() => setIsSummary(false)}
          className={`cursor-pointer text-center font-poppins font-bold text-md sm:text-lg  py-2 flex items-center gap-2 justify-center  ${
            !isSummary ? "bg-primary text-white" : "bg-white text-black"
          }`}
        >
          Checkout
          <IoBagCheckOutline />
        </p>
      </div>
      {isSummary ? <CartSummery /> : <CartCheckout />}
    </>
  );
};

export default CartPurchased;
