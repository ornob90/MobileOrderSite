import React from "react";
import Button from "../html/Button";
import { FaArrowAltCircleRight, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import AddToFav from "../singleUseBtn/AddToFav";
import useAuth from "../../hooks/auth/useAuth";
import useDeletePublic from "../../hooks/apiPublic/useDeletePublic";

const FavoriteCard = ({ favorite }) => {
  const navigate = useNavigate();

  const { product } = favorite;
  const { _id, image, name, brand, price } = product;
  const { user: curUser } = useAuth();
  const { mutateAsync: deleteFromFavorite } = useDeletePublic([
    ["Favorites", curUser?.email],
  ]);

  return (
    <div className="h-[420px] border">
      <div className="h-[65%] flex justify-center  items-center">
        <img src={image} alt="" className="h-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center text-sm">
          <p className="font-bold">{name}</p>
          <AddToFav _id={_id} favOnly />
        </div>
        <p className="mt-3 text-gray-500">{brand}</p>
        <div className="flex justify-between items-center text-sm mt-2">
          <p>
            Price: <span className="font-medium text-lg">{price}$</span>
          </p>
          <Button
            onClick={() => navigate(`/detail/${_id}`)}
            className="bg-black flex items-center gap-2 text-white py-1 px-2 rounded-md"
          >
            Details
            <FaArrowAltCircleRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
