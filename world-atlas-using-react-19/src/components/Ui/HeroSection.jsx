import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        {/* Starting of Hero section first grid */}
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the World with us, One Country at a Time.
          </h1>
          <p className="paragraph">
            Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
            Start Exploring  <FaLongArrowAltRight />
          </button>
        </div>
        {/* Ending of Hero section first grid */}
        {/* Starting of Hero section second grid */}
        <div className="hero-image">
          <img src="../../public/images/world.png" alt="World image not found" className="banner-image"/>
        </div>
        {/* Ending of Hero section second grid */}
      </div>
    </main>
  )
}

export default HeroSection;