import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Heading from '../components/Heading'
import { women } from '../data'
import Card from '../components/card/Card'

export default function Womens() {

    const cardElement = women.map((product) => (
        <Card key={product.id} product={product} />
    ))
      return (
        <div className="Womens">
          <Navbar />
          <Heading heading={"WOMENSWEAR"} />
          <section className='cards-list'>
            {cardElement}
          </section>
        </div>
      );
}