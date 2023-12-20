import React from "react";
import Container from "../../components/shared/Container";
import ProductCard from "../../components/card/ProductCard";
import FavoriteCard from "../../components/card/FavoriteCard";

const Favorite = () => {
  return (
    <Container className="mt-[80px] mb-16 ">
      {/* Header  */}
      <div className="pt-10">
        <h2 className="font-bold text-2xl md:text-3xl">
          Treasure Trove, My Top Picks!
        </h2>
        <p className="w-[90%] md:w-[80%] lg:w-[60%] text-gray-500 text-[12px] md:text-sm mt-2">
          Dive into a world of favorites! Unearth the gems you've bookmarked—a
          curated collection of must-haves that sparkle just for you.
        </p>

        {/* Grid  */}
        <div className="gap-2 mt-16 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <FavoriteCard type="favorite" />
        </div>
      </div>
    </Container>
  );
};

export default Favorite;
