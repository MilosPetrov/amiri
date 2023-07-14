import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
import Heading from '../components/Heading'
import { accessories } from '../data'
import Card from '../components/card/Card'

export default function Accessories() {

    const cardElement = accessories.map((product) => (
        <Card key={product.id} product={product} />
    ))
      return (
        <div className="Accessories">
          <Navbar />
          <Heading heading={"ACCESSORIES"} />
          <section className='cards-list'>
            {cardElement}
          </section>
          <Footer />
        </div>
      );
}