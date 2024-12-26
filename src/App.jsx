import { useState } from 'react'
import './App.css'
import Header from './pages/Header'
import Hero from './pages/Hero'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Working from './pages/Working'
import Testominals from './pages/Testominals'
import Contact from './pages/Contact'
import Footer from './pages/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Services/>
    <Portfolio/>
    <Working/>
    <Testominals/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
