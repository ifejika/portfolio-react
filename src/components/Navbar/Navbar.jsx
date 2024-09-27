import React from 'react'
import './Navbar.css'
import theme_pattern from '../../assets/theme_pattern.svg' /* the ../.. is used to navigate through the code structure to use a folder content */
const Navbar = () => {
  return (
    <div className='navbar'> {/*class*/}
<img src={theme_pattern} alt="" />
<ul className= "nav-menu"> {/*class*/}
    <li>Home</li>
    <li>About Me</li>
    <li>Services</li>
    <li>Portfolio</li>
    <li>Contact</li>
</ul>
<div className = "nav-connect">
Connect With Me 
</div> {/* remove this part later if not needed */}
    </div> 
  )
} 

export default Navbar