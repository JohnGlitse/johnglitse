import React, { useState } from 'react'
import "../styles/nav.css";
import { FaBars, FaTimes} from 'react-icons/fa';
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const displayMenu = () => {
    setShowNav(!showNav);
  }

  //  function changeBG(){
  //   document.querySelector("body").classList.toggle('changeColor');
  //  }
  

  return (
    <div  className='navbar'>
        <div className='navbar-content'>
            <div id='logo'>{'JG.'}</div>
            {/* <FaSun onClick={changeBG}/> */}
            <nav>
                <ul className={showNav? "active" : ""}>
                    <li onClick={displayMenu}><a href='#home'>Home</a></li>
                    <li onClick={displayMenu}><a href='#about'>About</a></li>
                    <li onClick={displayMenu}><a href='#services'>Expertise</a></li>
                    <li onClick={displayMenu}><a href='#mywork'>Work</a></li>
                    <li onClick={displayMenu}><a href='#contact'>Connect</a></li>
                    {/* <li><Button name="Resume"><a href='#home' id=""></a></Button></li>  */}
                    <li onClick={displayMenu}><a href='Glitse John.pdf' download="John Glitse" id='resume'>Resume</a></li>
                </ul>
                
            </nav>
             {showNav?  <FaTimes id='menu-close' className='menu' onClick={displayMenu}/> :
              <FaBars id='menu-icon' className='menu' onClick={displayMenu}/> }
           {/* <FaBars id='menu-icon' onClick={displayMenu}/> */}
        </div>
    </div>
  )
}

export default Navbar
