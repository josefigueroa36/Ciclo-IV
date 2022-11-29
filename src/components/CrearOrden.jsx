import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useState } from "react";

import { BarraNav } from './BarraNav'

export const CrearOrden = () => {
return(
    <div>
    <BarraNav/>
    <div className='container'>
       
       <div className='p-3 text-center'>
                <h1>CREAR ORDEN</h1>

            </div>
        <Form>
        <Col className="align-items-center">
        <Row className='mb-3'>
        <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label column="lg" lg={2}>  Fecha*:</Form.Label>
             <Form.Control size="lg" type="text" placeholder="DD/MM/AA" />
        </Form.Group>
            
        <Form.Group as={Col} controlId="formGridEmail">
             <Form.Label column="lg" lg={2}>Hora*: </Form.Label>
            <Form.Control size="lg" type="text" placeholder="DD/MM/AA" />
       </Form.Group>
        </Row>
        <Row>
        <Form.Group as={Col} controlId="formGridEmail">
             <Form.Label column="lg" lg={2}>Largo*: </Form.Label>
            <Form.Control size="lg" type="number" placeholder="cm" />
       </Form.Group>
       <Form.Group as={Col} controlId="formGridEmail">
             <Form.Label column="lg" lg={2}>Alto*: </Form.Label>
            <Form.Control size="lg" type="number" placeholder="cm" />
       </Form.Group>
       <Form.Group as={Col} controlId="formGridEmail">
             <Form.Label column="lg" lg={2}>Ancho*: </Form.Label>
            <Form.Control size="lg" type="number" placeholder="cm" />
       </Form.Group>
       <Form.Group as={Col} controlId="formGridEmail">
             <Form.Label column="lg" lg={2}>Peso*: </Form.Label>
            <Form.Control size="lg" type="text" placeholder="Kg" />
       </Form.Group>
        </Row>
        <Row>
        <Form.Group  as={Col} controlId="formGridAddress1">
            <Form.Label column="lg" lg={5}>Dirección de recogida:</Form.Label>
            <Form.Control size="lg" placeholder="1234 Main St" />
        </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label column="lg" lg={5}>Ciudad recogida:</Form.Label>
            <Form.Control size="lg" type="text" placeholder="Ciudad " required />
            <Form.Control.Feedback type="invalid">
                Please provide a valid city.
            </Form.Control.Feedback>
            </Form.Group>

        </Row>
        <Row>
        <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label column="lg" lg={5}>Nombre destinatario:</Form.Label>
             <Form.Control size="lg" type="text" placeholder="DD/MM/AA" />
        </Form.Group>
            
        <Form.Group as={Col} controlId="formGridEmail">
             <Form.Label column="lg" lg={5}>C.C del destinatario: </Form.Label>
            <Form.Control size="lg" type="text" placeholder="CC/No de identificación" />
       </Form.Group>

        </Row>
        <Row>
        <Form.Group  as={Col} controlId="formGridAddress1">
            <Form.Label column="lg" lg={5}>Dirección de entrega:</Form.Label>
            <Form.Control size="lg" placeholder="1234 Main St" />
        </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label column="lg" lg={5}>Ciudad entrega:</Form.Label>
            <Form.Control size="lg" type="text" placeholder="Ciudad " required />
            <Form.Control.Feedback type="invalid">
                Please provide a valid city.
            </Form.Control.Feedback>
            </Form.Group>
        </Row>

           
        </Col>
        <Col xs="col p-3 text-center">
          <Button type="submit" className="mb-1">
            Crear orden
          </Button>
        </Col>
        </Form>

    </div>
    </div>
);
}