import React from 'react'
import "../styles/services.css";
import {FaDatabase, FaReact } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';

const Services = () => {
  return (
    <div id='services'>
      <h1>My Expertise</h1>
      <p>Expertise that bring your vision to life</p>
      <div className='services'>
        <div className='service'>
          <FaReact className='icon'/>
          <div className='service-head'>Front-End 
            <span> Development</span>

          </div>
          <p>I build mobile responsive and interactive website using a variety of frameworks and tools.</p>
        </div>

        <div className='service'>
          <FaDatabase className='icon'/>
          <div className='service-head'>Back-End
             <span> Development</span>

          </div>
          <p>I create strongly secured back-end softwares with the best efficiency in time and space complexity.</p>
        </div>

        <div className='service'>
           <SiFlutter className='icon'/>
          <div className='service-head'>Mobile 
            <span> Development</span>

          </div>
          <p>I develop use-friendly and efficient mobile applications </p>
        </div>

      </div>
    </div>
  )
}

export default Services