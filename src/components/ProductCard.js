import React from "react";
import { Link } from "react-router-dom";
import './ProductCard.css'

const ProductCard = ({ product }) => {
  return (
    <Link to={"/products/" + product._id} className="col-md-4">
      <div className="mb-4" key={product._id}>
        <div className="card text-center mx-auto product__card">
          <img
            src={product.previewImageURL}
            alt={product.name}
            className="card-img-top"
            style={{ width: "30%", margin: "auto" }}
          />
          <div className="card-body">
            <h3 className="h6">{product.name}</h3>
            <p className="card-text">{product.description}</p>
            <h5>{product.price}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
