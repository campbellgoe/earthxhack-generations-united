import styled from 'styled-components'
import withRedux from '../../redux/withRedux'
import { select3MiddleCustomers } from '../../redux/selectors'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import StateFarmCard from '../../components/StateFarmCard'
import { useSwipeable/*, Swipeable*/ } from 'react-swipeable'
import { rotateCustomers } from '../../redux/actions'
import Chevron from '../../components/Chevron'
import Link from 'next/link'

const PhoneOpenImage = '/images/phone-open.png'
const PhoneCloseImage = '/images/phone-close.png'

const CustomerCard = styled(({ className = '', details: { name, age, gender, location, languages }, selected = false }) => {
  return (
    <div className={'CustomerCard ' + className}>
      <h1>{name}</h1>
      <section>
        <div>
          <div>Age</div>
          <div>Gender</div>
          <div>Location</div>
          <div>Language</div>
        </div>
        <div className="boldtext">
          <div>{age}</div>
          <div>{gender}</div>
          <div>{location}</div>
          <div>{languages.join(', ')}</div>
        </div>
      </section>
    </div>
  )
})`
  background-color: ${({ theme: { colors: { background } } }) => background.secondary};
  border-radius: 5px;
  position: absolute;
  padding: 20px;
  width: 60%;
  max-width: 300px;
  min-width: 200px;
  font-size: 16px;
  h1 {
    font-weight: 600;
    font-size: 20px;
    padding-bottom: 16px;
  }
  section {
    padding-top: 16px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    > div:first-child {
      margin-right: 15%;
    }
  }
  .boldtext {
    font-weight: bold;
  }
  ${({ selected }) => selected ? `
    border: 1px solid white;
    color: white;
    h1 {
      border-bottom: 1px solid white;
    }
    z-index: 500;
    box-shadow: 0 0 9px white;
  ` : `
    border: 1px solid #878787;
    color: #878787;
    h1 {
      border-bottom: 1px solid #878787;
    }
    transform: scale(0.9);
    z-index: 100;
  `};
`

const CallLivePage = styled(({ className = '' }) => {
  const customers = useSelector(select3MiddleCustomers);
  return (
    <Layout className={className} title={'Generations United - Call'} bottomBar={false}>
      <StateFarmCard className="StateFarmCard">
      {'Customer Card Here'}
        <div className="phone-icons-container">
          <div className="phone-icons">
            <Link href="/generations-united/call-live"><button className="start-call"/></Link>
            <button className="end-call"/>
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
  .CallPageCustomerCarousel {
    margin-top: 48px;
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

export default withRedux(CallLivePage)