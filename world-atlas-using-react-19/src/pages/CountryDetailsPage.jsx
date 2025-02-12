import { useEffect, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getCountriesIndividualData } from "../api/postApi";
import { Loader } from "../components/Ui/Loader";


const CountryDetailsPage = () => {

  const params = useParams();
  console.log(params);

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async ()=>{
      const res = await getCountriesIndividualData();
      console.log(res);
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
    </center>
  )
}

export default CountryDetailsPage;