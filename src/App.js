import './App.css';
import Navmenu from './components/Navmenu';
import Footer from './components/Footer';
import { Button, Dropdown, ButtonGroup } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';


export function App() {
  return (
    <div className="pagina1">
      <Navmenu /> 
      <div className='bienvenida'>
        <h1 id='titulo'>HOLA <br/> TE ESTÁBAMOS ESPERANDO</h1>
        <h2 id='parrafo'>¿Que deseas tomar hoy?</h2>
        </div>

      <div className='menu'>

        <Dropdown as={ButtonGroup}>
       <Link to={'/cafes'} id='calientes'><Button variant="outline-light">Bebidas Calientes</Button></Link>

          {/*<Dropdown.Toggle split variant="outline-light" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Link to={'/Cafes'} id='mu'><Dropdown.Item href="#/action-1">Cafes</Dropdown.Item></Link>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>*/}
        </Dropdown>
        
        <Dropdown as={ButtonGroup}>
       <Link to={'/cervezas'}><Button variant="outline-light" id='cerveza'>Cervezas</Button></Link>

          {/*<Dropdown.Toggle split variant="outline-light" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Link to={'/Cervezas'} id='mu'><Dropdown.Item href="#/action-1">Nacioneles</Dropdown.Item></Link>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>*/}
        </Dropdown>
        
        {/*<Dropdown as={ButtonGroup}>
          <Link to={'/Licores'} id='licores'><Button variant="outline-light">Licores</Button></Link>

          <Dropdown.Toggle split variant="outline-light" id="dropdown-split-basic" />

          <Dropdown.Menu>
            <Link to={'/Licores'} id='mu'><Dropdown.Item href="#/action-1">nn</Dropdown.Item></Link>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
  </Dropdown>*/}
          
          <Link to={'/shots'}><Button variant="outline-light" id='shots'>Shots</Button></Link>
          
          <Link to={'/sinalcoholysnaks'}><Button variant="outline-light" id=''>Bebidas sin Alcohol y Snaks</Button></Link>  
          </div>
         
         
        
      <Footer/>
    </div>
  );
}


