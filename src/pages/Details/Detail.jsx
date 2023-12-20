import React from "react";
import Container from "../../components/shared/Container";
import Button from "../../components/html/Button";
import { CiShoppingCart } from "react-icons/ci";

const Detail = () => {
  return (
    <Container className="min-h-[400px]  mt-[72px] grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-center  items-center">
        <img
          src="https://unboxingtech.com.bd/public/uploads/all/Q5kNlBsUWFveqlPvD2GqwwKZm6FNTvBMmZZX8fjj.jpg"
          alt=""
          className="h-[80%] "
        />
      </div>
      <div className="p-[5%] flex flex-col ">
        <div className="flex justify-between  items-center border-b border-b-gray-300 pb-3">
          <div className="">
            <p className="font-bold text-2xl md:text-3xl">Name</p>
            <p className="text-gray-500">SAMSUNG</p>
          </div>
          <p className="text-3xl md:text-4xl text-primary">$1000</p>
        </div>
        <div className="flex justify-evenly  flex-col h-[70%]">
          <ul className="text-sm md:text-base mt-16 mb-5 text-gray-800 flex flex-col gap-2">
            <li className="w-full flex items-center">
              <p className="w-[30%] md:w-[30%] lg:[25%]  text-gray-400">
                Processor
              </p>
              <p className="font-medium">
                <span className="pr-2">:</span> Quad-core MediaTek
              </p>
            </li>
            <li className="w-full flex items-center">
              <p className="w-[30%] md:w-[30%] lg:[25%]  text-gray-400">
                Memory
              </p>
              <p className="font-medium">
                <span className="pr-2">:</span> Quad-core MediaTek
              </p>
            </li>
            <li className="w-full flex items-center">
              <p className="w-[30%] md:w-[30%] lg:[25%]  text-gray-400">OS</p>
              <p className="font-medium">
                <span className="pr-2">:</span> Quad-core MediaTek
              </p>
            </li>
            <li className="w-full flex items-center">
              <p className="w-[30%] md:w-[30%] lg:[25%]  text-gray-400">
                Battery
              </p>
              <p className="font-medium">
                <span className="pr-2">:</span> Quad-core MediaTek
              </p>
            </li>
            <li className="w-full flex items-center">
              <p className="w-[30%] md:w-[30%] lg:[25%]  text-gray-400">
                Camera
              </p>
              <p className="font-medium">
                <span className="pr-2">:</span> Quad-core MediaTek
              </p>
            </li>
            <li className="w-full flex items-center">
              <p className="w-[30%] md:w-[30%] lg:[25%]  text-gray-400">
                Screen
              </p>
              <p className="font-medium">
                <span className="pr-2">:</span> Quad-core MediaTek
              </p>
            </li>
          </ul>
          <div>
            <Button className="flex justify-between items-center gap-2 bg-black text-white py-2 px-5 text-sm md:text-base mt-4 md:mt-0">
              Add To Cart <CiShoppingCart className="text-xl" />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Detail;
