import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { useState } from "react";

import { BarraNav } from "./BarraNav";

export const CrearOrden = () => {

  return (
    <div>
      <BarraNav />
      <div className="container">
        <div className="p-3 text-center">
          <h1>CREAR ORDEN</h1>
        </div>
        <Form>
          <h1>REMITENTE</h1>
          <Col className="align-items-center">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label column="lg" lg={2}>
                  {" "}
                  Nombre
                </Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Ingrese Su Nombre"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label column="lg" lg={2}>
                  Cedula
                </Form.Label>
                <Form.Control
                  size="lg"
                  type="number"
                  placeholder="# de documento"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label column="lg" lg={2}>
                  Telefono{" "}
                </Form.Label>
                <Form.Control
                  size="lg"
                  type="number"
                  placeholder="Ingrese su número"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label column="lg" lg={2}>
                  Municipio{" "}
                </Form.Label>
                <Form.Control size="lg" type="text" placeholder="Residencia" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label column="lg" lg={2}>
                  Fecha de Envio
                </Form.Label>
                <Form.Control size="lg" name="date" id="envio" value="" type="date" placeholder="" />
              </Form.Group>
            </Row>
            <h1>DESTINATARIO</h1>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label column="lg" lg={2}>
                  {" "}
                  Nombre
                </Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Ingrese Su Nombre"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label column="lg" lg={2}>
                  Cedula
                </Form.Label>
                <Form.Control
                  size="lg"
                  type="number"
                  placeholder="# de documento"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label column="lg" lg={2}>
                  Telefono{" "}
                </Form.Label>
                <Form.Control
                  size="lg"
                  type="number"
                  placeholder="Ingrese su número"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label column="lg" lg={2}>
                  Municipio{" "}
                </Form.Label>
                <Form.Control size="lg" type="text" placeholder="Residencia" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label column="lg" lg={2}>
                  Dirección De Envio
                </Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Ingrese la dirección de su casa"
                />
              </Form.Group>
            </Row>

            <h2>DATOS DEL PAQUETE</h2>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label column="lg" lg={2}>
                  Ancho*:{" "}
                </Form.Label>
                <Form.Control size="lg" type="number" placeholder="cm" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label column="lg" lg={2}>
                  Peso*:{" "}
                </Form.Label>
                <Form.Control size="lg" type="text" placeholder="Kg" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label column="lg" lg={2}>
                  Entrega Estimada{" "}
                </Form.Label>
                <Form.Control size="lg" type="number" placeholder="" disabled/>
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
};
