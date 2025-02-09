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
            {/* Starting of First Grid for the Copy Right Area */}
            <div className="copyright-text">
              <p>
                Copyright & copy; 2024, All Right Reserved 
                <NavLink to="https://www.google.com/" target="_blank">Google</NavLink>
              </p>
            </div>
            {/* Ending of First Grid for the Copy Right Area */}
            {/* Starting of Second Grid for the Footer Menu */}
            <div className="footer-menu">
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="https://www.instagram.com/" target="_blank">Instagram</NavLink></li>
                <li><NavLink to="https://www.facebook.com/" target="_blank">Facebook</NavLink></li>
                <li><NavLink to="https://www.whatsapp.com/" target="_blank">Whatsapp</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </div>
            {/* Ending of Second Grid for the Footer Menu */}
          </div>
        </div>
      </div>
      {/* Ending of Copy Right Section Area */}
    </footer>
  );
};

export default Footer;
