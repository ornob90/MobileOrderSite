import React, { useEffect, useState } from "react";
import Container from "../../../components/shared/Container";
import Filter from "./Filter/Filter";
import ProductCollection from "./ProductCollection/ProductCollection";
import BASE_URL from "../../../api/api";

const ProductList = () => {
  const [filterOptions, setFilterOptions] = useState({});

  const handleFilterOption = (e) => {
    const { name, value } = e.target;

    setFilterOptions((prev) => ({ ...filterOptions, [name]: value }));
  };

  useEffect(() => {
    let url = BASE_URL + "/products?";

    Object.entries(filterOptions).forEach(([key, value]) => {
      url += `${key}=${value}&`;
    });
  }, [filterOptions]);

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
