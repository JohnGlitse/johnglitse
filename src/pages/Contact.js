import React from 'react'
import "../styles/contact.css";
import { FaEnvelope, FaPhone} from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Contact = () => {

  const handleChange = (e) =>{}

  const handleSubmit = (event) =>{
    event.preventDefault();
  }


  return (
    <div id='contact'>
       <h1>Connect With Me</h1>
       <p>Let's connect and build something great together</p>
      <div className='contact'>
        <div className='contact-details'>
          <div style={{display: "flex", gap: "10px", alignItems: "center"}} >
           <FaLocationDot className='icon'/>       
           <div>
           <div className='location'>LG25, University of Ghana</div> 
           <div className='location'>Legon, Accra</div>               
            </div>  
          </div>

          <div style={{display:"flex", flexDirection: "column", gap: "15px"}}>
            <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
              <FaPhone className='icon'/>
              <div className='details'>+233509036914</div>
              </div>

              <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
              <FaEnvelope className='icon'/>
              <div className='details'>johnrayglitse@gmail.com</div>
              </div>            
          </div>

        </div>
        <form onSubmit={(event) => handleSubmit ()}>
          <input type='text' name='name' placeholder='Enter your full name' onChange={(e)=>handleChange()}/>
          <input type='email' name='email' placeholder='Enter your email' onChange={(e)=>handleChange()}/>
          <textarea type="text" name='message' placeholder='Enter your message' onChange={(e)=>handleChange()}></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact