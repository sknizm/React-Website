import React from 'react'
import logo from '../Assets/logo.jpeg'
import { CiShare2 } from "react-icons/ci";
import { SiGmail } from 'react-icons/si';
import { FaWhatsapp } from 'react-icons/fa';
import '../Footer/Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <img src={logo} alt="" />
      <h2>Adilabad App</h2>
      <div className="address-box">
        <p>Address : XXXXXXXXXXXXXXXXXX</p>
      </div>
      <div className="contact-box">
        <h4>Contact Us</h4>
        <div className="contact-icons">
<FaWhatsapp/>
<FaWhatsapp/>
<FaWhatsapp/>
        </div>
      </div>

      <div className="follow-box">
        <h4>Follow Us</h4>
        <div className="follow-icons">
          
<FaWhatsapp/>
<FaWhatsapp/>
<FaWhatsapp/>
<FaWhatsapp/>
<FaWhatsapp/>
        </div>
      </div>
    </div>
  )
}

export default Footer