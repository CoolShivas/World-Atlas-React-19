const CountryCard = ({ conTree }) => {
  const { flags, name, population, region, capital } = conTree;

  return (
    <li className="country-card card">
      <div className="container-card bg-white-box">
        <img src={flags.svg} alt="flags.alt" />
        <div className="countryInfo">
          <p className="card-title">{name.common}</p>
          <p>
            <span className="card-description">Population : </span>
            {population}
          </p>
          <p>
            <span className="card-description">Region : </span>
            {region}
          </p>
          <p>
            <span className="card-description">Capital : </span>
            {capital}
          </p>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;
