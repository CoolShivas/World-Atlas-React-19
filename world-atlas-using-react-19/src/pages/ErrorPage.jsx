import { NavLink } from "react-router-dom";
import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
  
  const err = useRouteError();
  console.log(err);

  return (
    <center>
        <h1>Oops! Something went wrong.</h1>
        {err && <p>{err.data}</p>}
        <NavLink to="/"> <button>Go Back</button> </NavLink>
    </center>
  )
}

export default ErrorPage;