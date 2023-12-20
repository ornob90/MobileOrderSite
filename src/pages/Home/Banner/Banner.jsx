import React from "react";
import Button from "../../../components/html/Button";

const Banner = () => {
  return (
    <div className="bg-banner min-h-[400px] md:min-h-[500px]   mt-[72px] pt-[5%] grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-center ">
        <div className="w-[80%] mx-auto space-y-4 flex flex-col justify-center items-center md:block">
          <h1 className="text-3xl font-bold text-center md:text-left">
            Explore <span className="text-primary">Mobile Delights</span>
          </h1>
          <p className="w-[90%] text-white md:text-gray-600 text-[14px] text-center md:text-left">
            Discover the latest in smartphones. Find your perfect device with
            just a click.
          </p>
          <Button className="bg-black text-white  py-2 px-5 rounded-[2px]">
            Explore
          </Button>
        </div>
      </div>
      {/* <div className="flex justify-center  icon-link">
        <img
          className="h-[70%] object-cover"
          src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/uk/advisor/wp-content/uploads/2020/11/phones-switch-apps.jpg"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default Banner;
