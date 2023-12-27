import React from "react";
import "./shop.css";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
const Product = ({ productsInfo }) => {
  const { id, productName, price, productImage } = productsInfo;
  const { addToCart, cartItems } = useContext(ShopContext);
  const currentTotal = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>R{price}</p>
      </div>
      <button className="addToCartBtn" onClick={() => addToCart(id)}>
        Add to cart {currentTotal ? `(${currentTotal})` : ""}
      </button>
    </div>
  );
};

export default Product;
