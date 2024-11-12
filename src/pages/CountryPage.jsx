import { useState, useEffect } from "react";

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
        <div key={country.name.common}>
          <h2>{country.name.common}</h2>
        </div>
      ))}
    </div>
  );
};

export default CountriesPage;
