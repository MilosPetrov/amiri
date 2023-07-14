import React from 'react'

import './sizeAlert.css'
export default function SizeAlert({ closeAlert }) {
  return (
      <div className='size-alert-overlay'>
        <div className='size-alert'>
          <div>
            <h3>
              WARNING
            </h3>
          </div>
          <div>
            <p>
              YOU MUST CHOOSE A SIZE
            </p>
          </div>
          <div>
            <button onClick={closeAlert}>CLOSE</button>
          </div>
        </div>
      </div>
  )
}
