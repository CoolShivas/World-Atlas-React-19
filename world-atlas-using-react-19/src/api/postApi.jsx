import axios from "axios";


const apies = axios.create({
    baseURL:"https://restcountries.com/v3.1",
});


//HTTP GET METHOD;

export const getCountriesData = () => {
    return apies.get("/all?fields=name,population,region,capital,flags");
};