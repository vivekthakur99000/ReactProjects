import React from "react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

function SearchFilter({searchCountry, setSearchCountry, selectedRegion, setSelectedRegion}) {

  /*
  1. get the country name from the input 
  2. set it into the state
  3. pass it to the parent component
  */

  const regionOptions = [
    { value: "Africa", label: "Africa" },
    { value: "America", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

 
  

  const handleChange = (selectedOption) => {
    setSelectedRegion(selectedOption);
  };

  return (
    <div className=" w-full h-10 flex justify-between items-center px-12 mt-4 ">
      <div className="flex justify-center items-center ">
      <FaSearch className="absolute left-15 text-gray-500" />
        <input
          type="text"
          placeholder="Search for a country"
          className="pl-10 pr-4 py-2 w-[460px] text-white bg-[#2B3945] rounded-md"
          value={searchCountry}
          onChange={(e) => setSearchCountry(e.target.value)}
        />
      </div>
      <select
        value={selectedRegion || ""}
        onChange={(e) => handleChange(e.target.value)}
        className="ml-4 py-2 px-4 bg-[#2B3945] text-white rounded-md"
      >      
        <option value="" disabled>
          Filter by Region
        </option>
        {regionOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SearchFilter;
