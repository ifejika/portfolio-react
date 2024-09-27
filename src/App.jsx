import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/contact'
import Footer from  './components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/> {/* app.jsx is what render my component   */}
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
