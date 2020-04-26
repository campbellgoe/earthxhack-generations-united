import styled from 'styled-components'
import withRedux from '../../redux/withRedux'
import { selectLiveCustomer } from '../../redux/selectors'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import StateFarmCard from '../../components/StateFarmCard'
import Link from 'next/link'
import CustomerCard from '../../components/CustomerCard'
import { checkboxStyles } from '../../components/Checkboxes'


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

const Notes = styled(({ className = '' }) => {
  return (
    <section className={'Notes '+className}>
      <p>Notes:</p>
      <textarea>

      </textarea>
    </section>
  )
})`
  background-color: white !important;
  color: black;
  textarea {
    width: 100%;
    box-sizing: border-box;
    height: 220px; 
    resize: vertical;
    border: 1px solid #E0E0E0;
    padding: 11px;
    border-radius: 5px;
  }
`

const ReviewPage = styled(({ className = '' }) => {
  const liveCustomerDetails = useSelector(selectLiveCustomer);
  return (
    <Layout className={className} title={'Generations United - Call'} bottomBar={false}>
      <StateFarmCard className="StateFarmCard" >
        <div className="cards">
          <CustomerCard className="LiveCallCustomerCard" selected={true} carousel={false} details={liveCustomerDetails} time="15:39"/>
          <CheckboxSection className="LiveCallConcerns" title="Concerns" items={[
            { text: 'Mental Health', checked: false },
            { text: 'Physical Health', checked: false }
          ]} />
          <Notes className="ReviewNotes" />
        </div>
      </StateFarmCard>
    </Layout>
  )
})`
.call-time {
  color: ${({ theme: { colors }}) => colors.button.primary}
}
.StateFarmCard {
  padding: 16px;
  min-height: 100vh;
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
`

export default withRedux(ReviewPage)