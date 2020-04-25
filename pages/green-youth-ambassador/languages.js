import styled from 'styled-components'
import Layout from '../../components/Layout'
import { BlockButton } from '../../components/Button'
import StateFarmCard from '../../components/StateFarmCard'

export default styled(({ className  = ''}) => (
  <Layout className={className} title={'Green Youth Ambassador - Languages'}>
    <StateFarmCard className="StateFarmCard">
      <h1>Which languages are you fluent in?</h1>
      <h2>Choose all that apply.</h2>
      <BlockButton className="continue-button">CONTINUE</BlockButton>
    </StateFarmCard>
  </Layout>
))`
  h1, h2 {
    margin: 32px auto;
    text-align: center;
    max-width: 300px;
  }
  h1 {
    margin-top: 48px;
  }
  h2 {
    margin-bottom: 48px;
  }
  .continue-button {
    margin: 8px 0;
    width: 100%;
  }
`;