import React, { useEffect, useState } from "react";
import CartTableRow from "./CartTableRow";
import Button from "../../components/html/Button";
import useGetPublic from "../../hooks/apiPublic/useGetPublic";
import useAuth from "../../hooks/auth/useAuth";

const CartTable = () => {
  const { user } = useAuth();
  const { data: cartProducts } = useGetPublic(
    ["Carts", user?.email],
    `/cart-products/${user?.email}`
  );

  return (
    <table className=" no-scrollbar font-poppins w-full  ">
      {/* Header */}
      <thead className=" border-b pb-4 mt-2 overflow-scroll  no-scrollbar w-full ">
        <tr
          //   onClick={handleSelectAll}
          className=" gap-2  w-full grid grid-cols-5 pb-4"
        >
          <td className="col-span-2">
            <label
              htmlFor="select-all"
              className=" text-[12px] md:text-sm lg:text-base"
            >
              Product
            </label>
          </td>
          {["Quantity", "Total", "Action"].map((col) => (
            <td
              className="col-span-1 text-[12px] md:text-sm lg:text-base flex justify-center items-center"
              key={col}
            >
              {col}
            </td>
          ))}
        </tr>
      </thead>
      <tbody className="min-h-[200px] overflow-auto no-scrollbar">
        {cartProducts?.map(({ _id, productID, quantity }) => (
          <CartTableRow
            key={_id}
            product={productID}
            quantity={quantity}
            cartID={_id}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
