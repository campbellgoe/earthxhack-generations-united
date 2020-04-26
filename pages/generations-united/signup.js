import styled from 'styled-components'
import Link from 'next/link'
import { TextButton, BlockButton } from '../../components/Button'
import Layout from '../../components/Layout'
import StateFarmCard from '../../components/StateFarmCard'

import Img from '../../components/Img'

const TechSupportImage = '/images/young-elderly.png'

const SignUpPage = styled(({ className = '' }) => {
  //jsx goes here (see JSX syntax)
  return (<Layout className={className} title={'Green Youth Ambassador - Sign up'}>
    <StateFarmCard className="StateFarmCard">
      <Img src={TechSupportImage} alt="tech support for the elderly" className="rounded" />
      <h3>Generations United</h3>
      
      <p>During this unprecedented crisis, social isolation particularly for the elderly communities is at an all time high. Help connect to elderly StateFarm members and receive a discount on your insurance for doing so. </p>
      <p>Use this portal to sign-up, call and check-in with your neighbors. The portal is live during business hours and will connect you via landline to an elderly person that would like to chat. </p>
      <p>At any time during the call, if you are concerned for this persons' mental or physical health, you can flag their profile to connect with local and state experts for further services.</p>
      <div className="buttons-container">
        <TextButton>LEARN MORE</TextButton>
        <Link href="/generations-united/languages">
          <BlockButton>SIGN UP</BlockButton>
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