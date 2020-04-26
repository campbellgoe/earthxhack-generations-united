import styled from 'styled-components'
import Layout from '../../components/Layout'
import { BlockButton } from '../../components/Button'
import StateFarmCard from '../../components/StateFarmCard'
import Checkboxes, { checkboxStyles } from '../../components/Checkboxes'

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
].map(props=>({checked: false, ...props}))

const LanguagesCheckboxes = styled(({ className = '', items }) => {
  const col0 = items.slice(0, items.length / 2);
  const col1 = items.slice(items.length / 2);
  return (<div className={className + ' checkboxes-container'}>
    <div>
      <Checkboxes items={col0} />
    </div>
    <div>
      <Checkboxes items={col1} />
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