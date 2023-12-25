import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";
export const Shop = () => {
  return (
    <div className="shop">
      <div className="shoptitle">
        <h1>Jackpot Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((data) => {
          const { id, productName } = data;
          return <Product key={id} productsInfo={data} />;
        })}
      </div>
    </div>
  );
};
