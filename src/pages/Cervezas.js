import React from 'react'
import Navmenu from '../components/Navmenu';
import Footer from '../components/Footer';
import { Card, Col, Row, ListGroup } from 'react-bootstrap';
import aguila from '../img/cervezas/aguila.png';
import poker from '../img/cervezas/poker.png';
import costeña from '../img/cervezas/costeña.png';
import light from '../img/cervezas/light.png';
import club from '../img/cervezas/club.png';
import corona from '../img/cervezas/corona.png';
import '../styles/cervezas.css';

function cervezas() {
  return (
    <div className='cervezas'>
          <Navmenu />
      <h1>CERVEZAS</h1>
      <hr/>
      
      <div className='container'>
        
      <div className='cards_Cervezas'>
         <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={aguila} alt='Aguila Original'/>
            <Card.Body>
              <Card.Title>Aguila Original</Card.Title>
            </Card.Body>
             <ListGroup variant="flush">
        <ListGroup.Item>Cantidad: 330ml</ListGroup.Item>
        <ListGroup.Item id='precio'>$ 4000</ListGroup.Item>
        
      </ListGroup>
          </Card>
        </Col>
      ))}
          </Row>
          
          <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={poker} alt='Poker' />
            <Card.Body>
              <Card.Title>Poker</Card.Title>
            </Card.Body>
             <ListGroup variant="flush">
        <ListGroup.Item>Cantidad: 330ml</ListGroup.Item>
        <ListGroup.Item id='precio'>$ 4000</ListGroup.Item>
        
      </ListGroup>
          </Card>
        </Col>
      ))}
          </Row>
          
          <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={costeña} alt='Costeña' />
            <Card.Body>
              <Card.Title>Costeña</Card.Title>
            </Card.Body>
             <ListGroup variant="flush">
        <ListGroup.Item>Cantidad: 350ml</ListGroup.Item>
        <ListGroup.Item id='precio'>$ 4500</ListGroup.Item>
        
      </ListGroup>
          </Card>
        </Col>
      ))}
          </Row>
          
          <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={light} alt='Aguila Light' />
            <Card.Body>
              <Card.Title>Aguila Light</Card.Title>
            </Card.Body>
             <ListGroup variant="flush">
        <ListGroup.Item>Cantidad: 330ml</ListGroup.Item>
        <ListGroup.Item id='precio'>$ 4500</ListGroup.Item>
        
      </ListGroup>
          </Card>
        </Col>
      ))}
        </Row>
        
        <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={club} alt='Club Colombia' />
            <Card.Body>
              <Card.Title>Club Colombia</Card.Title>
            </Card.Body>
             <ListGroup variant="flush">
        <ListGroup.Item>Cantidad: 330ml</ListGroup.Item>
        <ListGroup.Item id='precio'>$ 5000</ListGroup.Item>
        
      </ListGroup>
          </Card>
        </Col>
      ))}
        </Row>
        
        <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={corona} alt='Corona' />
            <Card.Body>
              <Card.Title>Corona</Card.Title>
            </Card.Body>
             <ListGroup variant="flush">
        <ListGroup.Item>Cantidad: 355ml</ListGroup.Item>
        <ListGroup.Item id='precio'>$ 9000</ListGroup.Item>
        
      </ListGroup>
          </Card>
        </Col>
      ))}
    </Row>
        
        </div> 
        </div>
     <Footer/> 
    </div>
  )
}

export default cervezas