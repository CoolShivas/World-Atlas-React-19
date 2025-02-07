

// const AboutPage = () => {
//   return (
//     <section className="section-about container">
//       {/* Starting of About Page Heading */}
//       <h2 className="container-title">
//         Here are the Interesting Facts
//         <br />
//         we're proud of 
//       </h2>
//       {/* Ending of About Page Heading */}
//       {/* Starting of Cards List Structure. */}
//       <div className="gradient-cards">
//          {/* Starting of First Card Details */}
//         <div className="card">
//           <div className="container-card bg-blue-box">
//             <p className="card-title">India</p>
//             <p>
//               <span className="card-description">Capital:</span>
//               Delhi
//             </p>
//             <p>
//               <span className="card-description">Population:</span>
//               14546465465
//             </p>
//             <p>
//               <span className="card-description">Interesting Facts:</span>
//               We Love India
//             </p>
//           </div>
//         </div>
//         {/* Ending of First Card Details */}
//         {/* Starting of Second Card Details */}
//         <div className="card">
//           <div className="container-card bg-blue-box">
//             <p className="card-title">China</p>
//             <p>
//               <span className="card-description">Capital:</span>
//               Bejing
//             </p>
//             <p>
//               <span className="card-description">Population:</span>
//               13546465465
//             </p>
//             <p>
//               <span className="card-description">Interesting Facts:</span>
//               They also Love India
//             </p>
//           </div>
//         </div>
//         {/* Ending of Second Card Details */}
//       </div>
//       {/* Ending of Cards List Structure. */}
//     </section>
//   )
// }

// export default AboutPage;



//*********************************************************************************************************************************************************************** */



import countryFactsData from "../api/countryData.json";

const AboutPage = () => {
  return (
    <section className="section-about container">
      {/* Starting of About Page Heading */}
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we're proud of 
      </h2>
      {/* Ending of About Page Heading */}
      {/* Starting of Cards List Structure. */}
      <div className="gradient-cards">
        {countryFactsData.map((countryArr) => {
          const {id, countryName, capital, population, interestingFact} = countryArr;
          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                <p className="card-title">{countryName}</p>
                <p>
                  <span className="card-description">Capital : </span>
                  {capital}
                </p>
                <p>
                  <span className="card-description">Population : </span>
                  {population}
                </p>
                <p>
                  <span className="card-description">Interesting Facts : </span>
                  {interestingFact}
                </p>
              </div>
            </div>
            )
        })}
      </div>
      {/* Ending of Cards List Structure. */}
    </section>
  )
}

export default AboutPage;