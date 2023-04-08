import React from 'react'
import { Container, Navbar, Nav, } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import '../styles/nav.css';

function Navmenu() {
  return (
          <div className='navegacion'>
          <Navbar bg='dark' expand="lg" variant='dark' >
        <Container>
          <Link to={'/'}><img className='logo' src={logo} alt='logo1123'/></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
              
              {/*<NavDropdown title="Bebidas Calientes" id="basic-nav-dropdown">
              <Link to={"/Cafes"} id='nvg'><NavDropdown.Item href="#action/3.1">Cafes</NavDropdown.Item></Link>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              </NavDropdown>

              <NavDropdown title="Cervezas" id="basic-nav-dropdown">
              <Link to={'/Cervezas'} id='nvg'><NavDropdown.Item href="#action/3.1">Nacionales</NavDropdown.Item></Link>  
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              </NavDropdown>

              <NavDropdown title="Licores" id="basic-nav-dropdown">
              <Link to={'/Licores'} id='nvg'><NavDropdown.Item href="#action/3.1">Licores</NavDropdown.Item></Link>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
  </NavDropdown>*/}
              
              <Link to={'/Cafes'} id='nvg'><Nav.Link href="#home">Bebidas Calientes</Nav.Link></Link> 
               <Link to={'/Cervezas'} id='nvg'><Nav.Link href="#home">Cervezas</Nav.Link></Link> 
              <Link to={'/Shots'} id='nvg'><Nav.Link href="#home">Shots</Nav.Link></Link>
              <Link to={'/SinAlcohol'} id='nvg'><Nav.Link href="#home">Bebidas sin Alcohol</Nav.Link></Link>
              {/*<Link to={"/Musica"} id='nvg'><Nav.Link href="#home">Música</Nav.Link></Link>*/}
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>

    </div>
    
  )
}

export default Navmenu