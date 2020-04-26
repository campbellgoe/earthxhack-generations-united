import styled from 'styled-components'
import withRedux from '../../redux/withRedux'
import { selectLiveCustomer } from '../../redux/selectors'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import StateFarmCard from '../../components/StateFarmCard'
import Link from 'next/link'
import CustomerCard from '../../components/CustomerCard'

const PhoneOpenImage = '/images/phone-open.png'
const PhoneCloseImage = '/images/phone-close.png'

const LiveCallPage = styled(({ className = '' }) => {
  const liveCustomerDetails = useSelector(selectLiveCustomer);
  return (
    <Layout className={className} title={'Generations United - Call'} bottomBar={false}>
      <StateFarmCard className="StateFarmCard" >
      <CustomerCard className="LiveCallCustomerCard" selected={true} carousel={false} details={liveCustomerDetails} />
      <div className="phone-icons-container">
          <div className="phone-icons">
            <button className="start-call"/>
            <Link href="/generations-united/live-call"><button className="end-call"/></Link>
          </div>
        </div>
      </StateFarmCard>
    </Layout>
  )
})`
.StateFarmCard {
  padding: 16px;
  height: 100vh;
}
.LiveCallCustomerCard {
  box-sizing: border-box;
  max-width: 100%;
  width: 100%;
  position: initial;
}
.phone-icons-container {
  width: calc(100% - 32px);
  position: absolute;
  bottom: 16px;
}
.phone-icons {
  display: flex;
  justify-content: space-between;
  margin: 32px;
  button {
    appearance: none;
    background-color: white;
    border: none;
    width: 50px;
    height: 50px;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 25px;
  }
  .start-call {
    background-image: url(${PhoneOpenImage});
  }
  .end-call {
    background-image: url(${PhoneCloseImage});
  }
}
`

export default withRedux(LiveCallPage)