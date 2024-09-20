import React from 'react'
import "../styles/home.css";
import Button from '../components/Button';
import {FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope} from "react-icons/fa"; 
 
 
 
const Home = () => {
  const divStyle ={
    color: "var(--accent)",
    backgroundColor: "var(--primary)"
  }
  return (
    <div id='home'>
      {/* <Navbar /> */}
        <div className='home'>
            <p className='hi'>Hi, my name is</p>
            <p className='name'>John Glitse</p>
            <p className='front-end'>A Full-Stack Developer.</p>
            <p className='desc'>
              {/* I am a software developer based in Ghana.  */}
              I build resposive web applications and 
                use-friendly mobile applications.
            </p>
            <div className='home-buttons'>
                <a href='#contact'><button className='home-button'>Let's talk</button></a>
                <a href="mailto:glitsejohnray@gmail.com?subject=Hello&body=I'd%20like%20to%20get%20in%20touch%20with%20you.">
                  <button className='home-button' style={divStyle}>Hire Me</button>
                  </a>
                {/* <Button name="Let's Talk" />
                <Button name="Hire Me"></Button> */}
            </div>
            
        </div>
        <div className='icons'>
        <a href='https://github.com/JohnGlitse' target='_blank'><FaGithub className='icon github'/></a>
        <a href='https://www.linkedin.com/in/john-glitse-19310418a/' target='_blank'> <FaLinkedin className='icon linkedin'/></a>
        <a href='https://x.com/GlitseRay' target='_blank'><FaTwitter className='icon twitter'/></a>
        <a href='https://www.instagram.com/johnrayglitse/' target='_blank'><FaInstagram className='icon instagram'/></a>
        <a href='https://www.facebook.com/johnray.glitse' target='_blank'><FaFacebook className='icon facebook'/></a>
        <a href=' https://wa.me/+233247423088' target='_blank'><FaWhatsapp className='icon whatsapp'/></a>
        <a href="mailto:glitsejohnray@gmail.com?subject=Hello&body=I'd%20like%20to%20get%20in%20touch%20with%20you.">
            <FaEnvelope className='icon email' /> 
          </a>
        </div>
    </div>
  )
}

export default Home