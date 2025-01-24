import React from 'react'
import Hero from './Hero'
import AboutUs from './AboutUs'
import FeaturedCampaign from './FeaturedCampaign'
import HowItWorks from './HowItWorks'
import Reviews from './Reviews'
import Newsletter from './Newsletter'

const MainHome = () => {
  return (
    <main>
      <Hero/>
      <AboutUs/>
      <FeaturedCampaign/>
      <HowItWorks/>
      <Reviews/>
      <Newsletter/>
    </main>
  )
}

export default MainHome
