import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">c</h1>

      <div className="w/612 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
