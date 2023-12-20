import React from "react";
import { MdClose } from "react-icons/md";
import Input from "../../../../components/html/Input";
import SelectOption from "../../../../components/shared/SelectOption";
import useGetPublic from "../../../../hooks/apiPublic/useGetPublic";
import BASE_URL from "../../../../api/api";

const FilterDrawer = ({
  filterOptions,
  handleFilterOption,
  drawerOpen,
  setDrawerOpen,
}) => {
  const { data: categories } = useGetPublic(
    ["ListOfUniqueCategories"],
    "/list-of-categories"
  );

  return (
    <div
      className={`min-h-[500px] absolute w-[90%] sm:w-[70%] md:w-[40%]   top-[20px] md:top-0 bg-gray-100 px-4 text-sm ${
        drawerOpen ? "right-0" : "right-[-100%] "
      } duration-[.4s] `}
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
        options={categories?.names}
        onChange={handleFilterOption}
      />
      <SelectOption
        value={filterOptions.type}
        name="type"
        options={categories?.types}
        onChange={handleFilterOption}
      />
      <SelectOption
        value={filterOptions.processor}
        name="processor"
        options={categories?.processors}
        onChange={handleFilterOption}
      />

      <SelectOption
        value={filterOptions.os}
        name="os"
        options={categories?.os}
        onChange={handleFilterOption}
      />
    </div>
  );
};

export default FilterDrawer;
