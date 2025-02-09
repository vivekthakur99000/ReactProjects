import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import data from '../data.json';
import { FaArrowLeft } from 'react-icons/fa';

function Details() {
  const { countryName } = useParams();
  const navigate = useNavigate()
  const country = data.find((item) => item.name === countryName);

  if (!country) {
    return <div>Country not found</div>;
  }

  
  return (
    <div className='w-full h-screen'>
      
      <div className="px-12 mt-4 mb-20">
        <button 
        onClick={() => navigate("/")}
        className="flex justify-center items-center gap-2 bg-[#2B3945] px-8 py-2 shadow-2xl cursor-pointer ">
          <FaArrowLeft />
          Back
        </button>
        <div className="container mt-20 flex justify-center items-center gap-80">
          <div className="row w-[540px] h-80">
            <img src={country.flags.png} alt={`Flag of ${country.name}`} className="w-full h-full object-cover" />
          </div>
          <div className="row flex flex-col gap-4">
            <h2 className="font-bold text-3xl">{country.name}</h2>
            <div className="left flex justify-between items-start gap-48">
              <div>
                <p>Native name: {country.nativeName}</p>
                <p>Population: {country.population.toLocaleString()}</p>
                <p>Region: {country.region}</p>
                <p>Sub Region: {country.subregion}</p>
                <p>Capital: {country.capital}</p>
              </div>
              <div>
                <p>Top Level Domain: {country.topLevelDomain.join(', ')}</p>
                <p>Currencies: {country.currencies.map((currency) => currency.name).join(', ')}</p>
                <p>Languages: {country.languages.map((language) => language.name).join(', ')}</p>
              </div>
            </div>
            <div>
              <p>Border Countries: {country.borders ? country.borders.join(', ') : 'None'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
