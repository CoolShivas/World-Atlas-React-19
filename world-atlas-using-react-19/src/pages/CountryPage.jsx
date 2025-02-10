import { getCountriesData } from "../api/postApi";
import { useEffect, useTransition } from "react";

const CountryPage = () => {
  // // useTransition is a React Hook that lets you render a part of the UI in the background.
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const response = await getCountriesData();
      console.log(response);
    });
  }, []);

  if (isPending) {
    return (
      <center>
        <h1> Loading... </h1>
      </center>
    );
  }

  return (
    <div>
      <h1>Welcome to the Country Page.</h1>
    </div>
  );
};

export default CountryPage;
