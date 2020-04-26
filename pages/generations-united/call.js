import styled from 'styled-components'
import withRedux from '../../redux/withRedux'
import { select3MiddleCustomers } from '../../redux/selectors'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import StateFarmCard from '../../components/StateFarmCard'
import { useSwipeable/*, Swipeable*/ } from 'react-swipeable'
import { rotateCustomers } from '../../redux/actions'

const CustomerCard = styled(({ className = '', details: { name, age, gender, location, languages }, selected = false }) => {
  return (
    <div className={'CustomerCard '+className}>
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
  background-color: ${({theme: { colors: { background }}}) => background.secondary};
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

const CustomerCarousel = styled(({ className = '', customers = [] }) => {
  const dispatch = useDispatch();
  const swipeConfig = {
    delta: 10,
  }
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      dispatch(rotateCustomers(-1));
    },
    onSwipedRight: () => {
      dispatch(rotateCustomers(1));
    }, ...swipeConfig })
  return (
    <div className={"CustomerCarousel "+className} {...swipeHandlers}>
      {customers.map((details, index) => {
        return <CustomerCard key={details.name+index} details={details} className="CustomerCarouselCard" selected={index === 1}/>
      })}
    </div>
  );
})`
display: flex;
justify-content: center;
.CustomerCarouselCard {
  :first-child {
    left: 0;
  }
  :last-child {
    right: 0;
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
        <CustomerCarousel customers={customers} className="CallPageCustomerCarousel"/>
      </StateFarmCard>
    </Layout>
  )
})`
  .StateFarmCard {
    padding: 16px;
  }
`

export default withRedux(CallPage)