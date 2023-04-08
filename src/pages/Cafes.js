import React from 'react'
import Navmenu from '../components/Navmenu';
import Footer from '../components/Footer';
import { Card, Col, Row, ListGroup } from 'react-bootstrap';
import capuchino from '..//img/capuchino.png';
import americano from '..//img/americano.png';
import cafeconLeche from '..//img/cafeconLeche.png';
import latte from '..//img/latte.png';
import capLicor from '..//img/capLicor.png';
import expreso from '..//img/expreso.png';
import milo from '..//img/Milo.png';
import aromaticaL from '..//img/aromaticaL.png';
import aromaticaB from '..//img/aromaticaB.png';
import vinoC from '..//img/vinoC.png';
import '../styles/cafes.css';
import { Link } from 'react-router-dom';

function cafes() {
  return (
     
    
    <div className='cafes'>
        <Navmenu />
    
      <h1>BEBIDAS CALIENTES</h1>
      <hr/>
       <div className='container'>
      <h3>CAFES</h3>
        
      <div className='cards'>
         <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={expreso} alt='Expreso'/>
            <Card.Body>
              <Card.Title>Expreso</Card.Title>
            </Card.Body>
            <ListGroup variant="flush">
        <ListGroup.Item>Cantidad: 2onz</ListGroup.Item>
        <ListGroup.Item id='precio'>$ 800</ListGroup.Item>
        
      </ListGroup>
          </Card>
        </Col>
      ))}
          </Row>
          
          <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={americano} alt='Americano' />
            <Card.Body>
              <Card.Title>Americano</Card.Title>
            </Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>Cantidad: 6onz</ListGroup.Item>
              <ListGroup.Item id='precio'>$ 1500</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      ))}
          </Row>
          
          <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={cafeconLeche} alt='Cafe con Leche' />
            <Card.Body>
              <Card.Title>Cafe con Leche</Card.Title>
            </Card.Body>
             <ListGroup variant="flush">
              <ListGroup.Item>Cantidad: 6onz</ListGroup.Item>
              <ListGroup.Item id='precio'>$ 2500</ListGroup.Item>
        
            </ListGroup>
          </Card>
        </Col>
      ))}
          </Row>
          
          <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={latte} alt='Latte' />
            <Card.Body>
              <Card.Title>Latte</Card.Title>
              <br/>
            </Card.Body>
             <ListGroup variant="flush">
              <ListGroup.Item>Cantidad: 9onz</ListGroup.Item>
              <ListGroup.Item id='precio'>$ 3500</ListGroup.Item>
        
            </ListGroup>
          </Card>
        </Col>
      ))}
        </Row>
        
        <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={capuchino} alt='Capuchino' />
            <Card.Body>
              <Card.Title>Capuchino</Card.Title>
              <br/>
            </Card.Body>
             <ListGroup variant="flush">
              <ListGroup.Item>Cantidad: 9onz</ListGroup.Item>
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
            <Card.Img variant="top" src={capLicor} alt='Capuchino con Licor' />
            <Card.Body>
              <Card.Title>Capuchino con Licor</Card.Title>
            </Card.Body>
             <ListGroup variant="flush">
              <ListGroup.Item>cantidad: 9onz</ListGroup.Item>
                <ListGroup.Item><Link to={'/Precio'}>Ver Precios</Link> </ListGroup.Item>
            
            </ListGroup>
          </Card>
        </Col>
      ))}
          </Row>
        </div> 
      </div>

      <hr />

      <div className='container'> 
        <h3 className='solo'>BEBIDAS ACHOCOLATADAS</h3>
        
        <div className='sola'>
          <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={milo} alt='Milo' />
            <Card.Body>
              <Card.Title>Milo</Card.Title>
            </Card.Body>
             <ListGroup variant="flush">
              <ListGroup.Item>cantidad: 9onz</ListGroup.Item>
                <ListGroup.Item id='precio'>$ 4000</ListGroup.Item>
            
            </ListGroup>
          </Card>
        </Col>
      ))}
          </Row>
      </div>
      </div>

      <hr />

      <div className='container'>
        <h3 className='aroma'>AROMATICAS</h3>
        <div className='cards'>
         <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={aromaticaB} alt='Aromatica de Hierbabuena' />
            <Card.Body>
              <Card.Title>Aromatica de Hierbabuena</Card.Title>
            </Card.Body>
             <ListGroup variant="flush">
              <ListGroup.Item>Cantidad: 6onz</ListGroup.Item>
              <ListGroup.Item id='precio'>$ 1500</ListGroup.Item>
        
             </ListGroup>
          </Card>
        </Col>
      ))}
        </Row>
        
        <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={aromaticaL} alt='Aromatica de Lulo' />
            <Card.Body>
              <Card.Title>Aromatica de Lulo</Card.Title>
            </Card.Body>
             <ListGroup variant="flush">
              <ListGroup.Item>cantidad: 9onz</ListGroup.Item>
                <ListGroup.Item id='precio'>$ 2500</ListGroup.Item>
            
            </ListGroup>
          </Card>
        </Col>
      ))}
          </Row>
       </div>
      </div>

      <hr />

      <div className='container'> 
        <h3 className='solo'>VINO CALIENTE</h3>
        
        <div className='vino'>
          <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={vinoC} alt='Vino Caliente' />
            <Card.Body>
              <Card.Title>Vino Caliente</Card.Title>
            </Card.Body>
             <ListGroup variant="flush">
              <ListGroup.Item>cantidad: 9onz</ListGroup.Item>
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

export default cafes