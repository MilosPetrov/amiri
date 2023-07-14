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
  const [bookmarkedCards, setBookmarkedCards] = useState(getDefaultBookmarked());
  const [cartItems, setCartItems] = useState(getDefaultCart());

  
  // CART  

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] && cartItems[item].quantity > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        totalAmount += cartItems[item].quantity * itemInfo.price; 
      }
    }
    return totalAmount;
  };

  // const addToCart = (itemId) => {
  //   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    
  // };

  const addToCart = (itemId, pickedSize) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        quantity: prev[itemId] ? prev[itemId].quantity + 1 : 1,
        size: pickedSize,
      },
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] && updatedCart[itemId].quantity > 0) {
        updatedCart[itemId].quantity -= 1;
        if (updatedCart[itemId].quantity === 0) {
          delete updatedCart[itemId];
        }
      }
      return updatedCart;
    });
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
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

  // const addBookmark = (itemId) => {
  //   setCards((prevCards) => {
  //     const updatedCards = prevCards.map((card) =>
  //       card.id === itemId ? { ...card, bookmarked: true } : card
  //     );
  //     return updatedCards;
  //   });
  //   setBookmarkedCards((prevBookmarkedCards) => ({
  //     ...prevBookmarkedCards,
  //     [itemId]: true,
  //     bookmarked: !prevBookmarkedCards.bookmarked
  //   }));
  // };

  // const removeBookmark = (cardId) => {
  //   setCards((prevCards) => {
  //     const updatedCards = prevCards.map((card) =>
  //       card.id === cardId ? { ...card, bookmarked: false } : card
  //     );
  //     return updatedCards;
  //   });
  //   setBookmarkedCards((prevBookmarkedCards) => {
  //     const { [cardId]: _, ...updatedBookmarkedCards } = prevBookmarkedCards;
  //     return updatedBookmarkedCards;
  //   });
  // };



  const contextValue = {
    bookmarkedCards,
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    checkout,
    toggleBookmark,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}
