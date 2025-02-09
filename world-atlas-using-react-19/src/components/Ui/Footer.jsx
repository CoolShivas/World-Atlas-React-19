import footerData from "../../api/footerData.json";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerData.map((currData, index) => {
          const {icon, title, details} = currData;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{icon}</div>
                <div className="footer-contact-text">
                  <p>{title}</p>
                  <p>{details}</p>
                </div>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
