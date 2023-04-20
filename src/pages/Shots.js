import React from 'react'
import Navmenu from '../components/Navmenu';
import Footer from '../components/Footer';
import { Card, Col, Row, ListGroup } from 'react-bootstrap';
import jackOr from '../img/shots/jackOr.png';
import jackH from '../img/shots/jackH.png';
import jackF from '../img/shots/jackF.png';
import jager from '../img/shots/jager.png';
import tequila from '../img/shots/tequila.png';
import '../styles/shots.css';

export function Shots() {
  return (
    <div className='shots'>
          <Navmenu />
      <h1>SHOTS</h1>
      <hr/>
      <div className='cards-shots'>
         <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={jackOr} alt='Shot Jack Daniels Original' />
            <Card.Body>
              <Card.Title>Shot Jack Daniel's Original</Card.Title>
            </Card.Body>
            <ListGroup variant="flush">
        <ListGroup.Item>Cantidad: 1onz</ListGroup.Item>
        <ListGroup.Item id='precio'>$ 12.000</ListGroup.Item>
        
      </ListGroup>
          </Card>
        </Col>
      ))}
          </Row>
          
          <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={jackH} alt='Shot jack Daniels Honey' />
            <Card.Body>
              <Card.Title>Shot Jack Daniel's Honey Miel</Card.Title>
            </Card.Body>
            <ListGroup variant="flush">
        <ListGroup.Item>Cantidad: 1onz</ListGroup.Item>
        <ListGroup.Item id='precio'>$ 12.000</ListGroup.Item>
        
      </ListGroup>
          </Card>
        </Col>
      ))}
          </Row>
          
          <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={jackF} alt='Shot jack Daniels Fire'/>
            <Card.Body>
              <Card.Title>Shot Jack Daniel's Fire Canela</Card.Title>
            </Card.Body>
            <ListGroup variant="flush">
        <ListGroup.Item>Cantidad: 1onz</ListGroup.Item>
        <ListGroup.Item id='precio'>$ 12.000</ListGroup.Item>
        
      </ListGroup>
          </Card>
        </Col>
      ))}
          </Row>
          
          <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={jager} alt='Shot Jagermeister' />
            <Card.Body>
              <Card.Title>Shot Jagermeister</Card.Title>
            </Card.Body>
            <ListGroup variant="flush">
        <ListGroup.Item>Cantidad: 1onz</ListGroup.Item>
        <ListGroup.Item id='precio'>$ 10.000</ListGroup.Item>
        
      </ListGroup>
          </Card>
        </Col>
      ))}
        </Row>
        
        <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={tequila} alt='Shot Jose Cuervo Especial' />
            <Card.Body>
              <Card.Title>Shot Jose Cuervo Especial</Card.Title>
            </Card.Body>
            <ListGroup variant="flush">
        <ListGroup.Item>Cantidad: 1onz</ListGroup.Item>
        <ListGroup.Item id='precio'>$ 8000</ListGroup.Item>
        
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

