import React from 'react'
import UsHero from './UsHero'
import HelpSupport from './HelpSupport'
import DonateNow from './DonateNow'
import Outstanding from './Outstanding'
import ScrollToTop from '../Home/ScrollToTop'

const MainUs = () => {
  return (
    <main>
      <UsHero/>
      <HelpSupport/>
      <DonateNow/>
      <Outstanding/>
      <ScrollToTop/>
    </main>
  )
}

export default MainUs
