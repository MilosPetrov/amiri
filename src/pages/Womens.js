import React from 'react'
import Heading from '../components/Heading'
import { women } from '../data'
import Card from '../components/card/Card'

export default function Womens() {
  const cardElement = women.map((product) => (
    <Card key={product.id} product={product} />
  ))

  return (
    <div className="Womens">
      <Heading heading={"WOMENSWEAR"} />
        <section className='cards-list'>
          {cardElement}
        </section>
    </div>
  )
}