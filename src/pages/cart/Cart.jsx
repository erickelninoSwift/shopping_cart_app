import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItems } from "./CartItems";
import { useNavigate } from "react-router-dom";
export const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1 className="">Your cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0)
            return <CartItems key={product.id} data={product} />;
        })}
      </div>
      {getTotalAmount() > 0 ? (
        <div className="checkout">
          <p> Subtotal : ${getTotalAmount()}</p>
          <button>checkout</button>
          <button onClick={() => navigate("/")}>Continue shopping</button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};
