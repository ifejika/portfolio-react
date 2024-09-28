/**DANIEL IFEJIKA 301197154 2024-09-27 */

import React from 'react'
import './Navbar.css'
import theme_pattern from '../../assets/theme_pattern.svg' /* the ../.. is used to navigate through the code structure to use a folder content */
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = () => {

  

  return (
    <div className='navbar'> {/*class*/}
<img src={theme_pattern} alt="" />
{/*<img src={menu_open}  alt="" className='nav-mob-open'/> {/** for mobile responsive  revisit */}
<ul className= "nav-menu"> {/*class*/}
 {/* <img src={menu_close} alt="" className="nav-mob-close"/> revisit */ }
    <li><AnchorLink className='anchor-link'  href='#home'>Home</AnchorLink></li> 
    <li><AnchorLink className='anchor-link' offset={50} href='#about'>About Me</AnchorLink></li>
    <li><AnchorLink className='anchor-link' offset={50} href='#services'>Services</AnchorLink></li>
    <li><AnchorLink className='anchor-link' offset={50} href='#work'>Portfolio</AnchorLink></li>
    <li><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact</AnchorLink></li>
</ul>
<div className = "nav-connect">
Connect With Me 
</div> {/* remove this part later if not needed */}
    </div> 
  )
} 

export default Navbar