import React from 'react'
import Dessert from './Dessert'
import Cart from './Cart'
import data from "../data.json"
import { useState } from 'react'

function Home() {

  return (
    <div className='w-full mx-20 mt-20'>
      <div className="max-w-[70%] mx-auto">
        <h1 className="text-3xl font-bold mb-4">Desserts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <Dessert key={index} category={item.category} name={item.name} price={item.price} image={item.image.thumbnail}  />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
