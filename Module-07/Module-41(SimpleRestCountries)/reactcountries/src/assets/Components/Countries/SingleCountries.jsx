/* eslint-disable react/prop-types */
import "./Countries.css";
const SingleCountries = ({ country }) => {
  // console.log(country);
  const { name, flags } = country;
  return (
    <div className="country">
      <h1>Name:{name.common}</h1>
      <img src={flags} alt="" />
    </div>
  );
};

export default SingleCountries;
