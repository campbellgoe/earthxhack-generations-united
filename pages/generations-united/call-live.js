import styled from 'styled-components'
import Layout from '../../components/Layout'
import StateFarmCard from '../../components/StateFarmCard'

const CallLivePage = styled(({ className = '' }) => (
  <Layout className={className} title={'Generations United - Call Live'} bottomBar={false}>
    <StateFarmCard className="StateFarmCard">
      {`put your JSX here. it is similar to HTML`}
    </StateFarmCard>
  </Layout>
))`
  .StateFarmCard {
    padding: 16px;
  }
  /* put your styles here, it is similar to CSS */
`

export default CallLivePage