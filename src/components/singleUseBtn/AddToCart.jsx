import React from "react";
import { FaPlus } from "react-icons/fa";
import Button from "../html/Button";
import { CiShoppingCart } from "react-icons/ci";
import usePostPublic from "../../hooks/apiPublic/usePostPublic";
import toast from "react-hot-toast";
import useAuth from "../../hooks/auth/useAuth";
import { useNavigate } from "react-router-dom";

const AddToCart = ({ type = "icon", product }) => {
  const { user, loading } = useAuth();

  const navigate = useNavigate();

  const { mutateAsync: addToCart } = usePostPublic(
    ["CartStat", user?.email],
    "/add-to-cart"
  );

  const handleAddToCart = async () => {
    if (!loading && !user) {
      return navigate("/login");
    }

    try {
      const productToAdd = {
        userEmail: user?.email,
        productID: product?._id,
      };

      const response = await addToCart(productToAdd);

      toast.success("Added to cart!!");
    } catch (error) {
      toast.error("Couldn't added to card!!");
    }
  };

  return (
    <>
      {type === "icon" ? (
        <div
          onClick={handleAddToCart}
          className="hover:scale-95 duration-300 w-[25px] h-[25px] flex justify-center items-center bg-primary text-white rounded-full cursor-pointer "
        >
          <FaPlus className="text-[12px] " />
        </div>
      ) : (
        <div>
          <Button
            onClick={handleAddToCart}
            className="flex justify-between items-center gap-2 bg-black text-white py-2 px-5 text-sm md:text-base mt-4 md:mt-0"
          >
            Add To Cart <CiShoppingCart className="text-xl" />
          </Button>
        </div>
      )}
    </>
  );
};

export default AddToCart;
