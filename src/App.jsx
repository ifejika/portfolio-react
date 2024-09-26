import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/> {/* app.jsx is what render my component   */}
      <About/>
    </div>
  )
}

export default App
