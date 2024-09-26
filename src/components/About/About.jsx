import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div clasName = "about">
<div classNmae="about-title">
  <hi>About me </hi>
  <img src={theme_pattern} alt= ""/>
</div>
<div className= "about-section">
  <div className = "about-right">
    <div className="about-para">
      <p> I am a very expericed sofware devloper </p>
      <p>my passion for coding has made me greate </p>
    </div>
    <div classNmae="about-skils">
      <div className="about-skill"><p>htlm &css </p><hr style={{width:"50%"}}/></div>
      <div className="about-skill"><p>htlm &css </p><hr style={{width:"50%"}}/></div>
      <div className="about-skill"><p>htlm &css </p><hr style={{width:"50%"}}/></div>
      <div className="about-skill"><p>htlm &css </p><hr style={{width:"50%"}}/></div>
      <div className="about-skill"><p>htlm &css </p><hr style={{width:"50%"}}/></div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About