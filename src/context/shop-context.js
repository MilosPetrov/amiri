import React, { createContext, useState } from 'react';
import { products } from '../data';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= products.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const getDefaultBookmarked = () => {
  let bookmarked = {};
  products.forEach((product) => {
    bookmarked[product.id] = product.bookmarked || false;
  });
  return bookmarked;
};

export default function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [bookmarkedCards, setBookmarkedCards] = useState(getDefaultBookmarked());

  const getCompositeKey = (itemId, pickedSize) => {
    return `${itemId}-${pickedSize}`;
  };

  
  // CART  

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const key in cartItems) {
      const [itemId, pickedSize] = key.split('-');
      const product = products.find((p) => p.id === Number(itemId));
      if (cartItems[key].quantity > 0 && product) {
        totalAmount += cartItems[key].quantity * product.price;
      }
    }
    return totalAmount;
  };


  const addToCart = (itemId, pickedSize) => {
    const key = getCompositeKey(itemId, pickedSize);
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [key]: { ...prevCartItems[key], quantity: (prevCartItems[key]?.quantity || 0) + 1, pickedSize },
    }));
  
  };
  console.log("Updated cart:", cartItems);


  const removeFromCart = (itemId, pickedSize) => {
    const key = getCompositeKey(itemId, pickedSize);
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      if (updatedCartItems[key] && updatedCartItems[key].quantity > 0) {
        updatedCartItems[key].quantity -= 1;
        if (updatedCartItems[key].quantity === 0) {
          delete updatedCartItems[key];
        }
      }
      return updatedCartItems;
    });
  };

  const updateCartItemCount = (newQuantity, itemId, pickedSize) => {
    const key = getCompositeKey(itemId, pickedSize);
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [key]: { ...prevCartItems[key], quantity: newQuantity  },
    }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  // BOOKMARK

  const toggleBookmark = (itemId) => {
    setBookmarkedCards((prevBookmarkedCards) => ({
      ...prevBookmarkedCards,
      [itemId]: !prevBookmarkedCards[itemId],
    }));
  };



  const contextValue = {
    bookmarkedCards,
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    checkout,
    toggleBookmark,
    getCompositeKey
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}
