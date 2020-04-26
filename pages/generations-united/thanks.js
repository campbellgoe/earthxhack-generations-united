import styled from 'styled-components'
import Layout from '../../components/Layout'
import StateFarmCard from '../../components/StateFarmCard'
import Img from '../../components/Img'

const Medal = '/images/medal.png'
const Star = '/images/star.png'

const Review = styled(({ className = '' }) => (
  <Layout className={className} title={'Generations United - Call Live'} bottomBar={false}>
    <StateFarmCard className="StateFarmCard">
    <Img src={Medal} alt="Medal" className="Medal"/>
    <h1>Thank you for Helping.</h1>
    <br/>
    <br/>
    <h4>You earned a badge.</h4>
    <br/>
    <br/>
    <h4>How was your expirience?</h4>
    <br/>
    <div class="row">
      <div class="column">
        <Img src={Star} alt="Star" className="Star"/>
      </div>
       <div class="column">
      <Img src={Star} alt="Star" className="Star"/>
      </div>
      <div class="column">
        <Img src={Star} alt="Star" className="Star"/>
      </div>
      <div class="column">
        <Img src={Star} alt="Star" className="Star"/>
      </div>
      <div class="column">
        <Img src={Star} alt="Star" className="Star"/>
      </div>            
    </div>
    </StateFarmCard>
  </Layout>
))`
  .StateFarmCard {
    padding: 16px;
  }
  .Medal{
    width: 150px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
  .Star{
    width: 50%;
  }
  h1{
    
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    
    color: #FFFFFF;
  }
  h4{

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;

  }
  .column {

    float: left;
    width: 20%;
    padding: 0px;
  }
  .row::after {
    content: "";
    clear: both;
    display: table;
  }  
  /* put your styles here, it is similar to CSS */
`

export default Review
