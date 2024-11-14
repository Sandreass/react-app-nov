import { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";

const CountriesPage = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchCountries = async () => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/all`);
    const _data = await res.json();
    setCountries(_data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="text-center my-5">
        <input
          type="text"
          placeholder="Search for a country..."
          className="p-2 border border-gray-400 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
        {filteredCountries.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
    </div>
  );
};

export default CountriesPage;
