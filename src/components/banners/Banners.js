import React from 'react'
import './banners.css'
import { useNavigate } from 'react-router-dom'

export default function Banners() {
    const navigate = useNavigate()

    const handleNavigation = (path) => {
      navigate(path);
      scrollToTop();
    };
  
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
  return (
    <div>
        <div className='main-big-imgs'>
        <img 
        onClick={() => handleNavigation("/Mens")}
        src='https://cdn.shopify.com/s/files/1/1056/1394/files/oiTy6Rcs.jpg?v=1677976900&width=1280'
        />
        <img 
        onClick={() => handleNavigation("/Footwear")}
        src='https://cdn.shopify.com/s/files/1/1056/1394/files/JfOyiPs4.jpg?v=1677976933&width=1280'
        />
      </div>
      <div className='categorie'>
        <h5 onClick={() => handleNavigation("/Mens")}>MENSWEAR</h5>
        <h5 onClick={() => handleNavigation("/Footwear")}>FOOTWEAR</h5>
      </div>
      <div className='main-small-imgs'>
        <img onClick={() => handleNavigation("/Womens")} src='https://cdn.shopify.com/s/files/1/1056/1394/files/4SuQELLw.jpg?v=1677976987&width=1280' />
        <img onClick={() => handleNavigation("/Kids")} src='https://cdn.shopify.com/s/files/1/1056/1394/files/SS23_Bucket_Kids_3.jpg?v=1677977027&width=1280' />
        <img onClick={() => handleNavigation("/Accessories")} src='https://cdn.shopify.com/s/files/1/1056/1394/files/SS23_Bucket_Accessories_9.jpg?v=1677977077&width=1280' />
      </div>
      <div className='categorie-second'>
        <h5 onClick={() => handleNavigation("/Womens")}>WOMENSWEAR</h5>
        <h5 onClick={() => handleNavigation("/Kids")}>KIDS</h5>
        <h5 onClick={() => handleNavigation("/Accesssories")}>ACCESSORIES</h5>
      </div>
    </div>
  )
}
