import {NavLink} from "react-router-dom";
import footerData from "../../api/footerData.json";
import {MdPlace} from "react-icons/md";
import {IoCallSharp} from "react-icons/io5";
import {TbMailPlus} from "react-icons/tb";


const Footer = () => {

  const footerIcons = {
    MdPlace : <MdPlace/>,
    IoCallSharp:<IoCallSharp/>,
    TbMailPlus:<TbMailPlus/>,
  };

  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerData.map((currData, index) => {
          const {icon, title, details} = currData;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcons[icon]}</div>
                <div className="footer-contact-text">
                  <p>{title}</p>
                  <p>{details}</p>
                </div>
            </div>
          );
        })}
      </div>
      {/* Starting of Copy Right Section Area */}
      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright & copy; 2024, All Right Reserved 
                <NavLink to="https://www.google.com/" target="_blank">Google</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Ending of Copy Right Section Area */}
    </footer>
  );
};

export default Footer;
