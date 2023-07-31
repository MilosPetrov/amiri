import React from 'react';
import Card from '../components/card/Card';
import { men } from '../data';
import Heading from '../components/Heading';

export default function Menswear() {
  const cardElement = men.map((product) => (
    <Card key={product.id} product={product} />
  ))

  return (
    <div className="Menswear">
      <Heading heading={'MENSWEAR'} />
        <section className="cards-list">
          {cardElement}
        </section>
    </div>
  )
}