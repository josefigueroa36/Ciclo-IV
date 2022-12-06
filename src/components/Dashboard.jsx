import React from 'react'
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import { BarraNav } from './BarraNav'
import './../assets/css/Dashboard.css'
export const Dashboard = () => {
    return (
        <>
            <BarraNav />

            <div className='carta'>

                <Card style={{ width: '50rem' }}>
                    <Card.Body>
                        <Card.Title>Hola nombre usuario</Card.Title>
                        <Card.Text>
                            Aqui puedes encontrar tu historial de paquetes y los estados en los que se encuentran
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <Table responsive="xl" striped>
                <thead>
                    <tr>
                        <th>Id servicio</th>
                        <th>Fecha</th>
                        <th>Ciudad entrega</th>
                        <th>Direccion entrega</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td><a className='btn btn-dark' href="">Actualizar</a></td>
                    </tr>
                    
                </tbody>
            </Table>
        </>
    )
}
