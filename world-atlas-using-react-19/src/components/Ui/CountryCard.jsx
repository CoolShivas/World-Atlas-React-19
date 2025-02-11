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
            {population.toLocaleString()}
            {/* Used the toLocaleString() for the better digit number*/}
          </p>
          <p>
            <span className="card-description">Region : </span>
            {region}
          </p>
          <p>
            <span className="card-description">Capital : </span>
            {capital[0]}
            {/* Used the [0] for the better arrays zero index*/}
          </p>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;
