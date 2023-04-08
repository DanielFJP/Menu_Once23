import React from 'react'
import Navmenu from '../components/Navmenu';
import '../styles/musica.css';
import { FaHandPointDown } from "react-icons/fa";
import { HiMusicalNote } from "react-icons/hi2";
import { Form, InputGroup } from 'react-bootstrap'


function Musica() {
    return (
    <div className='musica'>
            
    <div className='nav'>
    <Navmenu />     
    </div>       

     
     <br /> 
    <h1>¡¡En el once puedes oír la música que más te guste!!</h1>
     <br />
    <h3>Enlista tus canciones favoritas aquí <span><FaHandPointDown /></span> </h3>
     
    <div className='input'>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><HiMusicalNote/></InputGroup.Text>
        <Form.Control
          placeholder="¿Qué quieres escuchar hoy?"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>       
            </div> 

                
     </div>        
           
  )
}

export default Musica