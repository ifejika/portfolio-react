/**DANIEL IFEJIKA 301197154 2024-09-27 */

import React from 'react'
import './About.css'


const About = () => {
  return (
    <div id='about' clasName = 'about'>
<div className="about-title">
  <h1>About me </h1>
 
</div>

  <div className = "about-right">
    <div className="about-para">
      <p>
  As an AI software engineering student with a focus on full-stack development, I am passionate about building innovative software solutions.<br/>
  I have a strong foundation in AI and machine learning, alongside experience in developing dynamic, scalable web and mobile applications.<br/>
  My skills span across front-end technologies such as HTML, CSS, JavaScript, and React, and back-end expertise in Node.js, Python, and databases like MongoDB and MySQL.<br/>
  I am proficient in cloud services such as AWS and Azure, which allow me to create and deploy robust applications efficiently.<br/>
  I also have experience in version control using Git and have a keen understanding of agile development methodologies.<br/>
  With a blend of AI knowledge and full-stack proficiency, I am eager to contribute to projects that bridge the gap between machine learning and practical software solutions.
</p>


    </div>
    {/*<div className="about-skils">
      <div className="about-skill"><p>htlm &css </p><hr style={{width:"50%"}}/></div>
      <div className="about-skill"><p>htlm &css </p><hr style={{width:"50%"}}/></div>
      <div className="about-skill"><p>htlm &css </p><hr style={{width:"50%"}}/></div>
      <div className="about-skill"><p>htlm &css </p><hr style={{width:"50%"}}/></div>
      <div className="about-skill"><p>htlm &css </p><hr style={{width:"50%"}}/></div>
    </div>*/}
  </div>
</div>
    
  )
}

export default About