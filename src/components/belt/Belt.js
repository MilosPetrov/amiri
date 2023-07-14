import React from 'react';
import './belt.css';
import BeltItem from './belt-item';

export default function Belt({ array, heading }) {
  const beltElement = array.map((product) => (
    <BeltItem product={product} />
  ));

  return (
    <div className='conveyor-belt'>
      <p>NEW ARRIVALS</p>
      <h2>{heading}</h2>
      <div className='belt-container'>
        {beltElement}
      </div>
    </div>
  );
}
