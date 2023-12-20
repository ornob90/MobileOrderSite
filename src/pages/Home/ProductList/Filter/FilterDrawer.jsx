import React from "react";
import { MdClose } from "react-icons/md";
import Input from "../../../../components/html/Input";
import SelectOption from "../../../../components/shared/SelectOption";

const FilterDrawer = ({ drawerOpen, setDrawerOpen }) => {
  return (
    <div
      className={`min-h-[500px] absolute w-[90%] sm:w-[70%] md:w-[40%] lg:w-[20%]  top-[20px] md:top-0 bg-gray-200 px-4 text-sm ${
        drawerOpen ? "left-0" : "left-[-100%] "
      } duration-[.4s]`}
    >
      <p className="flex justify-end pt-4 ">
        <MdClose
          onClick={() => setDrawerOpen(false)}
          className="text-xl cursor-pointer"
        />
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
