import React from "react";
import { MdClose } from "react-icons/md";
import Input from "../../../../components/html/Input";
import SelectOption from "../../../../components/shared/SelectOption";

const FilterDrawer = () => {
  return (
    <div className="min-h-[500px] absolute w-[20%] left-0 top-0 bg-gray-200 px-4 text-sm">
      <p className="flex justify-end pt-4 ">
        <MdClose className="text-xl" />
      </p>
      {/* Price */}
      <p className="mt-4 ">Price</p>

      <div className="border-b border-b-gray-400 pb-5">
        <Input type="range" className="w-full accent-black" />
      </div>

      {/* Memory */}
      <p className="mt-4 ">Memory</p>
      <div className="border-b border-b-gray-400 pb-5">
        <Input
          type="number"
          min={0}
          placeHolder="GB"
          className="bg-white border border-gray-400 mt-3 w-full"
        />
      </div>

      {/* Name */}
      <SelectOption
        name="Name"
        options={[
          "Samsung",
          "Vivo",
          "Apple",
          "Samsung",
          "Vivo",
          "Apple",
          "Samsung",
          "Vivo",
          "Apple",
        ]}
      />
      <SelectOption
        name="Type"
        options={[
          "Samsung",
          "Vivo",
          "Apple",
          "Samsung",
          "Vivo",
          "Apple",
          "Samsung",
          "Vivo",
          "Apple",
        ]}
      />
      <SelectOption
        name="Processor"
        options={[
          "Samsung",
          "Vivo",
          "Apple",
          "Samsung",
          "Vivo",
          "Apple",
          "Samsung",
          "Vivo",
          "Apple",
        ]}
      />

      <SelectOption
        name="OS"
        options={[
          "Samsung",
          "Vivo",
          "Apple",
          "Samsung",
          "Vivo",
          "Apple",
          "Samsung",
          "Vivo",
          "Apple",
        ]}
      />
    </div>
  );
};

export default FilterDrawer;
