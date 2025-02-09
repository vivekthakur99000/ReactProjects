import React from "react";
import myImage from "/images.jpg";
import { useNavigate } from "react-router-dom";

function Country({ countryName, population, region, capital, image }) {


  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${countryName}`);
  }
  return (
    <div onClick={handleClick} className=" flex flex-col bg-[#2B3945] shadow-2xl cursor-pointer rounded-2xl ">
      <div className="w-full h-[200px] ">
        <img className="w-full h-full object-cover " src={image} alt="" />
      </div>

      <div className="py-4 px-5 flex flex-col gap-4 ">
        <h1 className="text-[16px] font-bold">{countryName}</h1>

        <div className="">
          <p>Population: {population} </p>
          <p>Region: {region}</p>
          <p>Capital: {capital} </p>
        </div>
      </div>
    </div>
  );
}

export default Country;
