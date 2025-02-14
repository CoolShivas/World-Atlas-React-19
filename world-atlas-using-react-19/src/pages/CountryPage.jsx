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
  const [filter, setFilter] = useState("all");

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

  // // HERE, is the main logic for the searching and filtering countries by initials;
  // // Therefore, FIRST MAIN LOGIC STARTS IN LINE 58, i.e, const khojFilterDesh; 
  // // SECOND MAIN LOGIC STARTS IN LINE 41-46, i.e, const searchDeshCountry;  
  // // THIRD MAIN LOGIC STARTS FROM LINE 49-55, i.e, const filterDeshCountryRegion; 
  // // Follows the steps by steps;

  // // Step Two now make a search by name and also by initials that is the letters;
  const searchDeshCountry = (khojDesh) => {
    if (search) {
      return khojDesh.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return khojDesh;
  };

  // // Step Three now make a filter by region;
  const filterDeshCountryRegion = (khojDesh) => {
    if(filter === "all")
    {
      return khojDesh;
    }
    return khojDesh.region === filter;
  };

  // // Step One to filter the countries and make it another function such as (searchDeshCountry(khojDesh)) as mention above;
  const khojFilterDesh = countries.filter((khojDesh) => searchDeshCountry(khojDesh) && filterDeshCountryRegion(khojDesh));


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
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      ></SearchFilter>
      <ul className="grid grid-four-cols">
        {khojFilterDesh.map((curCountry, index) => {
          return <CountryCard conTree={curCountry} key={index}></CountryCard>;
        })}
      </ul>
    </section>
  );
};

export default CountryPage;
