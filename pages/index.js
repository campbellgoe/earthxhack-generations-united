import React from 'react'
import Link from 'next/link'
import {TextButton} from '../components/Button'
import HorizontalLine from '../components/HorizontalLine'
import StateFarmCard from '../components/StateFarmCard'
import Img from '../components/Img'

const StateFarmAppImage0 = '/images/StateFarmApp-0.png'
const StateFarmAppImage1 = '/images/StateFarmApp-1.png'
const TechSupportImage = '/images/elderly-tech-support.jpeg'

const GreenAmbassadorCard = () => {
  return (
    <StateFarmCard className="join-green-ambassador">
      <section>
        <div className="subsection" >
          <Img src={TechSupportImage} alt="tech support for the elderly" className="tech-support-image"/>
          <h3>Green Youth Ambassador</h3>
          <p>Want to lower your insurance by sharing your tech knowledge?</p>
        </div>
        <HorizontalLine className="horizontal-line"/>
        <div className="subsection centered">
          <Link href='/green-youth-ambassador/signup'>
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
