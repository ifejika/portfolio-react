import React from 'react'
import './About.css'


const About = () => {
  return (
    <div clasName = 'about'>
<div className="about-title">
  <h1>About me </h1>
 
</div>

  <div className = "about-right">
    <div className="about-para">
      <p> I am a very expericed sofware devloper </p>
      <p>my passion for coding has made me greate </p>
    </div>
    <div className="about-skils">
      <div className="about-skill"><p>htlm &css </p><hr style={{width:"50%"}}/></div>
      <div className="about-skill"><p>htlm &css </p><hr style={{width:"50%"}}/></div>
      <div className="about-skill"><p>htlm &css </p><hr style={{width:"50%"}}/></div>
      <div className="about-skill"><p>htlm &css </p><hr style={{width:"50%"}}/></div>
      <div className="about-skill"><p>htlm &css </p><hr style={{width:"50%"}}/></div>
    </div>
  </div>
</div>
    
  )
}

export default About