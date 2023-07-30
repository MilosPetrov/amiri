import React, { useContext, useState } from 'react';
import { ShopContext } from '../../context/shop-context';
import SizeAlert from '../sizeAlert/SizeAlert';
import { BookmarkSimple } from 'phosphor-react';

import './card.css';
export default function Card(props) {
  const { addToCart, toggleBookmark, bookmarkedCards } = useContext(ShopContext);
  const [ selectedSize, setSelectedSize ] = useState("Select size")
  const [ alert, setAlert ] = useState(false)
  const [ hovered, setHovered ] = useState(false)
  
  if (!props.product) {
    return null; // Return early if data is undefined
  }

  const { id, name, price, coverImg, secondImg, size } = props.product;

  const handleCardClick = () => {
    toggleBookmark(id)
  };

  const sizeElement = size.map((option) => (
    <option className='option' key={option} value={option}>
      {option}
    </option>
  ));

  const handleOptionChange = (event) => {
    setSelectedSize(event.target.value)
  }

  const handleAddToCard = () => {
    if (props.category === "Accessories") {
      addToCart(id, null)
    } else if (selectedSize === "Select size") {
      setAlert(true)
    } else {
      addToCart(id, selectedSize) 
      setSelectedSize("Select size")
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
      <BookmarkSimple 
        className='card--bookmark'
        weight={bookmarkedCards[id] ?  'fill' : 'thin'} 
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
        {size && props.category !== 'Accessories' && (
          <div className='card--info--size'>
            <label htmlFor={`size-${id}`}></label>
            <select value={selectedSize} onChange={handleOptionChange} defaultValue="Select size">
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
      {alert && props.category !== 'Accessories' && <SizeAlert closeAlert={() => setAlert(false)} />}
    </div>
  );
}