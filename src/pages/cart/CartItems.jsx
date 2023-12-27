import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./cart.css";
export const CartItems = ({ data }) => {
  const { id, productName, price, productImage } = data;
  const { addToCart, deleQuantity, cartItems, updateQuantity } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>R{price}</p>
        <div className="countHandler">
          <button onClick={() => deleQuantity(id)}>-</button>
          <input
            type="text"
            value={cartItems[id]}
            onChange={(e) => updateQuantity(e.target.value, id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};
