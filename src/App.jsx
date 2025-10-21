import React from 'react'
import Navber from './components/Navber'
import HeroSection from './components/HeroSection'
import DisesSection from './components/DisesSection'
import AboutSection from './components/AboutSection'
import CustomerReviews from './components/CustomerReviews'
import FooterSection from './components/FooterSection'

const App = () => {
  return (
    <>
    <Navber/>
      <div id='home'>
        <HeroSection/>
      </div>
      <div id='menu'>
        <DisesSection/>
      </div>
      <div id='about'>
        <AboutSection/>
      </div>
      <div id='reviwes'>
        <CustomerReviews/>
      </div>
      <FooterSection/>
    </>
  )
}

export default App