/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import SingleCountries from "./SingleCountries";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const handleVisitedCountry = (country) => {
    console.log(country);
  };
  return (
    <div>
      <h1>Total Countries {countries.length}</h1>
      {/* console.log(countries) */}
      <div className="country-container">
        {countries.map((country) => (
          <SingleCountries
            key={country.cca2}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
          ></SingleCountries>
        ))}
      </div>
    </div>
  );
};

export default Countries;
