import { useParams } from "react-router-dom";


const CountryDetailsPage = () => {

  const params = useParams();
  console.log(params);
  
  return (
    <center>
        <h1>Welcom to the Country Details Page.</h1>
        <h2>How can I help you dear ?</h2>
    </center>
  )
}

export default CountryDetailsPage;