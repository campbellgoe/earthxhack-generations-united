import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const StateFarmAppImage0 = '/images/StateFarmApp-0.png'
const StateFarmAppImage1 = '/images/StateFarmApp-1.png'
const TechSupportImage = '/images/elderly-tech-support.jpeg'
// import styled from 'styled-components'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `
const TextButton = styled.button`
  color: #D9352F;
  background-color: transparent;
  cursor: pointer;
  border: none;
  font-weight: bold;
  padding: 16px;
`
const Img = styled.img`
  width: 100%;
  display: block;
`
const StateFarmCard = styled.div`
  padding: 8px;
  padding-bottom: 5px;
  padding-top: 2px;
  
  background-color: #101010;
  section {
    border-radius: 5px;
    background-color: #312d31;
    color: white;
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
`
const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #403c3f;
`
const GreenAmbassadorCard = () => {
  const router = useRouter();
  return (
    <StateFarmCard>
      <section>
        <div className="subsection" >
          <Img src={TechSupportImage} alt="tech support for the elderly" />
          <h3>Green Youth Ambassador</h3>
          <p>Want to lower your insurance by sharing your tech knowledge?</p>
        </div>
        <HorizontalLine />
        <div className="subsection centered">
          <TextButton onClick={() => {
            router.push('/signup');
          }}>Join</TextButton>
        </div>
      </section>
    </StateFarmCard>
  )
}

export default () => {
  return (
    <>
      <Img src={StateFarmAppImage0} alt="state farm app" />
      <GreenAmbassadorCard />
      <Img src={StateFarmAppImage1} alt="state farm app" />
    </>
  )
}
