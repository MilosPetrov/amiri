import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { X } from "phosphor-react";

export const Bookmarked = (props) => {
  const { id, name, price, coverImg } = props.product;
  const { addToCart, toggleBookmark } =
    useContext(ShopContext);

  const handleRemoveBookmark = () => {
    toggleBookmark(id)
  }

  return (
      <div className="wishlist-item">
        <img className="wishlist-item-img" src={coverImg} />
        <X size={27} weight="light" className="wishlist-item-removeBtn" onClick={handleRemoveBookmark} />
        <div className="wishlist-item-info">
          <div className="wishlist-item-description">
            <p className="wishlist-item-name">
              {name}
            </p>
            <div className="wishlist-item-price">
              <p> {price.toLocaleString(undefined, {minimumFractionDigits: 2})} RSD</p>
            </div>
          </div>
          <button className="wishlist-item-addBtn" onClick={() => addToCart(id)}>
            Add To Cart
          </button>
        </div>   
      </div>
  );
};