import React from "react";
import ProductCard from "../../../../components/card/ProductCard";

const ProductCollection = ({ products }) => {
  return (
    <div className="gap-5 mt-10 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products?.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductCollection;
