import { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getCountriesIndividualData } from "../api/postApi";
import { Loader } from "../components/Ui/Loader";


const CountryDetailsPage = () => {

  const params = useParams();
  console.log(params);

  const [isPending, startTransition] = useTransition();
  const [individualCountry, setIndividualCountry] = useState([]);

  useEffect(() => {
    startTransition(async ()=>{
      const res = await getCountriesIndividualData(params.id);
      // // Passing the argument to get that particular id data from the postApi file with the help of params;
      console.log(res); // Here, we are getting the data from the api;
      console.log(res.data[0].capital);
      setIndividualCountry(res.data[0]);
    });
  },[]);


  if(isPending){
    return (<center>
      <Loader></Loader>
    </center>)
  };

  return (
    <center>
        <h1>Welcom to the Country Details Page.</h1>
        <h2>How can I help you dear ?</h2>
        <h1>{individualCountry.capital}</h1>
    </center>
  )
}

export default CountryDetailsPage;