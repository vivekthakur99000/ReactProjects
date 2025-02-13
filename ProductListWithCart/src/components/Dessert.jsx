import React, { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import food from "/food.jpg";

function Dessert({ category, name, price, image }) {
  const [count, setCount] = useState(0)
  return (
    <div className="relative flex flex-col items-center">
      <div className="w-[200px] h-[220px] rounded-2xl">
        <img className="h-full object-cover rounded" src={image} alt={name} />
      </div>

      <div className="flex items-center justify-center gap-1 font-medium px-3 py-2 border-rose-200 border cursor-pointer w-40 rounded-3xl bg-white outline-none absolute top-[200px]">
        {count < 1 ? (
          <div className="flex justify-center items-center" onClick={() => setCount(count + 1)}>
            <MdAddShoppingCart />
            <p>Add to Cart</p>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-10">
            <div onClick={() => setCount(count - 1)} className="p-1 border border-black rounded-full">
              -
            </div>
            <p>{count}</p>
            <div onClick={() => setCount(count + 1)} className="p-1 border border-black rounded-full">
              +
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col mt-8 items-center">
        <p className="text-rose-900 text-[12px]">{category}</p>
        <h2 className="text-rose-900 text-[16px] font-semibold">{name}</h2>
        <p className="text-[16px] text-red-500 font-bold">${price}</p>
      </div>
    </div>
  );
}

export default Dessert;
