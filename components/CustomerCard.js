import styled from 'styled-components'
const CustomerCard = styled(({ className = '', details: { name, age, gender, location, languages }, time = ''}) => {
  return (
    <div className={'CustomerCard ' + className}>
      <h1><span>{name}</span>{time && <span>{time}</span>}</h1>
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
    display: flex;
    justify-content: space-between;
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
    ${({ carousel }) => carousel ? `box-shadow: 0 0 9px white;` : ''}
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

export default CustomerCard;