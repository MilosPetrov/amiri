import React, { useContext, useState } from 'react';
import { ShopContext } from '../../context/shop-context';
import bookmark from '../../images/bookmark.png';
import bookmarkC from '../../images/bookmarkC.png';
import SizeAlert from '../sizeAlert/SizeAlert';


import './card.css';
export default function Card(props) {
  const { addToCart, toggleBookmark, bookmarkedCards } = useContext(ShopContext);
  const [ selectedSize, setSelectedSize ] = useState("Select size")
  const [ alert, setAlert ] = useState(false)
  const [ hovered, setHovered ] = useState(false)
  
  const { product } = props;
  if (!product) {
    return null; // Return early if data is undefined
  }

  const { id, name, price, coverImg, secondImg, size } = product;

  const handleCardClick = () => {
    toggleBookmark(id)
  };

  const sizeElement = size.map((option) => (
    <option className='option' key={option} value={option}>{option}</option>
  ))

  const handleOptionChange = (event) => {
    setSelectedSize(event.target.value)
  }

  const handleAddToCard = () => {
    if (selectedSize === "Select size") {
      setAlert(true)
    } else {
      addToCart(id, selectedSize) 
    }
  }

  const handleMouseEnter = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }

  return (
    <div 
      className={`card ${hovered ? 'hovered-card' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img 
        className='card--bookmark'
        src={bookmarkedCards[id] ? bookmarkC : bookmark} 
        alt='Bookmark'
        onClick={handleCardClick}
      />
      <img 
        src={hovered ? secondImg : coverImg} 
        className='card--img' 
        alt='Product'
      />
      <div className='card--info'>
        <div className='card--info--p'>
          <p>{name}</p>
          <p>{price.toLocaleString(undefined, {minimumFractionDigits:2})} RSD</p>
        </div>
        {size && (
          <div className='card--info--size'>
            <label htmlFor={`size-${id}`}></label>
            <select value={selectedSize} onChange={handleOptionChange}>
              <option disabled>Select size</option>
              {sizeElement}
            </select>
          </div>
        )}
        <button 
        className='card--info--btn' 
        onClick={handleAddToCard}
        >
          Add To Cart
        </button>
      </div>
      {alert && <SizeAlert closeAlert={() => setAlert(false)} />}
    </div>
  );
}