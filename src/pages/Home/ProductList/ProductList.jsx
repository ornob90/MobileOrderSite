import React, { useState } from "react";
import Container from "../../../components/shared/Container";
import Filter from "./Filter/Filter";
import ProductCollection from "./ProductCollection/ProductCollection";

const ProductList = () => {
  const [filterOptions, setFilterOptions] = useState({});

  const handleFilterOption = (e) => {
    const { name, value } = e.target;

    setFilterOptions((prev) => ({ ...filterOptions, [name]: value }));
  };

  return (
    <Container className="mt-8 relative">
      <Filter
        filterOptions={filterOptions}
        handleFilterOption={handleFilterOption}
      />
      <ProductCollection />
    </Container>
  );
};

export default ProductList;
