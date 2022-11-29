import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { BarraNav } from './BarraNav'

export const Registro = () => {
    return (
        <div> 
        
        <BarraNav />
   
        <div className='container'>
            
            <div className='p-3 text-center'>
                <h1>CREAR CUENTA</h1>

            </div>
           <Form>
            <Col className='mb-3'>
            <Form.Label column="lg" lg={2}>
                 Nombre completo*:
            </Form.Label>
            <Col>
                  <Form.Control size="lg" type="text" placeholder="Nombre completo" />
             </Col>
             <Form.Label column="lg" lg={2}>
                 Usuario*:
            </Form.Label>
            <Col>
                  <Form.Control size="lg" type="text" placeholder="Usuario" />
             </Col>
             <Col>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label column="lg" lg={2}>Correo electronico:</Form.Label>
                <Col>
                <Form.Control size="lg" type="email" placeholder="Email/Correo" />
                </Col>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label column="lg" lg={2}>Contraseña:</Form.Label>
                <Form.Control   size="lg" type="password" placeholder="Contraseña" />
                </Form.Group>

                </Col>
            </Col>

            <Col xs="col text-center">
          <Button type="submit" className="mb-1">
            Registrarse
          </Button>
        </Col>
           </Form>
            
            
        </div>
        </div>
    )}