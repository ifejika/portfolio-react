import React from 'react'  //rafce is a short cut 
import './Hero.css'
import profile from '../../assets/profile img.png';

const Hero = () => {
  return (
    <div className= 'hero'>
<img src={profile} alt=""/>
<h1> I'm Daniel Ifejika , I am a software developer based in Toronto</h1>
<p></p> {/** comback here to edit the file  */}
<div className="hero-action">
 <div className= "hero-connect">Connect with me </div>
 <div className="hero-resume">My resume </div>
</div>
 </div>
  )
}


export default Hero