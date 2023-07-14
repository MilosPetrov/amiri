import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
import Heading from '../components/Heading'
import { kids } from '../data'
import Card from '../components/card/Card'

export default function Kids() {

    const cardElement = kids.map((product) => (
        <Card key={product.id} product={product} />
    ))
      return (
        <div className="Kids">
          <Navbar />
          <Heading heading={"KIDS"} />
          <section className='cards-list'>
            {cardElement}
          </section>
          <Footer />
        </div>
      );
}