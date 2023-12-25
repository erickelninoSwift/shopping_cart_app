import React from "react";

const Product = ({ productsInfo }) => {
  const { id, productName, price, productImage } = productsInfo;
  return <div>{productName}</div>;
};

export default Product;
