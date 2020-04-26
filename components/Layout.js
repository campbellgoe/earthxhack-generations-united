import styled from 'styled-components'
import Head from 'next/head'
import StateFarmTopBar from './StateFarmTopBar'
import StateFarmBottomBar from './StateFarmBottomBar'

export default styled(({ className = '', children, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <div className={className + " SignUpPage"}>
      <StateFarmTopBar />
      {children}
      <StateFarmBottomBar />
    </div>
  </>)
)`
  color: white;
  background-color: ${({ theme: { colors } }) => colors.background.primary};
  min-height: 100vh;
`