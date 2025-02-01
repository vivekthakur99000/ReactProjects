import React from 'react'
import { MdFoodBank } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { FaHeart } from "react-icons/fa";



function NavBar({query, setQuery}) {
  return (
    <div className='w-full h-18 bg-blue-300 text-black flex justify-between items-center px-8 ' >
        <div className="logo flex justify-center items-center gap-2 ">
            <MdFoodBank className=' text-3xl' />
            <h2 className=' text-xl font-bold'  >Receipe Finder</h2>
        </div>

        <div className="left-side flex justify-center items-center gap-3  ">
            <div className="search-div flex justify-center items-center gap-3  ">
                
                <input
                 type="text" placeholder="Search for a recipe "
                  className='  p-2 pl-3.5 border-none bg-white rounded-[8px] hover:outline-red-500 hover:border-red-400 ' 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  />
                
            </div>

            <MdHome className='text-3xl cursor-pointer ' />
            <FaHeart className='text-2xl cursor-pointer hover:text-red-500 ' />

        </div>

    </div>
  )
}

export default NavBar
