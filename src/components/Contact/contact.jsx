import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
           <h1>Get in touch </h1> 
           <img src={theme_pattern} alt=""/>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Lets talk </h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt=""/>  <p>Danieldozieifejika@gmail.com</p></div> {/* div 1*/}
                    <div className="contact-detail">
                    <img src={call_icon} alt=""/>  <p>437-234-3456</p></div> {/* div 2 */}
                    <div className="contact-detail">
                    <img src={location_icon} alt=""/> <p>Toronto,Ontario,Canda</p></div>{/* div3*/}
                </div>

            </div>
{/* this is to seperate content from the form */}
<form className="contact-right">
    <label htmlFor="">Your Name</label>
    <input type="text" placeholder="Enter your name " name='name'/>
    <label htmlFor="">Your Email</label>
    <input type="email" placeholder="Enter your email " name='email'/>
    <label htmlFor="">Write your message here</label>
   <textarea name="message" rows="8"  placeholder='Enter your message '></textarea>
   <button type='submit' className="contact-submit">Submit</button>
</form>
        </div>
    </div>
  )
}

export default contact