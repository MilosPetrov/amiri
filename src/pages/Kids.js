import React from 'react'
import Heading from '../components/Heading'
import { kids } from '../data'
import Card from '../components/card/Card'

export default function Kids() {
  const cardElement = kids.map((product) => (
    <Card key={product.id} product={product} />
  ))

  return (
    <div className="Kids">
      <Heading heading={"KIDS"} />
        <section className='cards-list'>
          {cardElement}
        </section>
    </div>
  )
}