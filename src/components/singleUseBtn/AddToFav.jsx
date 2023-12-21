import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import useAuth from "../../hooks/auth/useAuth";
import usePostPublic from "../../hooks/apiPublic/usePostPublic";
import useDeletePublic from "../../hooks/apiPublic/useDeletePublic";
import useGetPublic from "../../hooks/apiPublic/useGetPublic";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddToFav = ({ _id, favOnly }) => {
  const { user: curUser, loading } = useAuth();

  const navigate = useNavigate();

  const { mutateAsync: addToFavorite } = usePostPublic(null, `/favorite`);
  const { mutateAsync: deleteFromFavorite } = useDeletePublic([
    ["Favorites", curUser?.email],
  ]);

  const [bookmarked, setBookmarked] = useState(false);

  const { data: favStatus } = useGetPublic(
    ["FavoriteStatus", curUser?.email, _id],
    `/favorite-status?email=${curUser?.email}&productID=${_id}`
  );

  useEffect(() => {
    setBookmarked(favStatus?.found);
  }, [favStatus]);

  const handleBookmarked = async (action) => {
    if (!loading && !curUser) {
      return navigate("/login");
    }

    if (action === "+") setBookmarked(true);
    if (action === "-") setBookmarked(false);

    const favProduct = {
      product: _id,
      userName: curUser?.displayName,
      userEmail: curUser?.email,
    };

    try {
      if (action === "+") {
        const response = await addToFavorite(favProduct);
        toast.success("Product Bookmarked!!");
      } else if (action === "-") {
        const response = await deleteFromFavorite(
          `/favorite?email=${curUser?.email}&productID=${_id}`
        );
        toast.success("Product Removed From Bookmarked");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <>
      {favOnly ? (
        <FaHeart onClick={() => handleBookmarked("-")} className="text-2xl" />
      ) : (
        <>
          {bookmarked ? (
            <FaHeart
              onClick={() => handleBookmarked("-")}
              className="text-2xl"
            />
          ) : (
            <FaRegHeart
              onClick={() => handleBookmarked("+")}
              className="text-2xl"
            />
          )}
        </>
      )}
    </>
  );
};

export default AddToFav;
