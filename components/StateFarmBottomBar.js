import styled from 'styled-components'
import Img from '../components/Img'

const BottomBarImage = '/images/StateFarmApp-bottom.png'

export default styled(({ className = '' }) => <Img src={BottomBarImage} alt="state farm app bottom bar" className={className+' BottomBar'} />)`
  position: fixed;
  bottom: 0;
`