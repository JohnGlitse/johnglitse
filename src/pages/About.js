import React, { useState, useRef } from 'react'
import "../styles/about.css";

const About = () => {
  // let [tabToggle, setTabToggle] = useState(false);
  const [currentTab, setCurrentTab] = useState(1);
  const read = useRef();
  const readmore = useRef();

  const tabClicked = (id) =>{
    setCurrentTab(id);
  }

  const readMore = () =>{
    if(read.current.style.display === "none"){
      read.current.style.display = "block";
      readmore.current.innerHTML = "Read Less";
    }else{
      read.current.style.display = "none";
      readmore.current.innerHTML = "Read More";
    }
  }
    return (
    <div id='about'>
      <div className='about-text'>
        <h1>My Story</h1>
        <p className='sub-head'>My story in tech and beyond</p>
        <div className='history'>
          <p className='p1'>
          I am full-stack web and mobile app developer with keen passion for building beautiful and user-friendly software. 
          I am a very quick learner and team player. In my free time, I enjoy listening to music, 
          I have always had love for good music and find that it helps to relax and inspire me in the work.            
          </p>
          {/* <br/> <br/> */}
          <p className='p2' ref={read}>
          I studied BA Education (Psychology and Information Studies), and wanted to work as a Clinical Psychologist, 
          but decided to gain some computing skills to complement what I already learnt in Information Studies.   
            <br/> <br/>
          Though challenging at first, I embraced the learning curve and discovered that coding was something 
          I was truly passionate about. Now, I’m excited to build intuitive, 
          impactful projects and continue growing as a developer.                          
          </p> 
         

          {/* <p className='p3' ref={read}>
              
          </p> */}
               <button className='read-more' onClick={readMore} ref={readmore}>Read More</button>     
        </div>

        <div className='about-tabs'>
          <ul>
            <li className={currentTab == 1? "tab active" : "tab"} onClick={()=>tabClicked(1)}>Tech Stack</li>
            <li className={currentTab == 2? "tab active" : "tab"} onClick={()=>tabClicked(2)}>Experience</li>
            <li className={currentTab == 3? "tab active" : "tab"} onClick={()=>tabClicked(3)}>Certifications</li>
          </ul>
          <div className='tab-contents'>
            <div className={currentTab === 1? "content active" : "content"}>
              <p className='stack'>My Technological Skills</p>
              <div className='skills'>
                <div className='skill-img'><img src={`${process.env.PUBLIC_URL}/images/php.png`} /></div>

                <div className='skill-img'><img src={`${process.env.PUBLIC_URL}/images/javascript.png`} /></div>
                <div className='skill-img'><img src={`${process.env.PUBLIC_URL}/images/flutter.png`} /></div>
                <div className='skill-img'><img src={`${process.env.PUBLIC_URL}/images/react.png`} /></div>
                <div className='skill-img'> <img src={`${process.env.PUBLIC_URL}/images/html.png`} /></div>
                <div className='skill-img'> <img src={`${process.env.PUBLIC_URL}/images/css.png`} /></div>
              </div>
            </div>
            
            <div  className={currentTab === 2? "content active": "content"}>
            <div className='exp-head'>Pentatech IT Solutions(Intern)</div>  
            <div className='exp-sub-head'>PHP Developer(May 2024 to June 2023).</div>  
            ▪ Created a fully functional PHP and MySQL CRUD application. <br/>
            ▪ Developed an SMTP-based email sender in PHP for automated and bulk emailing with security measures. <br/>
            ▪ Implemented a PDF generation feature using DOMPDF PHP library. <br/>
            ▪ Built a secure user authentication system with features like registration, login, and password management. 
            </div>
            
            <div className={currentTab === 3? "content active" : "content"}>
             <h3> University of Ghana Computer Science Department </h3>
            📝 Mobile Application Development (Flutter) <br/>
            📝 Web Programming
            </div>
          </div>
        </div>
      </div>
      <div className='about-img'>
        {/* <img src='images/img_avatar.png'/> */}
        {/* <img src='images/image4.jpg'/> */}
        <img src={`${process.env.PUBLIC_URL}/images/image4.jpg`} />

      </div>
    </div>
  )
}

export default About