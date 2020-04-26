import styled from 'styled-components'
import Layout from '../../components/Layout'
import StateFarmCard from '../../components/StateFarmCard'

const CallPage = styled(({ className = '' }) => (
  <Layout className={className} title={'Generations United - Call'} bottomBar={false}>
    <StateFarmCard className="StateFarmCard">
      <p>{`Hi <username>!`}</p>
      <p>Thanks for signing up. Start helping people and start earning credits.</p>
      <p>Here are some members you can check up on.</p>
    </StateFarmCard>
  </Layout>
))`
  .StateFarmCard {
    padding: 16px;
  }
`

export default CallPage