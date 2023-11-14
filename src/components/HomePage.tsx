import React from 'react'
import Banner from './Banner'

export default function HomePage() {
  return (
    <>
      <Banner></Banner>
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className='products-container'>
        {['p1','p2'].map((i)=> i)}
      </div>
    </>
  )
}
