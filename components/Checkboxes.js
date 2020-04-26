import { useState, useEffect } from 'react'

const TickImage = '/images/tick.svg'
export const checkboxStyles = `
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
`;
const Checkboxes = ({ className = '', items, labelled = true, onChange = Function.prototype }) => {
  const [checkboxes, setCheckboxes] = useState(items);
  const handleCheckboxChange = (index, evt) => {
    const checked = evt.target.checked;
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index].checked = checked;
    setCheckboxes(newCheckboxes);
  }
  useEffect(()=>{
    onChange(checkboxes);
  }, [checkboxes]);
  return <div className={className}>
    {checkboxes.map(({ text, checked }, index) => {
      return (<div key={text + index} className="checkbox-row">
        <input id={text + index} type="checkbox" checked={checked} onChange={e => handleCheckboxChange(index, e)} />
        {labelled && <label htmlFor={text + index}>{text.toUpperCase()}</label>}
      </div>)
    })
    }</div>
}
export default Checkboxes;