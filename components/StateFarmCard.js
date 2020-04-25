import styled from 'styled-components'
export default styled.div`
  ${({theme: { colors }}) => `
    padding: 8px;
    padding-bottom: 5px;
    padding-top: 2px;
    
    background-color: ${colors.background.primary};
    color: white;
    
    section {
      border-radius: 5px;
      background-color: ${colors.background.secondary};
      
      .subsection.centered {
        display: flex;
        justify-content: center;
      }
      > .subsection {
        padding: 0 16px;
        
        h3 {
          font-weight: bold;
          margin-top: 16px;
        }
        p {
          margin: 16px 0;
        }
      }
    }
  `};
`