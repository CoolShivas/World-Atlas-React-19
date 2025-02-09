import footerData from "../../api/footerData.json";
import {MdPlace} from "react-icons/md";

const Footer = () => {

  const footerIcons = {
    MdPlace : <MdPlace/>,
  };

  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerData.map((currData, index) => {
          const {icon, title, details} = currData;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcons.MdPlace}</div>
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
