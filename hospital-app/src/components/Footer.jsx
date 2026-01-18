import React from 'react';
import './Footer.css';
// Lazımi ikonları import edirik
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebookSquare, FaInstagram, FaArrowRight } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import FooterLogo from '../assets/img/img_footer.PNG';
import VectorIcon from '../assets/img/Vector.png';   // İndi əlavə etdiyimiz

const Footer = () => {
  return (
    <footer>
      <div className="footer_top">
        <div className="footer_left">
          {/* Şəklin public/img içində olduğunu fərz edirəm */}
          <img src={FooterLogo} alt="Footer Logo" />
        </div>

        <div className="footer_middle">
          <h4>Əlaqə</h4>
          <ul>
            <li><FaPhoneAlt /> *0111</li>
            <li>
              <MdEmail /> 
              <a href="mailto:info@lorhospital.az" className="email-link">
                info@lorhospital.az
              </a>
            </li>
            <li><FaMapMarkerAlt /> Bakı ş., Nərimanov r., Əhməd Rəcəbli 19K, AZ1075</li>
          </ul>
        </div>

        <div className="footer_right">
          <h4>ABUNƏ OLUN</h4>
          <ul>
            <li><FaFacebookSquare /> Lor Hospital</li>
            <li><FaInstagram /> Lor Hospital</li>
          </ul>
        </div>

        <div className="question_div">
          <input type="text" placeholder="Sualınız var?" className="questions" />
          <FaArrowRight className="arrow-icon" />
        </div>
      </div>

      <hr className="footer_hr" />

      {/* Yuxarı qalx düyməsi */}
      <a href="#top" className="back-to-top">
        <img src={VectorIcon} alt="Back to top" />
      </a>
    </footer>
  );
};

export default Footer;