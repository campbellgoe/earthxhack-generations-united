import Img from '../components/Img'
import Link from 'next/link'

const TopBarImage = '/images/StateFarmApp-top.png'

export default () => <Link href="/"><Img src={TopBarImage} alt="state farm app top bar"/></Link>