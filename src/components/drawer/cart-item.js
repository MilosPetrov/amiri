import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = ({ product = {}, selectedSize }) => {
  const { id, name, price, coverImg, size } = product;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount, getCompositeKey } =
    useContext(ShopContext);

    const item = cartItems[getCompositeKey(id, selectedSize)];
    const quantity = item ? item.quantity : 0;
    const itemSize = selectedSize !== "Select size" ? selectedSize : null;
    

  const handleInputChange = (event) => {
    const newQuantity = Number(event.target.value);
    updateCartItemCount(newQuantity, id, selectedSize);
  };

  console.log("CartItem rendered with quantity:", quantity);

  return (
    <div className="cartItem">
      <img className="cartItem-img" src={coverImg} alt="coverImage" />
      <div className="cartItem-info">
        <div className="cartItem-description">
          <p>{name}</p>
          {itemSize && <p>{itemSize}</p>}
          <div className="cartItem-countHandler">
            <button onClick={() => removeFromCart(id, selectedSize)}> - </button>
            <input value={quantity} onChange={handleInputChange} />
            <button onClick={() => addToCart(id, selectedSize)}> + </button>
          </div>
          <p> {price.toLocaleString(undefined, {minimumFractionDigits: 2})} RSD</p>
        </div>
      </div>
    </div>
  );
};