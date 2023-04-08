import React from 'react'
import { Card } from 'react-bootstrap'
import logo from '../img/logo.png'
import '../styles/footer.css'
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { SiTiktok } from 'react-icons/si';


function Footer() {
  return (
      <div className='footer' >
          <Card className="text-center" bg='dark' text='light' id='abajo'>
        
      <Card.Body>
        <Card.Title id='siguenos'>¡¡SÍGUENOS!!</Card.Title>
        <Card.Text className='enunciado'>
          en nuestras diferentes redes sociales, comparte tu experiencia en <span><img className='logo' src={logo} alt='logo1123' /></span> y etiquétanos, <br/>te estaremos reposteando.
          </Card.Text>
          <div className='redes'>
            <a href='https://www.facebook.com/Once23?mibextid=ZbWKwL'><BsFacebook id='red' /></a>
            <a href='https://instagram.com/2323_once?igshid=NTE5MzUyOTU='><BsInstagram id='red' /></a>
            <a href='https://www.tiktok.com/@once23_digitalbeer?_t=8a9YaSY0w69&_r=1'><SiTiktok id='red' /></a>
          </div>
      </Card.Body>
      <Card.Footer className="text-muted">PROHÍBASE EL EXPENDIO DE BEBIDAS EMBRIAGANTES A MENORES DE EDAD,<br/> EL EXCESO DE ALCOHOL ES PERJUDICIAL PARA LA SALUD. </Card.Footer>
    </Card>
    </div>
  )
}


export default Footer