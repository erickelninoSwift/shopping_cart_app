import React from "react";
import "./shop.css";
const Product = ({ productsInfo }) => {
  const { id, productName, price, productImage } = productsInfo;
  return (
    <div className="product">
      <img src={productImage} alt={productName} height={"150px"} width="auto" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>R{price}</p>
      </div>
    </div>
  );
};

export default Product;
