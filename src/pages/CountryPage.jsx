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
   
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
};

export default CountriesPage;
