import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
  
  const err = useRouteError();
  console.log(err);

  return (
    <center>
        <h1>Oops! Something went wrong.</h1>
        {err && <p>{err.data}</p>}
    </center>
  )
}

export default ErrorPage;