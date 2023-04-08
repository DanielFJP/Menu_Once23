import React from 'react'
import Navmenu from '../components/Navmenu';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CapPrecio from '../img/cap_precio.png';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import '../styles/precio.css';
import { Link } from 'react-router-dom';


function Precio() {
  return (
      <div className='Precio'>
          <Navmenu />
        
          
          <div className='Card'>
              
               <Card style={{ width: '20rem' }} >
      <Card.Img variant="top" src={CapPrecio} alt='Capuchino con Licor' />
      <Card.Body>
        <Card.Title>Capuchino con Licor</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Jack Daniels: $11.000</ListGroup.Item>
        <ListGroup.Item>Brandi: $7000</ListGroup.Item>
        
      </ListGroup>
     
          </Card>
          </div>

          <Link to={'/Cafes'}><BsArrowLeftCircleFill id='atras'/></Link>
              
          </div>
          
    
  )
}

export default Precio