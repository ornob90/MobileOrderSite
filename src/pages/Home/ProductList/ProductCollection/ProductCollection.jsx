import React from "react";
import ProductCard from "../../../../components/card/ProductCard";

const ProductCollection = () => {
  return (
    <div className="gap-2 mt-10 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <ProductCard />
    </div>
  );
};

export default ProductCollection;
