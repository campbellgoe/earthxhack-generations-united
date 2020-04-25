import styled from 'styled-components'

const buttonStyles = ` 
  cursor: pointer;
  border: none;
  font-weight: bold;
  padding: 8px;
  margin: 8px;
`
export const TextButton = styled.button`
  ${buttonStyles}
  color: ${({theme: { colors: { button } }}) => button.primary};
  background-color: transparent;
`
export const BlockButton = styled.button`
  ${buttonStyles}
  color: white;
  background-color: ${({theme: { colors: { button } }}) => button.primary};
  border-radius: 5px;
`
export default buttonStyles;