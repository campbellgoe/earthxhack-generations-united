import styled from 'styled-components'
import Layout from '../../components/Layout'
import StateFarmCard from '../../components/StateFarmCard'
import Img from '../../components/Img'
import { TextButton, BlockButton } from '../../components/Button'

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
    <br/>
    <h3><a href="url">TELL US MORE</a></h3>
    <br/>
    <br/>
    <h4>Call Another Senior?</h4>
    <div className="buttons-container">
        <BlockButton>NO</BlockButton>
        <BlockButton  className="Yes">YES</BlockButton>
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
  .Yes{
    background-color: white;
    color: red;
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
  
  h3{

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;

  }
  a{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    text-decoration-line: underline;
    text-transform: uppercase;

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
  .buttons-container {
    display: flex;
    justify-content: space-between;
    button {
      width: calc(50% - 8px);
      min-width: 120px;
    }
  }  
  /* put your styles here, it is similar to CSS */
`

export default Review