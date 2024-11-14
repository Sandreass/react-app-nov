import { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";

const CountriesPage = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/all`);
    const _data = await res.json();
    setCountries(_data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  console.log(countries);

  return (
   
    <div>
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
};

export default CountriesPage;
