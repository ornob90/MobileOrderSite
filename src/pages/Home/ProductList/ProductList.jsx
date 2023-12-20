import React from "react";
import Container from "../../../components/shared/Container";
import Filter from "./Filter/Filter";
import ProductCollection from "./ProductCollection/ProductCollection";

const ProductList = () => {
  return (
    <Container className="mt-8 relative">
      <Filter />
      <ProductCollection />
    </Container>
  );
};

export default ProductList;
