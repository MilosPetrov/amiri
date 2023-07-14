import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = ({ product }) => {
  const { id, name, price, coverImg } = product;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

    const item = cartItems[id];
    const quantity = item ? item.quantity : 0;
    const size = item ? item.size : ""

  return (
    <div className="cartItem">
      <img className="cartItem-img" src={coverImg} alt="coverImage"/>
      <div className="cartItem-info">
        <div className="cartItem-description">
          <p>
            {name}
          </p>
          <p>
            {size}
          </p>
          <div className="cartItem-countHandler">
            <button onClick={() => removeFromCart(id)}> - </button>
            <input
              value={quantity}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <button onClick={() => addToCart(id)}> + </button>
          </div>
          <p> {price.toLocaleString(undefined, {minimumFractionDigits: 2})} RSD</p>
        </div>
      </div>   
    </div>
  );
}