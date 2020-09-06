import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const API = process.env.REACT_APP_API;

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get(`${API}/products`);
    console.log(res.data.products);
    setProducts(res.data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="row">
      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
};

export default ProductsList;
