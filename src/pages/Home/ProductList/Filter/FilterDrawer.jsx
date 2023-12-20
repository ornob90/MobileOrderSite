import React from "react";
import { MdClose } from "react-icons/md";
import Input from "../../../../components/html/Input";
import SelectOption from "../../../../components/shared/SelectOption";

const FilterDrawer = ({
  filterOptions,
  handleFilterOption,
  drawerOpen,
  setDrawerOpen,
}) => {
  return (
    <div
      className={`min-h-[500px] absolute w-[90%] sm:w-[70%] md:w-[40%] lg:w-[25%]  top-[20px] md:top-0 bg-gray-100 px-4 text-sm ${
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
        <Input
          value={filterOptions.price}
          name="price"
          onChange={handleFilterOption}
          type="number"
          min={0}
          placeHolder="MAX Price"
          className="bg-white border border-gray-400 mt-3 w-full"
        />
      </div>

      {/* Memory */}
      <p className="mt-4 ">Memory</p>
      <div className="border-b border-b-gray-400 pb-5">
        <Input
          value={filterOptions.memory}
          name="memory"
          onChange={handleFilterOption}
          type="number"
          min={0}
          placeHolder="GB"
          className="bg-white border border-gray-400 mt-3 w-full"
        />
      </div>

      {/* Name */}
      <SelectOption
        value={filterOptions.name}
        name="name"
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
        onChange={handleFilterOption}
      />
      <SelectOption
        value={filterOptions.type}
        name="type"
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
        onChange={handleFilterOption}
      />
      <SelectOption
        value={filterOptions.processor}
        name="processor"
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
        onChange={handleFilterOption}
      />

      <SelectOption
        value={filterOptions.os}
        name="os"
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
        onChange={handleFilterOption}
      />
    </div>
  );
};

export default FilterDrawer;
