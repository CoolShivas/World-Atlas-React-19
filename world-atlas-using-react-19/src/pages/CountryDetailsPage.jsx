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
    startTransition(async ()=>{
      const res = await getCountriesIndividualData(params.id);
      // // Passing the argument to get that particular id data from the postApi file with the help of params;
      console.log(res); // Here, we are getting the data from the api;
      console.log(res.data[0].capital);
      if(res.status === 200)
      {
        setIndividualCountry(res.data[0]);
      }
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
        {individualCountry && (<h1>{individualCountry.name.official}</h1>)}
    </center>
  )
}

export default CountryDetailsPage;