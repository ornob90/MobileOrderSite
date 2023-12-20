import React, { useState } from "react";
import Button from "../../../../components/html/Button";
import { GiSettingsKnobs } from "react-icons/gi";
import Input from "../../../../components/html/Input";
import { GrSearch } from "react-icons/gr";
import FilterDrawer from "./FilterDrawer";

const Filter = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="flex md:justify-between md:items-center py-4 flex-col-reverse md:flex-row gap-2 lg:gap-0">
      <div
        className="flex items-center gap-2 bg-gray-200 py-2 px-4 font-[500] rounded-md text-[12px] md:text-base w-max cursor-pointer"
        onClick={() => setDrawerOpen(true)}
      >
        <GiSettingsKnobs />
        <Button>All Filters</Button>
      </div>
      <form className="w-full m:w-[70%] lg:w-[40%] relative">
        <Input
          placeHolder="Search"
          className="w-full text-[12px] md:text-base"
        />
        <GrSearch className="absolute top-[10px] md:top-[13px] right-[3%]" />
      </form>

      {/* Filter Options */}
      <FilterDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </div>
  );
};

export default Filter;
