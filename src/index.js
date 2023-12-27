import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ShopContextprovider from "./context/shop-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ShopContextprovider>
    <App />
  </ShopContextprovider>
);
