import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Bag, BagSimple, BookmarkSimple, User } from "phosphor-react"
import { ShopContext } from "../../context/shop-context"
import { useState } from "react";
import Drawer from "../drawer/Drawer";
import './navbar.css'

export default function Navbar() {
    const { bookmarkedCards, cartItems } = useContext(ShopContext);
    const [ drawer, setDrawer ] = useState(false)
    let navigate = useNavigate()

    const hasBookmarkedProducts = Object.values(bookmarkedCards).some(
        (bookmarked) => bookmarked
      );

    const totalCartItems = Object.values(cartItems).reduce(
        (total, item) => total + (item.quantity || 0),
        0
      );

      console.log(totalCartItems)

    const toggleDrawer = () => {
        setDrawer(!drawer)
    }

    return (
        <div className='navbar'>
            <ul className="navbar--list">
                <li className="loading-line" onClick={() => navigate("/Mens")}>
                    MENSWEAR
                </li>
                <li className="loading-line" onClick={() => navigate("/Womens")}>
                    WOMENSWEAR
                </li>
                <li className="loading-line" onClick={() => navigate("/Kids")}>
                    KIDS
                </li>
                <li className="loading-line" onClick={() => navigate("/Footwear")}>
                    FOOTWEAR
                </li>
                <li className="loading-line" onClick={() => navigate("/Accessories")}>
                    ACCESSORIES
                </li>
            </ul>
            <h1 className="navbar--brand" onClick={() => navigate("/")}>
                <img src='https://cdn.shopify.com/s/files/1/1056/1394/files/logo_be4041d5-a81e-4d1e-a43d-29b0b0d52cbe.png?v=1678302533' 
                alt="asd"
                />
            </h1>
            <ul className="navbar--main">
                <li><User size={24} onClick={() => navigate("/Login")}/></li>
                <li onClick={() => navigate("/Wishlist")}>
                    {hasBookmarkedProducts ? ( <BookmarkSimple size={24} weight="fill" /> ) : (<BookmarkSimple size={24} />)}
                </li>
                <li onClick={toggleDrawer}>
                    {totalCartItems > 0 ? <BagSimple size={24} weight="fill" /> : <Bag size={24}/> }
                    {Object.keys(cartItems).length > 0 && totalCartItems > 0 && (
                    <span className="cart-counter">{totalCartItems}</span>
                    )}
                </li>
            </ul>
            <Drawer isOpen={drawer} isClosed={toggleDrawer} />
        </div>
    )
}