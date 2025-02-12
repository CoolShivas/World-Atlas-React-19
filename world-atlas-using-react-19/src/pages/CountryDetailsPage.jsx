import { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getCountriesIndividualData } from "../api/postApi";
import { Loader } from "../components/Ui/Loader";

const CountryDetailsPage = () => {
  const params = useParams();
  console.log(params);

  const [isPending, startTransition] = useTransition();
  const [individualCountry, setIndividualCountry] = useState();
  // // Here, in the useState([]) we have remove the array because previously we are
  // // getting the array of objects and now we are getting the full data as response ;

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountriesIndividualData(params.id);
      // // Passing the argument to get that particular id data from the postApi file with the help of params;
      console.log(res); // Here, we are getting the data from the api;
      console.log(res.data[0].capital);
      if (res.status === 200) {
        setIndividualCountry(res.data[0]);
      }
      console.log(Object.keys(res.data[0].name.nativeName));
      // // Here, by using Object.keys we are now able to iterate through the object of an array;
      // // Especially, we can see in the Swiss Confederation data, name, nativeName, then array of it;
    });
  }, []);

  if (isPending) {
    return (
      <center>
        <Loader></Loader>
      </center>
    );
  }

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        {individualCountry && (
          <div className="country-image grid grid-two-cols">
            <img
              src={individualCountry.flags.svg}
              alt="Flags Not Found"
              className="flag"
            />
            <div className="country-content">
              <p className="card-title">{individualCountry.name.official}</p>
              <div className="infoContainer">
                <p>
                  <span className="card-description">Capital : </span>
                  {individualCountry.capital}
                </p>

                <p>
                  <span className="card-description">Native Names : </span>
                  {Object.keys(individualCountry.name.nativeName)
                    .map(
                      (curNative) =>
                        individualCountry.name.nativeName[curNative].common
                    )
                    .join(", ")}
                  {/*  Here, by using Object.keys we are now able to iterate through the object of an array;
                      Especially, we can see in the Swiss Confederation data, name, nativeName, then array of it; */}
                </p>

                <p>
                  <span className="card-description">Region : </span>
                  {individualCountry.region}
                </p>

                <p>
                  <span className="card-description">Sub Region : </span>
                  {individualCountry.subregion}
                </p>

                <p>
                  <span className="card-description">Population : </span>
                  {individualCountry.population.toLocaleString()}
                </p>

                <p>
                  <span className="card-description">Top Level Domain : </span>
                  {individualCountry.tld[0]}
                </p>

                <p>
                  <span className="card-description">Currencies : </span>
                  {Object.keys(individualCountry.currencies)
                    .map(
                      (curCurren) =>
                        individualCountry.currencies[curCurren].name
                    )
                    .join(", ")}
                </p>

                <p>
                  <span className="card-description">Languages : </span>
                  {Object.keys(individualCountry.languages)
                    .map((curLang) => individualCountry.languages[curLang])
                    .join(", ")}
                </p>
                
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CountryDetailsPage;
