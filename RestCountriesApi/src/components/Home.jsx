import React, { useState } from "react";
import NavBar from "./NavBar";
import SearchFilter from "./SearchFilter";
import Country from "./Country";
import data from "../data.json";
import Details from "./Details";

function Home({ theme }) {
  const [searchCountry, setSearchCountry] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  // Filter the data based on the search input and selected region
  const filteredData = data.filter((item) => {
    const matchesCountry = item.name.toLowerCase().includes(searchCountry.toLowerCase());
    const matchesRegion = selectedRegion ? item.region === selectedRegion : true;
    return matchesCountry && matchesRegion;
  });

  return (
    <div className={`w-full min-h-screen ${theme === 'dark' ? 'bg-[#202C37] text-[#FFFFFF]' : 'bg-[#FFFFFF] text-[#000000]'}`}>
      
      <SearchFilter
        searchCountry={searchCountry}
        setSearchCountry={setSearchCountry}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      <div className="px-12 mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredData.map((item, index) => (
          <Country
            key={index}
            countryName={item.name}
            population={item.population.toLocaleString()}
            region={item.region}
            capital={item.capital}
            image={item.flags.png}
          />
        ))}
      </div>
      <Details />
    </div>
  );
}

export default Home;
