

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
        <div className="card">
          <div className="container-card bg-blue-box">
            <p className="card-title">India</p>
            <p>
              <span className="card-description">Capital:</span>
              Delhi
            </p>
            <p>
              <span className="card-description">Population:</span>
              14546465465
            </p>
            <p>
              <span className="card-description">Interesting Facts:</span>
              We Love India
            </p>
          </div>
        </div>
      </div>
      {/* Ending of Cards List Structure. */}
    </section>
  )
}

export default AboutPage;