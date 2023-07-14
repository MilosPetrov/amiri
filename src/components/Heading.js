import React from 'react'

export default function Heading({ className, heading }) {


    return (
        <div className='container--collection'>
            <h1 className={className}>{heading}</h1>
        </div>
    )
}
