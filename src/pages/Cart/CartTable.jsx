import React, { useEffect, useState } from "react";
import CartTableRow from "./CartTableRow";
import Button from "../../components/html/Button";

const CartTable = () => {
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
        <CartTableRow
        // userID={userID}
        // handleSelected={handleSelected}
        // key={cartProduct._id}
        // selectedIds={selectedIds}
        // cartProduct={cartProduct}
        />
      </tbody>
      <Button
        // onClick={handleDeleteSelected}
        className=" px-4 mb-4 py-2 md:py-3 mt-8 rounded-sm font-clashRegular bg-white text-black border border-black text-[12px] sm:text-sm md:text-base"
      >
        Delete Selected
      </Button>
    </table>
  );
};

export default CartTable;
