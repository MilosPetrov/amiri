import React from 'react'
import Footer from '../components/Footer'
import Belt from '../components/belt/Belt'
import Banners from '../components/banners/Banners'
import { women, accessories, men, footwear } from '../data'



export default function Homepage() {

  const forHimArray = [...men, ...footwear]
  const forHerArray = [...women, ...accessories]

  return (
    <div>
      <div className='main-video-container'>
            <video className='main-video' data-mobile-src="https://cdn.shopify.com/videos/c/o/v/5ebf89de77d8466e8c29ce996b085a6f.mov" src="https://cdn.shopify.com/videos/c/o/v/c82363cfaf204a3c81230b9b041d72fb.mov" autoplay="" loop={true} muted={true} playsinline="" onclick="this.paused ? this.play() : this.pause()">
            </video>
      </div>
      <Banners />
      <Belt array={forHimArray} heading={"FOR HIM"}/>
      <div className='womens-new'>
        <img className='womens-new-img' src='https://cdn.shopify.com/s/files/1/1056/1394/files/HP_Slideshow_Banner_SS23-Womens.jpg?v=1677977157&width=992' />
        <p>INSPIRED BY CALIFORNIAN CLEAR SKY DREAMING, THE ACCOMPANYING CAMPAIGN DISTILLS THIS TIMELESS NARRATIVE FOR A NEW GENERATION.</p>
      </div>
      <div className='womens-new'>
        <img src='https://cdn.shopify.com/s/files/1/1056/1394/files/cRnkiBnQ.jpg?v=1677977285&width=992' />
      </div>
      <Belt array={forHerArray} heading={"FOR HER"}/>
      <Footer />
    </div>
  )
}

