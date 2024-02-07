/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Countries.css";
const SingleCountries = ({ country, handleVisitedCountry }) => {
  const [visited, isVisited] = useState(false);
  const handleClick = () => {
    isVisited(true);
  };
  const passWithParams = () => {
    handleVisitedCountry(country);
    console.log(country.cca2);
  }; // console.log(handleVisitedCountry);
  const { name, flags, cca3 } = country;
  return (
    <div className="country">
      <h1>Name:{name.common}</h1>
      <img src={flags.png} alt="" />
      <p>Code: {cca3}</p>
      <button onClick={passWithParams}>Mark Visited</button>
      <button onClick={handleClick}>Visited</button>
      <p>{visited ? "Not Visied" : "I have visited"}</p>
    </div>
  );
};

export default SingleCountries;
