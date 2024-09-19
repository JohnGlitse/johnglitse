import React, { useState } from 'react'
import "../styles/nav.css";
import { FaBars } from 'react-icons/fa';
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const displayMenu = () => {
    setShowNav(!showNav);
  }

 


  return (
    <div  className='navbar'>
        <div className='navbar-content'>
            <div id='logo'>{'<JG./>'}</div>
            <nav>
                <ul className={showNav? "active" : ""}>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#services'>Expertise</a></li>
                    <li><a href='#mywork'>Work</a></li>
                    <li><a href='#contact'>Connect</a></li>
                    {/* <li><Button name="Resume"><a href='#home' id=""></a></Button></li>  */}
                    <li><a href='#home' id='resume'>Resume</a></li>
                </ul>
                
            </nav>
            <FaBars id='menu-icon' onClick={displayMenu}/>
        </div>
    </div>
  )
}

export default Navbar
