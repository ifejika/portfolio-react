/**DANIEL IFEJIKA 301197154 2024-09-27 */

import React from 'react'  //rafce is a short cut 
import './Hero.css'
import profile from '../../assets/profile img.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home'className= 'hero'>
<img src={profile} alt=""/>
<h1> I'm Daniel Ifejika , I am a software developer based in Toronto</h1>
<p></p> {/** comback here to edit the file  */}
<div className="hero-action">
 <div className= "hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink></div>{/**add this link later for connect header */}
 <div className="hero-resume"><a href="https://docs.google.com/document/d/1TIZF2IM7eDCEYw8OE8SJrDNS-DACTuR1/edit?usp=sharing&ouid=117826394234869383683&rtpof=true&sd=true" target="_blank">My resume</a>
  </div>
</div>
 </div>
  )
}


export default Hero