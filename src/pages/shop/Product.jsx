import React from "react";
import "./shop.css";
const Product = ({ productsInfo }) => {
  const { id, productName, price, productImage } = productsInfo;
  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>R{price}</p>
      </div>
      <button className="addToCartBtn">Add to cart</button>
    </div>
  );
};

export default Product;
