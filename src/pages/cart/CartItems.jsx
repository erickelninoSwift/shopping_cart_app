import React from "react";
import { ShopContext } from "../../context/shop-context";
import "./cart.css";
export const CartItems = ({ data }) => {
  const { id, productName, price, productImage } = data;
  console.log(data);
  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>R{price}</p>
      </div>
    </div>
  );
};
