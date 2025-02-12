import SearchFilter from "../components/Ui/SearchFilter";
import CountryCard from "../components/Ui/CountryCard";
import { Loader } from "../components/Ui/Loader";
import { getCountriesData } from "../api/postApi";
import { useEffect, useState, useTransition } from "react";

const CountryPage = () => {
  // // useTransition is a React Hook that lets you render a part of the UI in the background.
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    startTransition(async () => {
      const response = await getCountriesData();
      // console.log(response);
      setCountries(response.data);
      console.log(response.data);
    });
  }, []);

  if (isPending) {
    return (
      <center>
        <Loader></Loader>
      </center>
    );
  }

  console.log(search, filter); // Getting the data here;

  return (
    // <div>
    //   <h1>Welcome to the Country Page.</h1>
    //   {countries.map((curCounty, index) => {
    //     return <center>
    //       <div key={index} className="brightColor">{curCounty.name.common}</div>
    //     </center>;
    //   })}
    // </div>
    <section className="country-section">
      <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter}></SearchFilter>
        <ul className="grid grid-four-cols">
          {countries.map((curCountry, index) => {
            return <CountryCard conTree={curCountry} key={index}>
            </CountryCard>
          })}
        </ul>
      </section>
  );
};

export default CountryPage;
