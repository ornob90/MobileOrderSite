import React, { useEffect, useState } from "react";
import Container from "../../../components/shared/Container";
import Filter from "./Filter/Filter";
import ProductCollection from "./ProductCollection/ProductCollection";
import BASE_URL from "../../../api/api";
import useAxiosPublic from "../../../hooks/axios/useAxiosPublic";
import generateQueryString from "../../../utils/generateQueryString";

const ProductList = () => {
  const [filterOptions, setFilterOptions] = useState({});
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const axiosPublic = useAxiosPublic();
  const handleFilterOption = (e) => {
    const { name, value } = e.target;

    setFilterOptions((prev) => ({ ...filterOptions, [name]: value }));
  };

  const handleSearch = (e) => {
    if (!e.target.value) {
      const url = generateQueryString(BASE_URL + "/products?", filterOptions);
      axiosPublic.get(url).then((res) => setProducts(res.data));
    } else {
      setProducts(
        products?.filter(({ name }) =>
          name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    const url = generateQueryString(BASE_URL + "/products?", filterOptions);

    axiosPublic.get(url).then((res) => setProducts(res.data));
  }, [filterOptions]);

  console.log(products);

  return (
    <Container className="mt-8 relative overflow-hidden min-h-[700px]">
      <Filter
        filterOptions={filterOptions}
        handleFilterOption={handleFilterOption}
        handleSearch={handleSearch}
      />
      <ProductCollection products={products} />
    </Container>
  );
};

export default ProductList;
