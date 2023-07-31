import React from 'react'
import Heading from '../components/Heading'
import { accessories } from '../data'
import Card from '../components/card/Card'

export default function Accessories() {
  const cardElement = accessories.map((product) => (
    <Card key={product.id} product={product} category={"Accessories"} />
  ))

  return (
    <div className="Accessories">
      <Heading heading={"ACCESSORIES"} />
        <section className='cards-list'>
          {cardElement}
        </section>
    </div>
  )
}