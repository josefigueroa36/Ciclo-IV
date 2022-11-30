import React from 'react'
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './../assets/css/BarraNav.css'
import loginIcon from './../../public/assets/img/icon-login.png'

export const BarraNav = () => {

  return (

<Navbar expand="lg">
      <Container>
      <Nav.Link href="/">
           <img className='Logo'
             src=""
           alt="logo"
          />
         </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
          <Nav.Item>
            <Nav.Link href="/">Inicio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/#quienes-somos">Quienes Somos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/#servicios">Servicios</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/#contacto">Contacto</Nav.Link>
          </Nav.Item>

            
         
        </Navbar.Collapse>
          <Nav.Item href="/Login">

            <img
              className='icono'
              src={loginIcon}
              alt="icono"
            />
          </Nav.Item>
      </Container>
    </Navbar>



    // <Navbar className='Navbar p-3'>
    //   <Container>

    //     <Nav.Link href="/">
    //       <img className='Logo'
    //         src=""
    //         alt="logo"
    //       />
    //     </Nav.Link>
        

       


    //   </Container>
    // </Navbar>
  );
}
