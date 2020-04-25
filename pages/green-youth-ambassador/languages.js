import { useState } from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import { BlockButton } from '../../components/Button'
import StateFarmCard from '../../components/StateFarmCard'

const TickImage = '/images/tick.svg'

const languagesCheckboxes = [
  {
    text: 'English',
  },
  {
    text: 'Espanol'
  },
  {
    text: '中文（普通话）'
  },
  {
    text: 'Le français'
  },
  {
    text: 'Tiếng Việt'
  },
  {
    text: '한국어'
  },
  {
    text: 'عربى'
  },
  {
    text: 'Deutsche'
  },
  {
    text: 'русский'
  },
  {
    text: 'Pilipino'
  }
]

const Column = styled.div`
`;

const Checkboxes = ({ className = '', items }) => {
  const [checkboxes, setCheckboxes] = useState(items);
  const handleCheckboxChange = (index, evt) => {
    const checked = evt.target.checked;
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index].checked = checked;
    setCheckboxes(newCheckboxes);
  }
  return <div className={className}>
    {checkboxes.map(({ text, checked }, index) => {
      return (<div key={text + index} className="checkbox-row">
        <input id={text + index} type="checkbox" checked={checked} onChange={e => handleCheckboxChange(index, e)} />
        <label htmlFor={text + index}>{text.toUpperCase()}</label>
      </div>)
    })
    }</div>
}
const LanguagesCheckboxes = styled(({ className = '', items }) => {
  const col0 = items.slice(0, items.length / 2);
  const col1 = items.slice(items.length / 2);
  return (<div className={className + ' checkboxes-container'}>
    <Column>
      <Checkboxes items={col0} />
    </Column>
    <Column>
      <Checkboxes items={col1} />
    </Column>
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
      width: 24px;
      height: 24px;
      border-radius: 5px;
      background-color: white;
      appearance: none;
      :checked {
        background-image: url(${TickImage});
        background-position: center;
        background-repeat: no-repeat;
      }
    }
    input, label {
      vertical-align: middle;
    }
  }
`

export default styled(({ className = '' }) => (
  <Layout className={className} title={'Green Youth Ambassador - Languages'}>
    <StateFarmCard className="StateFarmCard">
      <h1>Which languages are you fluent in?</h1>
      <h2>Choose all that apply.</h2>
      <LanguagesCheckboxes className="LanguageCheckboxes" items={languagesCheckboxes}/>
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
    margin-top: 48px;
  }
`;