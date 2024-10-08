import React, { useState } from 'react'
import "../styles/contact.css";
import { FaEnvelope, FaPhone} from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import axios from 'axios';

const Contact = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    message: ""
  });

 const {fullname, email, message} = inputs;

  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value

    setInputs({...inputs, [name]: value});
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(inputs);
    Swal.fire("Message sent successfully!");

    axios.post("http://localhost/jglitse/contact.php", inputs)
    .then((response) =>{
      console.log(response.data);
    })
    setInputs({
      fullname: "", email: "", message: "" });
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
        <form onSubmit={(event) => handleSubmit (event)}>
          <input type='text' name='fullname' value={fullname} placeholder='Enter your full name' onChange={(e)=>handleChange(e)}/>
          <input type='email' name='email' value={email} placeholder='Enter your email' onChange={(e)=>handleChange(e)}/>
          <textarea type="text" name='message' value={message} placeholder='Enter your message' onChange={(e)=>handleChange(e)}></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact