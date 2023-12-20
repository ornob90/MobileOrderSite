import React from "react";
import Container from "../../components/shared/Container";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import ProductList from "./ProductList/ProductList";

const Home = () => {
  return (
    <div className="min-h-[400px] w-full">
      <Banner />
      <ProductList />
    </div>
  );
};

export default Home;
