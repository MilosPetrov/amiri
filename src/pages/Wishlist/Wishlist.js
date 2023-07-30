import React, { useContext } from 'react'
import { products } from '../../data'
import { ShopContext } from '../../context/shop-context'
import Heading from '../../components/Heading'
import { Bookmarked } from './Bookmarked'

import './wishlist.css'
export default function Wishlist() {
  const { bookmarkedCards } = useContext(ShopContext)

    const bookmarkedProducts = products.filter(
      (product) => bookmarkedCards[product.id] === true
    )

    const bookmarkedElement =  bookmarkedProducts.map((product) => (
      <Bookmarked key={product.id} product={product} />
    ))

  return (
    <div>
      <Heading heading={'Wishlist'} className="wishlist-heading" />
      <div className="wishlist">
        <div className="wishlist-grid">
          {bookmarkedElement}
        </div>
      </div>
    </div>
  );
}