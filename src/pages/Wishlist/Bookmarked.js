import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { X } from "phosphor-react";
import SizeAlert from "../../components/sizeAlert/SizeAlert";

export const Bookmarked = (props) => {
  const { addToCart, toggleBookmark } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState("Select size");
  const [alert, setAlert] = useState(false);

  const { product } = props;
  if (!product) {
    return null;
  }

  const { id, name, price, coverImg, size } = product;

  const handleRemoveBookmark = () => {
    toggleBookmark(id);
  };

  const sizeElement = size.map((option) => (
    <option className="option" key={option} value={option}>
      {option}
    </option>
  ));

  const handleOptionChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCard = () => {
    if (props.category === "Accessories") {
      addToCart(id, null);
    } else if (selectedSize === "Select size") {
      setAlert(true);
    } else {
      addToCart(id, selectedSize);
      setSelectedSize("Select size")
    }
  };

  console.log("Category:", props.category);
  console.log("Size:", size);

  return (
    <div className="wishlist-item">
      <img className="wishlist-item-img" src={coverImg} />
      <X
        size={27}
        weight="light"
        className="wishlist-item-removeBtn"
        onClick={handleRemoveBookmark}
      />
      <div className="wishlist-item-info">
        <div className="wishlist-item-description">
          <p className="wishlist-item-name">{name}</p>
          <div className="wishlist-item-price">
            <p> {price.toLocaleString(undefined, { minimumFractionDigits: 2 })} RSD</p>
          </div>
        </div>
        {props.category !== "Accessories" && size && (
          <div className="wishlist-size">
            <label htmlFor={`size-${id}`}></label>
            <select value={selectedSize} onChange={handleOptionChange}>
              <option disabled>Select size</option>
              {sizeElement}
            </select>
          </div>
        )}
        <button className="wishlist-item-addBtn" onClick={handleAddToCard}>
          Add To Cart
        </button>
      </div>
      {alert && props.category !== "Accessories" && <SizeAlert closeAlert={() => setAlert(false)} />}
    </div>
  );
};