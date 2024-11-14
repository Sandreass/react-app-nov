const CountryCard = ({ country }) => (
    <div>
    <ul className="p-5 border rounded shadow-lg w-auto min-h-36 bg-yellow-300">
      <li>
        <strong>Country: {country.name.common} </strong>
      </li>
      <li>Capital: {country.capital}</li>
    </ul>
  </div>
  );
  
  export default CountryCard;