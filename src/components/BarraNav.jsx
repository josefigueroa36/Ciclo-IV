import React from 'react'
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './../assets/css/BarraNav.css'
import loginIcon from './../../public/assets/img/icon-login.png'
export const BarraNav = () => {

  return (


    <Navbar className='Navbar p-3'>
     <Container>
      
        <a href="/">
          <img className='Logo'
            src=""
            alt="logo"
          />
        </a>
    <Nav.Item>
      <Nav.Link href="/">Inicio</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/">Quienes Somos</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/">Servicios</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/">Contacto</Nav.Link>
    </Nav.Item>

      <a href="/Login">

        <img
          className='icono'
          src={loginIcon}
          alt="icono"
        />
      </a>


      </Container>
    </Navbar>
  );
}
