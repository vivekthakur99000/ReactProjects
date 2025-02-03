import React from 'react'

function ReceipeContainer({ imgSrc, title }) {
  return (
    <div className='w-[300px] h-[350px] p-4 bg-white rounded-xl flex flex-col items-center cursor-pointer '>
      <div className="w-full h-[200px] overflow-hidden">
        <img src={imgSrc} alt={title} className='w-full h-full rounded object-cover' />
      </div>
      <h3 className='p-2.5 text-black text-xl text-center'>{title}</h3>
    </div>
  )
}

export default ReceipeContainer