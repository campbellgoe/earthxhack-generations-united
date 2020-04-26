import React from 'react'
import Link from 'next/link'
import {TextButton} from '../components/Button'
import HorizontalLine from '../components/HorizontalLine'
import StateFarmCard from '../components/StateFarmCard'
import Img from '../components/Img'

const StateFarmAppImage0 = '/images/StateFarmApp-0.png'
const StateFarmAppImage1 = '/images/StateFarmApp-1.png'
const TechSupportImage = '/images/young-elderly.png'

const GreenAmbassadorCard = () => {
  return (
    <StateFarmCard className="join-green-ambassador">
      <section>
        <div className="subsection" >
          <Img src={TechSupportImage} alt="tech support for the elderly" className="tech-support-image"/>
          <h3>Generations United</h3>
          <p>Join the StateFarm Generations United Initiative!</p>
          <p>Check-in with elderly members on the phone through our Generations United portal. 
            As a special thank you, receive a discount on your initiative for doing so.</p>
        </div>
        <HorizontalLine className="horizontal-line"/>
        <div className="subsection centered">
          <Link href='/generations-united/signup'>
            <TextButton
              className="join-button"
            >Join</TextButton>
          </Link>
        </div>
      </section>
    </StateFarmCard>
  )
}

export default () => {
  return (
    <>
      <Img src={StateFarmAppImage0} alt="state farm app" className="state-farm-bg"/>
      <GreenAmbassadorCard />
      <Img src={StateFarmAppImage1} alt="state farm app" className="state-farm-bg"/>
    </>
  )
}
