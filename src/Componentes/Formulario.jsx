import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';

const Formulario = ({ lstColaboradores, setLstColaboradores}) => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const agregarColaborador = (e) => {
        e.preventDefault();

        setLstColaboradores([...lstColaboradores, { nombre: nombre, correo: email }]);
        
    }

    return (
        <div className='p-2'>

            <Form onSubmit={agregarColaborador}>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type='text' placeholder='Ingresa Nombre del Colaborador' onChange={(e) => setNombre(e.target.value)}></Form.Control>
                </Form.Group>


                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type='email' placeholder='Ingresa Correo del Colaborador' onChange={(e) => setEmail(e.target.value)}></Form.Control>
                    </Form.Group>


                <Button variant='primary' type='submit'>
                    Agregar colaborador
                </Button>
            </Form>
        </div>
    )
}

export default Formulario