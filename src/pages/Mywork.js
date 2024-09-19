import React from 'react'
import "../styles/mywork.css";
import { FaGithub} from 'react-icons/fa';
import { FaUpRightFromSquare } from 'react-icons/fa6';

const Mywork = () => {
  const buttonStyle = {
    backgroundColor: "var(--accent)",
    color: "var(--primary)"
  }
  return (
    <div id='mywork'>
      <div className='all-projects'>
        <h1>My Work</h1>
        <p>Every project is a distinct piece of work.</p>
        <div className='mywork'>
            {/* FIRST PROJECT */}
        <div className='work-img'><div className='img'>
        <img src={`${process.env.PUBLIC_URL}/images/bookshop.png`} />
          </div></div>

          <div className="work-text">
            <h2 className='project-title'>Buks</h2>
            <div className='description'>
              This is a book selling website where buys can purchase their favorite books ranging from
              drama, poetry, fiction, non-fiction among others. It fully functional and integrates functionalities 
              such as search system, adding and removing from cart, user login and registration system among others.
            </div>
            <div className='languages'>
              <p>PHP</p>
              <p>JavaScript</p>
              <p>HTML</p>
              <p>CSS</p>
            </div>
            <span>
            <a href='https://github.com/JohnGlitse/buks'  className='code' target='_blank'> <p>Code <FaGithub /></p></a> 
            <a href='http://buks.great-site.net' className='demo' target='_blank'><p  style={buttonStyle}>Demo <FaUpRightFromSquare /></p></a>
            </span>
          </div>        
          
        </div>        
      </div>
      <hr/>
    {/* THIS IS THE SECOND PROJECT */}

    <div className='all-projects'>
 
        <div className='mywork'>
             

          <div className="work-text">
            <h2 className='project-title'>Maranatha Guest House</h2>
            <div className='description'>
              A hotel management system which intends to integrate user booking sytems in the future.
              It also has user authentication which will allow users to register and login. 
            </div>
            <div className='languages'>
              <p>JavaScript</p>
              <p>HTML</p>
              <p>CSS</p>
            </div>
            <span>
            <a href='https://github.com/JohnGlitse/maranathagh'  className='code' target='_blank'> <p>Code <FaGithub /></p></a> 
            <a href='https://johnglitse.github.io/maranathagh/' className='demo' target='_blank'><p  style={buttonStyle}>Demo <FaUpRightFromSquare /></p></a>
            </span>
          </div>        
          
          <div className='work-img'><div className='img'>
          <img src={`${process.env.PUBLIC_URL}/images/maranatha.png`} />
            </div></div>
        </div>        
      </div>
       <hr/>
     {/* THIS IS THE THIRD PROJECT */}

     <div className='all-projects'>
        <div className='mywork'>
            {/* FIRST PROJECT */}
        <div className='work-img'><div className='img'>
        <img src={`${process.env.PUBLIC_URL}/images/pfa.png`} />
          </div></div>

          <div className="work-text">
            <h2 className='project-title'>Forex Trading Academy</h2>
            <div className='description'>
              This a website where users can learn about forex trading from beginner to advanced level. 
              Intends to integrate user login and registration in the future and giving registered user 
              the chance to access lecture vidios online. 
            </div>
            <div className='languages'>
              <p>JavaScript</p>
              <p>HTML</p>
              <p>CSS</p>
            </div>
            <span>
            <a href='https://github.com/JohnGlitse/pfa'  className='code' target='_blank'> <p>Code <FaGithub /></p></a> 
            <a href='https://johnglitse.github.io/pfa/' className='demo' target='_blank'><p  style={buttonStyle}>Demo <FaUpRightFromSquare /></p></a>
            </span>
          </div>        
          
        </div>        
      </div>     
      <hr/>
          {/* THIS IS THE FOURTH PROJECT */}


          <div className='all-projects'>
        <div className='mywork'>
     

          <div className="work-text">
            <h2 className='project-title'>Leads Connect Global</h2>
            <div className='description'>
              This is an NGO website that gives expert advice to a variety of clients especially students.
              Students are guided on areas such as studies abroad, school selection among others.
            </div>
            <div className='languages'>
              <p>JavaScript</p>
              <p>HTML</p>
              <p>CSS</p>
            </div>
            <span>
            <a href='https://github.com/JohnGlitse/talkwithexperts'  className='code' target='_blank'> <p>Code <FaGithub /></p></a> 
            <a href='https://johnglitse.github.io/talkwithexperts/' className='demo' target='_blank'><p  style={buttonStyle}>Demo <FaUpRightFromSquare /></p></a>
            </span>
          </div>        

          <div className='work-img'><div className='img'>
          <img src={`${process.env.PUBLIC_URL}/images/talkwithexperts.png`} />
            </div></div>   
        </div>           
      </div>     
      <hr/>     

    {/* THE FIFTH PROJECT */}
    <div className='all-projects'>
 
        <div className='mywork'>
        <div className='work-img'><div className='img'>
        <img src={`${process.env.PUBLIC_URL}/images/jglitse.png`} />
          </div></div>

          <div className="work-text">
            <h2 className='project-title'>My Portfolio</h2>
            <div className='description'>
              This is a book selling website where buys can purchase their favorite books ranging from
              drama, poetry, fiction, non-fiction among others. It fully functional and integrates functionalities 
              such as search system, adding and removing from cart, user login and registration system among others.
            </div>
            <div className='languages'>
              <p>PHP</p>
              <p>REACT JS</p>
            </div>
            <span>
            <a href='#'  className='code' target='_blank'> <p>Code <FaGithub /></p></a> 
            <a href='#' className='demo' target='_blank'><p  style={buttonStyle}>Demo <FaUpRightFromSquare /></p></a>
            </span>
          </div>        
          
        </div>        
      </div>
      <hr/>


    </div>
    
  )
}

export default Mywork