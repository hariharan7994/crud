import React from 'react'
import { Link } from 'react-router-dom'
import { Col,Row } from 'react-bootstrap'
export const Home = () => {
  return (
    <div >
   
      <h1 style={{color:'black', textAlign:'center',fontFamily:'Caveat'}}>Connect EachOther</h1>
      <Row className='pb-5' >
        <Col className='text-center '>

   
   <img src='https://i.postimg.cc/m2mXG6vM/Helping-Teachers-Connect-with-Each-Other-and-Their-Students.jpg' class="center" className='pb-5 mt-5' style={{width:'100%'}} />






   </Col>

 
  

  
   </Row>

   <div class="main"  >
  <Link to={'/create'}>
  <button class="button-89"style={{fontFamily:'Kalam'}}>Let's Start</button>
  </Link>
  </div>

        </div>
  )
}