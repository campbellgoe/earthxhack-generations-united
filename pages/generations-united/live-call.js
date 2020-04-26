import styled from 'styled-components'
import withRedux from '../../redux/withRedux'
import { selectLiveCustomer } from '../../redux/selectors'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import StateFarmCard from '../../components/StateFarmCard'
import Link from 'next/link'
import CustomerCard from '../../components/CustomerCard'
import { checkboxStyles } from '../../components/Checkboxes'

const PhoneOpenImage = '/images/phone-open.png'
const PhoneCloseImage = '/images/phone-close.png'

const CheckboxSection = styled(({ className = '', title, items = [] }) => {
  return <section className={className + ' CheckboxSection'}>
    <h1>{title}</h1>
    <div className="checkbox-section">
      {items.map(({text, checked = false}, index) => {
        const id = text.split(' ') + index;
        return (
          <div>
            <label htmlFor={id}>{text}</label>
            <input type="checkbox" checked={checked} id={id} />
          </div>
        )
      })}
    </div>
  </section>
})`
h1 {
  margin-bottom: 18px;
}
  input[type=checkbox] {
    ${checkboxStyles}
  }
  .checkbox-section {
    display: flex;
    flex-direction: column;
    > div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;
      :last-child {
        margin-bottom: 0;
      }
      > label {
        margin-top: 5px;
        max-width: 85%;
      }
    }
  }
`

const LiveCallPage = styled(({ className = '' }) => {
  const liveCustomerDetails = useSelector(selectLiveCustomer);
  return (
    <Layout className={className} title={'Generations United - Call'} bottomBar={false}>
      <StateFarmCard className="StateFarmCard" >
        <div className="cards">
          <CustomerCard className="LiveCallCustomerCard" selected={true} carousel={false} details={liveCustomerDetails} time="07:39" />
          <CheckboxSection className="LiveCallConcerns" title="Concerns" items={[
            { text: 'Mental Health', checked: false },
            { text: 'Physical Health', checked: false }
          ]} />
          <CheckboxSection className="LiveCallOptOut" title="Opt Out" items={[
            { text: 'This person requested not to be contacted again for this program.', checked: false },
          ]} />
        </div>
        <div className="phone-icons-container">
          <div className="phone-icons">
            <button className="start-call" />
            <Link href="/generations-united/review"><button className="end-call" /></Link>
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
h1 {
  font-weight: 600;
  font-size: 20px;
}
.cards {
  > div, > section {
    margin-bottom: 16px;
  }
  > section {
    padding: 20px;
  }
}
.LiveCallCustomerCard {
  box-sizing: border-box;
  max-width: 100%;
  width: 100%;
  position: initial;
  border: none;
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