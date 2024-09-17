import React from 'react';
import {FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope} from "react-icons/fa"; 


const Foot = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div id='footer'>
      <div className='footer'>
        <div className="row1">
         <div className='line'></div>

         <a href='https://github.com/JohnGlitse' target='_blank'><FaGithub className='iconz github'/></a>
        <a href='https://www.linkedin.com/in/john-glitse-19310418a/' target='_blank'> <FaLinkedin className='iconz linkedin'/></a>
        <a href='https://x.com/GlitseRay' target='_blank'><FaTwitter className='iconz twitter'/></a>
        <a href='https://www.instagram.com/johnrayglitse/' target='_blank'><FaInstagram className='iconz instagram'/></a>
        <a href='https://www.facebook.com/johnray.glitse' target='_blank'><FaFacebook className='iconz facebook'/></a>
        <a href=' https://wa.me/+233247423088' target='_blank'><FaWhatsapp className='iconz whatsapp'/></a>
        <a href="mailto:glitsejohnray@gmail.com?subject=Hello&body=I'd%20like%20to%20get%20in%20touch%20with%20you.">
            <FaEnvelope className='iconz email' /> 
          </a>

        <div className='line'></div>
        </div>
            
        <div className='footer-links'>
        <div id='logo'>{"<JG./>"}</div>
          <div className='footer-nav'>
          <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#services'>Expertise</a></li>
                    <li><a href='#mywork'>Work</a></li>
                    <li><a href='#contact'>Connect</a></li>
 
                </ul>            
          </div>
          
        </div>

      </div>

      <hr/>
      <div>Copy right  {currentYear}. All rights reserved!</div>

    </div>
  )
}

export default Foot