import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/> {/* app.jsx is what render my component   */}
      <About/>
      <Services/>
    </div>
  )
}

export default App
