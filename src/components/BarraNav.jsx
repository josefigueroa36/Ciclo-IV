import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './../assets/css/BarraNav.css'
export const BarraNav = () => {

  return (


    <Navbar className='Navbar'>
      <Container className="cont">
      
        <a href="#home">
          <img className='Logo'
            src=""
            alt="logo"
          />
        </a>

        <ul>
          <li> <a href="">Inicio</a> </li>
          <li> <a href="">Quienes Somos</a> </li>
          <li> <a href="">Servicios</a> </li>
          <li> <a href="">Contacto</a> </li>
        </ul>

        <img
          className='icono'
          src="./img/icon-login.png"
          alt="icono"
        />

      </Container>
    </Navbar>
  );
}
