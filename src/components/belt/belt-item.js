import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import bookmark from '../../images/bookmark.png'
import bookmarkC from '../../images/bookmarkC.png'
import './belt.css'

export default function BeltItem(props) {
  const { addToCart, toggleBookmark, bookmarkedCards } = useContext(ShopContext);

  const { product } = props;
  if (!product) {
    return null; // Return early if data is undefined
  }

  const { id, name, price, coverImg } = product;

  // const cartItemCount = cartItems[id] || 0;
  
  const handleCardClick = () => {
    toggleBookmark(id)
  };

  
  return (
    <div className='beltItem'>
        <img 
            className='beltItem-bookmark'
            src={bookmarkedCards[id] ? bookmarkC : bookmark} 
            alt='Bookmark'
            onClick={handleCardClick}
        />
        <img 
            src={coverImg} 
            className='beltItem-img' 
            alt='Product'
        />
        <div className='beltItem-info'>
          <div className='beltItem-price'>
              <p>{price.toLocaleString(undefined, {minimumFractionDigits:2})} RSD</p>
          </div>
          <button className='beltItem-button' onClick={() => addToCart(id)}>
              Add To Cart
          </button>
        </div> 
    </div>
  );
}