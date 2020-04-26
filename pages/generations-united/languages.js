import styled from 'styled-components'
import { useState } from 'react'
import Link from 'next/link'
import withRedux from '../../redux/withRedux'
import { useSelector, useDispatch } from 'react-redux'
import { setLanguages } from '../../redux/actions'
import Layout from '../../components/Layout'
import { BlockButton } from '../../components/Button'
import StateFarmCard from '../../components/StateFarmCard'
import Checkboxes, { checkboxStyles } from '../../components/Checkboxes'

const LanguagesCheckboxes = styled(({ className = '', items, onChange }) => {
  const col0 = items.slice(0, items.length / 2);
  const col1 = items.slice(items.length / 2);
  const [col0Items, setCol0Items] = useState(col0);
  const [col1Items, setCol1Items] = useState(col1);
  const handleItems = (setItems, items) => {
    setItems(items);
    onChange([...col0Items, ...col1Items]);
  }
  return (<div className={className + ' checkboxes-container'}>
    <div>
      <Checkboxes items={col0} onChange={items => handleItems(setCol0Items, items)} />
    </div>
    <div>
      <Checkboxes items={col1} onChange={items => handleItems(setCol1Items, items)}/>
    </div>
  </div>)
})`
  display: flex;
  justify-content: space-around;
  .checkbox-row {
    margin-bottom: 14px;
    label {
      margin-left: 10px;
    }
    input {
      ${checkboxStyles}
    }
    input, label {
      vertical-align: middle;
    }
  }
`

export default withRedux(styled(({ className = '' }) => {
  const dispatch = useDispatch();
  const languagesCheckboxes = useSelector(state => state.languages.checkboxes);
  const allowContinue = useSelector(state => state.languages.isSelected);
  const handleCheckboxesChange = checkboxes => {
    dispatch(setLanguages(checkboxes));
  }
  const continueButton = <BlockButton className="continue-button" {...(!allowContinue ? {
    onClick: () => {
      //TODO: display this in a nice modal/notification instead
      alert("Select a language first");
    }
  } : {})}>CONTINUE</BlockButton>
  return (
    <Layout className={className} title={'Green Youth Ambassador - Languages'} bottomBar={false}>
      <StateFarmCard className="StateFarmCard">
        <h1>Which languages are you fluent in?</h1>
        <h2>Choose all that apply.</h2>
        <LanguagesCheckboxes className="LanguageCheckboxes" items={languagesCheckboxes} onChange={handleCheckboxesChange} />
        {
          allowContinue ?
            (<Link href="/generations-united/call">
              {continueButton}
            </Link>)
            : continueButton
        }
      </StateFarmCard>
    </Layout>
  )
})`
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
    margin-top: 48px;
  }
`);