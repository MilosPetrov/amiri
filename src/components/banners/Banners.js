import React from 'react'
import './banners.css'
import images from '../../images/images'
import { useNavigate } from 'react-router-dom'

export default function Banners() {
    const navigate = useNavigate()

    const handleNavigation = (path) => {
      navigate(path)
      scrollToTop()
    }
  
    const scrollToTop = () => {
      window.scrollTo(0, 0)
    }
  return (
    <div className='main-banners'>
      <div className='main-big-imgs'>
        <img 
        onClick={() => handleNavigation("/Mens")}
        src={images['./card1.webp']}
        />
        <img 
        onClick={() => handleNavigation("/Footwear")}
        src={images['./card2.webp']}
        />
      </div>
      <div className='categorie'>
        <h5 onClick={() => handleNavigation("/Mens")}>MENSWEAR</h5>
        <h5 onClick={() => handleNavigation("/Footwear")}>FOOTWEAR</h5>
      </div>
      <div className='main-small-imgs'>
        <img onClick={() => handleNavigation("/Womens")} src={images['./card3.webp']} />
        <img onClick={() => handleNavigation("/Kids")} src={images['./card4.webp']} />
        <img onClick={() => handleNavigation("/Accessories")} src={images['./card5.webp']} />
      </div>
      <div className='categorie-second'>
        <h5 onClick={() => handleNavigation("/Womens")}>WOMENSWEAR</h5>
        <h5 onClick={() => handleNavigation("/Kids")}>KIDS</h5>
        <h5 onClick={() => handleNavigation("/Accesssories")}>ACCESSORIES</h5>
      </div>
    </div>
  )
}
