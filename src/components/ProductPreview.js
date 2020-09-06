import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API;

const ProductPreview = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  const getProduct = async () => {
    const res = await axios.get(`${API}/products/${productId}`);
    setProduct(res.data.product);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <div className="card card-body">
          <div className="row">
            <div className="col-3">
              <img
                src={product.previewImageURL}
                alt={product.name}
                className="img-fluid"
              />
            </div>
            <div className="col-9">
              <h3>{product.name}</h3>
              <h3>Price: {product.price}</h3>
              <p>{product.description}</p>
              <button className="btn btn-primary btn-block">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
