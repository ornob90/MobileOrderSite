import React, { memo } from "react";
import Container from "../../components/shared/Container";
import Button from "../../components/html/Button";
import { CiShoppingCart } from "react-icons/ci";
import AddToCart from "../../components/singleUseBtn/AddToCart";
import { useParams } from "react-router-dom";
import useGetPublic from "../../hooks/apiPublic/useGetPublic";

const Detail = () => {
  const { id } = useParams();

  const { data: product } = useGetPublic(["Product", id], `/product/${id}`);

  const {
    _id,
    image,
    name,
    brand,
    price,
    type,
    processor,
    memory,
    os,
    screen_size,
    battery,
  } = product || {};

  return (
    <Container className="min-h-[400px]  mt-[72px] grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-center  items-center">
        <img src={image} alt="" className="h-[80%] " />
      </div>
      <div className="p-[5%] flex flex-col ">
        <div className="flex justify-between  items-center border-b border-b-gray-300 pb-3">
          <div className="">
            <p className="font-bold text-2xl md:text-3xl">{name}</p>
            <p className="text-gray-500">{brand}</p>
          </div>
          <p className="text-3xl md:text-4xl text-primary">${price}</p>
        </div>
        <div className="flex justify-evenly  flex-col h-[70%]">
          <ul className="text-sm md:text-base mt-16 mb-5 text-gray-800 flex flex-col gap-2">
            <li className="w-full flex items-center">
              <p className="w-[30%] md:w-[30%] lg:[25%]  text-gray-400">
                Processor
              </p>
              <p className="font-medium">
                <span className="pr-2">:</span> {processor}
              </p>
            </li>
            <li className="w-full flex items-center">
              <p className="w-[30%] md:w-[30%] lg:[25%]  text-gray-400">
                Memory
              </p>
              <p className="font-medium">
                <span className="pr-2">:</span> {memory}
              </p>
            </li>
            <li className="w-full flex items-center">
              <p className="w-[30%] md:w-[30%] lg:[25%]  text-gray-400">OS</p>
              <p className="font-medium">
                <span className="pr-2">:</span> {os}
              </p>
            </li>
            <li className="w-full flex items-center">
              <p className="w-[30%] md:w-[30%] lg:[25%]  text-gray-400">
                Battery
              </p>
              <p className="font-medium">
                <span className="pr-2">:</span> {battery}
              </p>
            </li>
            <li className="w-full flex items-center">
              <p className="w-[30%] md:w-[30%] lg:[25%]  text-gray-400">
                Screen
              </p>
              <p className="font-medium">
                <span className="pr-2">:</span> {screen_size}
              </p>
            </li>
            <li className="w-full flex items-center">
              <p className="w-[30%] md:w-[30%] lg:[25%]  text-gray-400">Type</p>
              <p className="font-medium">
                <span className="pr-2">:</span> {type}
              </p>
            </li>
          </ul>
          <AddToCart type="button" />
        </div>
      </div>
    </Container>
  );
};

export default Detail;
