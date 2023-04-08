import React from 'react'
import Navmenu from '../components/Navmenu';
import Footer from '../components/Footer';
import { Card, Col, Row, ListGroup } from 'react-bootstrap';
import zalva from '..//img/sinAlcohol_y_Snaks/azalva.png';
import todorico from '..//img/sinAlcohol_y_Snaks/todorico.png';
import '../styles/sinalcohol.css';


function SinAlcohol() {
  return (
    <div className='sinalcohol'>
          <Navmenu />
      <h1>SIN ALCOHOL Y SNACKS</h1>
      <hr/>
      <div className='cards_sinalcohol'>
         <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={zalva} alt='Agua Zalva'/>
            <Card.Body>
              <Card.Title>Agua Zalva</Card.Title>
            </Card.Body>
             <ListGroup variant="flush">
        <ListGroup.Item>Cantidad: 600ml</ListGroup.Item>
        <ListGroup.Item id='precio'>$ 2.500</ListGroup.Item>
      </ListGroup>
          </Card>
        </Col>
      ))}
          </Row>
          
          <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={todorico} alt='Todo Rico BBQ'/>
            <Card.Body>
              <Card.Title>Todo Rico BBQ</Card.Title>
            </Card.Body>
            <ListGroup variant="flush">
        <ListGroup.Item>Cantidad: 150g</ListGroup.Item>
        <ListGroup.Item id='precio'>$ 2.500</ListGroup.Item>
      </ListGroup>
          </Card>
        </Col>
      ))}
          </Row>
        
      </div> 
     <Footer/> 
    </div>
  )
}

export default SinAlcohol