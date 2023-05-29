import React from "react"
import { useNavigate } from "react-router-dom"

export default function Navbar() {
    let navigate = useNavigate()
    return (
        <div className='navbar'>
            <ul className="navbar--list">
                <li onClick={() => navigate("/Menswear")}>MENSWEAR</li>
                <li onClick={() => navigate("/Womenswear")}>WOMENSWEAR</li>
                <li onClick={() => navigate("/Kids")}>KIDS</li>
                <li>FOOTWEAR</li>
                <li>ACCESSORIES</li>
            </ul>
            <h1 className="navbar--brand" onClick={() => navigate("/")}>
                <img src='https://cdn.shopify.com/s/files/1/1056/1394/files/logo_be4041d5-a81e-4d1e-a43d-29b0b0d52cbe.png?v=1678302533' />
            </h1>
            <ul className="navbar--main">
                <li>LOGIN</li>
                <li>FAVORITES</li>
                <li>CART</li>
            </ul>
        </div>
    )
}