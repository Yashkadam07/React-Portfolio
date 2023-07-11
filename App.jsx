import React from 'react'
import Experience from './Components/Experience/Experience'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Portfolio from './Components/Portfolio/Portfolio'
import Services from './Components/Services/Services'
import Nav from './Components/Nav/Nav'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'


const App = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App

