import styled from 'styled-components'
export default styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({theme: { colors: { lines }}}) => lines.primary};
`