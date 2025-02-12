import axios from "axios";


const apies = axios.create({
    baseURL:"https://restcountries.com/v3.1",
});


//HTTP GET METHOD;

export const getCountriesData = () => {
    return apies.get("/all?fields=name,population,region,capital,flags");
};


// HTTP GET METHOD FOR THE INDIVIDUAL COUNTRY NAME DATA ONLY;

export const getCountriesIndividualData = (name) => {
    // // Getting that params id argument here as name;
    return apies.get(
        `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
    );
};