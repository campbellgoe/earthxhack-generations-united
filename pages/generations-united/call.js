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
import CustomerCard from '../../components/CustomerCard'

const PhoneOpenImage = '/images/phone-open.png'
const PhoneCloseImage = '/images/phone-close.png'


const CustomerCarousel = styled(({ className = '', customers = [] }) => {
  const dispatch = useDispatch();
  const swipeConfig = {
    delta: 10,
  }
  //left and right are flipped when swiping versus clicking left/right buttons, so -1 and +1 can be confusing
  const handleSwipeLeft = () => {
    dispatch(rotateCustomers(1));
  }
  const handleSwipeRight = () => {
    dispatch(rotateCustomers(-1));
  }
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    ...swipeConfig
  })
  return (
    <div className={"CustomerCarousel " + className}>
      <div className="carousel-cards" {...swipeHandlers}>
        {customers.map((details, index) => {
          return <CustomerCard key={details.name + index} details={details} className="CustomerCarouselCard" selected={index === 1} carousel={true}/>
        })}
      </div>
      <div className="chevron-buttons">
        <button onClick={handleSwipeRight}><Chevron left={true} /></button>
        <button onClick={handleSwipeLeft}><Chevron /></button>
      </div>
    </div>
  );
})`
.carousel-cards {
  height: 185px;
  display: flex;
  justify-content: center;
  .CustomerCarouselCard {
    box-sizing: content-box;
    :first-child {
      left: 0;
    }
    :last-child {
      right: 0;
    }
  }
}
.chevron-buttons {
  display: flex;
  justify-content: center;
  button {
    appearance: none;
    background-color: transparent;
    border: none;
  }
}
`

const CallPage = styled(({ className = '' }) => {
  const customers = useSelector(select3MiddleCustomers);
  return (
    <Layout className={className} title={'Generations United - Call'} bottomBar={false}>
      <StateFarmCard className="StateFarmCard">
        <p>{`Hi <username>!`}</p>
        <p>Thanks for signing up. Start helping people and start earning credits.</p>
        <p>Here are some members you can check up on.</p>
        <CustomerCarousel customers={customers} className="CallPageCustomerCarousel" />
        <div className="phone-icons-container">
          <div className="phone-icons">
            <Link href="/generations-united/live-call"><button className="start-call"/></Link>
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

export default withRedux(CallPage)