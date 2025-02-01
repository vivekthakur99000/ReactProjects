import React from 'react'

function Receipe({imgSrc, title}) {
  return (
    <div className="border p-4 m-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
    <div className="mb-4 w-52 h-24 ">
      <img src={imgSrc} alt={title} className="w-full h-full object-cover rounded-lg" />
    </div>
    <h2 className="text-xl font-semibold text-white">{title}</h2>
  </div>
  )
}

export default Receipe
