import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { PRODUCTS } from "../products";
export const ShopContext = createContext(null);

const getdefaultCart = () => {
  let cart = {};

  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }

  return cart;
};
function ShopContextprovider({ children }) {
  const [cartItems, setCartItems] = useState(getdefaultCart());
  const addToCart = (itemID) => {
    setCartItems((data) => ({ ...data, [itemID]: data[itemID] + 1 }));
    console.log(cartItems);
  };

  const deleQuantity = (itemD) => {
    setCartItems((data) => ({ ...data, [itemD]: data[itemD] - 1 }));
    console.log(cartItems);
  };

  const updateQuantity = (newAmount, itemsID) => {
    setCartItems((data) => {
      return { ...data, [itemsID]: newAmount };
    });
  };

  const contextValue = { cartItems, addToCart, deleQuantity, updateQuantity };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}

export default ShopContextprovider;
