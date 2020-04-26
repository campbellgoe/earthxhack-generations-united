import styled from 'styled-components'
import Link from 'next/link'
import { TextButton, BlockButton } from '../../components/Button'
import Layout from '../../components/Layout'
import StateFarmCard from '../../components/StateFarmCard'

import Img from '../../components/Img'

const TechSupportImage = '/images/elderly-tech-support.jpeg'

const SignUpPage = styled(({ className = '' }) => {
  //jsx goes here (see JSX syntax)
  return (<Layout className={className} title={'Green Youth Ambassador - Sign up'}>
    <StateFarmCard className="StateFarmCard">
      <Img src={TechSupportImage} alt="tech support for the elderly" className="rounded" />
      <h3>Green Youth Ambassador</h3>
      <p>Lower your insurance by sharing your tech knowledge.</p>
      <p>Less tech savvy people are particularly vulnerable during times of crisis.
      Without access to a smartphone or computer, they are missing out on
        communicating with loved ones with modern technology.</p>
      <p>You can help these folk learn technology such as that offered in our
        Drive Safe & Save program whilst earning insurance credits, a win-win situation.</p>
      <div className="buttons-container">
        <TextButton>LEARN MORE</TextButton>
        <Link href="/generations-united/languages">
          <BlockButton>JOIN NOW</BlockButton>
        </Link>
      </div>
    </StateFarmCard>
  </Layout>)
})`
  .StateFarmCard {
    padding: 16px;
  }
  .rounded {
    border-radius: 5px;
  }
  .buttons-container {
    display: flex;
    justify-content: space-between;
    button {
      width: calc(50% - 8px);
      min-width: 120px;
    }
  }
`

export default SignUpPage