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

  return (
    <div>
      <h1>Total Countries {countries.length}</h1>
      {/* console.log(countries) */}
      {countries.map((country) => (
        <SingleCountries key={country.cca2} country={country}></SingleCountries>
      ))}
    </div>
  );
};

export default Countries;
